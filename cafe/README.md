# The Practice • Custom Cafe Web Ordering Widget (1-Click Beverage Customization)

### Overview
This custom web ordering widget provides an intuitive, high-end 1-click beverage builder for **The Practice Sanctuary Cafe** (`190 Richmond St E, Toronto, ON`).

Instead of requiring customers in Momence to separately search and add standalone line items (e.g. searching for Oat Milk, then Americano, then Collagen Booster), this widget allows customers to seamlessly customize drinks on a single screen:
- **Base Drink Selection** (Artisan Espresso, Wellness Elixirs, Functional Superfood Smoothies)
- **Milk Choice** (Whole Milk, Oatly Barista Oat Milk, House Almond Milk, Coconut Milk)
- **Temperature / Style** (Hot 🔥 or Iced ❄️)
- **House-Crafted Syrups** (Madagascar Vanilla, Lavender, Salted Caramel, Canadian Maple)
- **Adaptogenic Boosters** (Grass-Fed Collagen, C8 MCT Oil, Vegan Plant Protein, Extra Espresso Shot, Sea Moss)
- **Smoothie Rule Enforcement:** Smoothies are served exclusively in **Regular size (16oz)**; large sizes are removed.
- **In-Store Pickup Notice:** Clearly informs customers that all orders are exclusively for in-store pickup at **190 Richmond St E, Toronto** during regular opening hours (no shipping).

---

### File Structure
- [`index.html`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/Cafe%20Web%20Ordering%20Widget/index.html): Full interactive frontend demo.
- [`widget.css`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/Cafe%20Web%20Ordering%20Widget/widget.css): Warm minimalist design system (Playfair Display + Inter, frosted glass effects, mobile-responsive).
- [`widget.js`](file:///Users/jacksonmcmurdo/Desktop/The%20Practice/Cafe%20Web%20Ordering%20Widget/widget.js): Dynamic modifier logic, real-time price calculations, and automated Momence cart bundling.

---

### How to Embed onto `thepracticetoronto.com` (Squarespace / Webflow)

#### Method 1: Direct Code Injection (Recommended)
1. Add a **Code Block** or custom page on `thepracticetoronto.com/cafe-order`.
2. Include the stylesheet:
```html
<link rel="stylesheet" href="https://thepracticetoronto.com/assets/cafe-widget/widget.css">
```
3. Insert the container and script:
```html
<div id="the-practice-cafe-ordering-widget"></div>
<script src="https://thepracticetoronto.com/assets/cafe-widget/widget.js"></script>
```

#### Method 2: Standalone Iframe Embed
```html
<iframe 
  src="https://order.thepracticetoronto.com" 
  width="100%" 
  height="900px" 
  frameborder="0" 
  style="border: none; border-radius: 16px;">
</iframe>
```

---

### Momence Cart Bundler Schema
When the customer clicks **Proceed to Momence Checkout**, the widget creates a bundled payload containing:
- Base Drink Product ID (e.g. `513541` for Americano)
- Chosen Milk Modifier ID (e.g. `567963` for Oat Milk)
- Selected Boosters (e.g. `545887` for Collagen, `545886` for MCT Oil)
- Special instructions formatted cleanly for the barista POS screen.
