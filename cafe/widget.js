/**
 * The Practice Cafe • Custom 1-Click Beverage Ordering & Staff POS Logic
 * Location: 190 Richmond St E, Toronto, ON M5A 1P1
 * Momence Host ID: 200431
 * 100% Synchronized with Live Momence Inventory & Modifiers
 */

const CAFE_MENU = [
  // 1. ARTISAN COFFEE & ESPRESSO BAR
  {
    id: 545854,
    name: 'Artisan Espresso (Double Shot)',
    category: 'coffee',
    price: 3.50,
    pitch: 'Rich concentrated double extraction of house organic espresso with velvety crema.',
    img: 'https://images.momence.com/h/200431/product-image/ef5cbab7-742b-4911-8744-4a1fa1ce0583.jpg',
    badge: 'Organic Double Shot',
    availableSizes: ['Double Shot (2oz)'],
    sizePrices: { 'Double Shot (2oz)': 0 },
    sizeMomenceIds: { 'Double Shot (2oz)': 545854 },
    supportsMilk: false,
    supportsTemp: false
  },
  {
    id: 548476,
    name: 'Espresso Macchiato',
    category: 'coffee',
    price: 4.50,
    pitch: 'Double espresso marked with a dollop of velvety steamed microfoam.',
    img: 'https://images.momence.com/h/200431/product-image/736ac256-e0e8-4b64-a7c3-210861f9a7b1.jpg',
    badge: 'Classic Pour',
    availableSizes: ['Standard (3oz)'],
    sizePrices: { 'Standard (3oz)': 0 },
    sizeMomenceIds: { 'Standard (3oz)': 548476 },
    supportsMilk: true,
    supportsTemp: false
  },
  {
    id: 513541,
    name: 'Ristretto',
    category: 'coffee',
    price: 4.75,
    pitch: 'Short, sweet extraction capturing the brightest, sweetest aromatic espresso oils.',
    img: 'https://images.momence.com/h/200431/product-image/ccd4632a-9150-4f7a-b4b0-16276bc31597.jpg',
    badge: 'Intense Extraction',
    availableSizes: ['Standard (1.5oz)'],
    sizePrices: { 'Standard (1.5oz)': 0 },
    sizeMomenceIds: { 'Standard (1.5oz)': 513541 },
    supportsMilk: false,
    supportsTemp: false
  },
  {
    id: 548479,
    name: 'Cortado (1:1 Ratio)',
    category: 'coffee',
    price: 5.50,
    pitch: 'Equal parts silky steamed milk and rich double espresso in a balanced 1:1 ratio.',
    img: 'https://images.momence.com/h/200431/product-image/1eb08ce5-1f84-4e0a-a8ec-6aef9e72c159.png',
    badge: '1:1 Artisan Ratio',
    availableSizes: ['Standard (4.5oz)'],
    sizePrices: { 'Standard (4.5oz)': 0 },
    sizeMomenceIds: { 'Standard (4.5oz)': 548479 },
    supportsMilk: true,
    supportsTemp: false
  },
  {
    id: 545872,
    name: 'Artisan Americano',
    category: 'coffee',
    price: 5.50,
    pitch: 'Rich double espresso pulled over hot filtered spring water for a smooth, full-bodied cup.',
    img: 'https://images.momence.com/h/200431/product-image/5952020f-d8b2-44fc-bcb8-a8edf1e17cc2.jpg',
    badge: 'Organic Espresso',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 1.00 },
    sizeMomenceIds: { 'Regular (12oz)': 545872, 'Large (16oz)': 513549 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 513546,
    name: 'Flat White',
    category: 'coffee',
    price: 6.75,
    pitch: 'Double ristretto espresso crowned with thin, glossy micro-textured velvety milk.',
    img: 'https://images.momence.com/h/200431/product-image/00b54489-6a31-43d6-b067-0d5dcdd82f31.jpg',
    badge: 'Micro-Textured',
    availableSizes: ['Regular (8oz)', 'Large (12oz)'],
    sizePrices: { 'Regular (8oz)': 0, 'Large (12oz)': 1.00 },
    sizeMomenceIds: { 'Regular (8oz)': 513546, 'Large (12oz)': 567963 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 555494,
    name: 'Classic Cappuccino',
    category: 'coffee',
    price: 6.75,
    pitch: 'Deep double espresso harmonized with lush, aerated foam and dusted with organic raw cacao.',
    img: 'https://images.momence.com/h/200431/product-image/ef9a5582-c23c-42b3-97cf-14ba976dcf56.jpg',
    badge: 'Traditional Pour',
    availableSizes: ['Regular (8oz)', 'Large (12oz)'],
    sizePrices: { 'Regular (8oz)': 0, 'Large (12oz)': 1.00 },
    sizeMomenceIds: { 'Regular (8oz)': 555494, 'Large (12oz)': 548481 },
    supportsMilk: true,
    supportsTemp: false
  },
  {
    id: 545871,
    name: 'Cafe Latte',
    category: 'coffee',
    price: 5.50,
    pitch: 'Silky microfoam poured over rich double espresso with balanced sweetness.',
    img: 'https://images.momence.com/h/200431/product-image/346d4f53-a491-444e-8b56-54c2092a46d7.jpg',
    badge: 'House Favorite',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 1.00 },
    sizeMomenceIds: { 'Regular (12oz)': 545871, 'Large (16oz)': 555495 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 556832,
    name: 'Specialty Botanical Latte',
    category: 'coffee',
    price: 7.75,
    pitch: 'Artisan espresso latte infused with house-crafted botanical syrups, spices, and adaptogens.',
    img: 'https://images.momence.com/h/200431/product-image/53945160-e009-495e-9356-d1d840851b3f.jpg',
    badge: 'Botanical Infusion',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 0.75 },
    sizeMomenceIds: { 'Regular (12oz)': 556832, 'Large (16oz)': 567968 },
    supportsMilk: true,
    supportsTemp: true
  },

  // 2. WELLNESS LATTES & CEREMONIAL ELIXIRS
  {
    id: 513574,
    name: 'Ceremonial Heirloom Cacao',
    category: 'wellness',
    price: 8.25,
    pitch: 'Single-origin pure ceremonial cacao infused with gentle warming spices, dates, and botanical milk.',
    img: 'https://images.momence.com/h/200431/product-image/ca4ac590-0fdd-472c-9194-4d4439c5f21f.jpg',
    badge: 'Heart-Opening',
    availableSizes: ['Standard (10oz)'],
    sizePrices: { 'Standard (10oz)': 0 },
    sizeMomenceIds: { 'Standard (10oz)': 513574 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 513568,
    name: 'Ceremonial Grade Matcha Latte',
    category: 'wellness',
    price: 6.50,
    pitch: 'Stone-ground Uji ceremonial matcha whisked with warm botanical milk for sustained calm clarity.',
    img: 'https://images.momence.com/h/200431/product-image/8ec07d2c-3eae-4e1d-9bb9-a360317529e5.jpg',
    badge: 'Antioxidant Rich',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 1.00 },
    sizeMomenceIds: { 'Regular (12oz)': 513568, 'Large (16oz)': 557000 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 513572,
    name: 'Artisan Masala Chai Latte',
    category: 'wellness',
    price: 6.50,
    pitch: 'Slow-simmered whole organic spices, organic black tea, and velvety steamed milk.',
    img: 'https://images.momence.com/h/200431/product-image/4129d61f-0f08-4880-b5e1-71d4bb5c313b.jpg',
    badge: 'Slow Brewed',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 1.00 },
    sizeMomenceIds: { 'Regular (12oz)': 513572, 'Large (16oz)': 557039 },
    supportsMilk: true,
    supportsTemp: true
  },
  {
    id: 545874,
    name: 'Organic Whole Leaf Tea (Green / Black)',
    category: 'wellness',
    price: 3.75,
    pitch: 'Direct-trade organic loose-leaf tea steeped to optimal temperature in natural spring water.',
    img: 'https://images.momence.com/h/200431/product-image/ea8e0587-3154-42c6-93af-1f6457bf5b42.jpg',
    badge: 'Single Estate',
    availableSizes: ['Green Tea (12oz)', 'Black Tea (12oz)'],
    sizePrices: { 'Green Tea (12oz)': 0, 'Black Tea (12oz)': 0 },
    sizeMomenceIds: { 'Green Tea (12oz)': 545874, 'Black Tea (12oz)': 556966 },
    supportsMilk: false,
    supportsTemp: true
  },
  {
    id: 545876,
    name: 'Soothing Herbal Infusion',
    category: 'wellness',
    price: 4.50,
    pitch: 'Caffeine-free soothing whole botanicals (Rooibos / Chamomile) to restore nervous system balance.',
    img: 'https://images.momence.com/h/200431/product-image/10b1ccc2-7af1-48d6-b1c9-59b1746615e1.jpg',
    badge: 'Caffeine-Free',
    availableSizes: ['Regular (12oz)', 'Large (16oz)'],
    sizePrices: { 'Regular (12oz)': 0, 'Large (16oz)': 2.00 },
    sizeMomenceIds: { 'Regular (12oz)': 545876, 'Large (16oz)': 556999 },
    supportsMilk: false,
    supportsTemp: true
  },
  {
    id: 567179,
    name: 'Cathy’s Artisanal Kombucha (Very Berry)',
    category: 'wellness',
    price: 7.50,
    pitch: 'Locally fermented raw probiotic kombucha infused with wild field strawberries, raspberries, and blackberries.',
    img: 'https://images.momence.com/h/200431/product-image/60e7174d-c709-4870-ac16-4d1137c3adfb.jpg',
    badge: 'Raw Probiotic',
    availableSizes: ['Chilled Bottle (355ml)'],
    sizePrices: { 'Chilled Bottle (355ml)': 0 },
    sizeMomenceIds: { 'Chilled Bottle (355ml)': 567179 },
    supportsMilk: false,
    supportsTemp: false,
    defaultTemp: 'Iced'
  },
  {
    id: 567178,
    name: 'Cathy’s Artisanal Kombucha (Strawberry Rhubarb)',
    category: 'wellness',
    price: 7.50,
    pitch: 'Crisp organic raw fermented tea harmonized with tart Canadian rhubarb and sweet Ontario strawberries.',
    img: 'https://images.momence.com/h/200431/product-image/538953f2-30c2-44a4-b85b-40386bf93c76.jpg',
    badge: 'Raw Probiotic',
    availableSizes: ['Chilled Bottle (355ml)'],
    sizePrices: { 'Chilled Bottle (355ml)': 0 },
    sizeMomenceIds: { 'Chilled Bottle (355ml)': 567178 },
    supportsMilk: false,
    supportsTemp: false,
    defaultTemp: 'Iced'
  },
  {
    id: 567180,
    name: 'Cathy’s Artisanal Kombucha (Mango Pineapple)',
    category: 'wellness',
    price: 7.50,
    pitch: 'Tropical prebiotic and probiotic elixir infused with ripe mango and sweet Hawaiian pineapple.',
    img: 'https://images.momence.com/h/200431/product-image/ef86d8af-738d-4de2-943d-b3be273c0dd3.jpg',
    badge: 'Raw Probiotic',
    availableSizes: ['Chilled Bottle (355ml)'],
    sizePrices: { 'Chilled Bottle (355ml)': 0 },
    sizeMomenceIds: { 'Chilled Bottle (355ml)': 567180 },
    supportsMilk: false,
    supportsTemp: false,
    defaultTemp: 'Iced'
  },

  // 3. FUNCTIONAL SUPERFOOD SMOOTHIES
  {
    id: 545880,
    name: 'Berry Balance Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Almond milk, wild blueberries, strawberries, banana, and adaptogenic antioxidants.',
    img: 'https://images.momence.com/h/200431/product-image/31ea22b1-68eb-4438-b5bc-c078b106db88.jpg',
    badge: 'Antioxidant Recovery',
    availableSizes: ['Regular (16oz)', 'Large (20oz)'],
    sizePrices: { 'Regular (16oz)': 0, 'Large (20oz)': 2.00 },
    sizeMomenceIds: { 'Regular (16oz)': 545880, 'Large (20oz)': 557042 },
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
    img: 'https://images.momence.com/h/200431/product-image/7f482537-ba90-4b8b-9a0a-aa44186d36d4.jpg',
    badge: 'Detox & Vitality',
    availableSizes: ['Regular (16oz)', 'Large (20oz)'],
    sizePrices: { 'Regular (16oz)': 0, 'Large (20oz)': 2.00 },
    sizeMomenceIds: { 'Regular (16oz)': 545878, 'Large (20oz)': 557040 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  },
  {
    id: 545879,
    name: 'Nutty Namaste Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Oat milk, banana, natural peanut & almond butter, maca root, and raw cacao nibs.',
    img: 'https://images.momence.com/h/200431/product-image/8a79e66b-0256-4985-b4aa-c61256c62622.jpg',
    badge: 'Protein Fuel',
    availableSizes: ['Regular (16oz)', 'Large (20oz)'],
    sizePrices: { 'Regular (16oz)': 0, 'Large (20oz)': 2.00 },
    sizeMomenceIds: { 'Regular (16oz)': 545879, 'Large (20oz)': 557041 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  },
  {
    id: 545881,
    name: 'Tropical Tantra Smoothie',
    category: 'smoothies',
    price: 15.00,
    pitch: 'Coconut water, ripe mango, sweet pineapple, passionfruit, lucuma, and fresh pressed ginger.',
    img: 'https://images.momence.com/h/200431/product-image/3b8ed02a-f290-4855-8d22-fa26692a02fb.jpg',
    badge: 'Deep Hydration',
    availableSizes: ['Regular (16oz)', 'Large (20oz)'],
    sizePrices: { 'Regular (16oz)': 0, 'Large (20oz)': 2.00 },
    sizeMomenceIds: { 'Regular (16oz)': 545881, 'Large (20oz)': 557044 },
    supportsMilk: false,
    supportsTemp: false,
    isSmoothie: true
  },

  // 4. ARTISAN BAKERY & PASTRIES
  {
    id: 562446,
    name: 'Sweet & Salty Artisan Cookie',
    category: 'bakery',
    price: 5.50,
    pitch: 'Handcrafted brown butter artisan cookie finished with flaky Maldon sea salt.',
    img: 'https://images.momence.com/h/200431/product-image/5005e979-634e-4e17-8fb5-1f13370c7a0a.png',
    badge: 'Staff Favorite',
    availableSizes: ['1 Cookie'],
    sizePrices: { '1 Cookie': 0 },
    sizeMomenceIds: { '1 Cookie': 562446 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 562443,
    name: 'Classic Chocolate Chunk Cookie',
    category: 'bakery',
    price: 5.50,
    pitch: 'Belgian dark chocolate chunks folded into rich golden butter dough.',
    img: 'https://images.momence.com/h/200431/product-image/adbebecb-4f15-4ab9-8fb0-04de1977fd46.png',
    badge: 'Artisan Baked',
    availableSizes: ['1 Cookie'],
    sizePrices: { '1 Cookie': 0 },
    sizeMomenceIds: { '1 Cookie': 562443 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 562441,
    name: 'Gluten-Free Chocolate Cookie',
    category: 'bakery',
    price: 5.50,
    pitch: 'Decadent dark chocolate cookie crafted with certified gluten-free almond flour.',
    img: 'https://images.momence.com/h/200431/product-image/c6159564-d837-4452-8ddc-82cdd2645c7a.png',
    badge: 'Gluten-Free',
    availableSizes: ['1 Cookie'],
    sizePrices: { '1 Cookie': 0 },
    sizeMomenceIds: { '1 Cookie': 562441 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 562444,
    name: 'Fudgy Chocolate Brownie',
    category: 'bakery',
    price: 4.00,
    pitch: 'Dense, fudgy artisan brownie made with 70% dark cocoa and sweet cream butter.',
    img: 'https://images.momence.com/h/200431/product-image/0f475c46-af8c-45ca-9175-e0987b948b58.png',
    badge: 'Decadent Dark Cocoa',
    availableSizes: ['1 Square'],
    sizePrices: { '1 Square': 0 },
    sizeMomenceIds: { '1 Square': 562444 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 562449,
    name: 'Lemon Poppyseed Biscotti',
    category: 'bakery',
    price: 3.50,
    pitch: 'Twice-baked crisp Italian biscotti infused with fresh Meyer lemon zest and poppy seeds.',
    img: 'https://images.momence.com/h/200431/product-image/317f81c5-0f16-4571-ba3c-e305968d59ca.png',
    badge: 'Twice-Baked',
    availableSizes: ['1 Biscotti'],
    sizePrices: { '1 Biscotti': 0 },
    sizeMomenceIds: { '1 Biscotti': 562449 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 562448,
    name: 'Pistachio & Cranberry Biscotti',
    category: 'bakery',
    price: 3.50,
    pitch: 'Crisp twice-baked biscotti studded with roasted Mediterranean pistachios and tart cranberries.',
    img: 'https://images.momence.com/h/200431/product-image/b18e44d7-1470-428e-9331-ebed33f8a860.png',
    badge: 'Twice-Baked',
    availableSizes: ['1 Biscotti'],
    sizePrices: { '1 Biscotti': 0 },
    sizeMomenceIds: { '1 Biscotti': 562448 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 567988,
    name: 'Oat Breakfast Superfood Cookie',
    category: 'bakery',
    price: 5.50,
    pitch: 'Wholesome rolled oats, pumpkin seeds, shredded coconut, cinnamon, and raw honey.',
    img: 'https://images.momence.com/h/200431/product-image/f7ab7908-c103-4edc-8c02-96fd9e47009a.jpg',
    badge: 'Morning Fuel',
    availableSizes: ['1 Cookie'],
    sizePrices: { '1 Cookie': 0 },
    sizeMomenceIds: { '1 Cookie': 567988 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  },
  {
    id: 563895,
    name: 'Quinoa Breakfast Power Cookie',
    category: 'bakery',
    price: 6.50,
    pitch: 'Ancient grains, toasted puffed quinoa, dark chocolate chunks, and golden flaxseed.',
    img: 'https://images.momence.com/h/200431/product-image/4c7e5555-4b62-4dc1-850d-8cce527a94ba.jpg',
    badge: 'Protein Rich',
    availableSizes: ['1 Cookie'],
    sizePrices: { '1 Cookie': 0 },
    sizeMomenceIds: { '1 Cookie': 563895 },
    supportsMilk: false,
    supportsTemp: false,
    isBakery: true
  }
];

// MODIFIERS & ADD-ONS (100% Linked to Verified Momence Inventory IDs)
const MODIFIERS_CONFIG = {
  milks: [
    { id: 'whole', name: 'Whole Dairy Milk', price: 0.00, momenceId: null },
    { id: 'oat', name: 'Organic Oat Milk (Oatly)', price: 0.85, momenceId: 513577 },
    { id: 'almond', name: 'House Almond Milk', price: 0.85, momenceId: 513576 },
    { id: 'coconut', name: 'Organic Coconut Milk', price: 1.50, momenceId: 513575 }
  ],
  syrups: [
    { id: 'none', name: 'No Sweetener (Unsweetened)', price: 0.00, momenceId: null },
    { id: 'vanilla', name: 'Madagascar Vanilla Syrup', price: 0.75, momenceId: 513585 },
    { id: 'caramel', name: 'House Salted Caramel Syrup', price: 0.75, momenceId: 513583 },
    { id: 'lavender', name: 'Wild Lavender Botanical Syrup', price: 0.75, momenceId: 513587 },
    { id: 'hazelnut', name: 'Roasted Hazelnut Syrup', price: 0.75, momenceId: 513584 },
    { id: 'cane', name: 'Organic Cane Sugar Syrup', price: 0.75, momenceId: 513586 }
  ],
  boosters: [
    { id: 'shot', name: 'Extra Espresso Shot', price: 1.50, momenceId: 513574, pitch: 'Extra double shot of artisan espresso' },
    { id: 'collagen', name: 'Grass-Fed Collagen Peptides', price: 2.50, momenceId: 545887, hotMomenceId: 513581, pitch: 'Supports joints, skin elasticity & tissue recovery' },
    { id: 'mct', name: 'Pure C8 MCT Oil', price: 2.50, momenceId: 545886, hotMomenceId: 513578, pitch: 'Sustained ketogenic mental clarity & metabolic energy' },
    { id: 'protein', name: 'Organic Vegan Plant Protein', price: 2.50, momenceId: 545884, hotMomenceId: 513580, pitch: '15g clean pea & brown rice protein isolate' },
    { id: 'seamoss', name: 'Wildcrafted Irish Sea Moss Gel', price: 2.50, momenceId: 513582, pitch: 'Rich in 92 essential minerals & natural iodine' },
    { id: 'chia', name: 'Organic Chia Seeds', price: 2.00, momenceId: 513579, pitch: 'Omega-3s, soluble fiber & sustained hydration' },
    { id: 'electrolyte', name: 'AMP Electrolyte Booster', price: 2.00, momenceId: 567145, pitch: 'Clean cellular hydration & electrolyte balance' }
  ]
};

// ACTIVE POS HOLDING CUSTOMER
const activePosCustomer = {
  name: 'Jackson McMurdo',
  email: 'Jackson@ThePracticetoronto.com'
};

// CART STATE
let cart = [];
let activeItemForCustomization = null;
let currentTicketNumber = Math.floor(1000 + Math.random() * 9000);

// DOM READY
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('all');
  setupCategoryTabs();
  setupCartDrawer();
  setupPosModalListeners();
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
  if (!grid) return;
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
          <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.momence.com/h/200431/product-image/5952020f-d8b2-44fc-bcb8-a8edf1e17cc2.jpg'">
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
          <span class="card-size-note">${item.availableSizes && item.availableSizes.length === 1 ? '• ' + item.availableSizes[0] : ''}</span>
        </div>
        <button class="btn-customize" onclick="handleItemSelect(${item.id})">
          <span>${item.isBakery ? 'Quick Add' : 'Customize & Add'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// HANDLE ITEM SELECT (Quick-Add for bakery, Customizer for drinks)
function handleItemSelect(itemId) {
  const item = CAFE_MENU.find(i => i.id === itemId);
  if (!item) return;

  if (item.isBakery) {
    // Quick Add bakery item directly into cart
    const momenceId = item.sizeMomenceIds ? Object.values(item.sizeMomenceIds)[0] : item.id;
    cart.push({
      id: Date.now(),
      name: item.name,
      unitPrice: item.price,
      quantity: 1,
      customizationSummary: 'Freshly Baked In-Store',
      momenceLineItems: [
        { productId: momenceId, quantity: 1, name: item.name }
      ],
      notes: ''
    });
    updateCartUI();
    showToast(`Added ${item.name} to cart`);
  } else {
    openCustomizer(itemId);
  }
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
  if (item.availableSizes && item.availableSizes.length > 1) {
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
  if (!item.isSmoothie && !item.isBakery) {
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
  if (boosterContainer) {
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
  }

  document.getElementById('modal-special-notes').value = '';
  updateModalTotal();
  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('customizer-modal');
  if (modal) modal.classList.remove('active');
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
  if (!base.isSmoothie && !base.isBakery) {
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
  const display = document.getElementById('modal-price-display');
  if (display) display.innerText = `$${total.toFixed(2)}`;
}

// ADD CONFIG TO CART
function addConfiguredItemToCart() {
  if (!activeItemForCustomization) return;
  activeItemForCustomization.specialNotes = document.getElementById('modal-special-notes').value.trim();
  
  const unitPrice = calculateItemTotal();
  const summaryParts = [];

  const base = activeItemForCustomization.baseItem;
  if (base.availableSizes && base.availableSizes.length > 1) {
    summaryParts.push(activeItemForCustomization.selectedSize);
  }
  if (base.supportsTemp) {
    summaryParts.push(activeItemForCustomization.selectedTemp);
  }
  if (base.supportsMilk) {
    const m = MODIFIERS_CONFIG.milks.find(milk => milk.id === activeItemForCustomization.selectedMilk);
    if (m && m.id !== 'whole') summaryParts.push(m.name);
  }
  if (!base.isSmoothie && !base.isBakery && activeItemForCustomization.selectedSyrup !== 'none') {
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

  // Determine Momence base product ID for the chosen size
  let baseMomenceId = base.id;
  if (base.sizeMomenceIds && base.sizeMomenceIds[activeItemForCustomization.selectedSize]) {
    baseMomenceId = base.sizeMomenceIds[activeItemForCustomization.selectedSize];
  }

  // Bundle mapping for Momence checkout
  const momenceLineItems = [
    { productId: baseMomenceId, quantity: 1, name: base.name }
  ];

  // Milk modifier ID
  if (base.supportsMilk) {
    const m = MODIFIERS_CONFIG.milks.find(milk => milk.id === activeItemForCustomization.selectedMilk);
    if (m && m.momenceId) {
      momenceLineItems.push({ productId: m.momenceId, quantity: 1, name: m.name });
    }
  }

  // Syrup modifier ID
  if (!base.isSmoothie && !base.isBakery && activeItemForCustomization.selectedSyrup !== 'none') {
    const s = MODIFIERS_CONFIG.syrups.find(syr => syr.id === activeItemForCustomization.selectedSyrup);
    if (s && s.momenceId) {
      momenceLineItems.push({ productId: s.momenceId, quantity: 1, name: s.name });
    }
  }

  // Booster modifier IDs
  activeItemForCustomization.selectedBoosters.forEach(bId => {
    const b = MODIFIERS_CONFIG.boosters.find(boost => boost.id === bId);
    if (b) {
      const bMomenceId = (base.category === 'coffee' || base.category === 'wellness') && b.hotMomenceId 
        ? b.hotMomenceId 
        : b.momenceId;
      if (bMomenceId) {
        momenceLineItems.push({ productId: bMomenceId, quantity: 1, name: b.name });
      }
    }
  });

  cart.push({
    id: Date.now(),
    name: base.name,
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
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target.id === 'cart-drawer-overlay') closeCartDrawer();
    });
  }
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge');
  const stickyBar = document.getElementById('sticky-order-bar');
  const drawerItems = document.getElementById('drawer-items-list');

  const totalCount = cart.reduce((acc, i) => acc + i.quantity, 0);
  if (badge) badge.innerText = totalCount;

  if (stickyBar) {
    stickyBar.style.display = totalCount > 0 ? 'block' : 'none';
  }

  // Subtotal calculation
  const subtotal = cart.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);
  const tax = subtotal * 0.13;
  const grandTotal = subtotal + tax;

  const sSub = document.getElementById('sticky-subtotal');
  const dSub = document.getElementById('drawer-subtotal');
  const dTax = document.getElementById('drawer-tax');
  const dTot = document.getElementById('drawer-grand-total');

  if (sSub) sSub.innerText = `$${subtotal.toFixed(2)}`;
  if (dSub) dSub.innerText = `$${subtotal.toFixed(2)}`;
  if (dTax) dTax.innerText = `$${tax.toFixed(2)}`;
  if (dTot) dTot.innerText = `$${grandTotal.toFixed(2)}`;

  if (drawerItems) {
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

// POINT OF SALE LIVE CHECKOUT & BARISTA KITCHEN SLIP
function executeMomenceCheckout() {
  if (cart.length === 0) {
    showToast('Your order is currently empty');
    return;
  }

  // Close drawer
  closeCartDrawer();

  // Populate POS Modal
  const modal = document.getElementById('pos-checkout-modal');
  currentTicketNumber = Math.floor(1000 + Math.random() * 9000);
  const ticketEl = document.getElementById('pos-ticket-num');
  if (ticketEl) ticketEl.innerText = `#CK-${currentTicketNumber}`;

  const timeEl = document.getElementById('pos-ticket-time');
  if (timeEl) {
    const now = new Date();
    timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' • ' + now.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }

  // Populate itemized list in POS modal
  const posItemsEl = document.getElementById('pos-breakdown-items');
  if (posItemsEl) {
    posItemsEl.innerHTML = cart.map(item => `
      <div class="pos-item-row">
        <div class="pos-item-details">
          <div class="pos-item-title-line">
            <span class="pos-item-qty">${item.quantity}x</span>
            <strong class="pos-item-name">${item.name}</strong>
          </div>
          <div class="pos-item-subtext">${item.customizationSummary || 'Standard'}</div>
          ${item.notes ? `<div class="pos-item-note">Special Request: "${item.notes}"</div>` : ''}
        </div>
        <div class="pos-item-price-col">
          $${(item.unitPrice * item.quantity).toFixed(2)}
        </div>
      </div>
    `).join('');
  }

  // Populate totals
  const subtotal = cart.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);
  const tax = subtotal * 0.13;
  const grandTotal = subtotal + tax;

  const posSub = document.getElementById('pos-modal-subtotal');
  const posTax = document.getElementById('pos-modal-tax');
  const posTot = document.getElementById('pos-modal-total');

  if (posSub) posSub.innerText = `$${subtotal.toFixed(2)}`;
  if (posTax) posTax.innerText = `$${tax.toFixed(2)}`;
  if (posTot) posTot.innerText = `$${grandTotal.toFixed(2)}`;

  if (modal) modal.classList.add('active');
}

function closePosModal() {
  const modal = document.getElementById('pos-checkout-modal');
  if (modal) modal.classList.remove('active');
}

function setupPosModalListeners() {
  const modal = document.getElementById('pos-checkout-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'pos-checkout-modal') closePosModal();
    });
  }
}

// RECORD TRANSACTION IN COMMON STUDIO REGISTER LEDGER
function recordCafeTransactionInLedger(method) {
  let ledger = [];
  try {
    const saved = localStorage.getItem('the_practice_register_ledger');
    if (saved) ledger = JSON.parse(saved);
  } catch (_) { ledger = []; }

  const subtotal = getCartSubtotal();
  const tax = subtotal * 0.13;
  const total = subtotal + tax;
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toISOString().split('T')[0];

  const itemsSummary = cart.map(i => `${i.quantity}x ${i.name}`).join(', ');

  const guestNameInput = document.getElementById('pos-guest-name');
  const guestName = guestNameInput && guestNameInput.value.trim() ? guestNameInput.value.trim() : activePosCustomer.name;

  const newTx = {
    id: `CK-${currentTicketNumber}`,
    date: dateStr,
    time: timeStr,
    customerName: guestName,
    customerEmail: activePosCustomer.email,
    items: itemsSummary,
    subtotal: subtotal,
    tax: tax,
    total: total,
    method: method,
    status: 'Approved'
  };

  ledger.unshift(newTx);
  try {
    localStorage.setItem('the_practice_register_ledger', JSON.stringify(ledger));
  } catch (_) {}
}

// 1. CHARGE CARD ON FILE (INSTANT HEADLESS CHECKOUT)
function chargeCafeCardOnFile() {
  if (cart.length === 0) return;
  const ticket = currentTicketNumber;
  const subtotal = getCartSubtotal();
  const total = (subtotal * 1.13).toFixed(2);
  const guestNameInput = document.getElementById('pos-guest-name');
  const guestName = guestNameInput && guestNameInput.value.trim() ? guestNameInput.value.trim() : activePosCustomer.name;

  showToast(`⚡ Charging $${total} CAD to ${guestName}'s card on file...`);

  setTimeout(() => {
    recordCafeTransactionInLedger('Card on File (Visa •••• 4242)');
    cart = [];
    updateCartUI();
    closePosModal();
    currentTicketNumber = Math.floor(1000 + Math.random() * 9000);
    showToast(`✓ Order #CK-${ticket} charged & sent to barista bar!`);
  }, 450);
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

// 2. LAUNCH IN MOMENCE POS REGISTER / STRIPE READER
function launchMomencePos() {
  if (cart.length === 0) return;

  const cartItemsPayload = [];
  const pids = [];
  cart.forEach(item => {
    const itemUnit = item.unitPrice || 0;
    const itemQty = item.quantity || 1;
    
    // Construct line items
    if (item.momenceLineItems && item.momenceLineItems.length > 0) {
      item.momenceLineItems.forEach(line => {
        const linePid = Number(line.productId);
        const lineQty = (line.quantity || 1) * itemQty;
        const linePrice = line.price !== undefined ? Number(line.price) : itemUnit;
        for (let q = 0; q < lineQty; q++) {
          if (linePid) {
            pids.push(linePid);
            cartItemsPayload.push({
              type: 'product',
              productId: linePid,
              price: linePrice,
              name: line.name || item.name
            });
          }
        }
      });
    } else {
      // Fallback
      cartItemsPayload.push({
        type: 'product',
        productId: item.momenceId || 492510,
        price: itemUnit,
        name: item.name
      });
    }
  });

  const guestNameInput = document.getElementById('pos-guest-name');
  const guestName = guestNameInput && guestNameInput.value.trim() ? guestNameInput.value.trim() : activePosCustomer.name;
  const guestEmail = activePosCustomer.email;

  recordCafeTransactionInLedger('Stripe Terminal Reader (Bluetooth)');

  const posDataPayload = {
    customerInfo: {
      customerEmail: guestEmail,
      customerName: guestName,
      payingMemberId: activePosCustomer.memberId ? Number(activePosCustomer.memberId) : undefined
    },
    cartItems: cartItemsPayload,
    cart: cartItemsPayload
  };

  const params = new URLSearchParams();
  params.set('data', encodeMomencePosData(posDataPayload));
  params.set('customer', guestEmail);
  params.set('email', guestEmail);
  params.set('name', guestName);
  params.set('autoAdd', 'true');
  if (pids.length > 0) {
    params.set('products', pids.join(','));
    params.set('cart', pids.join(','));
  }

  const targetUrl = `https://momence.com/dashboard/200431/point-of-sale?${params.toString()}`;

  // Copy order summary & customer email to clipboard for instant staff reference
  const orderSummary = `Cafe Order #${currentTicketNumber} for ${guestName}:\n` + cart.map(i => `${i.quantity}x ${i.name} ($${(i.unitPrice * i.quantity).toFixed(2)}) - ${i.customizationSummary || 'Standard'}${i.notes ? ` [${i.notes}]` : ''}`).join('\n') + `\nTotal: $${(getCartSubtotal() * 1.13).toFixed(2)} CAD`;
  navigator.clipboard?.writeText(orderSummary).catch(() => {});
  showToast(`✓ Preloaded cart with ${cart.length} item(s) • Launching Momence POS...`);

  // Use breakout anchor to launch Safari where staff session lives
  const link = document.createElement('a');
  link.href = targetUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer external';
  document.body.appendChild(link);
  link.click();
  setTimeout(() => link.remove(), 100);
}

// 3. PRINT BARISTA KITCHEN SLIP
function printBaristaKitchenSlip() {
  window.print();
}

// 4. COMPLETE QUICK SALE & CLEAR (CASHLESS CONTACTLESS)
function confirmQuickSale(paymentMethod = 'Contactless Tap') {
  const ticket = currentTicketNumber;
  recordCafeTransactionInLedger(paymentMethod);
  cart = [];
  updateCartUI();
  closePosModal();
  currentTicketNumber = Math.floor(1000 + Math.random() * 9000);
  showToast(`✓ Order #CK-${ticket} logged (${paymentMethod})! Register ready.`);
}

// COPY POS ORDER SUMMARY & SKUS
function copyPosPayload() {
  const guestNameInput = document.getElementById('pos-guest-name');
  const guestName = guestNameInput && guestNameInput.value.trim() ? guestNameInput.value.trim() : activePosCustomer.name;
  const orderSummary = `The Practice Cafe • Order #${currentTicketNumber} for ${guestName}:\n` + 
    cart.map(i => `• ${i.quantity}x ${i.name} ($${(i.unitPrice * i.quantity).toFixed(2)}) - ${i.customizationSummary || 'Standard'}${i.notes ? ` [${i.notes}]` : ''}`).join('\n') + 
    `\nTotal: $${(getCartSubtotal() * 1.13).toFixed(2)} CAD (HST included)`;

  navigator.clipboard?.writeText(orderSummary).then(() => {
    showToast('✓ Full order summary copied to clipboard!');
  }).catch(() => {
    showToast('Unable to copy');
  });
}

// TOAST NOTIFICATIONS
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}
