/**
 * The Practice Cafe • Custom 1-Click Beverage Ordering Widget Logic
 * Location: 190 Richmond St E, Toronto, ON M5A 1P1
 * Momence Host ID: 200431
 */

const CAFE_MENU = [
  // 1. ARTISAN COFFEE & ESPRESSO BAR
  {
    id: 513541,
    name: 'Artisan Americano',
    category: 'coffee',
    price: 4.00,
    pitch: 'Rich double espresso over hot filtered spring water.',
    img: './assets/images/americano.jpg',
    badge: 'Organic Espresso',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 0.50 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 513549,
    name: 'Caffe Latte',
    category: 'coffee',
    price: 5.50,
    pitch: 'Silky microfoam poured over rich double espresso.',
    img: './assets/images/latte.jpg',
    badge: 'House Favorite',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 0.75 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 513546,
    name: 'Cortado (1:1 Ratio)',
    category: 'coffee',
    price: 4.75,
    pitch: 'Equal parts velvety steamed milk and rich espresso.',
    img: './assets/images/cortado.jpg',
    badge: 'Artisan Pour',
    availableSizes: ['Standard (4.5oz)'],
    sizePrices: { 'Standard (4.5oz)': 0 },
    supportsMilk: true,
    supportsTemp: false
  },
  {
    id: 513549,
    name: 'Flat White',
    category: 'coffee',
    price: 5.00,
    pitch: 'Ristretto espresso shots crowned with micro-textured milk.',
    img: './assets/images/flatwhite.jpg',
    badge: 'Micro-Textured',
    availableSizes: ['Standard (6oz)'],
    sizePrices: { 'Standard (6oz)': 0 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 513549,
    name: 'Classic Cappuccino',
    category: 'coffee',
    price: 5.00,
    pitch: 'Deep espresso harmonized with lush, aerated foam.',
    img: './assets/images/cappuccino.jpg',
    badge: 'Traditional',
    availableSizes: ['Standard (6oz)'],
    sizePrices: { 'Standard (6oz)': 0 },
    supportsMilk: true,
    supportsTemp: false
  },
  {
    id: 548481,
    name: 'Slow-Steeped Cold Brew',
    category: 'coffee',
    price: 5.50,
    pitch: '20-hour steeped single-origin roast, naturally sweet and low-acid.',
    img: './assets/images/americano.jpg',
    badge: '20hr Steep',
    availableSizes: ['Regular (16oz)'],
    sizePrices: { 'Regular (16oz)': 0 },
    supportsMilk: true,
    supportsTemp: false,
    defaultTemp: 'Iced'
  },

  // 2. WELLNESS LATTES & CEREMONIAL ELIXIRS
  {
    id: 548479,
    name: 'Ceremonial Grade Matcha Latte',
    category: 'wellness',
    price: 7.50,
    pitch: 'Stone-ground Uji ceremonial matcha whisked with warm botanical milk.',
    img: './assets/images/matcha.jpg',
    badge: 'Antioxidant Rich',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 0.75 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 548476,
    name: 'Ceremonial Heirloom Cacao',
    category: 'wellness',
    price: 7.50,
    pitch: 'Single-origin pure ceremonial cacao infused with gentle spices and dates.',
    img: './assets/images/cacao.jpg',
    badge: 'Heart-Opening',
    availableSizes: ['Regular (12oz)'],
    sizePrices: { 'Regular (12oz)': 0 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 548479,
    name: 'Artisan Masala Chai Latte',
    category: 'wellness',
    price: 6.50,
    pitch: 'Slow-simmered whole spices, organic black tea, and velvety steamed milk.',
    img: './assets/images/chailatte.jpg',
    badge: 'Slow Brewed',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 0.75 },
    supportsMilk: true,
    supportsTemp: true
  },

  // 3. FUNCTIONAL SUPERFOOD SMOOTHIES (REGULAR SIZE ONLY)
  {
    id: 545880,
    name: 'Berry Balance Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Almond milk, wild blueberries, strawberries, banana, and adaptogens.',
    img: './assets/images/smoothie_berry.jpg',
    badge: 'Regular (16oz)',
    availableSizes: ['Regular (16oz)'],
    sizePrices: { 'Regular (16oz)': 0 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  },
  {
    id: 545878,
    name: 'Grounding Greens Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Almond milk, crisp spinach, organic kale, green apple, chia seeds, and banana.',
    img: './assets/images/smoothie_greens.jpg',
    badge: 'Regular (16oz)',
    availableSizes: ['Regular (16oz)'],
    sizePrices: { 'Regular (16oz)': 0 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  },
  {
    id: 545879,
    name: 'Nutty Namaste Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Oat milk, banana, natural peanut & almond butter, maca root, and cacao nibs.',
    img: './assets/images/smoothie_nutty.jpg',
    badge: 'Regular (16oz)',
    availableSizes: ['Regular (16oz)'],
    sizePrices: { 'Regular (16oz)': 0 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  },
  {
    id: 545881,
    name: 'Tropical Tantra Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Coconut water, ripe mango, sweet pineapple, passionfruit, lucuma, and fresh ginger.',
    img: './assets/images/smoothie_tropical.jpg',
    badge: 'Regular (16oz)',
    availableSizes: ['Regular (16oz)'],
    sizePrices: { 'Regular (16oz)': 0 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  }
];

// MODIFIERS & ADD-ONS (Linked to Momence Inventory IDs)
const MODIFIERS_CONFIG = {
  milks: [
    { id: 'whole', name: 'Whole Dairy Milk', price: 0.00, momenceId: null },
    { id: 'oat', name: 'Organic Oat Milk (Oatly)', price: 1.00, momenceId: 567963 },
    { id: 'almond', name: 'House Nut Almond Milk', price: 1.00, momenceId: 567964 },
    { id: 'coconut', name: 'Organic Coconut Milk', price: 1.00, momenceId: null }
  ],
  syrups: [
    { id: 'none', name: 'No Sweetener (Unsweetened)', price: 0.00 },
    { id: 'vanilla', name: 'Madagascar Vanilla Syrup', price: 0.75 },
    { id: 'caramel', name: 'House Salted Caramel Syrup', price: 0.75 },
    { id: 'lavender', name: 'Wild Lavender Botanical Syrup', price: 0.75 },
    { id: 'maple', name: 'Pure Grade A Canadian Maple', price: 0.75 }
  ],
  boosters: [
    { id: 'collagen', name: 'Grass-Fed Collagen Peptides', price: 2.50, momenceId: 545887, pitch: 'Supports joints, skin elasticity & tissue repair' },
    { id: 'mct', name: 'Pure C8 MCT Oil', price: 2.50, momenceId: 545886, pitch: 'Sustained ketogenic mental clarity & metabolic energy' },
    { id: 'protein', name: 'Organic Vegan Plant Protein', price: 2.50, momenceId: 545884, pitch: '15g clean pea & brown rice protein isolate' },
    { id: 'shot', name: 'Extra Espresso Shot', price: 1.50, momenceId: 513574, pitch: 'Extra double shot of artisan espresso' },
    { id: 'seamoss', name: 'Wildcrafted Irish Sea Moss Gel', price: 2.00, momenceId: null, pitch: 'Rich in 92 essential minerals & iodine' },
    { id: 'chia', name: 'Organic Chia Seeds', price: 1.00, momenceId: null, pitch: 'Omega-3s, soluble fiber & sustained hydration' }
  ]
};

// CART STATE
let cart = [];
let activeItemForCustomization = null;

// DOM READY
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  setupCategoryTabs();
  setupCartDrawer();
});

// CATEGORY TABS
function setupCategoryTabs() {
  const tabs = document.querySelectorAll('.cat-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.cat);
    });
  });
}

