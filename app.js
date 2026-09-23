/**
 * THE PRACTICE • VISUAL RETAIL & STUDIO OPERATIONS CONTROLLER (app.js)
 * Reverse Visual Product Search powered by MobileNet v2 & Vector Embeddings
 * Studio Catalog, Brand Filtering, and Memberships & Rates Guide
 */

(function () {
  'use strict';

  // --- STATE ---
  let activeTab = 'scanner';
  let activeDepartment = 'all';
  let activeBrand = 'all';
  let activeSort = 'default';
  let activeSearchQuery = '';
  let activeCommitmentTerm = '6'; // default 6-Month
  let currentCameraFacing = 'environment';
  let videoStream = null;
  let mobilenetModel = null;
  let isModelReady = false;
  let isAnalyzing = false;
  let scanHistory = [];
  let lastSnappedDataUrl = null;
  let activeProduct = null;

  // Membership Pricing by Commitment Term (CAD)
  const MEMBERSHIP_PRICING = {
    '1': {
      grounded: '$349',
      attuned: '$599',
      activated: '$999',
      founders: '$1,299',
      transcendent: '$1,899',
      foundersPeriod: '/ month (6-mo min)'
    },
    '6': {
      grounded: '$249',
      attuned: '$499',
      activated: '$899',
      founders: '$1,299',
      transcendent: '$1,599',
      foundersPeriod: '/ month'
    },
    '12': {
      grounded: '$199',
      attuned: '$399',
      activated: '$849',
      founders: '$1,199',
      transcendent: '$1,499',
      foundersPeriod: '/ month'
    }
  };

  // --- DOM ELEMENTS ---
  const tabs = document.querySelectorAll('.nav-tab');
  const viewPanels = {
    scanner: document.getElementById('view-scanner'),
    catalog: document.getElementById('view-catalog'),
    memberships: document.getElementById('view-memberships'),
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
  const btnHelpTip = document.getElementById('btn-help-tip');
  const statusLabel = document.getElementById('status-label');

  const quickSkuForm = document.getElementById('quick-sku-form');
  const quickSkuInput = document.getElementById('quick-sku-input');

  const catalogSearchInput = document.getElementById('catalog-search-input');
  const btnClearSearch = document.getElementById('btn-clear-search');
  const deptPillsContainer = document.getElementById('dept-pills');
  const filterBrandSelect = document.getElementById('filter-brand');
  const filterSortSelect = document.getElementById('filter-sort');
  const catalogGrid = document.getElementById('catalog-grid');
  const resultsCount = document.getElementById('results-count');

  // Memberships DOM
  const termButtons = document.querySelectorAll('.term-btn');
  const priceGrounded = document.getElementById('price-grounded');
  const priceAttuned = document.getElementById('price-attuned');
  const priceActivated = document.getElementById('price-activated');
  const priceFounders = document.getElementById('price-founders');
  const priceTranscendent = document.getElementById('price-transcendent');

  // History DOM
  const historyList = document.getElementById('history-list');
  const historyCount = document.getElementById('history-count');
  const btnClearHistory = document.getElementById('btn-clear-history');

  // Product Modal elements
  const productModal = document.getElementById('product-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const userPhotoCard = document.getElementById('user-photo-card');
  const modalUserSnappedImg = document.getElementById('modal-user-snapped-img');
  const modalImg = document.getElementById('modal-img');
  const modalDeptBadge = document.getElementById('modal-dept-badge');
  const modalMatchBadge = document.getElementById('modal-match-badge');
  const modalBrand = document.getElementById('modal-brand');
  const btnBrandMore = document.getElementById('btn-brand-more');
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalSku = document.getElementById('modal-sku');
  const modalPitch = document.getElementById('modal-pitch');
  const btnCopyPitch = document.getElementById('btn-copy-pitch');
  const btnMomenceApp = document.getElementById('modal-momence-app-btn');
  const modalMomenceWebLink = document.getElementById('modal-momence-web-link');
  const modalMomenceEditLink = document.getElementById('modal-momence-edit-link');
  const btnHeaderPos = document.getElementById('btn-header-pos');
  const btnCopySku = document.getElementById('btn-copy-sku');
  const btnScanAgain = document.getElementById('btn-scan-again');
  const modalAlternativesSection = document.getElementById('modal-alternatives-section');
  const alternativesGrid = document.getElementById('alternatives-grid');

  // Help Modal elements
  const helpModal = document.getElementById('help-modal');
  const btnCloseHelp = document.getElementById('btn-close-help');
  const btnHelpGotIt = document.getElementById('btn-help-got-it');
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

  // --- NATIVE MOMENCE APP DEEP LINK ENGINE ---
  // Directly prompts iPadOS / iOS to launch the native Momence app
  // where retail staff are already logged in, bypassing web re-logins.
  function launchMomenceApp(path, webFallbackUrl) {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    const momenceSchemeUrl = `momence://${cleanPath}`;

    showToast('Prompting Momence App...');

    // On iPadOS / iOS:
    // Navigating to momence:// triggers the native system dialog:
    // "Open in 'Momence'?" -> [Open] switches straight to the logged-in app.
    window.location.href = momenceSchemeUrl;

    // Detection for desktop / non-iOS:
    const isTouch = navigator.maxTouchPoints > 0;
    const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && isTouch);

    // Only auto-open web on non-iOS/non-mobile devices (like laptop desktop)
    // On iPad, we don't want to force-open browser if staff tapped [Cancel] on iOS prompt
    if (!isAppleMobile && webFallbackUrl) {
      const start = Date.now();
      setTimeout(() => {
        if (Date.now() - start < 2200 && !document.hidden) {
          window.open(webFallbackUrl, '_blank', 'noopener');
        }
      }, 1400);
    }
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
      cameraMessage.style.display = 'none';

      // Check if torch/flashlight is supported
      const track = videoStream.getVideoTracks()[0];
      if (track && track.getCapabilities && track.getCapabilities().torch) {
        btnTorch.style.display = 'flex';
      } else {
        btnTorch.style.display = 'none';
      }

    } catch (err) {
      console.error("Camera access error:", err);
      cameraMessage.style.display = 'block';
      cameraMessage.innerHTML = `
        <p style="color:#f87171;">Camera Access Required</p>
        <p style="font-size:12px; margin-top:4px;">Please allow camera permissions or upload an image to use Visual Search.</p>
      `;
    }
  }

  function stopCamera() {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      videoStream = null;
    }
    videoElement.srcObject = null;
  }

  // --- VISUAL REVERSE SEARCH CORE ---
  async function performVisualSearch(sourceElement) {
    if (isAnalyzing) return;
    isAnalyzing = true;
    scanAnalyzingOverlay.style.display = 'flex';

    try {
      // 1. Draw source frame into a 224x224 offscreen canvas
      const offCanvas = document.createElement('canvas');
      offCanvas.width = 224;
      offCanvas.height = 224;
      const ctx = offCanvas.getContext('2d');
      ctx.drawImage(sourceElement, 0, 0, 224, 224);

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
    fileUploadInput.value = '';
  });

  // --- MODAL / PRODUCT HUD DISPLAY ---
  function openProductModal(product, matchScore = null, alternatives = [], userPhotoDataUrl = null) {
    activeProduct = product;
    modalBrand.textContent = product.brand.toUpperCase();
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalSku.textContent = product.sku || 'N/A';
    modalDeptBadge.textContent = product.department;
    modalPitch.textContent = product.pitch;
    
    // Configure Momence Point of Sale App button (direct iOS POS deep link)
    // Routes straight to the POS register with product parameters so staff can immediately ring up
    const posPath = `dashboard/200431/point-of-sale?productId=${product.id}&product_id=${product.id}&product=${product.id}&sku=${encodeURIComponent(product.sku || '')}&search=${encodeURIComponent(product.sku || product.name)}`;
    const posWebUrl = `https://momence.com/${posPath}`;
    const editWebUrl = `https://momence.com/dashboard/200431/products/${product.id}/edit`;

    if (btnMomenceApp) {
      btnMomenceApp.href = `momence://${posPath}`;
      btnMomenceApp.onclick = async (e) => {
        e.preventDefault();
        // Auto-copy SKU to iPad clipboard so retail staff can quickly paste into POS if needed
        if (product.sku) {
          try {
            await navigator.clipboard.writeText(product.sku);
          } catch (_) {}
        }
        showToast(`Opening POS register... SKU ${product.sku || product.id} copied!`);
        launchMomenceApp(posPath, posWebUrl);
      };
    }
    // Configure Web fallback link (Point of Sale)
    if (modalMomenceWebLink) {
      modalMomenceWebLink.href = posWebUrl;
    }
    // Configure Admin Edit link
    if (modalMomenceEditLink) {
      modalMomenceEditLink.href = editWebUrl;
    }

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
    activeProduct = null;
  }

  // View more from brand button in modal
  btnBrandMore.addEventListener('click', () => {
    if (!activeProduct) return;
    const targetBrand = activeProduct.brand;
    closeProductModal();
    
    // Switch to catalog, reset department, set brand filter
    activeDepartment = 'all';
    activeBrand = targetBrand;
    activeSearchQuery = '';
    catalogSearchInput.value = '';
    btnClearSearch.style.display = 'none';

    // Update UI elements
    deptPillsContainer.querySelectorAll('.dept-pill').forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-dept') === 'all');
    });
    filterBrandSelect.value = targetBrand;

    switchTab('catalog');
    renderCatalog();
    showToast(`Showing all products from ${targetBrand}`);
  });

  // Copy Pitch button in modal
  btnCopyPitch.addEventListener('click', () => {
    const text = modalPitch.textContent.trim();
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Staff pitch copied to clipboard!');
      }).catch(() => {
        showToast('Unable to copy pitch');
      });
    }
  });

  // --- CATALOG FILTERING & RENDERING ---
  function populateBrandFilter() {
    const brandsSet = new Set();
    PRODUCTS.forEach(p => {
      if (p.brand) brandsSet.add(p.brand);
    });

    const sortedBrands = Array.from(brandsSet).sort();
    filterBrandSelect.innerHTML = `<option value="all">All Brands (${sortedBrands.length})</option>`;
    sortedBrands.forEach(b => {
      const count = PRODUCTS.filter(p => p.brand === b).length;
      const opt = document.createElement('option');
      opt.value = b;
      opt.textContent = `${b} (${count})`;
      filterBrandSelect.appendChild(opt);
    });
  }

  function renderCatalog() {
    const query = activeSearchQuery.toLowerCase().trim();
    
    let filtered = PRODUCTS.filter(p => {
      // Department filter
      if (activeDepartment !== 'all' && p.department !== activeDepartment) {
        return false;
      }
      // Brand filter
      if (activeBrand !== 'all' && p.brand !== activeBrand) {
        return false;
      }
      // Search query
      if (!query) return true;
      const haystack = `${p.fullTitle} ${p.brand} ${p.name} ${p.sku} ${p.department} ${p.pitch}`.toLowerCase();
      return haystack.includes(query);
    });

    // Sorting
    if (activeSort === 'price-asc') {
      filtered.sort((a, b) => (a.priceNum || 0) - (b.priceNum || 0));
    } else if (activeSort === 'price-desc') {
      filtered.sort((a, b) => (b.priceNum || 0) - (a.priceNum || 0));
    } else if (activeSort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (activeSort === 'brand-asc') {
      filtered.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;

    if (filtered.length === 0) {
      catalogGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1; padding: 40px; text-align: center;">
          <p>No products found matching your active filters.</p>
          <button id="btn-reset-filters" class="btn-secondary" style="margin-top: 12px;">Reset All Filters</button>
        </div>
      `;
      const btnReset = document.getElementById('btn-reset-filters');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          activeDepartment = 'all';
          activeBrand = 'all';
          activeSort = 'default';
          activeSearchQuery = '';
          catalogSearchInput.value = '';
          btnClearSearch.style.display = 'none';
          filterBrandSelect.value = 'all';
          filterSortSelect.value = 'default';
          deptPillsContainer.querySelectorAll('.dept-pill').forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-dept') === 'all');
          });
          renderCatalog();
        });
      }
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

  // --- MEMBERSHIP RATES CONTROLLER ---
  function updateMembershipPrices(termKey) {
    activeCommitmentTerm = termKey;
    const rates = MEMBERSHIP_PRICING[termKey] || MEMBERSHIP_PRICING['6'];

    priceGrounded.textContent = rates.grounded;
    priceAttuned.textContent = rates.attuned;
    priceActivated.textContent = rates.activated;
    priceFounders.textContent = rates.founders;
    priceTranscendent.textContent = rates.transcendent;

    termButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-term') === termKey);
    });
  }

  termButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const term = btn.getAttribute('data-term');
      updateMembershipPrices(term);
    });
  });

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

  // --- NAVIGATION TAB SWITCHER ---
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
      if (viewPanels[key]) {
        viewPanels[key].classList.toggle('active', key === tabId);
      }
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

  // Help Guide Modal
  btnHelpTip.addEventListener('click', () => {
    helpModal.classList.add('open');
  });

  btnCloseHelp.addEventListener('click', () => {
    helpModal.classList.remove('open');
  });

  btnHelpGotIt.addEventListener('click', () => {
    helpModal.classList.remove('open');
  });

  helpModal.addEventListener('click', (e) => {
    if (e.target === helpModal) {
      helpModal.classList.remove('open');
    }
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

  // Brand dropdown filter
  filterBrandSelect.addEventListener('change', (e) => {
    activeBrand = e.target.value;
    renderCatalog();
  });

  // Sort dropdown selector
  filterSortSelect.addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderCatalog();
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
    if (e.key === 'Escape') {
      if (productModal.classList.contains('open')) closeProductModal();
      if (helpModal.classList.contains('open')) helpModal.classList.remove('open');
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

  // Header Momence POS shortcut
  if (btnHeaderPos) {
    btnHeaderPos.addEventListener('click', (e) => {
      e.preventDefault();
      launchMomenceApp('dashboard/200431/point-of-sale', 'https://momence.com/dashboard/200431/point-of-sale');
    });
  }

  // Universal Momence click interceptor: ensures EVERY Momence link prompts native app
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    // Allow explicit web fallback buttons to open browser
    if (anchor.classList.contains('link-web-fallback') || anchor.id === 'modal-momence-web-link' || anchor.classList.contains('link-admin-edit') || anchor.id === 'modal-momence-edit-link') {
      return;
    }
    const href = anchor.getAttribute('href') || '';
    if (href.startsWith('momence://')) {
      e.preventDefault();
      const path = href.replace('momence://', '');
      launchMomenceApp(path, `https://momence.com/${path}`);
    } else if (href.includes('momence.com/')) {
      e.preventDefault();
      try {
        const url = new URL(href, window.location.href);
        const path = (url.pathname + url.search).replace(/^\//, '');
        launchMomenceApp(path, href);
      } catch (err) {
        launchMomenceApp('dashboard/200431/point-of-sale', href);
      }
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
    populateBrandFilter();
    loadHistory();
    renderCatalog();
    updateMembershipPrices('6');
    if (activeTab === 'scanner') {
      startCamera();
    }
    await initNeuralVision();
  }

  init();

})();
