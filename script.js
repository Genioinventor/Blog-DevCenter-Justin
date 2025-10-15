// ============================================
// CONFIGURACIÓN - Cambia aquí tu información
// ============================================
const CONFIG = {
    nombre: "Justin",
    edad: "12 años",
    titulo: "Programador Web Apasionado",
    descripcionCorta: "Me apasiona la tecnología, la innovación y la inteligencia artificial. Creo proyectos web que combinan diseño, funcionalidad y automatización inteligente.",
    descripcionCompleta: "Soy Justin, un programador web de 12 años apasionado por la tecnología, la innovación y la inteligencia artificial. Soy el creador de DevCenter, una plataforma que impulsa el desarrollo web moderno con automatización, APIs inteligentes y herramientas para mejorar la productividad del programador.",
    
    // Contacto - Cambia estos datos
    contacto: {
        email: "justininventor14@gmail.com",
        whatsapp: "523211002280", // Tu número de WhatsApp (sin espacios ni símbolos)
        github: "https://github.com/Genioinventor",
        discordServer: "https://discord.gg/y6svXGzerq",
        discordUser: "justininventor"
    }
};
// ============================================

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('dark', currentTheme === 'dark');

themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Update active navigation links
const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
const currentPath = window.location.hash || '#';

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === '#')) {
        link.classList.add('active');
    }
});

// Handle navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only apply smooth scroll to valid hash links
        if (href && href.startsWith('#') && href !== '#' && href !== '') {
            e.preventDefault();
            try {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } catch (err) {
                // Ignore invalid selectors
            }
        }
    });
});

// Update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate skill items on scroll
document.querySelectorAll('.skill-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Animate sections on scroll
document.querySelectorAll('.section-header').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// Animate project cards on scroll
document.querySelectorAll('.project-card').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Animate about section elements on scroll
document.querySelectorAll('.about-text, .about-skills-section').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    observer.observe(item);
});

// Animate contact cards on scroll
document.querySelectorAll('.contact-card').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Setup contact links with CONFIG data
document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp
    const whatsappLink = document.getElementById('whatsappContact');
    if (whatsappLink && CONFIG.contacto.whatsapp) {
        whatsappLink.href = `https://wa.me/${CONFIG.contacto.whatsapp}`;
    }
    
    // Email - Modal functionality
    const emailLink = document.getElementById('emailContact');
    const emailModal = document.getElementById('emailModal');
    const emailModalClose = document.getElementById('emailModalClose');
    const emailDisplay = document.getElementById('emailDisplay');
    const emailCopyBtn = document.getElementById('emailCopyBtn');
    
    if (emailLink && CONFIG.contacto.email) {
        emailDisplay.textContent = CONFIG.contacto.email;
        
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            emailModal.classList.add('active');
        });
    }
    
    if (emailModalClose) {
        emailModalClose.addEventListener('click', () => {
            emailModal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    emailModal.addEventListener('click', (e) => {
        if (e.target === emailModal) {
            emailModal.classList.remove('active');
        }
    });
    
    // Copy email functionality
    if (emailCopyBtn) {
        emailCopyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(CONFIG.contacto.email);
                emailCopyBtn.classList.add('copied');
                emailCopyBtn.innerHTML = `
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copiado!
                `;
                
                setTimeout(() => {
                    emailCopyBtn.classList.remove('copied');
                    emailCopyBtn.innerHTML = `
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                        Copiar
                    `;
                }, 2000);
            } catch (err) {
                console.error('Error al copiar:', err);
            }
        });
    }
    
    // GitHub
    const githubLink = document.getElementById('githubContact');
    if (githubLink && CONFIG.contacto.github) {
        githubLink.href = CONFIG.contacto.github;
    }
    
    // Discord - Modal functionality
    const discordLink = document.getElementById('discordContact');
    const discordModal = document.getElementById('discordModal');
    const discordModalClose = document.getElementById('discordModalClose');
    
    if (discordLink) {
        // Update Discord links with CONFIG data
        const discordServerBtn = document.querySelector('.discord-server');
        const discordDmBtn = document.querySelector('.discord-dm');
        
        if (discordServerBtn && CONFIG.contacto.discordServer) {
            discordServerBtn.href = CONFIG.contacto.discordServer;
        }
        
        if (discordDmBtn && CONFIG.contacto.discordUser) {
            discordDmBtn.href = `https://discord.com/users/${CONFIG.contacto.discordUser}`;
        }
        
        discordLink.addEventListener('click', (e) => {
            e.preventDefault();
            discordModal.classList.add('active');
        });
    }
    
    if (discordModalClose) {
        discordModalClose.addEventListener('click', () => {
            discordModal.classList.remove('active');
        });
    }
    
    // Close modal when clicking outside
    discordModal.addEventListener('click', (e) => {
        if (e.target === discordModal) {
            discordModal.classList.remove('active');
        }
    });
});