// RENDER MENU
function renderMenu(category) {
  const grid = document.getElementById('menu-grid');
  grid.innerHTML = '';

  const items = category === 'all' 
    ? CAFE_MENU 
    : CAFE_MENU.filter(i => i.category === category);

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <div class="card-top">
        <div class="card-image-wrap">
          <img src="${item.img}" alt="${item.name}" onerror="this.src='./assets/images/americano.jpg'">
        </div>
        <div class="card-info">
          <div class="card-badges">
            <span class="mini-badge">${item.badge}</span>
          </div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.pitch}</p>
        </div>
      </div>
      <div class="card-bottom">
        <div>
          <span class="card-price">$${item.price.toFixed(2)}</span>
          <span class="card-size-note">${item.isSmoothie ? '• 16oz Regular' : ''}</span>
        </div>
        <button class="btn-customize" onclick="openCustomizer(${item.id})">
          <span>Customize & Add</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// OPEN CUSTOMIZER MODAL
function openCustomizer(itemId) {
  const item = CAFE_MENU.find(i => i.id === itemId);
  if (!item) return;

  activeItemForCustomization = {
    baseItem: item,
    selectedSize: item.availableSizes[0],
    selectedTemp: item.defaultTemp || 'Hot',
    selectedMilk: MODIFIERS_CONFIG.milks[0].id,
    selectedSyrup: 'none',
    selectedBoosters: [],
    specialNotes: ''
  };

  const modal = document.getElementById('customizer-modal');
  document.getElementById('modal-item-name').innerText = item.name;
  document.getElementById('modal-item-desc').innerText = item.pitch;

  // SIZE SECTION
  const sizeSection = document.getElementById('modal-size-section');
  if (item.availableSizes.length > 1) {
    sizeSection.style.display = 'block';
    const sizeContainer = document.getElementById('modal-size-options');
    sizeContainer.innerHTML = item.availableSizes.map((s, idx) => `
      <label class="option-pill-label">
        <input type="radio" name="item_size" value="${s}" ${idx === 0 ? 'checked' : ''} onchange="onSizeChanged('${s}')">
        <div class="option-pill">
          <span class="option-pill-name">${s}</span>
          <span class="option-pill-price">${item.sizePrices[s] > 0 ? `+$${item.sizePrices[s].toFixed(2)}` : 'Included'}</span>
        </div>
      </label>
    `).join('');
  } else {
    sizeSection.style.display = 'none';
  }

  // TEMP SECTION
  const tempSection = document.getElementById('modal-temp-section');
  if (item.supportsTemp) {
    tempSection.style.display = 'block';
    const tempContainer = document.getElementById('modal-temp-options');
    tempContainer.innerHTML = `
      <label class="option-pill-label">
        <input type="radio" name="item_temp" value="Hot" checked onchange="onTempChanged('Hot')">
        <div class="option-pill"><span class="option-pill-name">Hot 🔥</span></div>
      </label>
      <label class="option-pill-label">
        <input type="radio" name="item_temp" value="Iced" onchange="onTempChanged('Iced')">
        <div class="option-pill"><span class="option-pill-name">Iced ❄️</span></div>
      </label>
    `;
  } else {
    tempSection.style.display = 'none';
  }

  // MILK SECTION
  const milkSection = document.getElementById('modal-milk-section');
  if (item.supportsMilk) {
    milkSection.style.display = 'block';
    const milkContainer = document.getElementById('modal-milk-options');
    milkContainer.innerHTML = MODIFIERS_CONFIG.milks.map((m, idx) => `
      <label class="option-pill-label">
        <input type="radio" name="item_milk" value="${m.id}" ${idx === 0 ? 'checked' : ''} onchange="onMilkChanged('${m.id}')">
        <div class="option-pill">
          <span class="option-pill-name">${m.name}</span>
          <span class="option-pill-price">${m.price > 0 ? `+$${m.price.toFixed(2)}` : 'Included'}</span>
        </div>
      </label>
    `).join('');
  } else {
    milkSection.style.display = 'none';
  }

  // SYRUP SECTION
  const syrupSection = document.getElementById('modal-syrup-section');
  if (!item.isSmoothie) {
    syrupSection.style.display = 'block';
    const syrupContainer = document.getElementById('modal-syrup-options');
    syrupContainer.innerHTML = MODIFIERS_CONFIG.syrups.map((s, idx) => `
      <label class="option-pill-label">
        <input type="radio" name="item_syrup" value="${s.id}" ${idx === 0 ? 'checked' : ''} onchange="onSyrupChanged('${s.id}')">
        <div class="option-pill">
          <span class="option-pill-name">${s.name}</span>
          <span class="option-pill-price">${s.price > 0 ? `+$${s.price.toFixed(2)}` : 'Included'}</span>
        </div>
      </label>
    `).join('');
  } else {
    syrupSection.style.display = 'none';
  }

  // BOOSTERS SECTION
  const boosterContainer = document.getElementById('modal-booster-options');
  boosterContainer.innerHTML = MODIFIERS_CONFIG.boosters.map(b => `
    <label class="modifier-row">
      <input type="checkbox" value="${b.id}" onchange="onBoosterToggled('${b.id}', this.checked)">
      <div class="modifier-info">
        <div class="modifier-name">${b.name}</div>
        <div class="modifier-pitch">${b.pitch}</div>
      </div>
      <div class="modifier-price">+$${b.price.toFixed(2)}</div>
    </label>
  `).join('');

  document.getElementById('modal-special-notes').value = '';
  updateModalTotal();
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('customizer-modal').classList.remove('active');
}

