# DevCenter - Personal Portfolio Website

## Overview

DevCenter is a personal portfolio website for Justin, a 12-year-old web developer. The site is built as a static website using vanilla HTML, CSS, and JavaScript. It serves as a personal brand showcase featuring a homepage, about page, store section (tienda), and contact information. The website supports dark/light theme toggling and responsive mobile navigation.

## Recent Changes

- **January 2026**:
  - Implemented clean URL routing via `serve.json` (for Replit/local) and `vercel.json` (for Vercel).
  - Renamed "Fundadores" to "Equipo" throughout the site.
  - Redesigned the contact section with an interactive central logo and animated blue rays.
  - Updated button text in "Páginas Web" from "Cotizar" to "Solicitar".
  - Updated all navigation links and quick links to reflect routing and naming changes.

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