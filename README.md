# Attic Inspection Guide

Responsive, mobile-first attic inspection card guide based on the provided infographic reference. The guide is built as editable HTML cards, not as one giant poster image.

## Files

- `index.html` - editable card content
- `styles.css` - full-screen swipe layout and print styles
- `script.js` - carousel navigation
- `assets/` - folder for future attic photos or exported visual assets

## Run

Open `index.html` directly in a browser, or run a simple local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Print

Use the browser print dialog for print-ready output.

## Editing

All inspection text is in `index.html`. Each card is a `<section class="guide-card">` and keeps the same editable structure:

- progress indicator
- risk badge
- title and icon
- annotated image placeholder
- `Look For`, `Why It Matters`, and `Action`

Image placeholders can be replaced later with real attic photos while keeping the same card layout.
