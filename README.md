# The Practice • Retail Scanner & Staff Guidebook App

A progressive web app (PWA) engineered for **The Practice** studio iPads and mobile devices. Enables retail staff, front desk guides, and instructors to instantly scan physical product barcodes in the retail space or search the entire studio catalog to view craftsmanship notes, prices, SKUs, and deep-link directly into Momence.

---

## 🌟 Key Features

1. **Instant Camera Barcode & QR Scanner**:
   - Uses the iPad's camera to scan retail UPC/EAN barcodes, QR codes, or Code-128 labels on studio products.
   - Built with the native browser `BarcodeDetector` API (running at 60 FPS on Apple Neural Engine hardware) with graceful WebAssembly fallback.
   - Synthesizes pleasant harmonic audio chimes and haptic vibrations on successful scans.
   - Features camera flipping (front/environment) and torch toggle controls.

2. **The Staff Selling Pitch HUD**:
   - High-resolution authentic product photography.
   - Standardized titles prefixed with brand names.
   - Key materials, craftsmanship highlights, and customer talking points.
   - Retail price (CAD) and SKU with 1-click clipboard copy.
   - **Direct Momence Integration**: One-tap button opening `https://momence.com/dashboard/200431/products/{id}/edit` directly in a new tab.

3. **Complete 731-Product Catalog**:
   - Instant real-time fuzzy search by product name, brand, SKU, or Momence ID.
   - 8 Filterable Studio Departments:
     - *Fine Jewelry & Modern Adornments* (171 items)
     - *Sacred Minerals, Crystals & Fossils* (72 items)
     - *Aromatherapy, Incense & Sacred Smudging* (61 items)
     - *Luxury Candles & Home Fragrance* (109 items)
     - *Mindful Living, Journals & Games* (31 items)
     - *Clean Apothecary, Bath & Grooming* (69 items)
     - *Home Decor, Barware & Artisan Textiles* (211 items)
     - *Cafe & Nourishment* (7 items)

4. **100% Offline Capability (PWA)**:
   - Service worker caches the entire application shell, styles, scripts, and 731-product catalog.
   - Continues to function flawlessly even if studio Wi-Fi drops or is weak in retail corners.

---

## 📱 How to Install on Studio iPads (The ".app" Native Experience)

To install this on the studio iPads so it runs fullscreen as a standalone app (without Safari browser bars):

1. On the iPad, open **Safari** and navigate to your deployed GitHub Pages URL:  
   `https://itsmcmurdoj.github.io/ThePracticeRetailTool/`
2. Tap the **Share** button (the square with an arrow pointing upward) in Safari.
3. Scroll down and tap **Add to Home Screen**.
4. Tap **Add** in the top-right corner.
5. Tap the new **The Practice** app icon on your iPad home screen!  
   *It will open fullscreen as a native app with zero browser chrome, ready to scan products.*

---

## 🛠 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), Semantic HTML5, Custom CSS with HSL design tokens.
- **Scanning**: Native `BarcodeDetector` API + `html5-qrcode` fallback.
- **Audio/Haptics**: Web Audio API oscillator synthesis + `navigator.vibrate`.
- **Data**: Pre-indexed client-side catalog (`products.js`) with zero network latency.
- **Hosting**: GitHub Pages via automated GitHub Actions CI/CD.
