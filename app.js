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
    favorites: document.getElementById('view-favorites'),
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
  const modalPitchBullets = document.getElementById('modal-pitch-bullets');
  const btnCopyPitch = document.getElementById('btn-copy-pitch');
  const btnModalFavorite = document.getElementById('btn-modal-favorite');
  const btnMomenceApp = document.getElementById('modal-momence-app-btn');
  const modalMomenceWebLink = document.getElementById('modal-momence-web-link');
  const modalMomenceEditLink = document.getElementById('modal-momence-edit-link');
  const btnHeaderPos = document.getElementById('btn-header-pos');
  const btnHeaderCart = document.getElementById('btn-header-cart');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const btnModalAddCart = document.getElementById('btn-modal-add-cart');

  // Floating Cart Bar & Modal Elements
  const floatingCartBar = document.getElementById('floating-cart-bar');
  const floatingCartCount = document.getElementById('floating-cart-count');
  const floatingCartSummary = document.getElementById('floating-cart-summary');
  const floatingCartTotal = document.getElementById('floating-cart-total');
  const cartBarTrigger = document.getElementById('cart-bar-trigger');
  const btnViewCartDrawer = document.getElementById('btn-view-cart-drawer');
  const btnCheckoutMomence = document.getElementById('btn-checkout-momence');
  const cartDrawerModal = document.getElementById('cart-drawer-modal');
  const btnCloseCart = document.getElementById('btn-close-cart');
  const cartModalItemCount = document.getElementById('cart-modal-item-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTax = document.getElementById('cart-tax');
  const cartGrandTotal = document.getElementById('cart-grand-total');
  const btnClearCart = document.getElementById('btn-clear-cart');
  const btnCopyCartSkus = document.getElementById('btn-copy-cart-skus');
  const btnCopyCartCustomerEmail = document.getElementById('btn-copy-cart-customer-email');
  const btnOpenMomenceCart = document.getElementById('btn-open-momence-cart');
  const btnChargeCardOnFile = document.getElementById('btn-charge-card-on-file');
  const btnChargeLabel = document.getElementById('btn-charge-label');
  const btnChargeAmount = document.getElementById('btn-charge-amount');
  const btnSendToStripeReader = document.getElementById('btn-send-to-stripe-reader');
  const btnCashSale = document.getElementById('btn-cash-sale');
  const cartCustomerName = document.getElementById('cart-customer-name');
  const cartCustomerEmail = document.getElementById('cart-customer-email');
  const cartCustomerPaymentPill = document.getElementById('cart-customer-payment-pill');
  const btnSwitchCartCustomer = document.getElementById('btn-switch-cart-customer');

  // Member Portal Elements
  const btnMemberPortal = document.getElementById('btn-member-portal');
  const headerMemberName = document.getElementById('header-member-name');
  const headerMemberPill = document.getElementById('header-member-pill');
  const memberPortalModal = document.getElementById('member-portal-modal');
  const btnCloseMemberPortal = document.getElementById('btn-close-member-portal');
  const memberSearchInput = document.getElementById('member-search-input');
  const memberQuickPillsContainer = document.getElementById('member-quick-pills-container');
  const memberCardAvatar = document.getElementById('member-card-avatar');
  const memberCardName = document.getElementById('member-card-name');
  const memberCardEmail = document.getElementById('member-card-email');
  const memberCardTier = document.getElementById('member-card-tier');
  const memberCardPayment = document.getElementById('member-card-payment');
  const memberCardStatus = document.getElementById('member-card-status');
  const memberClassTitle = document.getElementById('member-class-title');
  const memberClassSub = document.getElementById('member-class-sub');
  const btnToggleCheckin = document.getElementById('btn-toggle-checkin');
  const btnApplyActiveMember = document.getElementById('btn-apply-active-member');

  // Daily Ledger Modal Elements
  const btnHeaderLedger = document.getElementById('btn-header-ledger');
  const registerLedgerModal = document.getElementById('register-ledger-modal');
  const btnCloseLedger = document.getElementById('btn-close-ledger');
  const ledgerKpiGross = document.getElementById('ledger-kpi-gross');
  const ledgerKpiNet = document.getElementById('ledger-kpi-net');
  const ledgerKpiTax = document.getElementById('ledger-kpi-tax');
  const ledgerKpiCount = document.getElementById('ledger-kpi-count');
  const ledgerStatCardOnFile = document.getElementById('ledger-stat-card-on-file');
  const ledgerStatTerminal = document.getElementById('ledger-stat-terminal');
  const ledgerStatCash = document.getElementById('ledger-stat-cash');
  const ledgerTableBody = document.getElementById('ledger-table-body');
  const btnResetLedger = document.getElementById('btn-reset-ledger');
  const btnExportLedgerCsv = document.getElementById('btn-export-ledger-csv');

  // Checkout Success Modal Elements
  const checkoutSuccessModal = document.getElementById('checkout-success-modal');
  const successMethodMsg = document.getElementById('success-method-msg');
  const successReceiptChit = document.getElementById('success-receipt-chit');
  const btnPrintReceipt = document.getElementById('btn-print-receipt');
  const btnCloseSuccess = document.getElementById('btn-close-success');

  const btnCopySku = document.getElementById('btn-copy-sku');
  const btnScanAgain = document.getElementById('btn-scan-again');
  const modalAlternativesSection = document.getElementById('modal-alternatives-section');
  const alternativesGrid = document.getElementById('alternatives-grid');
  const favoritesCountSpan = document.getElementById('favorites-count');
  const favoritesGrid = document.getElementById('favorites-grid');
  const btnClearFavorites = document.getElementById('btn-clear-favorites');

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

  // ==========================================================================
  // THE PRACTICE HYBRID POS, MEMBER PORTAL & DAILY ACCOUNTING LEDGER ENGINE
  // ==========================================================================

  const KNOWN_MEMBERS = [
    {
      id: 'mem_jackson',
      name: 'Jackson McMurdo',
      email: 'Jackson@ThePracticetoronto.com',
      role: 'Founder',
      tier: 'Founding Member • Unlimited Access',
      cardOnFile: { brand: 'Visa', last4: '4242', exp: '08/28' },
      classToday: 'Vinyasa Flow • 5:30 PM (Studio 1 with Lisa)',
      isCheckedIn: true
    },
    {
      id: 'mem_sara',
      name: 'Sara Jackson',
      email: 'sara@thepracticetoronto.com',
      role: 'CEO',
      tier: 'Executive Member • Unlimited Studio',
      cardOnFile: { brand: 'Mastercard', last4: '8812', exp: '11/27' },
      classToday: 'Sound Bath & Breathwork • 7:00 PM (Studio 2)',
      isCheckedIn: false
    },
    {
      id: 'mem_kim',
      name: 'Kim Noble',
      email: 'kim@thepracticetoronto.com',
      role: 'COO',
      tier: 'Executive Member • Unlimited Studio',
      cardOnFile: { brand: 'Amex', last4: '1004', exp: '04/29' },
      classToday: 'Morning Mysore • 7:30 AM (Attended)',
      isCheckedIn: true
    },
    {
      id: 'mem_lisa',
      name: 'Lisa Kovacs',
      email: 'lisa@thepracticetoronto.com',
      role: 'Lead Instructor',
      tier: 'Faculty & Senior Teacher',
      cardOnFile: { brand: 'Visa', last4: '5590', exp: '02/28' },
      classToday: 'Teaching: Vinyasa Flow (5:30 PM)',
      isCheckedIn: true
    },
    {
      id: 'mem_walkin',
      name: 'Walk-In Guest',
      email: 'guest@thepracticetoronto.com',
      role: 'Guest',
      tier: 'Drop-In Retail & Cafe Guest',
      cardOnFile: null,
      classToday: 'None',
      isCheckedIn: false
    }
  ];

  // Initialize Active Customer from LocalStorage or Default Jackson McMurdo
  let activeMemberId = localStorage.getItem('the_practice_active_member_id') || 'mem_jackson';
  let activePosCustomer = KNOWN_MEMBERS.find(m => m.id === activeMemberId) || KNOWN_MEMBERS[0];
  let tempPortalSelectedMember = { ...activePosCustomer };

  function setActiveCustomer(memberIdOrObj) {
    if (typeof memberIdOrObj === 'string') {
      const found = KNOWN_MEMBERS.find(m => m.id === memberIdOrObj);
      if (found) {
        activePosCustomer = { ...found };
        activeMemberId = found.id;
      }
    } else if (memberIdOrObj && memberIdOrObj.name) {
      activePosCustomer = { ...memberIdOrObj };
      activeMemberId = memberIdOrObj.id || 'mem_custom';
    }

    try {
      localStorage.setItem('the_practice_active_member_id', activeMemberId);
    } catch (_) {}

    updateHeaderMemberPill();
    renderCartUI();
  }

  function updateHeaderMemberPill() {
    if (headerMemberName) {
      headerMemberName.textContent = activePosCustomer.name;
    }
    if (headerMemberPill) {
      if (activePosCustomer.cardOnFile) {
        headerMemberPill.textContent = `${activePosCustomer.cardOnFile.brand} •••• ${activePosCustomer.cardOnFile.last4}`;
        headerMemberPill.style.background = '#2F4538';
        headerMemberPill.style.color = '#FFFFFF';
      } else {
        headerMemberPill.textContent = 'Guest / Terminal';
        headerMemberPill.style.background = '#E5E7EB';
        headerMemberPill.style.color = '#374151';
      }
    }
  }

  function getPriceNumber(priceStr) {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    const clean = String(priceStr).replace(/[^0-9.]/g, '');
    return parseFloat(clean) || 0;
  }

  // Base64 JSON encoder matching Momence React SPA router decodePosUrlData
  function encodeMomencePosData(obj) {
    try {
      const jsonStr = JSON.stringify(obj);
      if (typeof TextEncoder !== 'undefined') {
        const u8 = new TextEncoder().encode(jsonStr);
        let binary = '';
        for (let i = 0; i < u8.length; i++) {
          binary += String.fromCharCode(u8[i]);
        }
        return btoa(binary);
      }
      return btoa(jsonStr);
    } catch (e) {
      console.warn('Momence POS data encoding error:', e);
      return btoa(JSON.stringify(obj));
    }
  }

  function generateMomencePosUrl(productsOrCart, customer = activePosCustomer) {
    const params = new URLSearchParams();
    const custEmail = (customer && customer.email) || DEFAULT_CUSTOMER.email;
    const custName = (customer && customer.name) || DEFAULT_CUSTOMER.name;
    const rawMemberId = (customer && customer.memberId) || DEFAULT_CUSTOMER.memberId;
    const custMemberId = rawMemberId ? Number(rawMemberId) : undefined;

    let items = [];
    if (productsOrCart) {
      items = Array.isArray(productsOrCart) ? productsOrCart : [productsOrCart];
    }

    // 1. Momence Native SPA Pre-population Payload (Parsed by Momence POS Zfe component via ?data=)
    const cartItemsPayload = [];
    items.forEach(item => {
      const pid = Number(item.id);
      const qty = item.quantity || 1;
      const priceNum = getPriceNumber(item.price);
      for (let q = 0; q < qty; q++) {
        cartItemsPayload.push({
          type: 'product',
          productId: pid,
          price: priceNum
        });
      }
    });

    const posDataPayload = {
      customerInfo: {
        payingMemberId: custMemberId,
        targetMemberId: custMemberId,
        payForSomeoneElse: false,
        customerEmail: custEmail,
        customerName: custName
      },
      payingMemberId: custMemberId,
      targetMemberId: custMemberId,
      cartItems: cartItemsPayload
    };

    if (items.length === 1 && items[0]) {
      posDataPayload.productId = Number(items[0].id);
      posDataPayload.price = getPriceNumber(items[0].price);
    }

    // Embed base64-encoded payload for Momence React SPA router (?data=...)
    params.set('data', encodeMomencePosData(posDataPayload));

    // 2. Direct Query Parameters Matrix for backwards compatibility and fallback search
    params.set('customer', custEmail);
    params.set('email', custEmail);
    params.set('customer_email', custEmail);
    params.set('customerEmail', custEmail);
    params.set('name', custName);
    params.set('customer_name', custName);
    params.set('customerName', custName);
    params.set('searchCustomer', custEmail);
    params.set('search', custEmail);
    params.set('customerSearch', custEmail);
    params.set('q', custEmail);
    params.set('query', custEmail);
    params.set('member', custEmail);
    params.set('autoAdd', 'true');

    if (custMemberId) {
      params.set('memberId', String(custMemberId));
      params.set('payingMemberId', String(custMemberId));
      params.set('customerId', String(custMemberId));
      params.set('customer_id', String(custMemberId));
    }

    if (items.length === 1 && items[0]) {
      const item = items[0];
      const pid = item.id;
      params.set('productId', pid);
      params.set('product_id', pid);
      params.set('product', pid);
      params.set('item', pid);
      params.set('cart', pid);
      if (item.sku) params.set('sku', item.sku);
    } else if (items.length > 1) {
      const pids = items.map(i => i.id).filter(Boolean);
      params.set('products', pids.join(','));
      params.set('cart', pids.join(','));
      params.set('items', items.map(i => `${i.id}:${i.quantity || 1}`).join(','));
    }

    return `https://momence.com/dashboard/200431/point-of-sale?${params.toString()}`;
  }

  function openMomenceWebApp(urlOrPath) {
    let targetUrl;
    const defaultPosUrl = generateMomencePosUrl(null, activePosCustomer);
    if (!urlOrPath) {
      targetUrl = defaultPosUrl;
    } else if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
      targetUrl = urlOrPath;
    } else if (urlOrPath.startsWith('momence://')) {
      targetUrl = `https://momence.com/${urlOrPath.replace('momence://', '')}`;
    } else {
      const cleanPath = urlOrPath.startsWith('/') ? urlOrPath.slice(1) : urlOrPath;
      targetUrl = `https://momence.com/${cleanPath}`;
    }

    // Auto-copy Jackson's email so if Momence customer search dialog is open, staff can tap Paste instantly
    navigator.clipboard?.writeText(activePosCustomer.email).catch(() => {});
    showToast(`Attached: ${activePosCustomer.name} (${activePosCustomer.email}) • Opening POS...`);

    const win = window.open(targetUrl, '_blank', 'noopener');
    if (!win) {
      window.location.href = targetUrl;
    }
  }

  function launchMomenceApp(path, webFallbackUrl) {
    openMomenceWebApp(webFallbackUrl || path);
  }

  // ==========================================================================
  // MULTI-ITEM REGISTER CART STATE & CONTROLS
  // ==========================================================================
  let registerCart = [];
  try {
    const saved = localStorage.getItem('the_practice_register_cart');
    if (saved) registerCart = JSON.parse(saved);
  } catch (e) {
    registerCart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('the_practice_register_cart', JSON.stringify(registerCart));
    } catch (_) {}
  }

  function addToCart(product, quantity = 1) {
    if (!product || !product.id) return;
    const existing = registerCart.find(i => i.id === product.id);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + quantity;
    } else {
      registerCart.push({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        priceNum: getPriceNumber(product.price),
        sku: product.sku || '',
        img: product.img || './icon.png',
        quantity: quantity
      });
    }
    saveCart();
    playSuccessChime();
    const count = getCartTotals().totalCount;
    showToast(`Added ${product.name} to Cart (${count} item${count > 1 ? 's' : ''})`);
    renderCartUI();
  }

  function removeFromCart(productId) {
    registerCart = registerCart.filter(i => i.id !== productId);
    saveCart();
    renderCartUI();
  }

  function updateCartQuantity(productId, delta) {
    const item = registerCart.find(i => i.id === productId);
    if (!item) return;
    item.quantity = (item.quantity || 1) + delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      renderCartUI();
    }
  }

  function clearCart() {
    registerCart = [];
    saveCart();
    showToast('Register cart cleared');
    renderCartUI();
  }

  function getCartTotals() {
    let totalCount = 0;
    let subtotal = 0;
    for (const item of registerCart) {
      const q = item.quantity || 1;
      totalCount += q;
      subtotal += (item.priceNum || 0) * q;
    }
    const tax = subtotal * 0.13;
    const grandTotal = subtotal + tax;
    return {
      totalCount,
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      grandTotal: grandTotal.toFixed(2)
    };
  }

  function openMomenceCart() {
    if (registerCart.length === 0) {
      showToast('Register cart is empty. Add products to begin!');
      return;
    }
    const totals = getCartTotals();
    const posUrl = generateMomencePosUrl(registerCart, activePosCustomer);
    navigator.clipboard?.writeText(activePosCustomer.email).catch(() => {});
    showToast(`Attached ${activePosCustomer.name} (${activePosCustomer.email}) • Opening Momence POS...`);
    const win = window.open(posUrl, '_blank', 'noopener');
    if (!win) window.location.href = posUrl;
  }

  // ==========================================================================
  // DAILY REGISTER & ACCOUNTING LEDGER STATE (CANADIAN HST 13%)
  // ==========================================================================
  let registerLedger = [];
  try {
    const savedLedger = localStorage.getItem('the_practice_register_ledger');
    if (savedLedger) {
      registerLedger = JSON.parse(savedLedger);
    } else {
      const todayStr = new Date().toISOString().split('T')[0];
      registerLedger = [
        {
          id: 'TP-1081',
          date: todayStr,
          time: '08:42 AM',
          customerName: 'Sara Jackson',
          customerEmail: 'sara@thepracticetoronto.com',
          items: '1x Matcha Ceremonial Elixir, 1x Palo Santo Bundle',
          subtotal: 38.00,
          tax: 4.94,
          total: 42.94,
          method: 'Card on File (Mastercard •••• 8812)',
          status: 'Approved'
        },
        {
          id: 'TP-1082',
          date: todayStr,
          time: '11:15 AM',
          customerName: 'Walk-In Guest',
          customerEmail: 'guest@thepracticetoronto.com',
          items: '1x AMP Electrolyte Hydration Pack',
          subtotal: 30.00,
          tax: 3.90,
          total: 33.90,
          method: 'Stripe Terminal Reader (Bluetooth)',
          status: 'Approved'
        }
      ];
      localStorage.setItem('the_practice_register_ledger', JSON.stringify(registerLedger));
    }
  } catch (e) {
    registerLedger = [];
  }

  function saveLedger() {
    try {
      localStorage.setItem('the_practice_register_ledger', JSON.stringify(registerLedger));
    } catch (_) {}
  }

  function recordTransaction(method, status = 'Approved') {
    const totals = getCartTotals();
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateStr = now.toISOString().split('T')[0];
    const orderId = `TP-${Math.floor(1000 + Math.random() * 9000)}`;

    const itemsSummary = registerCart.map(i => `${i.quantity || 1}x ${i.name}`).join(', ');

    const newTx = {
      id: orderId,
      date: dateStr,
      time: timeStr,
      customerName: activePosCustomer.name,
      customerEmail: activePosCustomer.email,
      items: itemsSummary,
      itemsDetailed: [...registerCart],
      subtotal: parseFloat(totals.subtotal),
      tax: parseFloat(totals.tax),
      total: parseFloat(totals.grandTotal),
      method: method,
      status: status
    };

    registerLedger.unshift(newTx);
    saveLedger();
    return newTx;
  }

  function renderLedgerUI() {
    if (!registerLedgerModal) return;

    let gross = 0;
    let net = 0;
    let tax = 0;
    let count = registerLedger.length;
    let cardOnFileTotal = 0, cardOnFileCount = 0;
    let terminalTotal = 0, terminalCount = 0;
    let cashTotal = 0, cashCount = 0;

    registerLedger.forEach(tx => {
      gross += tx.total || 0;
      net += tx.subtotal || 0;
      tax += tx.tax || 0;

      if (tx.method.includes('Card on File')) {
        cardOnFileTotal += tx.total || 0;
        cardOnFileCount++;
      } else if (tx.method.includes('Terminal') || tx.method.includes('Stripe')) {
        terminalTotal += tx.total || 0;
        terminalCount++;
      } else if (tx.method.includes('Cash')) {
        cashTotal += tx.total || 0;
        cashCount++;
      }
    });

    if (ledgerKpiGross) ledgerKpiGross.textContent = `$${gross.toFixed(2)}`;
    if (ledgerKpiNet) ledgerKpiNet.textContent = `$${net.toFixed(2)}`;
    if (ledgerKpiTax) ledgerKpiTax.textContent = `$${tax.toFixed(2)}`;
    if (ledgerKpiCount) ledgerKpiCount.textContent = count;

    if (ledgerStatCardOnFile) ledgerStatCardOnFile.textContent = `$${cardOnFileTotal.toFixed(2)} (${cardOnFileCount})`;
    if (ledgerStatTerminal) ledgerStatTerminal.textContent = `$${terminalTotal.toFixed(2)} (${terminalCount})`;
    if (ledgerStatCash) ledgerStatCash.textContent = `$${cashTotal.toFixed(2)} (${cashCount})`;

    if (ledgerTableBody) {
      if (registerLedger.length === 0) {
        ledgerTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:24px;color:#9CA3AF;">No transactions recorded today yet.</td></tr>`;
      } else {
        ledgerTableBody.innerHTML = registerLedger.map(tx => `
          <tr>
            <td style="color:#6B7280;white-space:nowrap;">${tx.time}</td>
            <td><strong>#${tx.id}</strong></td>
            <td>${tx.customerName}</td>
            <td style="max-width:260px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${tx.items}">${tx.items}</td>
            <td><span class="pos-mini-chip" style="font-size:10px;">${tx.method}</span></td>
            <td style="text-align:right;font-weight:600;">$${tx.total.toFixed(2)}</td>
          </tr>
        `).join('');
      }
    }
  }

  function exportLedgerCsv() {
    if (registerLedger.length === 0) {
      showToast('Ledger is empty. Nothing to export.');
      return;
    }
    const headers = ['Date', 'Time', 'Order ID', 'Customer Name', 'Customer Email', 'Payment Method', 'Items', 'Subtotal CAD', 'Ontario HST (13%)', 'Total CAD', 'Status'];
    const rows = registerLedger.map(tx => [
      `"${tx.date}"`,
      `"${tx.time}"`,
      `"${tx.id}"`,
      `"${tx.customerName}"`,
      `"${tx.customerEmail}"`,
      `"${tx.method}"`,
      `"${(tx.items || '').replace(/"/g, '""')}"`,
      tx.subtotal.toFixed(2),
      tx.tax.toFixed(2),
      tx.total.toFixed(2),
      `"${tx.status}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    const todayStr = new Date().toISOString().split('T')[0];
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `the_practice_register_ledger_${todayStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('📥 Downloaded Accounting CSV for Kim Noble & Bookkeeping!');
  }

  // ==========================================================================
  // 3-WAY UNIFIED CHECKOUT ACTIONS
  // ==========================================================================

  // 1. CHARGE CARD ON FILE (HEADLESS MOMENCE API SIMULATOR)
  function chargeCardOnFile() {
    if (registerCart.length === 0) {
      showToast('Register cart is empty. Add products to begin!');
      return;
    }

    if (!activePosCustomer.cardOnFile) {
      showToast('No card on file for this guest. Please select "Stripe Reader" or "Cash"!');
      return;
    }

    const totals = getCartTotals();
    const cardInfo = `${activePosCustomer.cardOnFile.brand} •••• ${activePosCustomer.cardOnFile.last4}`;

    showToast(`⚡ Connecting to Momence Member Vault for ${activePosCustomer.name}...`);
    if (btnChargeCardOnFile) {
      btnChargeCardOnFile.disabled = true;
      btnChargeCardOnFile.style.opacity = '0.6';
    }

    setTimeout(() => {
      if (btnChargeCardOnFile) {
        btnChargeCardOnFile.disabled = false;
        btnChargeCardOnFile.style.opacity = '1';
      }

      const tx = recordTransaction(`Card on File (${cardInfo})`, 'Approved');
      playSuccessChime();

      if (checkoutSuccessModal) {
        if (successMethodMsg) {
          successMethodMsg.textContent = `Charged to ${cardInfo} (${activePosCustomer.name})`;
        }
        if (successReceiptChit) {
          successReceiptChit.innerHTML = `
========================================
       THE PRACTICE • YORKVILLE
       360 Davenport Rd, Toronto, ON
========================================
Order ID: #${tx.id}
Date: ${tx.date}  ${tx.time}
Member: ${tx.customerName}
Account: ${tx.customerEmail}
Payment: ${tx.method}
Status: APPROVED (Auth #MOM-${Math.floor(100000 + Math.random() * 900000)})
----------------------------------------
${registerCart.map(i => `${i.quantity || 1}x ${i.name.padEnd(26).slice(0, 26)} $${((i.priceNum || 0) * (i.quantity || 1)).toFixed(2)}`).join('\n')}
----------------------------------------
Subtotal:                    $${totals.subtotal} CAD
Ontario HST (13%):           $${totals.tax} CAD
TOTAL CHARGED:               $${totals.grandTotal} CAD
========================================
   Thank you for practicing with us.
`;
        }
        checkoutSuccessModal.style.display = 'flex';
      }

      registerCart = [];
      saveCart();
      renderCartUI();
      if (cartDrawerModal) cartDrawerModal.style.display = 'none';
      showToast(`✓ Charged $${totals.grandTotal} to ${activePosCustomer.name}'s card on file!`);
    }, 450);
  }

  // 2. SEND TO STRIPE READER TERMINAL
  function sendToStripeReader() {
    if (registerCart.length === 0) {
      showToast('Register cart is empty. Add products to begin!');
      return;
    }
    const totals = getCartTotals();
    const tx = recordTransaction('Stripe Terminal Reader (Bluetooth)', 'Pending Terminal Tap');
    showToast(`📡 Sent $${totals.grandTotal} to paired Stripe Reader! Opening POS register...`);
    openMomenceCart();
    registerCart = [];
    saveCart();
    renderCartUI();
    if (cartDrawerModal) cartDrawerModal.style.display = 'none';
  }

  // 3. CASH SALE / QUICK LOG
  function processCashSale() {
    if (registerCart.length === 0) {
      showToast('Register cart is empty. Add products to begin!');
      return;
    }
    const totals = getCartTotals();
    const tx = recordTransaction('Cash / Quick Pay', 'Completed');
    playSuccessChime();

    if (checkoutSuccessModal) {
      if (successMethodMsg) {
        successMethodMsg.textContent = `Cash Payment Collected ($${totals.grandTotal} CAD)`;
      }
      if (successReceiptChit) {
        successReceiptChit.innerHTML = `
========================================
       THE PRACTICE • YORKVILLE
       360 Davenport Rd, Toronto, ON
========================================
Order ID: #${tx.id}
Date: ${tx.date}  ${tx.time}
Customer: ${tx.customerName}
Payment: CASH / REGISTER DRAW
Status: PAID IN FULL
----------------------------------------
${registerCart.map(i => `${i.quantity || 1}x ${i.name.padEnd(26).slice(0, 26)} $${((i.priceNum || 0) * (i.quantity || 1)).toFixed(2)}`).join('\n')}
----------------------------------------
Subtotal:                    $${totals.subtotal} CAD
Ontario HST (13%):           $${totals.tax} CAD
TOTAL PAID:                  $${totals.grandTotal} CAD
========================================
`;
      }
      checkoutSuccessModal.style.display = 'flex';
    }

    registerCart = [];
    saveCart();
    renderCartUI();
    if (cartDrawerModal) cartDrawerModal.style.display = 'none';
    showToast(`✓ Cash sale of $${totals.grandTotal} recorded in register!`);
  }

  // ==========================================================================
  // MEMBER SIGN-IN & PORTAL MODAL LOGIC
  // ==========================================================================
  function openMemberPortal() {
    if (!memberPortalModal) return;
    tempPortalSelectedMember = { ...activePosCustomer };
    renderMemberPortalUI();
    memberPortalModal.style.display = 'flex';
  }

  function closeMemberPortal() {
    if (memberPortalModal) memberPortalModal.style.display = 'none';
  }

  function renderMemberPortalUI() {
    if (memberQuickPillsContainer) {
      memberQuickPillsContainer.innerHTML = KNOWN_MEMBERS.map(m => `
        <button type="button" class="member-pill-btn ${m.id === tempPortalSelectedMember.id ? 'active' : ''}" data-member-id="${m.id}">
          <span>${m.id === 'mem_walkin' ? '👤' : (m.id === 'mem_jackson' ? '👑' : '🧘')}</span>
          <span>${m.name}</span>
        </button>
      `).join('');

      memberQuickPillsContainer.querySelectorAll('.member-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const mid = btn.getAttribute('data-member-id');
          const found = KNOWN_MEMBERS.find(m => m.id === mid);
          if (found) {
            tempPortalSelectedMember = { ...found };
            renderMemberPortalUI();
          }
        });
      });
    }

    if (memberCardAvatar) {
      const initials = tempPortalSelectedMember.name.split(' ').map(n => n[0]).join('').slice(0, 2);
      memberCardAvatar.textContent = initials;
    }
    if (memberCardName) memberCardName.textContent = tempPortalSelectedMember.name;
    if (memberCardEmail) memberCardEmail.textContent = tempPortalSelectedMember.email;
    if (memberCardTier) memberCardTier.textContent = tempPortalSelectedMember.tier || 'Studio Member';

    if (memberCardPayment) {
      if (tempPortalSelectedMember.cardOnFile) {
        memberCardPayment.textContent = `Ready (${tempPortalSelectedMember.cardOnFile.brand} •••• ${tempPortalSelectedMember.cardOnFile.last4})`;
        memberCardPayment.style.color = '#15803D';
      } else {
        memberCardPayment.textContent = 'None (Requires Terminal Tap)';
        memberCardPayment.style.color = '#6B7280';
      }
    }

    if (memberClassTitle) memberClassTitle.textContent = tempPortalSelectedMember.classToday || 'No Class Scheduled Today';
    if (memberClassSub) {
      memberClassSub.textContent = tempPortalSelectedMember.isCheckedIn ? 'Status: Checked In & Ready' : 'Status: Booked • Check-in pending';
    }
    if (btnToggleCheckin) {
      if (tempPortalSelectedMember.classToday === 'None') {
        btnToggleCheckin.style.display = 'none';
      } else {
        btnToggleCheckin.style.display = 'block';
        btnToggleCheckin.textContent = tempPortalSelectedMember.isCheckedIn ? '✓ Checked In' : 'Tap to Check In';
        btnToggleCheckin.style.background = tempPortalSelectedMember.isCheckedIn ? '#16A34A' : '#2563EB';
      }
    }
  }

  // ==========================================================================
  // RENDER CART UI (UPDATED FOR DUAL CHECKOUT & MEMBER STATUS)
  // ==========================================================================
  function renderCartUI() {
    const totals = getCartTotals();

    // 1. Header Cart Badge
    if (cartBadgeCount) {
      cartBadgeCount.textContent = totals.totalCount;
      cartBadgeCount.style.display = totals.totalCount > 0 ? 'inline-flex' : 'none';
    }

    // 2. Floating Cart Bar
    if (floatingCartBar) {
      if (totals.totalCount > 0) {
        floatingCartBar.style.display = 'flex';
        if (floatingCartCount) floatingCartCount.textContent = totals.totalCount;
        if (floatingCartSummary) floatingCartSummary.textContent = `${totals.totalCount} item${totals.totalCount > 1 ? 's' : ''} in cart (${activePosCustomer.name})`;
        if (floatingCartTotal) floatingCartTotal.textContent = `$${totals.grandTotal} CAD`;
      } else {
        floatingCartBar.style.display = 'none';
      }
    }

    // 3. Modal / Drawer Content
    if (cartModalItemCount) cartModalItemCount.textContent = totals.totalCount;
    if (cartSubtotal) cartSubtotal.textContent = `$${totals.subtotal}`;
    if (cartTax) cartTax.textContent = `$${totals.tax}`;
    if (cartGrandTotal) cartGrandTotal.textContent = `$${totals.grandTotal} CAD`;

    // Customer Bar in Cart Drawer
    if (cartCustomerName) cartCustomerName.textContent = activePosCustomer.name;
    if (cartCustomerEmail) cartCustomerEmail.textContent = `<${activePosCustomer.email}>`;
    if (cartCustomerPaymentPill) {
      if (activePosCustomer.cardOnFile) {
        cartCustomerPaymentPill.textContent = `${activePosCustomer.cardOnFile.brand} •••• ${activePosCustomer.cardOnFile.last4}`;
        cartCustomerPaymentPill.style.background = '#2F4538';
        cartCustomerPaymentPill.style.color = '#FFFFFF';
      } else {
        cartCustomerPaymentPill.textContent = 'No Card on File';
        cartCustomerPaymentPill.style.background = '#E5E7EB';
        cartCustomerPaymentPill.style.color = '#374151';
      }
    }

    // Dynamic Checkout Button Label
    if (btnChargeCardOnFile) {
      if (activePosCustomer.cardOnFile) {
        btnChargeCardOnFile.disabled = false;
        if (btnChargeLabel) {
          btnChargeLabel.innerHTML = `⚡ Charge ${activePosCustomer.cardOnFile.brand} •••• ${activePosCustomer.cardOnFile.last4} (<span id="btn-charge-amount">$${totals.grandTotal}</span>)`;
        }
      } else {
        btnChargeCardOnFile.disabled = true;
        if (btnChargeLabel) {
          btnChargeLabel.innerHTML = `No Card on File (Use Reader)`;
        }
      }
    }

    if (cartItemsContainer) {
      if (registerCart.length === 0) {
        cartItemsContainer.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon">🛒</div>
            <h4>Your Register Cart is Empty</h4>
            <p>Scan a product or tap (+) on any item to build a multi-item checkout for <strong>${activePosCustomer.name}</strong>.</p>
          </div>
        `;
      } else {
        cartItemsContainer.innerHTML = registerCart.map(item => `
          <div class="cart-item-row" data-cart-item-id="${item.id}">
            <img class="cart-item-img" src="${item.img || './icon.png'}" alt="${item.name}" onerror="this.src='./icon.png'">
            <div class="cart-item-info">
              <span class="cart-item-brand">${item.brand}</span>
              <h4 class="cart-item-title">${item.name}</h4>
              <div class="cart-item-meta">
                <span class="cart-item-unit-price">${item.price}</span>
                ${item.sku ? `<span class="cart-item-sku">${item.sku}</span>` : ''}
              </div>
            </div>
            <div class="cart-item-controls">
              <div class="cart-qty-stepper">
                <button type="button" class="btn-qty btn-qty-minus" data-action="minus" data-id="${item.id}">−</button>
                <span class="cart-qty-val">${item.quantity || 1}</span>
                <button type="button" class="btn-qty btn-qty-plus" data-action="plus" data-id="${item.id}">+</button>
              </div>
              <div class="cart-item-line-total">$${((item.priceNum || 0) * (item.quantity || 1)).toFixed(2)}</div>
              <button type="button" class="btn-cart-remove" data-id="${item.id}" title="Remove item">✕</button>
            </div>
          </div>
        `).join('');

        // Attach stepper listeners
        cartItemsContainer.querySelectorAll('.btn-qty-minus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pid = parseInt(btn.getAttribute('data-id'), 10);
            updateCartQuantity(pid, -1);
          });
        });
        cartItemsContainer.querySelectorAll('.btn-qty-plus').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pid = parseInt(btn.getAttribute('data-id'), 10);
            updateCartQuantity(pid, 1);
          });
        });
        cartItemsContainer.querySelectorAll('.btn-cart-remove').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const pid = parseInt(btn.getAttribute('data-id'), 10);
            removeFromCart(pid);
          });
        });
      }
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

  // --- FAVORITES STORE & CONTROLLER ---
  let favorites = JSON.parse(localStorage.getItem('the_practice_favorites') || '[]');

  function isFavorite(productId) {
    const num = Number(productId);
    return favorites.some(id => Number(id) === num);
  }

  function toggleFavorite(productId) {
    const num = Number(productId);
    const idx = favorites.findIndex(id => Number(id) === num);
    if (idx > -1) {
      favorites.splice(idx, 1);
      showToast('Removed from Favorites');
    } else {
      favorites.push(num);
      showToast('Added to Favorites ⭐');
    }
    localStorage.setItem('the_practice_favorites', JSON.stringify(favorites));
    updateFavoritesUI();
  }

  function updateFavoritesUI() {
    if (favoritesCountSpan) {
      favoritesCountSpan.textContent = favorites.length;
    }
    if (activeProduct) {
      updateModalFavButton(activeProduct.id);
    }
    // Update active state of visible card stars
    document.querySelectorAll('.card-fav-btn').forEach(btn => {
      const pid = Number(btn.getAttribute('data-fav-id'));
      const active = isFavorite(pid);
      btn.classList.toggle('active', active);
      const svg = btn.querySelector('svg');
      if (svg) {
        svg.setAttribute('fill', active ? '#F5A258' : 'none');
        svg.setAttribute('stroke', active ? '#F5A258' : '#777');
      }
    });

    if (activeTab === 'favorites') {
      renderFavoritesView();
    }
  }

  function updateModalFavButton(productId) {
    if (!btnModalFavorite) return;
    const isFav = isFavorite(productId);
    btnModalFavorite.classList.toggle('active', isFav);
    btnModalFavorite.setAttribute('aria-pressed', isFav ? 'true' : 'false');
  }

  // --- SPEECH-BUBBLE TALKING POINTS RENDERER ---
  function renderPitchBullets(pitchText) {
    if (!modalPitchBullets) return;
    modalPitchBullets.innerHTML = '';
    if (!pitchText) {
      modalPitchBullets.innerHTML = `
        <div class="pitch-bubble">
          <div class="bubble-header">
            <span class="bubble-bullet-num">1</span>
            <span class="bubble-tag">TALKING POINT</span>
          </div>
          <div class="bubble-body">
            <span class="bubble-quote">“</span>
            <p class="bubble-text">Craftsmanship notes and scent profiles available from studio team lead.</p>
            <span class="bubble-quote">”</span>
          </div>
        </div>
      `;
      return;
    }

    // Split sentences or bullet points
    const rawParts = pitchText.split(/(?<=[.!?])\s+|\s*[;•]\s*/);
    const bullets = rawParts
      .map(p => p.trim())
      .filter(p => p.length > 5);

    if (bullets.length === 0) {
      bullets.push(pitchText.trim());
    }

    bullets.forEach((bullet, idx) => {
      const cleanBullet = bullet.endsWith('.') ? bullet.slice(0, -1) : bullet;
      const bubble = document.createElement('div');
      bubble.className = 'pitch-bubble';
      bubble.setAttribute('role', 'button');
      bubble.tabIndex = 0;
      bubble.title = 'Tap to copy talking point';
      bubble.innerHTML = `
        <div class="bubble-header">
          <span class="bubble-bullet-num">${idx + 1}</span>
          <span class="bubble-tag">TALKING POINT</span>
          <span class="bubble-copy-hint">Tap to copy</span>
        </div>
        <div class="bubble-body">
          <span class="bubble-quote">“</span>
          <p class="bubble-text">${cleanBullet}.</p>
          <span class="bubble-quote">”</span>
        </div>
      `;
      bubble.addEventListener('click', async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(cleanBullet);
          showToast('Copied talking point!');
          bubble.classList.add('copied');
          const hint = bubble.querySelector('.bubble-copy-hint');
          if (hint) hint.textContent = 'Copied!';
          setTimeout(() => {
            bubble.classList.remove('copied');
            if (hint) hint.textContent = 'Tap to copy';
          }, 1500);
        } catch (_) {}
      });
      modalPitchBullets.appendChild(bubble);
    });
  }

  // Helper for generating reusable product card HTML
  function generateProductCardHtml(p) {
    const isFav = isFavorite(p.id);
    return `
      <div class="catalog-card" data-pid="${p.id}">
        <div class="card-img-wrap">
          <button class="card-fav-btn ${isFav ? 'active' : ''}" data-fav-id="${p.id}" title="${isFav ? 'Remove Favorite' : 'Save Favorite'}" aria-label="Favorite" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="${isFav ? '#F5A258' : 'none'}" stroke="${isFav ? '#F5A258' : '#777'}" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </button>
          <button class="card-quick-add-btn" data-cart-id="${p.id}" title="Add to Register Cart" aria-label="Add to Cart" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <img class="card-img" src="${p.img || './icon.png'}" alt="${p.name}" loading="lazy" onerror="this.src='./icon.png'">
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
    `;
  }

  function attachCardListeners(container) {
    container.querySelectorAll('.catalog-card').forEach(card => {
      card.addEventListener('click', () => {
        const pid = parseInt(card.getAttribute('data-pid'), 10);
        const prod = PRODUCTS.find(p => p.id === pid);
        if (prod) {
          addToHistory(prod);
          openProductModal(prod);
        }
      });
      const favBtn = card.querySelector('.card-fav-btn');
      if (favBtn) {
        favBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pid = parseInt(favBtn.getAttribute('data-fav-id'), 10);
          toggleFavorite(pid);
        });
      }
      const cartBtn = card.querySelector('.card-quick-add-btn');
      if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const pid = parseInt(cartBtn.getAttribute('data-cart-id'), 10);
          const prod = PRODUCTS.find(p => p.id === pid);
          if (prod) {
            addToCart(prod, 1);
          }
        });
      }
    });
  }

  // --- FAVORITES VIEW RENDERER ---
  function renderFavoritesView() {
    if (!favoritesGrid) return;
    const favProducts = PRODUCTS.filter(p => isFavorite(p.id));
    if (favProducts.length === 0) {
      favoritesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1; padding: 48px 20px; text-align: center;">
          <div style="font-size: 32px; margin-bottom: 8px;">⭐</div>
          <h3 style="font-family: var(--font-heading); font-size: 20px; color: var(--color-primary); margin-bottom: 6px;">No Favorites Saved Yet</h3>
          <p style="color: var(--color-text-muted); font-size: 13px; max-width: 400px; margin: 0 auto 16px auto;">
            Tap the small star on any retail item or product popup to save fast-access items for your shift.
          </p>
          <button id="btn-fav-browse" class="btn-primary" style="background: var(--color-button-indigo); color: #fff; border-radius: 50px; padding: 10px 24px; border: none; font-size: 12px; cursor: pointer;">
            Browse ${PRODUCTS.length} Products
          </button>
        </div>
      `;
      const btnBrowse = document.getElementById('btn-fav-browse');
      if (btnBrowse) {
        btnBrowse.addEventListener('click', () => switchTab('catalog'));
      }
      return;
    }

    favoritesGrid.innerHTML = favProducts.map(p => generateProductCardHtml(p)).join('');
    attachCardListeners(favoritesGrid);
  }

  // --- MODAL / PRODUCT HUD DISPLAY ---
  function openProductModal(product, matchScore = null, alternatives = [], userPhotoDataUrl = null) {
    activeProduct = product;
    modalBrand.textContent = product.brand.toUpperCase();
    modalTitle.textContent = product.name;
    modalPrice.textContent = product.price;
    modalSku.textContent = product.sku || 'N/A';
    modalDeptBadge.textContent = product.department;
    modalPitch.textContent = product.pitch;
    
    // Holding customer profile requested by studio operations:
    // "Jackson McMurdo" with email "Jackson@ThePracticetoronto.com"
    const posWebUrl = generateMomencePosUrl(product, activePosCustomer);
    const posGeneralUrl = generateMomencePosUrl(null, activePosCustomer);
    const editWebUrl = `https://momence.com/dashboard/200431/products/${product.id}/edit`;

    // Configure Momence Point of Sale Web App button
    if (btnMomenceApp) {
      btnMomenceApp.href = posWebUrl;
      btnMomenceApp.target = '_blank';
      btnMomenceApp.rel = 'noopener';
      btnMomenceApp.onclick = () => {
        // Auto-copy Jackson's email so retail staff can immediately paste if customer selection prompt is active
        navigator.clipboard?.writeText(activePosCustomer.email).catch(() => {});
        showToast(`Attached ${activePosCustomer.name} (${activePosCustomer.email}) • Opening Momence POS...`);
        // Native navigation: do not preventDefault so Safari opens in new tab cleanly without pop-up blocking
      };
    }

    if (modalMomenceWebLink) {
      modalMomenceWebLink.href = posGeneralUrl;
    }

    // Configure Fast-Fill Assistant buttons
    const btnCopyPosEmail = document.getElementById('btn-copy-pos-email');
    if (btnCopyPosEmail) {
      btnCopyPosEmail.onclick = async (e) => {
        e.stopPropagation();
        try {
          await navigator.clipboard.writeText(activePosCustomer.email);
          showToast(`Copied ${activePosCustomer.email}!`);
          btnCopyPosEmail.classList.add('copied');
          const act = btnCopyPosEmail.querySelector('.chip-action');
          if (act) act.textContent = 'Copied!';
          setTimeout(() => {
            btnCopyPosEmail.classList.remove('copied');
            if (act) act.textContent = 'Copy';
          }, 1500);
        } catch (_) {}
      };
    }

    const btnCopyPosSku = document.getElementById('btn-copy-pos-sku');
    const posChipSkuVal = document.getElementById('pos-chip-sku-val');
    if (posChipSkuVal) {
      posChipSkuVal.textContent = product.sku || String(product.id);
    }
    if (btnCopyPosSku) {
      btnCopyPosSku.onclick = async (e) => {
        e.stopPropagation();
        const skuToCopy = product.sku || String(product.id);
        try {
          await navigator.clipboard.writeText(skuToCopy);
          showToast(`Copied SKU ${skuToCopy}!`);
          btnCopyPosSku.classList.add('copied');
          const act = btnCopyPosSku.querySelector('.chip-action');
          if (act) act.textContent = 'Copied!';
          setTimeout(() => {
            btnCopyPosSku.classList.remove('copied');
            if (act) act.textContent = 'Copy';
          }, 1500);
        } catch (_) {}
      };
    }

    // Configure Web fallback link (Point of Sale)
    if (modalMomenceWebLink) {
      modalMomenceWebLink.href = posWebUrl;
      modalMomenceWebLink.target = '_blank';
      modalMomenceWebLink.rel = 'noopener';
    }
    // Configure Admin Edit link
    if (modalMomenceEditLink) {
      modalMomenceEditLink.href = editWebUrl;
      modalMomenceEditLink.target = '_blank';
      modalMomenceEditLink.rel = 'noopener';
    }

    if (product.img) {
      modalImg.src = product.img;
      modalImg.style.display = 'block';
    } else {
      modalImg.src = './icon.png';
    }

    // Render speech-bubble talking points
    renderPitchBullets(product.pitch);
    // Update modal favorite button state
    updateModalFavButton(product.id);

    // 3D Showroom Floor Location & Spatial Digital Twin
    const modalLocCard = document.getElementById('modal-location-card');
    const modalLocZone = document.getElementById('modal-loc-zone');
    const modalLocCoords = document.getElementById('modal-loc-coords');
    const modalLocSurface = document.getElementById('modal-loc-surface');
    const modalLocDirections = document.getElementById('modal-loc-directions');

    if (product.location) {
      if (modalLocZone) modalLocZone.textContent = product.location.zoneName || 'Showroom Location';
      if (modalLocCoords && product.location.coords) {
        const [x, y, z] = product.location.coords;
        modalLocCoords.textContent = `[X: ${Number(x).toFixed(1)}m, Y: ${Number(y).toFixed(1)}m, Z: ${Number(z).toFixed(1)}m]`;
      }
      if (modalLocSurface) modalLocSurface.textContent = product.location.surface || 'Display Surface';
      if (modalLocDirections) modalLocDirections.textContent = product.location.walkInstructions || '';
      if (modalLocCard) modalLocCard.style.display = 'block';
    } else if (modalLocCard) {
      modalLocCard.style.display = 'none';
    }

    // Configure Add to Register Cart button in modal
    if (btnModalAddCart) {
      btnModalAddCart.onclick = (e) => {
        e.stopPropagation();
        addToCart(product, 1);
      };
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
    catalogGrid.innerHTML = displayList.map(p => generateProductCardHtml(p)).join('');
    attachCardListeners(catalogGrid);
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
    } else if (tabId === 'favorites') {
      renderFavoritesView();
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

  // Modal Favorite button handler
  if (btnModalFavorite) {
    btnModalFavorite.addEventListener('click', (e) => {
      e.preventDefault();
      if (activeProduct) {
        toggleFavorite(activeProduct.id);
      }
    });
  }

  // Clear Favorites handler
  if (btnClearFavorites) {
    btnClearFavorites.addEventListener('click', () => {
      if (favorites.length === 0) return;
      if (confirm('Clear all saved favorites for this shift?')) {
        favorites = [];
        localStorage.setItem('the_practice_favorites', JSON.stringify(favorites));
        updateFavoritesUI();
        showToast('Favorites cleared');
      }
    });
  }
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

  // Header Cart & Momence POS shortcuts
  if (btnHeaderCart) {
    btnHeaderCart.addEventListener('click', () => {
      if (cartDrawerModal) cartDrawerModal.style.display = 'flex';
      renderCartUI();
    });
  }

  if (cartBarTrigger) {
    cartBarTrigger.addEventListener('click', () => {
      if (cartDrawerModal) cartDrawerModal.style.display = 'flex';
      renderCartUI();
    });
  }

  if (btnViewCartDrawer) {
    btnViewCartDrawer.addEventListener('click', () => {
      if (cartDrawerModal) cartDrawerModal.style.display = 'flex';
      renderCartUI();
    });
  }

  if (btnCheckoutMomence) {
    btnCheckoutMomence.addEventListener('click', () => {
      openMomenceCart();
    });
  }

  if (btnCloseCart) {
    btnCloseCart.addEventListener('click', () => {
      if (cartDrawerModal) cartDrawerModal.style.display = 'none';
    });
  }

  if (cartDrawerModal) {
    cartDrawerModal.addEventListener('click', (e) => {
      if (e.target === cartDrawerModal) {
        cartDrawerModal.style.display = 'none';
      }
    });
  }

  if (btnClearCart) {
    btnClearCart.addEventListener('click', () => {
      clearCart();
    });
  }

  if (btnCopyCartSkus) {
    btnCopyCartSkus.addEventListener('click', () => {
      const skus = registerCart.map(i => i.sku || i.id).join(', ');
      if (skus) {
        navigator.clipboard?.writeText(skus).then(() => {
          showToast(`Copied SKUs: ${skus}`);
        });
      }
    });
  }

  if (btnCopyCartCustomerEmail) {
    btnCopyCartCustomerEmail.addEventListener('click', () => {
      navigator.clipboard?.writeText(activePosCustomer.email).then(() => {
        showToast(`Copied ${activePosCustomer.email}!`);
      });
    });
  }

  if (btnOpenMomenceCart) {
    btnOpenMomenceCart.addEventListener('click', () => {
      openMomenceCart();
    });
  }

  // 3-Way Unified Checkout Buttons
  if (btnChargeCardOnFile) {
    btnChargeCardOnFile.addEventListener('click', () => {
      chargeCardOnFile();
    });
  }

  if (btnSendToStripeReader) {
    btnSendToStripeReader.addEventListener('click', () => {
      sendToStripeReader();
    });
  }

  if (btnCashSale) {
    btnCashSale.addEventListener('click', () => {
      processCashSale();
    });
  }

  // Member Portal & Customer Switcher
  if (btnMemberPortal) {
    btnMemberPortal.addEventListener('click', () => {
      openMemberPortal();
    });
  }

  if (btnSwitchCartCustomer) {
    btnSwitchCartCustomer.addEventListener('click', () => {
      openMemberPortal();
    });
  }

  if (btnCloseMemberPortal) {
    btnCloseMemberPortal.addEventListener('click', () => {
      closeMemberPortal();
    });
  }

  if (memberPortalModal) {
    memberPortalModal.addEventListener('click', (e) => {
      if (e.target === memberPortalModal) closeMemberPortal();
    });
  }

  if (btnApplyActiveMember) {
    btnApplyActiveMember.addEventListener('click', () => {
      setActiveCustomer(tempPortalSelectedMember);
      closeMemberPortal();
      showToast(`✓ Active customer set to ${activePosCustomer.name}`);
    });
  }

  if (btnToggleCheckin) {
    btnToggleCheckin.addEventListener('click', () => {
      tempPortalSelectedMember.isCheckedIn = !tempPortalSelectedMember.isCheckedIn;
      renderMemberPortalUI();
      showToast(tempPortalSelectedMember.isCheckedIn ? `✓ ${tempPortalSelectedMember.name} checked in!` : 'Check-in pending');
    });
  }

  // Daily Ledger Modal Handlers
  if (btnHeaderLedger) {
    btnHeaderLedger.addEventListener('click', () => {
      if (registerLedgerModal) {
        renderLedgerUI();
        registerLedgerModal.style.display = 'flex';
      }
    });
  }

  if (btnCloseLedger) {
    btnCloseLedger.addEventListener('click', () => {
      if (registerLedgerModal) registerLedgerModal.style.display = 'none';
    });
  }

  if (registerLedgerModal) {
    registerLedgerModal.addEventListener('click', (e) => {
      if (e.target === registerLedgerModal) registerLedgerModal.style.display = 'none';
    });
  }

  if (btnExportLedgerCsv) {
    btnExportLedgerCsv.addEventListener('click', () => {
      exportLedgerCsv();
    });
  }

  if (btnResetLedger) {
    btnResetLedger.addEventListener('click', () => {
      if (confirm("Reset today's register ledger? All current transactions will be cleared.")) {
        registerLedger = [];
        saveLedger();
        renderLedgerUI();
        showToast("Register ledger reset for a new shift");
      }
    });
  }

  // Success Receipt Modal Handlers
  if (btnPrintReceipt) {
    btnPrintReceipt.addEventListener('click', () => {
      window.print();
    });
  }

  if (btnCloseSuccess) {
    btnCloseSuccess.addEventListener('click', () => {
      if (checkoutSuccessModal) checkoutSuccessModal.style.display = 'none';
    });
  }

  if (checkoutSuccessModal) {
    checkoutSuccessModal.addEventListener('click', (e) => {
      if (e.target === checkoutSuccessModal) checkoutSuccessModal.style.display = 'none';
    });
  }

  if (btnHeaderPos) {
    btnHeaderPos.addEventListener('click', (e) => {
      e.preventDefault();
      openMomenceWebApp(generateMomencePosUrl(null, activePosCustomer));
    });
  }

  // Universal Moments click interceptor: ensures all Moments links open the web app
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (href.startsWith('momence://')) {
      e.preventDefault();
      const path = href.replace('momence://', '');
      openMomenceWebApp(`https://momence.com/${path}`);
    } else if (href.includes('momence.com/') && anchor.getAttribute('target') !== '_blank') {
      e.preventDefault();
      openMomenceWebApp(href);
    }
  });

  // Force Catalog Sync & Purge Caches Button
  const btnSyncCatalog = document.getElementById('btn-sync-catalog');
  if (btnSyncCatalog) {
    btnSyncCatalog.addEventListener('click', async () => {
      showToast('🔄 Purging cache & fetching latest catalog...');
      btnSyncCatalog.style.opacity = '0.5';
      btnSyncCatalog.style.pointerEvents = 'none';

      try {
        if ('caches' in window) {
          const keys = await caches.keys();
          await Promise.all(keys.map((k) => caches.delete(k)));
        }
        if ('serviceWorker' in navigator) {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            await reg.unregister();
          }
        }
        showToast('✅ Fresh catalog loaded!');
        setTimeout(() => {
          window.location.reload(true);
        }, 300);
      } catch (err) {
        console.error('Catalog sync error:', err);
        window.location.reload(true);
      }
    });
  }

  // Service Worker Registration for PWA with auto-update
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then((reg) => {
        console.log('PWA ServiceWorker registered:', reg.scope);
        reg.update();

        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('New catalog version available, reloading...');
                window.location.reload();
              }
            };
          }
        };
      }).catch((err) => {
        console.warn('PWA ServiceWorker failed:', err);
      });
    });

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        navigator.serviceWorker.getRegistration().then((reg) => {
          if (reg) reg.update();
        });
      }
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  }

  // --- APP INITIALIZATION ---
  async function init() {
    updateHeaderMemberPill();
    populateBrandFilter();
    loadHistory();
    updateFavoritesUI();
    renderCatalog();
    renderCartUI();
    updateMembershipPrices('6');
    if (activeTab === 'scanner') {
      startCamera();
    }
    await initNeuralVision();
  }

  init();

})();

