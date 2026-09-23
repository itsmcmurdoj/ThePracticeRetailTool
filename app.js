/**
 * THE PRACTICE • RETAIL SCANNER CONTROLLER (app.js)
 * High-performance barcode detection, instant catalog search & Momence HUD
 */

(function () {
  'use strict';

  // --- STATE ---
  let activeTab = 'scanner';
  let activeDepartment = 'all';
  let activeSearchQuery = '';
  let currentCameraFacing = 'environment'; // 'environment' (back) or 'user' (front)
  let videoStream = null;
  let barcodeDetector = null;
  let scanAnimationId = null;
  let html5QrScanner = null;
  let isScanningActive = false;
  let isScanThrottled = false;
  let scanHistory = [];

  // --- DOM ELEMENTS ---
  const tabs = document.querySelectorAll('.nav-tab');
  const viewPanels = {
    scanner: document.getElementById('view-scanner'),
    catalog: document.getElementById('view-catalog'),
    history: document.getElementById('view-history'),
  };

  const videoElement = document.getElementById('camera-video');
  const cameraMessage = document.getElementById('camera-message');
  const btnSwitchCamera = document.getElementById('btn-switch-camera');
  const btnTorch = document.getElementById('btn-torch');

  const quickSkuForm = document.getElementById('quick-sku-form');
  const quickSkuInput = document.getElementById('quick-sku-input');

  const catalogSearchInput = document.getElementById('catalog-search-input');
  const btnClearSearch = document.getElementById('btn-clear-search');
  const deptPillsContainer = document.getElementById('dept-pills');
  const catalogGrid = document.getElementById('catalog-grid');
  const resultsCount = document.getElementById('results-count');

  const historyList = document.getElementById('history-list');
  const historyCount = document.getElementById('history-count');
  const btnClearHistory = document.getElementById('btn-clear-history');

  // Modal elements
  const productModal = document.getElementById('product-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const modalImg = document.getElementById('modal-img');
  const modalDeptBadge = document.getElementById('modal-dept-badge');
  const modalBrand = document.getElementById('modal-brand');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalSku = document.getElementById('modal-sku');
  const modalPitch = document.getElementById('modal-pitch');
  const modalMomenceLink = document.getElementById('modal-momence-link');
  const btnCopySku = document.getElementById('btn-copy-sku');
  const btnScanAgain = document.getElementById('btn-scan-again');
  const toast = document.getElementById('toast');

  // --- AUDIO SYNTHESIS FOR SCAN CHIME (Zero external dependencies) ---
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  function playSuccessChime() {
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;
      
      // Note 1 (E5 - 659.25Hz)
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now);
      gain1.gain.setValueAtTime(0.15, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Note 2 (B5 - 987.77Hz)
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(987.77, now + 0.08);
      gain2.gain.setValueAtTime(0.2, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.28);

      if (navigator.vibrate) {
        navigator.vibrate([40, 30, 40]);
      }
    } catch (e) {
      console.warn('Audio chime error:', e);
    }
  }

  // --- TOAST NOTIFICATION ---
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // --- BARCODE DETECTION INITIALIZATION ---
  async function initBarcodeDetector() {
    if ('BarcodeDetector' in window) {
      try {
        const supported = await BarcodeDetector.getSupportedFormats();
        console.log('Native BarcodeDetector supported formats:', supported);
        barcodeDetector = new BarcodeDetector({
          formats: ['qr_code', 'code_128', 'code_39', 'ean_13', 'ean_8', 'upc_a', 'upc_e', 'itf']
        });
        return true;
      } catch (e) {
        console.warn('BarcodeDetector error, using fallback:', e);
      }
    }
    return false;
  }

  // --- CAMERA MANAGEMENT ---
  async function startCamera() {
    stopCamera();
    isScanningActive = true;
    cameraMessage.innerHTML = '<p>Starting camera...</p>';

    try {
      const constraints = {
        video: {
          facingMode: currentCameraFacing,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      };

      videoStream = await navigator.mediaDevices.getUserMedia(constraints);
      videoElement.srcObject = videoStream;
      await videoElement.play();

      cameraMessage.innerHTML = '<p>Align barcode, QR code, or SKU inside frame</p>';
      checkTorchSupport();

      if (barcodeDetector) {
        startNativeBarcodeLoop();
      } else if (window.Html5Qrcode) {
        startHtml5QrCodeFallback();
      }
    } catch (err) {
      console.error('Camera access error:', err);
      cameraMessage.innerHTML = `<p style="color:#ef4444;">Camera blocked or unavailable: ${err.message}. Use manual lookup below.</p>`;
    }
  }

  function stopCamera() {
    isScanningActive = false;
    if (scanAnimationId) {
      cancelAnimationFrame(scanAnimationId);
      scanAnimationId = null;
    }
    if (html5QrScanner) {
      try { html5QrScanner.stop(); } catch (e) {}
      html5QrScanner = null;
    }
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      videoStream = null;
    }
    if (videoElement) {
      videoElement.srcObject = null;
    }
  }

  function checkTorchSupport() {
    if (!videoStream) return;
    const track = videoStream.getVideoTracks()[0];
    const capabilities = track.getCapabilities ? track.getCapabilities() : {};
    if (capabilities.torch) {
      btnTorch.style.display = 'flex';
    } else {
      btnTorch.style.display = 'none';
    }
  }

  // Native Barcode Scanning Loop (60 FPS on iOS Apple Neural Engine)
  async function startNativeBarcodeLoop() {
    if (!isScanningActive || !videoElement || videoElement.readyState < 2) {
      scanAnimationId = requestAnimationFrame(startNativeBarcodeLoop);
      return;
    }

    if (!isScanThrottled) {
      try {
        const barcodes = await barcodeDetector.detect(videoElement);
        if (barcodes && barcodes.length > 0) {
          const rawVal = barcodes[0].rawValue.trim();
          handleScannedCode(rawVal);
        }
      } catch (err) {
        // Ignored frame drop
      }
    }

    if (isScanningActive) {
      scanAnimationId = requestAnimationFrame(startNativeBarcodeLoop);
    }
  }

  // Fallback html5-qrcode implementation
  function startHtml5QrCodeFallback() {
    try {
      html5QrScanner = new Html5Qrcode("camera-viewport");
      html5QrScanner.start(
        { facingMode: currentCameraFacing },
        { fps: 15, qrbox: { width: 260, height: 260 } },
        (decodedText) => {
          handleScannedCode(decodedText);
        },
        (errorMessage) => {
          // Frame scan error, ignore
        }
      );
    } catch (e) {
      console.warn('Fallback scanner initialization failed:', e);
    }
  }

  // --- PRODUCT MATCHING ENGINE ---
  function findProductByCode(rawCode) {
    if (!rawCode) return null;
    const clean = rawCode.trim();
    const cleanLower = clean.toLowerCase();
    const alphanumeric = clean.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // 1. Exact SKU match
    let match = PRODUCTS.find(p => p.sku && p.sku.toLowerCase() === cleanLower);
    if (match) return match;

    // 2. Alphanumeric SKU match
    match = PRODUCTS.find(p => {
      const pClean = (p.sku || '').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
      return pClean && pClean === alphanumeric;
    });
    if (match) return match;

    // 3. Momence ID match
    match = PRODUCTS.find(p => String(p.id) === clean);
    if (match) return match;

    // 4. Barcodes list match
    match = PRODUCTS.find(p => (p.barcodes || []).some(b => b.toLowerCase() === cleanLower || b.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === alphanumeric));
    if (match) return match;

    // 5. Full title or name exact match
    match = PRODUCTS.find(p => p.fullTitle.toLowerCase() === cleanLower || p.name.toLowerCase() === cleanLower);
    if (match) return match;

    // 6. Fuzzy substring match in SKU or title
    match = PRODUCTS.find(p => p.sku && p.sku.toLowerCase().includes(cleanLower));
    if (match) return match;

    return null;
  }

  function handleScannedCode(code) {
    if (isScanThrottled) return;
    isScanThrottled = true;

    console.log('Scanned code:', code);
    const product = findProductByCode(code);

    if (product) {
      playSuccessChime();
      addToHistory(product);
      openProductModal(product);
    } else {
      showToast(`No product found matching "${code}"`);
      // Re-enable scanning after 2 seconds
      setTimeout(() => {
        isScanThrottled = false;
      }, 2000);
    }
  }

  // --- MODAL / PRODUCT HUD DISPLAY ---
  function openProductModal(product) {
    modalBrand.textContent = product.brand.toUpperCase();
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalSku.textContent = product.sku || 'N/A';
    modalDeptBadge.textContent = product.department;
    modalPitch.textContent = product.pitch;
    modalMomenceLink.href = product.momenceUrl;

    if (product.img) {
      modalImg.src = product.img;
      modalImg.style.display = 'block';
    } else {
      modalImg.src = './icon.svg';
    }

    productModal.classList.add('open');
  }

  function closeProductModal() {
    productModal.classList.remove('open');
    // Allow scanning again after closing modal
    setTimeout(() => {
      isScanThrottled = false;
    }, 800);
  }

  // --- CATALOG FILTERING & RENDERING ---
  function renderCatalog() {
    const query = activeSearchQuery.toLowerCase().trim();
    
    const filtered = PRODUCTS.filter(p => {
      // Department filter
      if (activeDepartment !== 'all' && p.department !== activeDepartment) {
        return false;
      }
      // Query search
      if (!query) return true;
      const haystack = `${p.fullTitle} ${p.brand} ${p.name} ${p.sku} ${p.department} ${p.pitch}`.toLowerCase();
      return haystack.includes(query);
    });

    resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <p>No products found matching "${activeSearchQuery}".</p>
        </div>
      `;
      return;
    }

    // Limit initial render to 100 for high FPS on iPad
    const displayList = filtered.slice(0, 100);
    catalogGrid.innerHTML = displayList.map(p => `
      <div class="catalog-card" data-pid="${p.id}">
        <div class="card-img-wrap">
          <img class="card-img" src="${p.img || './icon.svg'}" alt="${p.name}" loading="lazy" onerror="this.src='./icon.svg'">
        </div>
        <div class="card-body">
          <div>
            <div class="card-brand">${p.brand}</div>
            <div class="card-title">${p.name}</div>
          </div>
          <div class="card-footer">
            <span class="card-price">${p.price}</span>
            <span class="card-sku">${p.sku || ''}</span>
          </div>
        </div>
      </div>
    `).join('');

    // Attach card click handlers
    catalogGrid.querySelectorAll('.catalog-card').forEach(card => {
      card.addEventListener('click', () => {
        const pid = parseInt(card.getAttribute('data-pid'), 10);
        const prod = PRODUCTS.find(p => p.id === pid);
        if (prod) {
          addToHistory(prod);
          openProductModal(prod);
        }
      });
    });
  }

  // --- RECENT SCAN HISTORY ---
  function loadHistory() {
    try {
      const stored = localStorage.getItem('practice_scan_history');
      if (stored) {
        scanHistory = JSON.parse(stored);
      }
    } catch (e) {
      scanHistory = [];
    }
    renderHistory();
  }

  function addToHistory(product) {
    scanHistory = [product, ...scanHistory.filter(p => p.id !== product.id)].slice(0, 30);
    try {
      localStorage.setItem('practice_scan_history', JSON.stringify(scanHistory));
    } catch (e) {}
    renderHistory();
  }

  function renderHistory() {
    historyCount.textContent = scanHistory.length;
    if (scanHistory.length === 0) {
      historyList.innerHTML = `<p class="empty-state">No products scanned yet this shift. Point camera at any barcode or search the catalog.</p>`;
      return;
    }

    historyList.innerHTML = scanHistory.map(p => `
      <div class="catalog-card" data-pid="${p.id}">
        <div class="card-img-wrap">
          <img class="card-img" src="${p.img || './icon.svg'}" alt="${p.name}">
        </div>
        <div class="card-body">
          <div>
            <div class="card-brand">${p.brand}</div>
            <div class="card-title">${p.name}</div>
          </div>
          <div class="card-footer">
            <span class="card-price">${p.price}</span>
            <span class="card-sku">${p.sku || ''}</span>
          </div>
        </div>
      </div>
    `).join('');

    historyList.querySelectorAll('.catalog-card').forEach(card => {
      card.addEventListener('click', () => {
        const pid = parseInt(card.getAttribute('data-pid'), 10);
        const prod = PRODUCTS.find(p => p.id === pid);
        if (prod) openProductModal(prod);
      });
    });
  }

  // --- EVENT LISTENERS ---
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  function switchTab(tabId) {
    activeTab = tabId;
    tabs.forEach(t => t.classList.toggle('active', t.getAttribute('data-tab') === tabId));
    Object.keys(viewPanels).forEach(key => {
      viewPanels[key].classList.toggle('active', key === tabId);
    });

    if (tabId === 'scanner') {
      startCamera();
    } else {
      stopCamera();
    }

    if (tabId === 'catalog') {
      renderCatalog();
    }
  }

  // Switch camera front/back
  btnSwitchCamera.addEventListener('click', () => {
    currentCameraFacing = (currentCameraFacing === 'environment') ? 'user' : 'environment';
    startCamera();
  });

  // Toggle Torch if available
  let isTorchOn = false;
  btnTorch.addEventListener('click', async () => {
    if (!videoStream) return;
    const track = videoStream.getVideoTracks()[0];
    isTorchOn = !isTorchOn;
    try {
      await track.applyConstraints({ advanced: [{ torch: isTorchOn }] });
    } catch (e) {
      console.warn('Torch toggle error:', e);
    }
  });

  // Quick manual SKU form
  quickSkuForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = quickSkuInput.value.trim();
    if (!val) return;
    const prod = findProductByCode(val);
    if (prod) {
      playSuccessChime();
      addToHistory(prod);
      openProductModal(prod);
      quickSkuInput.value = '';
    } else {
      // Switch to catalog tab and search
      catalogSearchInput.value = val;
      activeSearchQuery = val;
      switchTab('catalog');
      quickSkuInput.value = '';
    }
  });

  // Catalog search input
  catalogSearchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value;
    btnClearSearch.style.display = activeSearchQuery ? 'block' : 'none';
    renderCatalog();
  });

  btnClearSearch.addEventListener('click', () => {
    catalogSearchInput.value = '';
    activeSearchQuery = '';
    btnClearSearch.style.display = 'none';
    renderCatalog();
  });

  // Department filter pills
  deptPillsContainer.querySelectorAll('.dept-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      deptPillsContainer.querySelectorAll('.dept-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeDepartment = pill.getAttribute('data-dept');
      renderCatalog();
    });
  });

  // Clear History
  btnClearHistory.addEventListener('click', () => {
    scanHistory = [];
    localStorage.removeItem('practice_scan_history');
    renderHistory();
    showToast('Scan history cleared');
  });

  // Modal close handlers
  btnCloseModal.addEventListener('click', closeProductModal);
  btnScanAgain.addEventListener('click', () => {
    closeProductModal();
    if (activeTab !== 'scanner') {
      switchTab('scanner');
    }
  });

  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal.classList.contains('open')) {
      closeProductModal();
    }
  });

  // Copy SKU
  btnCopySku.addEventListener('click', () => {
    const sku = modalSku.textContent;
    if (sku && sku !== 'N/A') {
      navigator.clipboard.writeText(sku).then(() => {
        showToast(`Copied SKU: ${sku}`);
      }).catch(() => {
        showToast('Unable to copy SKU');
      });
    }
  });

  // Online / Offline Indicator
  window.addEventListener('online', () => {
    document.getElementById('connection-status').className = 'status-pill status-online';
  });
  window.addEventListener('offline', () => {
    document.getElementById('connection-status').className = 'status-pill';
    document.getElementById('connection-status').innerHTML = '<span class="status-dot" style="background:#eab308;"></span><span class="status-label">Offline Mode (Cached)</span>';
  });

  // Service Worker Registration for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('PWA ServiceWorker registered successfully:', reg.scope);
      }).catch((err) => {
        console.warn('PWA ServiceWorker registration failed:', err);
      });
    });
  }

  // --- APP INITIALIZATION ---
  async function init() {
    loadHistory();
    renderCatalog();
    await initBarcodeDetector();
    if (activeTab === 'scanner') {
      startCamera();
    }
  }

  init();

})();