// OPTION CHANGE HANDLERS
function onSizeChanged(size) {
  activeItemForCustomization.selectedSize = size;
  updateModalTotal();
}
function onTempChanged(temp) {
  activeItemForCustomization.selectedTemp = temp;
}
function onMilkChanged(milkId) {
  activeItemForCustomization.selectedMilk = milkId;
  updateModalTotal();
}
function onSyrupChanged(syrupId) {
  activeItemForCustomization.selectedSyrup = syrupId;
  updateModalTotal();
}
function onBoosterToggled(boosterId, isChecked) {
  if (isChecked) {
    if (!activeItemForCustomization.selectedBoosters.includes(boosterId)) {
      activeItemForCustomization.selectedBoosters.push(boosterId);
    }
  } else {
    activeItemForCustomization.selectedBoosters = activeItemForCustomization.selectedBoosters.filter(b => b !== boosterId);
  }
  updateModalTotal();
}

// CALCULATE ITEM TOTAL
function calculateItemTotal() {
  if (!activeItemForCustomization) return 0;
  const base = activeItemForCustomization.baseItem;
  let total = base.price;

  // Size
  if (base.sizePrices && base.sizePrices[activeItemForCustomization.selectedSize]) {
    total += base.sizePrices[activeItemForCustomization.selectedSize];
  }

  // Milk
  if (base.supportsMilk) {
    const milk = MODIFIERS_CONFIG.milks.find(m => m.id === activeItemForCustomization.selectedMilk);
    if (milk) total += milk.price;
  }

  // Syrup
  if (!base.isSmoothie) {
    const syrup = MODIFIERS_CONFIG.syrups.find(s => s.id === activeItemForCustomization.selectedSyrup);
    if (syrup) total += syrup.price;
  }

  // Boosters
  activeItemForCustomization.selectedBoosters.forEach(bId => {
    const boost = MODIFIERS_CONFIG.boosters.find(b => b.id === bId);
    if (boost) total += boost.price;
  });

  return total;
}

