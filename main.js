/**
 * BACS Entity Hub v1.0 Generated Stylesheet
 * Architectural, high-readability, minimal CSS. No frameworks, purely static-optimized.
 */

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');

:root {
  
  --font-display: 'Space Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;

  
  /* Palette */
  --primary: #991b1b;
  --primary-rgb: 153, 27, 27;
  --secondary: #fffbeb;
  --bg: #ebb870;
  --text: #1c1917;
  --text-muted: #6b7280;
  --accent: #3b82f6;

  /* Structural Defaults */
  
  --radius: 20px;
  --shadow: 0 10px 25px -5px rgba(124, 45, 18, 0.05);
  --border: 1px solid #f0eae1;
  --card-bg: #fefdfb;
  --header-bg: rgba(253, 251, 247, 0.85);
  --section-padding: 6rem 1.5rem;
  --button-hover-transform: scale(1.02);

}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.25;
  color: var(--text);
  letter-spacing: -0.025em;
}

h1 { font-size: clamp(2.25rem, 5vw, 3.5rem); }
h2 { font-size: clamp(1.75rem, 4vw, 2.25rem); margin-bottom: 1.5rem; position: relative; }
h3 { font-size: 1.25rem; margin-bottom: 0.5rem; }

p {
  margin-bottom: 1.25rem;
  color: var(--text-muted);
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: all 0.2s ease;
}

a:hover {
  opacity: 0.85;
}

/* Layout */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--header-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: var(--border);
  transition: all 0.3s ease;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text);
}

.logo-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: var(--secondary);
  border: var(--border);
  border-radius: var(--radius);
  font-size: 1.25rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

nav a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
}

nav a:hover {
  color: var(--primary);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

/* Mobile Nav Open */
@media (max-width: 768px) {
  nav {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: var(--bg);
    border-bottom: var(--border);
    padding: 1.5rem;
  }
  
  nav.active {
    display: block;
  }
  
  nav ul {
    flex-direction: column;
    gap: 1rem;
  }
  
  .hamburger {
    display: block;
  }
}

/* Sections */
section {
  padding: var(--section-padding);
}

/* Hero Section */
.hero-section {
  padding-top: 160px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(85vh - 70px);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
  }
}

.hero-tagline {
  display: inline-block;
  font-family: var(--font-display);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.75rem;
  background-color: var(--secondary);
  border: var(--border);
  border-radius: calc(var(--radius) / 2);
  color: var(--primary);
  margin-bottom: 1.25rem;
}

.hero-title {
  margin-bottom: 1.5rem;
}

.hero-desc {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.hero-location-note {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: rgba(0, 0, 0, 0.72);
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 992px) {
  .hero-ctas {
    justify-content: center;
  }
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  font-weight: 500;
  border-radius: var(--radius);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  border: none;
  font-family: var(--font-body);
}

.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
}

.btn-primary:hover {
  transform: var(--button-hover-transform);
  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.2);
}

.btn-secondary {
  background-color: var(--secondary);
  color: var(--text);
  border: var(--border);
}

.btn-secondary:hover {
  background-color: rgba(228, 228, 231, 0.5);
}

/* Hero Media Display */
.hero-media-wrapper {
  position: relative;
}

.hero-badge-card {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background-color: var(--card-bg);
  border: var(--border);
  padding: 1.25rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  max-width: 240px;
  text-align: left;
}

@media (max-width: 768px) {
  .hero-badge-card {
    display: none;
  }
}

/* Grid & Cards */
.card {
  background-color: var(--card-bg);
  border: var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.card:hover {
  transform: none;
}

/* Facts Section */
.facts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.fact-item {
  display: flex;
  gap: 1rem;
}

.fact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--secondary);
  border: var(--border);
  border-radius: var(--radius);
  color: var(--primary);
  font-size: 1.25rem;
  flex-shrink: 0;
}

.fact-content h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

/* Services / Offer Catalog */
.catalog-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3.5rem;
}

.services-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.service-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-color: var(--card-bg);
  border: var(--border);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow);
}

@media (max-width: 768px) {
  .service-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}

.service-info {
  flex-grow: 1;
}

.service-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;
}

.service-badge {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.5rem;
  background-color: var(--secondary);
  border: var(--border);
  border-radius: 4px;
  color: var(--text);
}

.trust-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.trust-summary-card,
.trust-badges-card {
  background-color: var(--card-bg);
  border: var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.trust-summary-card h3,
.trust-badges-card h3 {
  margin-bottom: 1rem;
}

.trust-badge-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
}

.trust-badge-list li {
  padding: 1rem;
  border: var(--border);
  border-radius: var(--radius);
  background-color: var(--secondary);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.review-card {
  background-color: var(--card-bg);
  border: var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-rating {
  font-size: 1rem;
  color: #f59e0b;
  letter-spacing: 0.05em;
}

.review-text {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text);
}

.review-footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--text-muted);
}

.service-price {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary);
  white-space: nowrap;
}

/* Products Section */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.product-card {
  display: flex;
  flex-direction: column;
  background-color: var(--card-bg);
  border: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  height: 100%;
}

.product-img-wrapper {
  aspect-ratio: 4/3;
  width: 100%;
  overflow: hidden;
  background-color: #f4f4f5;
  border-bottom: var(--border);
}

.product-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-img-wrapper img {
  transform: scale(1.05);
}

.product-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.product-title {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
}

.product-desc {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.product-price {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text);
}

/* Gallery Section */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.gallery-item {
  aspect-ratio: 16/10;
  border-radius: var(--radius);
  border: var(--border);
  overflow: hidden;
  position: relative;
  cursor: zoom-in;
  box-shadow: var(--shadow);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.04);
}

/* Lightbox overlay */
.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.lightbox.active {
  display: flex;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 85%;
}

.lightbox img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: 4px;
  border: 2px solid #ffffff;
  object-fit: contain;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
}

/* FAQ Accordion */
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item-card {
  background-color: var(--card-bg);
  border: var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.faq-trigger {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.25rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text);
  gap: 1rem;
}

.faq-icon-indicator {
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.faq-item-card.open .faq-icon-indicator {
  transform: rotate(180deg);
}

.faq-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-content {
  padding: 0 1.75rem 1.25rem;
}

/* Contact & Hours Section */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

@media (max-width: 992px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.hours-table {
  width: 100%;
  border-collapse: collapse;
}

.hours-table td {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(228, 228, 231, 0.5);
}

.hours-table tr:last-child td {
  border-bottom: none;
}

.hours-day {
  font-weight: 500;
  color: var(--text);
}

.hours-time {
  text-align: right;
  color: var(--text-muted);
}

.hours-time.closed {
  color: #ef4444;
  font-weight: 500;
}

.map-container {
  aspect-ratio: 16/10;
  border-radius: var(--radius);
  border: var(--border);
  overflow: hidden;
  box-shadow: var(--shadow);
  margin-top: 1.5rem;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Footer */
footer {
  border-top: var(--border);
  background-color: var(--card-bg);
  padding: 4rem 1.5rem 2rem;
  font-size: 0.9rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-column h4 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: var(--text-muted);
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-socials {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.footer-social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: var(--border);
  background-color: var(--secondary);
  color: var(--text);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(228, 228, 231, 0.5);
  padding-top: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 576px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

.bacs-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.bacs-badge span {
  display: inline-block;
  padding: 0.15rem 0.4rem;
  background-color: #10b981;
  color: white;
  border-radius: 3px;
  font-weight: 700;
}

/* Utility Helpers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
