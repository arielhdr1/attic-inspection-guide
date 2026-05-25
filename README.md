# Attic Inspection Field Guide

Mobile-first attic inspection infographic built as a static HTML/CSS/JS swipe deck.

## Files

- `index.html` - editable inspection content
- `styles.css` - full-screen mobile card layout and CSS-built infographic visuals
- `script.js` - swipe state and keyboard navigation
- `assets/` - optional folder for future photos or exports

## Run

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Notes

The guide is self-contained. Visuals are drawn in CSS, so the mobile deck will not lose images when hosted as a static site.