function updateModalTotal() {
  const total = calculateItemTotal();
  document.getElementById('modal-price-display').innerText = `$${total.toFixed(2)}`;
}

// ADD CONFIG TO CART
function addConfiguredItemToCart() {
  if (!activeItemForCustomization) return;
  activeItemForCustomization.specialNotes = document.getElementById('modal-special-notes').value.trim();
  
  const unitPrice = calculateItemTotal();
  const summaryParts = [];

  if (activeItemForCustomization.baseItem.availableSizes.length > 1) {
    summaryParts.push(activeItemForCustomization.selectedSize);
  }
  if (activeItemForCustomization.baseItem.supportsTemp) {
    summaryParts.push(activeItemForCustomization.selectedTemp);
  }
  if (activeItemForCustomization.baseItem.supportsMilk) {
    const m = MODIFIERS_CONFIG.milks.find(milk => milk.id === activeItemForCustomization.selectedMilk);
    if (m && m.id !== 'whole') summaryParts.push(m.name);
  }
  if (!activeItemForCustomization.baseItem.isSmoothie && activeItemForCustomization.selectedSyrup !== 'none') {
    const s = MODIFIERS_CONFIG.syrups.find(syr => syr.id === activeItemForCustomization.selectedSyrup);
    if (s) summaryParts.push(s.name);
  }
  activeItemForCustomization.selectedBoosters.forEach(bId => {
    const b = MODIFIERS_CONFIG.boosters.find(boost => boost.id === bId);
    if (b) summaryParts.push(`+ ${b.name}`);
  });
  if (activeItemForCustomization.specialNotes) {
    summaryParts.push(`Note: "${activeItemForCustomization.specialNotes}"`);
  }

  // Bundle mapping for Momence checkout
  const momenceLineItems = [
    { productId: activeItemForCustomization.baseItem.id, quantity: 1, name: activeItemForCustomization.baseItem.name }
  ];
  if (activeItemForCustomization.baseItem.supportsMilk) {
    const m = MODIFIERS_CONFIG.milks.find(milk => milk.id === activeItemForCustomization.selectedMilk);
    if (m && m.momenceId) {
      momenceLineItems.push({ productId: m.momenceId, quantity: 1, name: m.name });
    }
  }
  activeItemForCustomization.selectedBoosters.forEach(bId => {
    const b = MODIFIERS_CONFIG.boosters.find(boost => boost.id === bId);
    if (b && b.momenceId) {
      momenceLineItems.push({ productId: b.momenceId, quantity: 1, name: b.name });
    }
  });

  cart.push({
    id: Date.now(),
    name: activeItemForCustomization.baseItem.name,
    unitPrice: unitPrice,
    quantity: 1,
    customizationSummary: summaryParts.join(' • '),
    momenceLineItems: momenceLineItems,
    notes: activeItemForCustomization.specialNotes
  });

  closeModal();
  updateCartUI();
  openCartDrawer();
}

