# The Practice — Brand Identity & Environmental Interface Specification
**Location**: 360 Davenport Rd, Yorkville, Toronto  
**Digital Architecture**: Hardware Fleet & Kiosk UI Design Language  
**Reference Sources**: `thepracticetoronto.com` • Studio Interior Architecture • Visual Identity Archives  

---

## 1. Executive Aesthetic Statement

The Practice is an architectural sanctuary blending restorative wellness, movement, mindful living, and boutique hospitality. The physical environment at 360 Davenport Rd is defined by warm lime-wash plaster walls, soft natural linen, fluted oak joinery, limestone flooring, and soft indirect cove lighting.

Digital touchpoints—specifically wall-mounted iPads—must **never look like generic corporate office equipment**. They must function as **digital architectural elements**, seamlessly matching the wall finishes and furniture when idle, and transitioning into bold, high-contrast, tactile instruments when engaged by staff or clients.

---

## 2. Core Color Palette & Material Tokens

### Primary Architectural Tokens
| Token Name | Hex Code | Material & Environmental Reference | Usage |
| :--- | :--- | :--- | :--- |
| `--color-bg-sage` | `#EBEDEA` | Mineral lime plaster & warm limestone | Primary Day Mode background, tactile tile cards |
| `--color-primary` | `#151515` | Sanctuary charcoal / deep cast iron | Primary typography, high-contrast button states |
| `--color-surface` | `#F8F7F6` | Alabaster cream stone | Card surfaces, modal elevations, dock base |
| `--color-text` | `#333333` | Dense charcoal slate | High-legibility editorial and operational copy |
| `--color-text-muted`| `#54595F` | Fluted travertine shadow grey | Secondary labels, serial tags, timestamps |

### Signature Accent Tokens
| Token Name | Hex Code | Material & Environmental Reference | Usage |
| :--- | :--- | :--- | :--- |
| `--color-accent-amber` | `#F5A258` | Warm golden terracotta / evening glow | Active focus rings, primary action badges, audio state |
| `--color-accent-peach` | `#FFBC7D` | Soft transition morning horizon | Ambient gradient shifts, subtle badge glows |
| `--color-button-indigo`| `#03095F` | Signature website deep indigo / midnight | Master checkout button, high-contrast action tile |
| `--color-bronze-metallic`| `#D4AF37` | Brushed bronze & brass fixtures | Hardware border inlays, luxury metallic accents |

### Evening / Low-Light Ambient Tokens (Zen Mode)
| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| `--color-obsidian-dark` | `#141716` | Dimmed studio background for sound baths / evening yoga |
| `--color-card-dark` | `#1E2322` | Dark tactile tile cards with 1px bronze border |
| `--color-text-bright` | `#F8FAFC` | High-contrast text on dark backgrounds |

---

## 3. Typography Hierarchy

### 1. Primary Editorial & Brand Heading: **Optima**
* **Font Family**: `'Optima', 'Abhaya Libre', Georgia, serif`
* **Characteristics**: Elegant, architectural humanistic serif with flared terminals and serene proportions.
* **Usage**: Brand emblems, room headers, action tile primary labels, ambient screensavers.

### 2. Operational & Data Typography: **Poppins / Plus Jakarta Sans**
* **Font Family**: `'Poppins', 'Plus Jakarta Sans', -apple-system, sans-serif`
* **Characteristics**: Geometric, open apertures, ultra-high legibility on Retina screens from 3 to 6 feet away.
* **Usage**: Subtitles, status badges, button descriptions, pricing, inventory metadata.

### 3. Hardware & Serial Diagnostics: **JetBrains Mono / SF Pro Mono**
* **Font Family**: `'JetBrains Mono', 'SF Pro Mono', monospace`
* **Characteristics**: Monospaced, zero-ambiguity numerals.
* **Usage**: Device serial numbers, asset tags, Wi-Fi IP tracking, MDM token overlays.

---

## 4. Wall-Mounted Hardware & Environmental Ergonomics

```
   ┌────────────────────────────────────────────────────────┐
   │ 360 DAVENPORT RD — WALL FINISH: LIME-WASH SAGE PLASTER │
   │                                                        │
   │               ┌────────────────────────┐               │
   │               │ MAGNETIC FLUSH MOUNT   │               │
   │               │ (Black / Brushed Metal)│               │
   │               │ ┌────────────────────┐ │               │
   │               │ │                    │ │               │
   │               │ │  IPAD RETINA       │ │               │
   │               │ │  (Always-On Mode)  │ │               │
   │               │ │                    │ │               │
   │               │ └────────────────────┘ │               │
   │               └────────────────────────┘               │
   │                                                        │
   │ EYE LEVEL: 54" - 58" FROM FINISHED FLOOR               │
   └────────────────────────────────────────────────────────┘
```

1. **Magnetic Flush Wall Mounts**:
   * Mount enclosures (Studio Proper, Bouncepad, or MagSafe architectural backings) flush to the wall with hidden internal USB-C power delivery.
   * iPads remain permanently charged with battery protection charging profiles enabled in iPadOS.
2. **Ambient Light Matching**:
   * True Tone and Auto-Brightness must remain **Enabled** in the MDM profile so the display white point continuously adapts to the warm 2700K–3000K Yorkville studio lighting.
3. **Always-On Ambient Attract Loop**:
   * When idle for > 90 seconds, the UI dims to 40% luminance, displaying a minimalist architectural clock and subtle brand emblem that mimics an artistic picture frame rather than a computer screen.
4. **Touch Target Sizing**:
   * Action tiles must have a minimum touch footprint of **160 × 160 pt**, enabling rapid 1-tap activation without requiring precise finger targeting.
