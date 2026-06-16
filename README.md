Salone Health Watch

A free, open-source **Digital Public Good (DPG)** that helps communities in Sierra Leone recognise common illness signs early, learn prevention steps, and understand their rights to health information and data privacy.

Built for **DLAW207 — I.T Law and IPR Legal Issues**, Semester 6, Limkokwing University of Creative Technology, Sierra Leone.

Live Demo

Open `index.html` in any modern web browser. No installation, server, or internet connection required after download.

 Features

- **Health Topics** — plain-language guidance on malaria, cholera and water safety, maternal and child health, immunisation, hygiene, and outbreak alerts.
- **Symptom Guide** — an interactive checklist that gives general, non-diagnostic guidance based on selected symptoms, with urgency levels (low / monitor / urgent).
- **Your Rights & Licence** — explains data privacy (no data is collected — everything runs client-side), the MIT licence terms, and the right to accurate health information.
- **SDG Alignment** — shows how the tool supports SDG 3 (Good Health), SDG 6 (Clean Water & Sanitation), SDG 10 (Reduced Inequalities), and SDG 17 (Partnerships).

Technology

- HTML5
- CSS3 (custom properties, responsive grid, no external frameworks)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Archivo Black, Work Sans, JetBrains Mono)

Installation & Usage

1. Clone or download this repository:
   ```
   git clone https://github.com/<your-username>/salone-health-watch.git
   ```
2. Open `index.html` in a web browser (Chrome, Firefox, Edge, or Safari).
3. No build step or server is required.

## Data Accessibility & Interoperability

Health topic content and symptom-guidance rules are structured as plain JavaScript objects (JSON-like format) inside `index.html`, making them easy to extract, translate, or integrate into other systems (e.g. SMS-based health bots, mobile apps).

## Privacy & Legal Compliance

- No personal data, cookies, or analytics are used.
- All processing (the symptom guide) happens locally in the user's browser.
- The tool provides general guidance only and is **not** a substitute for professional medical advice.

License

This project is released under the **MIT License** — see [`LICENSE`](LICENSE). You are free to use, copy, modify, and distribute this software, including for commercial purposes, provided the copyright notice and license text are included.

Ethical & Accessibility Considerations

- Designed to work on low-cost devices and slow connections (single static file, no external dependencies beyond fonts).
- Keyboard-navigable, screen-reader-friendly labels, visible focus states, and respects reduced-motion preferences.
- Content reviewed for accuracy against general public health guidance; avoids alarming or exaggerated language.

 Contributing

Pull requests are welcome. Please ensure any added health information is sourced from credible public health authorities (e.g. WHO, Sierra Leone Ministry of Health and Sanitation).

Authors

DLAW207 Group Project — Semester 06, March–July 2026
Faculty of Information and Communication Technology
Limkokwing University of Creative Technology, Sierra Leone
