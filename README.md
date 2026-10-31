# Qubnex Technologies website

A single-file website (HTML + CSS + JavaScript). No build step or install needed.

## Run
Double-click `index.html`, or serve the folder:
    python3 -m http.server 8000     # then open http://localhost:8000
An internet connection is needed only for the Google Fonts.

## Edit content (search for these names inside index.html, in the <script>)
- CONFIG     name, email, social links, optional portrait image
- TOOLKIT    "What We Provide" lists
- SERVICES   "What We Do" rows
- PROJECTS   "Example Solutions" cards (add demo/code links when real)
- FOCUS      "How It Works" steps
- FAQS       FAQ answers (also feed the SEO structured data)
- QA         chat widget answers (scripted demo)
- GALLERY    "Digital, in motion" charts (random sample data)
- ITEMS      dashboard demo activity items

## Edit look
CSS variables at the top of <style>: --accent, --bg, --bg2, --ink, --mute,
and the portrait motion settings (--tilt-y, --hover-y, --scroll-y, --intensity).

## Before going live (SEO)
Add inside <head>: <link rel="canonical" href="https://YOUR-DOMAIN/">,
og:url, og:image, and replace the placeholder email in CONFIG.
