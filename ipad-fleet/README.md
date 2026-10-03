# The Practice — iPad Fleet Deployment Assets & Blueprints

This directory contains the visual references, custom luxury wallpapers, home screen layout blueprints, Web Clip configuration profiles, and MDM payloads for managing **The Practice** 5-device iPad fleet.

---

## Directory Structure

```
iPad_Fleet_Deployments/
├── interactive_fleet_dashboard.html      <-- Interactive HTML visual gallery & spec inspector
├── wallpapers/                           <-- High-resolution custom obsidian/bronze wallpapers
│   ├── 01_Retail_iPad_Wallpaper.jpg
│   ├── 02_Yoga_Studio_iPad_Wallpaper.jpg
│   ├── 03_Cafe_iPad_Wallpaper.jpg
│   ├── 04_Event_Space_iPad_Wallpaper.jpg
│   └── 05_Admin_iPad_Wallpaper.jpg
├── layout_references/                    <-- Visual mockup images of screen, apps, & dock
│   ├── 01_Retail_iPad_Layout_Mockup.png
│   ├── 02_Yoga_Studio_iPad_Layout_Mockup.png
│   ├── 03_Cafe_iPad_Layout_Mockup.png
│   ├── 04_Event_Space_iPad_Layout_Mockup.png
│   └── 05_Admin_iPad_Layout_Mockup.png
├── layout_blueprints/                    <-- JSON payloads for MDM Home Screen Layouts
│   ├── 01_retail_ipad_layout.json
│   ├── 02_yoga_studio_layout.json
│   ├── 03_cafe_ipad_layout.json
│   ├── 04_event_space_layout.json
│   ├── 05_admin_ipad_layout.json
│   └── app_bundle_id_registry.json
├── web_clip/                             <-- The Practice standalone HTML web app installer
│   ├── the_practice_webclip.mobileconfig
│   └── the_practice_webclip_icon.png
└── mdm_payloads/                         <-- Lock screen footnote & restriction templates
    └── fleet_lockscreen_footnote_payload.plist
```

---

## Fleet Device Inventory & Role Allocation

| Device Name | Role | Primary Apps | Dock Apps | Security Mode |
| :--- | :--- | :--- | :--- | :--- |
| `PRAC-RETAIL-KSK-01` | Retail Showroom | Moments, The Practice, Nelko, Munbyn, Spotify | Moments, The Practice, VSSL, Settings* | Multi-App Kiosk |
| `PRAC-YOGA-STU-01` | Yoga Studio 1 | The Practice, Google Home, VSSL | The Practice, VSSL, Spotify, Google Home | Audio & Class Kiosk |
| `PRAC-CAFE-POS-01` | The Cafe | Moments, The Practice, Nelko, Munbyn, Spotify, VSSL | Moments, The Practice, Nelko, Settings* | High-Speed POS |
| `PRAC-EVENT-CTRL-01` | Event Hall | The Practice, Moments, Spotify, VSSL, Google Home | VSSL, Google Home, Spotify, The Practice | AV Matrix Kiosk |
| `PRAC-ADMIN-PAD-01` | Head Office | All apps + Admin utilities & Reports | The Practice, Moments, Safari, Settings | Supervised Admin |

---

## App Bundle Identifier Registry

| App Name | Bundle ID | Type | Distribution Method |
| :--- | :--- | :--- | :--- |
| **The Practice** | `com.thepractice.webapp.kiosk` | Web Clip | MDM Web Clip Profile (`.mobileconfig`) |
| **Moments POS** | `com.momence.host` | App Store | VPP Device-Assigned (Silent) |
| **Spotify** | `com.spotify.client` | App Store | VPP Device-Assigned (Silent) |
| **VSSL Soundtrack** | `com.soundtrackyourbrand.player` | App Store | VPP Device-Assigned (Silent) |
| **Google Home** | `com.google.Chromecast` | App Store | VPP Device-Assigned (Silent) |
| **Nelko Print** | `com.nelko.print` | App Store | VPP Device-Assigned (Silent) |
| **Munbyn Print** | `com.munbyn.printer` | App Store | VPP Device-Assigned (Silent) |
| **Settings** | `com.apple.Preferences` | Native OS | Restricted payload |
| **Safari** | `com.apple.mobilesafari` | Native OS | Whitelisted on Admin only |

---

## Quick Deployment Steps via MDM (Jamf / SimpleMDM / Intune)

1. **Upload Wallpapers**:
   - Go to MDM **Configuration Profiles > Wallpaper Payload**.
   - Target each device group with its corresponding wallpaper in `wallpapers/`.
2. **Push Dynamic Lock Screen Footnote**:
   - In MDM Lock Screen Payload, set footnote to:
     `LOCATION: %LOCATION% • ROLE: %DEVICE_ROLE% | [ SERIAL: %SERIALNUMBER% ]`
3. **Deploy The Practice Web Clip**:
   - Install `web_clip/the_practice_webclip.mobileconfig` across all 5 devices. This pins the web app in fullscreen standalone mode.
4. **Enforce Home Screen Layout**:
   - Copy the icon grid coordinates from `layout_blueprints/0X_...json` into your MDM **Home Screen Layout Payload**.
5. **Open Dashboard**:
   - Double click `interactive_fleet_dashboard.html` to preview all designs and copy specs anytime.
