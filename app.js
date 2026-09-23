/**
 * THE PRACTICE • VISUAL RETAIL IDENTIFIER CONTROLLER (app.js)
 * Reverse Visual Product Search powered by MobileNet v2 & Vector Embeddings
 */

(function () {
  'use strict';

  // --- STATE ---
  let activeTab = 'scanner';
  let activeDepartment = 'all';
  let activeSearchQuery = '';
  let currentCameraFacing = 'environment';
  let videoStream = null;
  let mobilenetModel = null;
  let isModelReady = false;
  let isAnalyzing = false;
  let scanHistory = [];
  let lastSnappedDataUrl = null;

  // --- DOM ELEMENTS ---
  const tabs = document.querySelectorAll('.nav-tab');
  const viewPanels = {
    scanner: document.getElementById('view-scanner'),
    catalog: document.getElementById('view-catalog'),
    history: document.getElementById('view-history'),
  };

  const videoElement = document.getElementById('camera-video');
  const snapshotCanvas = document.getElementById('snapshot-canvas');
  const scanAnalyzingOverlay = document.getElementById('scan-analyzing');
  const cameraMessage = document.getElementById('camera-message');
  const btnSnapPhoto = document.getElementById('btn-snap-photo');
  const fileUploadInput = document.getElementById('file-upload');
  const btnSwitchCamera = document.getElementById('btn-switch-camera');
  const btnTorch = document.getElementById('btn-torch');
  const statusLabel = document.getElementById('status-label');

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
  const userPhotoCard = document.getElementById('user-photo-card');
  const modalUserSnappedImg = document.getElementById('modal-user-snapped-img');
  const modalImg = document.getElementById('modal-img');
  const modalDeptBadge = document.getElementById('modal-dept-badge');
  const modalMatchBadge = document.getElementById('modal-match-badge');
  const modalBrand = document.getElementById('modal-brand');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalSku = document.getElementById('modal-sku');
  const modalPitch = document.getElementById('modal-pitch');
  const modalMomenceLink = document.getElementById('modal-momence-link');
  const btnCopySku = document.getElementById('btn-copy-sku');
  const btnScanAgain = document.getElementById('btn-scan-again');
  const modalAlternativesSection = document.getElementById('modal-alternatives-section');
  const alternativesGrid = document.getElementById('alternatives-grid');
  const toast = document.getElementById('toast');

  // --- AUDIO SYNTHESIS FOR SCAN CHIME ---
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  function playSuccessChime() {
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const now = audioCtx.currentTime;
      
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(659.25, now); // E5
      gain1.gain.setValueAtTime(0.18, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.14);

      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(987.77, now + 0.08); // B5
      gain2.gain.setValueAtTime(0.22, now + 0.08);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(now + 0.08);
      osc2.stop(now + 0.32);

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

  // --- LOAD TENSORFLOW.JS MOBILENET NEURAL VISION MODEL ---
  async function initNeuralVision() {
    try {
      statusLabel.textContent = "Loading AI Vision...";
      if (typeof mobilenet !== 'undefined') {
        mobilenetModel = await mobilenet.load({ version: 2, alpha: 1.0 });
        isModelReady = true;
        statusLabel.textContent = "AI Vision Active";
        console.log("MobileNet v2 loaded successfully!");
      } else {
        console.warn("MobileNet library not loaded from CDN");
      }
    } catch (err) {
      console.error("Error loading MobileNet:", err);
      statusLabel.textContent = "Catalog Mode";
    }
  }

  // --- CAMERA MANAGEMENT ---
  async function startCamera() {
    stopCamera();
    cameraMessage.innerHTML = '<p>Initializing camera...</p>';

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

      cameraMessage.innerHTML = '<p>Aim camera at product and tap Snap Product</p>';
      checkTorchSupport();
    } catch (err) {
      console.error('Camera access error:', err);
      cameraMessage.innerHTML = `<p style="color:#ef4444;">Camera blocked: ${err.message}. Tap "Choose Photo" or lookup below.</p>`;
    }
  }

  function stopCamera() {
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

  // --- VISUAL REVERSE SEARCH CORE ENGINE ---
  async function performVisualSearch(sourceImageOrCanvas) {
    if (isAnalyzing) return;
    isAnalyzing = true;
    scanAnalyzingOverlay.style.display = 'flex';

    try {
      // 1. Prepare 224x224 input canvas for MobileNet
      const offCanvas = document.createElement('canvas');
      offCanvas.width = 224;
      offCanvas.height = 224;
      const ctx = offCanvas.getContext('2d');
      ctx.drawImage(sourceImageOrCanvas, 0, 0, 224, 224);

      // 2. Ensure neural model is ready
      if (!mobilenetModel) {
        mobilenetModel = await mobilenet.load({ version: 2, alpha: 1.0 });
        isModelReady = true;
      }

      // 3. Extract 1280-dim embedding vector
      const emb = mobilenetModel.infer(offCanvas, true);
      const rawVector = await emb.data();
      emb.dispose();

      // 4. L2-Normalize query vector
      let sumSq = 0;
      for (let i = 0; i < rawVector.length; i++) sumSq += rawVector[i] * rawVector[i];
      const norm = Math.sqrt(sumSq) || 1;
      const queryVec = new Float32Array(rawVector.length);
      for (let i = 0; i < rawVector.length; i++) queryVec[i] = rawVector[i] / norm;

      // 5. Compare against all precomputed product embeddings
      const matches = [];
      const embeddingsDb = (typeof PRODUCT_EMBEDDINGS !== 'undefined' ? PRODUCT_EMBEDDINGS : (window.PRODUCT_EMBEDDINGS || {}));

      for (const prod of PRODUCTS) {
        const prodVec = embeddingsDb[String(prod.id)];
        if (!prodVec) continue;

        // Cosine similarity (dot product of two unit vectors)
        let dot = 0;
        const len = Math.min(queryVec.length, prodVec.length);
        for (let i = 0; i < len; i++) {
          dot += queryVec[i] * prodVec[i];
        }

        // Apply slight bonus if department matches active filter
        let score = dot;
        if (activeDepartment !== 'all' && prod.department === activeDepartment) {
          score += 0.05;
        }

        matches.push({
          product: prod,
          similarity: score,
          percentage: Math.min(99, Math.max(10, Math.round(score * 100)))
        });
      }

      // 6. Sort by highest visual similarity
      matches.sort((a, b) => b.similarity - a.similarity);

      scanAnalyzingOverlay.style.display = 'none';
      isAnalyzing = false;

      if (matches.length > 0) {
        const topMatch = matches[0];
        const alternatives = matches.slice(1, 5); // next 4 candidates
        playSuccessChime();
        addToHistory(topMatch.product);
        openProductModal(topMatch.product, topMatch.percentage, alternatives, lastSnappedDataUrl);
      } else {
        showToast("No visual match found. Try adjusting angle or lighting.");
      }

    } catch (err) {
      console.error("Visual search error:", err);
      scanAnalyzingOverlay.style.display = 'none';
      isAnalyzing = false;
      showToast("Error processing visual search: " + err.message);
    }
  }

  // Snap photo button handler
  btnSnapPhoto.addEventListener('click', () => {
    if (!videoStream || isAnalyzing) return;

    // Capture frame from live video
    snapshotCanvas.width = videoElement.videoWidth || 640;
    snapshotCanvas.height = videoElement.videoHeight || 480;
    const ctx = snapshotCanvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, snapshotCanvas.width, snapshotCanvas.height);

    // Save thumbnail for side-by-side comparison
    lastSnappedDataUrl = snapshotCanvas.toDataURL('image/jpeg', 0.85);

    // Run reverse search
    performVisualSearch(snapshotCanvas);
  });

  // Choose photo file upload handler
  fileUploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        lastSnappedDataUrl = event.target.result;
        performVisualSearch(img);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    // Reset file input
    fileUploadInput.value = '';
  });

  // --- MODAL / PRODUCT HUD DISPLAY ---
  function openProductModal(product, matchScore = null, alternatives = [], userPhotoDataUrl = null) {
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

    // Match score badge
    if (matchScore) {
      modalMatchBadge.textContent = `${matchScore}% MATCH`;
      modalMatchBadge.style.display = 'block';
      if (matchScore >= 85) {
        modalMatchBadge.style.background = 'rgba(16, 185, 129, 0.95)'; // emerald
      } else if (matchScore >= 70) {
        modalMatchBadge.style.background = 'rgba(245, 158, 11, 0.95)'; // amber
      } else {
        modalMatchBadge.style.background = 'rgba(100, 116, 139, 0.95)'; // slate
      }
    } else {
      modalMatchBadge.style.display = 'none';
    }

    // Side-by-side user photo comparison
    if (userPhotoDataUrl) {
      modalUserSnappedImg.src = userPhotoDataUrl;
      userPhotoCard.style.display = 'flex';
    } else {
      userPhotoCard.style.display = 'none';
    }

    // Alternative candidates
    if (alternatives && alternatives.length > 0) {
      modalAlternativesSection.style.display = 'block';
      alternativesGrid.innerHTML = alternatives.map(alt => `
        <div class="alt-card" data-pid="${alt.product.id}">
          <img class="alt-card-img" src="${alt.product.img || './icon.svg'}" alt="${alt.product.name}" onerror="this.src='./icon.svg'">
          <div class="alt-card-title">${alt.product.name}</div>
          <div class="alt-card-score">${alt.percentage}% Match</div>
        </div>
      `).join('');

      alternativesGrid.querySelectorAll('.alt-card').forEach(card => {
        card.addEventListener('click', () => {
          const pid = parseInt(card.getAttribute('data-pid'), 10);
          const selected = PRODUCTS.find(p => p.id === pid);
          if (selected) {
            // Switch to selected candidate
            openProductModal(selected, null, [], userPhotoDataUrl);
          }
        });
      });
    } else {
      modalAlternativesSection.style.display = 'none';
    }

    productModal.classList.add('open');
  }

  function closeProductModal() {
    productModal.classList.remove('open');
  }

  // --- CATALOG FILTERING & RENDERING ---
  function renderCatalog() {
    const query = activeSearchQuery.toLowerCase().trim();
    
    const filtered = PRODUCTS.filter(p => {
      if (activeDepartment !== 'all' && p.department !== activeDepartment) {
        return false;
      }
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
      const stored = localStorage.getItem('practice_visual_scan_history');
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
      localStorage.setItem('practice_visual_scan_history', JSON.stringify(scanHistory));
    } catch (e) {}
    renderHistory();
  }

  function renderHistory() {
    historyCount.textContent = scanHistory.length;
    if (scanHistory.length === 0) {
      historyList.innerHTML = `<p class="empty-state">No products identified yet this shift. Point camera at any item and tap Snap Product.</p>`;
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

  // Help tip button
  document.getElementById('btn-help-tip').addEventListener('click', () => {
    showToast("Tip: Center the item in the box and hold still for best visual match!");
  });

  // Quick manual lookup form
  quickSkuForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = quickSkuInput.value.trim().toLowerCase();
    if (!val) return;
    const prod = PRODUCTS.find(p => 
      (p.sku && p.sku.toLowerCase() === val) ||
      String(p.id) === val ||
      p.fullTitle.toLowerCase().includes(val) ||
      p.name.toLowerCase().includes(val)
    );
    if (prod) {
      playSuccessChime();
      addToHistory(prod);
      openProductModal(prod);
      quickSkuInput.value = '';
    } else {
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
    localStorage.removeItem('practice_visual_scan_history');
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

  // Service Worker Registration for PWA
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('PWA ServiceWorker registered:', reg.scope);
      }).catch((err) => {
        console.warn('PWA ServiceWorker failed:', err);
      });
    });
  }

  // --- APP INITIALIZATION ---
  async function init() {
    loadHistory();
    renderCatalog();
    if (activeTab === 'scanner') {
      startCamera();
    }
    await initNeuralVision();
  }

  init();

})();
