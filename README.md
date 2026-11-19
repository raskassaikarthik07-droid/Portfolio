# Portfolio Website - Raskas Sai Karthik

A high-performance personal portfolio website for **Raskas Sai Karthik**, Computer Science Engineering student at KL University (Roll No: `2510030295`), featuring advanced UI transitions, scroll-triggered reveal animations, and modern micro-interactions.

---

## ✨ Features & Architecture

### 1. Page-Load & Entrance Animations
- **Smooth Preloader**: Seamless geometric loader with SVG glow-ring and smooth fade-out eliminating layout shift or abrupt flashes.
- **Hero Section Waterfall Reveal**: Staggered sequential entrance animation using CSS transitions and `data-hero-delay` attributes (`opacity: 0` to `1`, `translateY: 24px` to `0`):
  1. Availability Status Pill
  2. Hero Headline Greeting (`Raskas Sai Karthik`)
  3. Dynamic Role & Subtitle
  4. Bio & Overview Description
  5. Action Buttons (Explore Projects, Get in Touch, Learn More)
  6. Academic & Performance Metrics (Projects, Roll No, Intermediate Score)
  7. Interactive Developer Terminal Card with system diagnostics & CLI details

### 2. Scroll-Triggered Reveal Animations
- **IntersectionObserver Section Transitions**: Sections (About, Education, Projects, Skills, Certificates, Contact) fade and slide into view at a buttery 60fps as they cross the viewport threshold.
- **Staggered Waterfall Cards**: Elements inside `.stagger-group` cascade their appearance with coordinated micro-delays (e.g. 60ms, 130ms, 200ms, 270ms...).

### 3. Interactive Hover & Micro-Effects
- **Glassmorphism Spotlight**: Glass cards (`backdrop-blur-md`, subtle border glow) feature dynamic mouse tracking (`--mouse-x`, `--mouse-y`) that casts a radial spotlight highlight under the cursor.
- **Card Elevation**: Hover elevation transition (`translateY(-5px)`), illuminated cyan/indigo border highlights, and ambient shadow depth.
- **Buttons with Sheen Sweep**: Primary CTA buttons scale smoothly on hover (`scale(1.03)`), ripple with light reflection sweep, and compress on active press (`scale(0.98)`).
- **Adaptive Sticky Navigation**: Dynamic navbar background blur (`backdrop-blur-md`) and active section spy tracking the user's viewport across sections.
- **Interactive Project Filtering**: Instant category filtering (All, Backend & Systems, IoT & Hardware, Java Architectures) with smooth cross-fades.
- **Direct Connection Hub**: 1-click email launch (`mailto:`), clipboard email copy, verified LinkedIn link, and GitHub repository portal.

### 4. Verified GitHub Projects & Webhosts
- **MovieRecommend Platform**: [Live on Vercel](https://movierecommend-pi.vercel.app) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/movierecommend)
- **Structviz (DS Visualizer)**: [Live on GitHub Pages](https://raskassaikarthik07-droid.github.io/Structviz/) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/Structviz)
- **RehabVision AI Platform**: [Live on GitHub Pages](https://raskassaikarthik07-droid.github.io/Rehabvision_physio/) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/Rehabvision_physio)
- **GreenLeaf Plant Store**: [Live on GitHub Pages](https://raskassaikarthik07-droid.github.io/plants/) &bull; [GitHub](https://github.com/raskassaikarthik07-droid/plants)
- **SkyBook Flight Booking**: [GitHub Repository](https://github.com/raskassaikarthik07-droid/flight)
- **Space Mission Control**: [GitHub Repository](https://github.com/raskassaikarthik07-droid/Space-mission-control)

---

## 📂 Project Structure

```text
Portfolio/
├── assets/                  # Static assets & icons
├── css/
│   └── styles.css           # 60fps GPU-accelerated transitions & glassmorphism
├── js/
│   └── main.js              # IntersectionObserver reveals, preloader, spotlight, filter
├── index.html               # Semantic HTML5 layout with Tailwind CSS & icons
└── README.md                # Documentation & instructions
```

---

## 🚀 Running the Portfolio Locally

Open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# Using Python 3:
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).
