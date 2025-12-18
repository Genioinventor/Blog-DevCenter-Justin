# DevCenter - Personal Portfolio Website

## Overview

DevCenter is a personal portfolio website for Justin, a 12-year-old web developer. The site is built as a static website using vanilla HTML, CSS, and JavaScript. It serves as a personal brand showcase featuring a homepage, about page, store section (tienda), and contact information. The website supports dark/light theme toggling and responsive mobile navigation.

## Recent Changes

- **December 2024**: 
  - Added compact "Tienda" section on homepage linking to dedicated pages
  - Created `discord-pay.html` page with 3 Discord server packages ($5, $10, $20 USD)
  - Added option for custom server requests
  - WhatsApp integration for purchasing
  - Navigation updated on all pages to include the new Tienda link
  - **Discord Shop Enhancement**: Added two creation modes:
    - "Crear Personalizado": Users can select channel styles (e.g., #┃🌐┃Chat, #🌐┃Chat, #⟬🌐⟭・Chat) and category styles (e.g., ｢🌐｣ 𝗡𝗨𝗘𝗩𝗢). Also supports custom formats using (emoji) and (nombre) placeholders
    - "Crear con Plantilla": Pre-made server templates with fixed pricing

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure vanilla HTML5, CSS3, and JavaScript (no frameworks or build tools)
- **Design Pattern**: Multi-page static site with shared styles and scripts
- **Theming**: CSS custom properties (variables) for light/dark theme support stored in localStorage
- **Responsive Design**: Mobile-first approach with hamburger menu for smaller screens

### Page Structure
- `index.html` - Main landing page with hero, compact store section, and contact
- `about.html` - Personal biography and background information
- `discord-pay.html` - Discord server shop with pricing tiers
- `style.css` - Global stylesheet with CSS variables for theming
- `script.js` - Shared JavaScript for theme toggle, mobile menu, and configuration

### Configuration System
The `script.js` file contains a centralized `CONFIG` object that stores:
- Personal information (name, age, title, descriptions)
- Contact details (email, WhatsApp, GitHub, Discord)

This approach allows easy updates to personal information without modifying HTML templates.

### Styling Approach
- CSS custom properties define a comprehensive design token system
- Separate variable sets for light and dark themes using the `.dark` class
- System font stack for optimal performance and native appearance

## External Dependencies

### Third-Party Integrations
- **Netlify**: External project hosting (dev-center-community.netlify.app, devcenter-review.netlify.app)
- **GitHub**: Source code repository (github.com/Genioinventor)
- **Discord**: Community server integration
- **WhatsApp**: Contact communication channel

### Hosting
- Static site deployment (no server-side requirements)
- SVG favicon for crisp display across devices

### No Build Dependencies
This project has no package.json, node_modules, or build process. It runs directly in the browser as static files.