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
    if (emailModal) {
        emailModal.addEventListener('click', (e) => {
            if (e.target === emailModal) {
                emailModal.classList.remove('active');
            }
        });
    }
    
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
    if (discordModal) {
        discordModal.addEventListener('click', (e) => {
            if (e.target === discordModal) {
                discordModal.classList.remove('active');
            }
        });
    }
    
    // Discord Shop - Custom Creator functionality
    const customOption = document.getElementById('customOption');
    const templateOption = document.getElementById('templateOption');
    const customCreator = document.getElementById('customCreator');
    const templateSection = document.getElementById('templateSection');
    const creationOptions = document.querySelector('.discord-creation-options');
    const backFromCustom = document.getElementById('backFromCustom');
    const backFromTemplates = document.getElementById('backFromTemplates');
    
    if (customOption && templateOption) {
        customOption.addEventListener('click', () => {
            creationOptions.style.display = 'none';
            customCreator.style.display = 'block';
        });
        
        templateOption.addEventListener('click', () => {
            creationOptions.style.display = 'none';
            templateSection.style.display = 'block';
        });
    }
    
    if (backFromCustom) {
        backFromCustom.addEventListener('click', () => {
            customCreator.style.display = 'none';
            creationOptions.style.display = 'grid';
        });
    }
    
    if (backFromTemplates) {
        backFromTemplates.addEventListener('click', () => {
            templateSection.style.display = 'none';
            creationOptions.style.display = 'grid';
        });
    }
    
    // Channel and category style handling
    const channelStyleRadios = document.querySelectorAll('input[name="channelStyle"]');
    const channelFormatInput = document.getElementById('channelFormatInput');
    const channelPreview = document.getElementById('channelPreview');
    
    const categoryStyleRadios = document.querySelectorAll('input[name="categoryStyle"]');
    const categoryFormatInput = document.getElementById('categoryFormatInput');
    const categoryPreview = document.getElementById('categoryPreview');
    
    // When selecting a predefined style, put the format in the input
    channelStyleRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (channelFormatInput) {
                const label = radio.closest('.style-option');
                const format = label?.getAttribute('data-format') || '';
                channelFormatInput.value = format;
                const preview = format.replace(/\(emoji\)/g, '🌐').replace(/\(nombre\)/g, 'Chat');
                channelPreview.textContent = '#' + preview;
            }
        });
    });
    
    categoryStyleRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (categoryFormatInput) {
                const label = radio.closest('.style-option');
                const format = label?.getAttribute('data-format') || '';
                categoryFormatInput.value = format;
                const preview = format.replace(/\(emoji\)/g, '🌐').replace(/\(nombre\)/g, 'GENERAL');
                categoryPreview.textContent = preview;
            }
        });
    });
    
    // When typing in custom input, deselect predefined styles
    if (channelFormatInput) {
        channelFormatInput.addEventListener('input', () => {
            const format = channelFormatInput.value;
            if (format) {
                channelStyleRadios.forEach(r => r.checked = false);
                const preview = format.replace('(emoji)', '🌐').replace('(nombre)', 'Chat');
                channelPreview.textContent = '#' + preview;
            } else {
                channelPreview.textContent = '';
            }
        });
    }
    
    if (categoryFormatInput) {
        categoryFormatInput.addEventListener('input', () => {
            const format = categoryFormatInput.value;
            if (format) {
                categoryStyleRadios.forEach(r => r.checked = false);
                const preview = format.replace('(emoji)', '🌐').replace('(nombre)', 'GENERAL');
                categoryPreview.textContent = preview;
            } else {
                categoryPreview.textContent = '';
            }
        });
    }
    
    // Generate templates from PLANTILLAS
    const templatesGrid = document.getElementById('templatesGrid');
    if (templatesGrid && typeof PLANTILLAS !== 'undefined') {
        Object.keys(PLANTILLAS).forEach(key => {
            const p = PLANTILLAS[key];
            const card = document.createElement('div');
            card.className = 'template-card';
            
            const isImage = p.canales && (p.canales.endsWith('.png') || p.canales.endsWith('.jpg') || p.canales.endsWith('.jpeg') || p.canales.endsWith('.gif') || p.canales.endsWith('.webp'));
            let canalesContent;
            
            if (isImage) {
                canalesContent = `<img src="${p.canales}" alt="Canales" class="template-canales-img">`;
            } else if (p.canales && typeof p.canales === 'string') {
                const canalesLines = p.canales.split('\n').map((line, index) => {
                    if (line.startsWith('$$')) {
                        return `<div class="template-channel-category"><span class="category-arrow">▼</span>${line.substring(2)}</div>`;
                    } else if (line.startsWith('$')) {
                        return `<div class="template-channel template-voice-channel"><span class="channel-icon">🔊</span>${line.substring(1)}</div>`;
                    }
                    return `<div class="template-channel template-text-channel"><span class="channel-icon">#</span>${line}</div>`;
                }).join('');
                canalesContent = `<div class="template-channels-list">${canalesLines}</div>`;
            } else {
                canalesContent = `<div class="template-detail"><span>📁</span> ${p.canales || ''}</div>`;
            }
            
            const rolesHtml = p.roles ? p.roles.split('\n').map(role => `<div class="template-role">${role}</div>`).join('') : '';
            
            const channelIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"></path></svg>`;
            
            const rolesIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path><path d="M20 19.006H22V20.006H20V19.006ZM14 8.00598C14 10.211 15.794 12.006 18 12.006C20.206 12.006 22 10.211 22 8.00598C22 5.80098 20.206 4.00598 18 4.00598C15.794 4.00598 14 5.80098 14 8.00598ZM18 13.006C16.586 13.006 15.27 13.265 14.092 13.712C15.896 15.013 16.966 16.89 17.069 19.006H22V19.006C22 15.473 18.711 13.006 14 13.006H18Z" fill-opacity="0.5"></path></svg>`;
            
            card.innerHTML = `
                <div class="template-card-header">
                    <span class="template-card-name">${p.nombre}</span>
                    <span class="template-card-price">${p.precio}</span>
                </div>
                <div class="template-card-info">${p.info || ''}</div>
                <div class="template-card-details" id="details-${key}">
                    <div class="template-section">
                        <div class="template-section-title">${channelIcon} Canales</div>
                        ${canalesContent}
                    </div>
                    <div class="template-section">
                        <div class="template-section-title">${rolesIcon} Roles</div>
                        <div class="template-roles-list">${rolesHtml}</div>
                    </div>
                </div>
                <div class="template-card-actions">
                    <button class="btn-card btn-view-card" data-template="${key}">Ver</button>
                    <button class="btn-card btn-request-card" data-template="${key}" data-price="${p.precio}">Solicitar</button>
                </div>
            `;
            templatesGrid.appendChild(card);
        });
    }
    
    // Toggle template details on Ver button click
    document.querySelectorAll('.btn-view-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const templateNum = btn.getAttribute('data-template');
            const detailsEl = document.getElementById(`details-${templateNum}`);
            if (detailsEl) {
                detailsEl.classList.toggle('expanded');
                btn.textContent = detailsEl.classList.contains('expanded') ? 'Ocultar' : 'Ver';
            }
        });
    });
    
    // Template modal functionality
    const templateModal = document.getElementById('templateModal');
    const templateModalClose = document.getElementById('templateModalClose');
    const templateImage = document.getElementById('templateImage');
    const templateImageContainer = document.getElementById('templateImageContainer');
    const templateInfoContainer = document.getElementById('templateInfoContainer');
    const templateInfo = document.getElementById('templateInfo');
    const modalTemplateNum = document.getElementById('modalTemplateNum');
    
    
    document.querySelectorAll('.btn-request-card').forEach(btn => {
        btn.addEventListener('click', () => {
            const templateNum = btn.getAttribute('data-template');
            const price = btn.getAttribute('data-price');
            const plantilla = PLANTILLAS[templateNum];
            
            const message = `¡Hola! Me interesa solicitar una plantilla de servidor Discord.

📋 *Detalles del producto:*
Nombre: ${plantilla.nombre}
Descripción: ${plantilla.info}
Precio: ${price}
Producto: Plantilla ${templateNum}

Por favor, ¿cuál es el siguiente paso para adquirirlo?`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/523211002280?text=${encodedMessage}`, '_blank');
        });
    });
    
    if (templateModalClose) {
        templateModalClose.addEventListener('click', () => {
            templateModal.classList.remove('active');
        });
    }
    
    if (templateModal) {
        templateModal.addEventListener('click', (e) => {
            if (e.target === templateModal) {
                templateModal.classList.remove('active');
            }
        });
    }
    
    
    // Submit custom server request
    const submitCustomServer = document.getElementById('submitCustomServer');
    if (submitCustomServer) {
        submitCustomServer.addEventListener('click', () => {
            const serverName = document.getElementById('serverName')?.value?.trim() || '';
            const serverTheme = document.getElementById('serverTheme')?.value?.trim() || '';
            const channelStyle = channelFormatInput?.value?.trim() || '';
            const categoryStyle = categoryFormatInput?.value?.trim() || '';
            
            // Validation - check all fields are filled
            const errors = [];
            if (!channelStyle) {
                errors.push('Estilo de canales');
            }
            if (!categoryStyle) {
                errors.push('Estilo de categorias');
            }
            if (!serverName) {
                errors.push('Nombre del servidor');
            }
            if (!serverTheme) {
                errors.push('Tematica del servidor');
            }
            
            if (errors.length > 0) {
                alert('Por favor completa los siguientes campos:\n\n• ' + errors.join('\n• '));
                return;
            }
            
            // Build WhatsApp message
            const message = `¡Hola! Me gustaría solicitar un servidor de Discord personalizado.

📋 *Detalles de mi servidor:*
Nombre: ${serverName}
Temática: ${serverTheme}

🎨 *Estilos personalizados:*
Formato de canales: ${channelStyle}
Formato de categorías: ${categoryStyle}

¿Cuál es el precio y el próximo paso para comenzar?`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/523211002280?text=${encodedMessage}`, '_blank');
        });
    }
});
