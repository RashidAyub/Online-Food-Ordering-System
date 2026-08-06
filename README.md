# 🍕 Food Paradise - Online Food Ordering System

A professional, modern, and fully responsive online food ordering website built with HTML5, CSS3, and JavaScript. Features a complete user experience from browsing menus to placing orders.

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://foodparadise.com)
[![GitHub](https://img.shields.io/github/license/RashidAyub/Online-Food-Ordering-System)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## 🎯 Features

### Core Features
- **Responsive Design**: Seamless experience across Mobile, Tablet & Desktop
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Interactive Menu**: Filterable food categories with detailed item cards
- **Shopping Cart**: Full cart functionality with add/remove items
- **Pricing Plans**: Three subscription tiers (Basic, Premium, Family)
- **Customer Reviews**: Testimonials section with verified ratings
- **Contact Form**: Fully functional contact form with validation
- **Newsletter Subscription**: Email subscription with confirmation

### Technical Features
- **SEO Optimized**: Comprehensive meta tags, Open Graph, Twitter Cards
- **Performance**: Lazy loading, image optimization, caching
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader friendly
- **PWA Ready**: Web manifest for installable app experience
- **Animations**: AOS library + custom CSS animations
- **Cross-browser**: Compatible with all modern browsers

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessibility features
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+)**: Modular code, async/await, IntersectionObserver
- **Font Awesome 6.4**: Icon library
- **Google Fonts**: Poppins, Playfair Display
- **AOS Library**: Scroll animations
- **Unsplash**: High-quality food images

## 📁 Project Structure

```
order-food/
├── assets/
│   ├── css/
│   │   ├── styles.css          # Main stylesheet
│   │   └── responsive.css      # Responsive breakpoints
│   ├── js/
│   │   └── script.js           # Main JavaScript
│   └── images/
│       └── favicon.png         # Favicon
├── index.html                  # Main HTML file
├── robots.txt                  # SEO robots file
├── sitemap.xml                 # SEO sitemap
├── site.webmanifest           # PWA manifest
├── .htaccess                  # Apache configuration
├── .gitignore                 # Git ignore rules
└── README.md                  # Documentation

```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Local server (optional: Live Server, XAMPP, or Python server)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RashidAyub/Online-Food-Ordering-System.git
   cd Online-Food-Ordering-System
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server for best experience:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # PHP
     php -S localhost:8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. **Visit**
   ```
   http://localhost:8000
   ```

## 📱 Responsive Breakpoints

- **Desktop Large**: 1400px+
- **Desktop**: 1200px - 1400px
- **Laptop**: 992px - 1200px
- **Tablet**: 768px - 992px
- **Mobile Large**: 576px - 768px
- **Mobile**: 480px - 576px
- **Mobile Small**: 360px - 480px

## 🎨 Color Palette

```css
--primary: #ff6b35        /* Orange */
--primary-dark: #e85d2a   /* Dark Orange */
--primary-light: #ff8c5a  /* Light Orange */
--secondary: #2c3e50      /* Dark Blue */
--accent: #f39c12         /* Yellow */
--dark: #1a1a2e           /* Almost Black */
--light: #f8f9fa          /* Light Gray */
```

## 🔧 Customization

### Change Colors
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
}
```

### Add Menu Items
In `index.html`, duplicate a menu card and update:
```html
<div class="menu-card" data-category="your-category">
  <!-- Update content -->
</div>
```

### Modify Sections
Each section is clearly marked with HTML comments:
```html
<!-- Section Name -->
<section class="section-name">
  <!-- Content -->
</section>
```

## 🚀 Deployment

### GitHub Pages
1. Go to repository Settings → Pages
2. Select `main` branch
3. Save and visit your GitHub Pages URL

### Vercel
```bash
vercel --prod
```

### Netlify
1. Drag and drop your folder to Netlify
2. Or connect your GitHub repository

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security Features

- XSS Protection headers
- Content Security Policy
- HTTPS enforcement (when deployed)
- Secure form validation
- No sensitive data exposure

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest 2 versions)

## 📝 Development Progress

### ✅ Completed Steps
1. ✅ Folder Structure + Navbar + Hero Section
2. ✅ About + Services
3. ✅ Menu + Process Section
4. ✅ Statistics Counter + Testimonials
5. ✅ Pricing + FAQ
6. ✅ Contact + Footer
7. ✅ Images + Animations + Responsive Design
8. ✅ SEO + Performance Optimization + Final Testing

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Rashid Ayub**
- GitHub: [@RashidAyub](https://github.com/RashidAyub)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) - Food images
- [Font Awesome](https://fontawesome.com) - Icons
- [Google Fonts](https://fonts.google.com) - Typography
- [AOS Library](https://michalsnik.github.io/aos/) - Scroll animations

## 📞 Support

For support, email info@foodparadise.com or create an issue in this repository.

---

<p align="center">Made with ❤️ by the Food Paradise Team</p>
<p align="center">⭐ Star this repo if you find it useful!</p>
