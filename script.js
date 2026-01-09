// ============================================
// CONFIGURACIÓN - Cambia aquí tu información
// ============================================
const CONFIG = {
    nombre: "Justin",
    edad: "12 años",
    titulo: "Programador Web Apasionado",
    descripcionCorta: "Impulso el futuro digital a través de soluciones web de alto nivel, especializándome en arquitecturas escalables y experiencias de usuario de vanguardia.",
    descripcionCompleta: "Soy Justin, un desarrollador web de 12 años enfocado en la excelencia técnica y el diseño de vanguardia. A través de DevCenter, desarrollo soluciones digitales robustas y escalables que definen el estándar del desarrollo web moderno.",
    
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

const setTheme = (theme) => {
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
};

const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
};

setTheme(getPreferredTheme());

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark');
        setTheme(isDark ? 'dark' : 'light');
    });
}

// Typewriter Effect
const initTypewriter = () => {
    // Solo inicializar si es un dispositivo móvil (pantalla pequeña)
    // Se considera móvil si el ancho es menor o igual a 1024px
    if (window.innerWidth > 1024) {
        const element = document.querySelector('.typewriter-text');
        if (element) element.textContent = ''; // Limpiar por si acaso
        return;
    }

    const element = document.querySelector('.typewriter-text');
    if (!element) return;

    const text = "Creador de DevCenter";
    let index = 0;
    let isDeleting = false;
    let delay = 100;

    const type = () => {
        const current = text.substring(0, index);
        element.textContent = current;

        if (!isDeleting && index < text.length) {
            index++;
            delay = 100;
        } else if (isDeleting && index > 0) {
            index--;
            delay = 50;
        } else if (!isDeleting && index === text.length) {
            isDeleting = true;
            delay = 2000;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            delay = 500;
        }
        setTimeout(type, delay);
    };
    type();
};

// Mobile Menu
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.remove('active');
    });
});

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    initTypewriter();

    // Año dinámico
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Nav active state
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    const currentPath = window.location.hash || '#';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === '#')) {
            link.classList.add('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Optimized Animations with requestAnimationFrame if possible or better CSS classes
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-item, .project-card, .contact-card, .section-header, .about-text, .about-skills-section').forEach((item) => {
        observer.observe(item);
    });

    // Contact setup
    const whatsappLink = document.getElementById('whatsappContact');
    if (whatsappLink && CONFIG.contacto.whatsapp) {
        whatsappLink.href = `https://wa.me/${CONFIG.contacto.whatsapp}`;
    }

    const emailLink = document.getElementById('emailContact');
    const emailModal = document.getElementById('emailModal');
    const emailModalClose = document.getElementById('emailModalClose');
    const emailDisplay = document.getElementById('emailDisplay');
    const emailCopyBtn = document.getElementById('emailCopyBtn');

    if (emailLink && emailModal && CONFIG.contacto.email) {
        if (emailDisplay) emailDisplay.textContent = CONFIG.contacto.email;
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

    if (emailModal) {
        emailModal.addEventListener('click', (e) => {
            if (e.target === emailModal) emailModal.classList.remove('active');
        });
    }

    if (emailCopyBtn) {
        emailCopyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(CONFIG.contacto.email);
                emailCopyBtn.classList.add('copied');
                const originalHtml = emailCopyBtn.innerHTML;
                emailCopyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copiado!`;
                setTimeout(() => {
                    emailCopyBtn.classList.remove('copied');
                    emailCopyBtn.innerHTML = originalHtml;
                }, 2000);
            } catch (err) { console.error('Error:', err); }
        });
    }

    const githubLink = document.getElementById('githubContact');
    if (githubLink && CONFIG.contacto.github) githubLink.href = CONFIG.contacto.github;

    const discordLink = document.getElementById('discordContact');
    const discordModal = document.getElementById('discordModal');
    const discordModalClose = document.getElementById('discordModalClose');

    if (discordLink && discordModal) {
        const discordServerBtn = document.querySelector('.discord-server');
        const discordDmBtn = document.querySelector('.discord-dm');
        if (discordServerBtn && CONFIG.contacto.discordServer) discordServerBtn.href = CONFIG.contacto.discordServer;
        if (discordDmBtn && CONFIG.contacto.discordUser) discordDmBtn.href = `https://discord.com/users/${CONFIG.contacto.discordUser}`;
        
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

    if (discordModal) {
        discordModal.addEventListener('click', (e) => {
            if (e.target === discordModal) discordModal.classList.remove('active');
        });
    }
});