// CART DRAWER LOGIC
function setupCartDrawer() {
  document.getElementById('cart-drawer-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'cart-drawer-overlay') closeCartDrawer();
  });
}

function openCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer-overlay').classList.remove('active');
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const stickyBar = document.getElementById('sticky-order-bar');
  const drawerItems = document.getElementById('drawer-items-list');

  const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);
  badge.innerText = totalCount;

  if (totalCount > 0) {
    stickyBar.style.display = 'block';
  } else {
    stickyBar.style.display = 'none';
  }

  // Subtotal calculation
  const subtotal = cart.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);
  const tax = subtotal * 0.13;
  const grandTotal = subtotal + tax;

  document.getElementById('sticky-subtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('drawer-subtotal').innerText = `$${subtotal.toFixed(2)}`;
  document.getElementById('drawer-tax').innerText = `$${tax.toFixed(2)}`;
  document.getElementById('drawer-grand-total').innerText = `$${grandTotal.toFixed(2)}`;

  if (cart.length === 0) {
    drawerItems.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 40px 0;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 8px;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        <p>Your order is currently empty.</p>
      </div>
    `;
    return;
  }

  drawerItems.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <div class="cart-item-title-row">
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">$${(item.unitPrice * item.quantity).toFixed(2)}</span>
      </div>
      <div class="cart-item-mods">${item.customizationSummary || 'Standard'}</div>
      <div class="cart-item-actions">
        <div class="qty-control">
          <button class="qty-btn" onclick="adjustQty(${item.id}, -1)">−</button>
          <span style="font-size: 13px; font-weight: 600;">${item.quantity}</span>
          <button class="qty-btn" onclick="adjustQty(${item.id}, 1)">+</button>
        </div>
        <button class="btn-remove-item" onclick="removeCartItem(${item.id})">Remove</button>
      </div>
    </div>
  `).join('');
}

function adjustQty(cartItemId, delta) {
  const item = cart.find(i => i.id === cartItemId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== cartItemId);
  }
  updateCartUI();
}

function removeCartItem(cartItemId) {
  cart = cart.filter(i => i.id !== cartItemId);
  updateCartUI();
}

// 1-CLICK MOMENCE CHECKOUT BUNDLE GENERATION
function executeMomenceCheckout() {
  if (cart.length === 0) return;

  // Flatten all items into Momence cart payload
  const bundledMomenceItems = [];
  const orderNotesSummary = [];

  cart.forEach(item => {
    item.momenceLineItems.forEach(line => {
      bundledMomenceItems.push({
        productId: line.productId,
        quantity: line.quantity * item.quantity,
        note: `Custom drink: ${item.name} (${item.customizationSummary})`
      });
    });
    orderNotesSummary.push(`${item.quantity}x ${item.name} [${item.customizationSummary}]`);
  });

  // Display the 1-Click Bundle Modal showing live integration payload
  const codeModal = document.getElementById('code-embed-modal');
  document.getElementById('bundle-payload-code').innerText = JSON.stringify({
    studio: 'The Practice Toronto',
    hostId: 200431,
    fulfillment: 'IN_STORE_PICKUP_ONLY',
    location: '190 Richmond St E, Toronto, ON M5A 1P1',
    orderSummary: orderNotesSummary,
    momenceCartBundle: bundledMomenceItems,
    checkoutActionUrl: `https://momence.com/The-Practice-Inc/products/200431?bundle=${encodeURIComponent(JSON.stringify(bundledMomenceItems))}`
  }, null, 2);

  codeModal.classList.add('active');
}

function closeCodeModal() {
  document.getElementById('code-embed-modal').classList.remove('active');
}
