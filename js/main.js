document.addEventListener("DOMContentLoaded", function() {

    const topbar = document.querySelector('.topbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('header.topbar nav');

    // ================= FUNCIONES AUXILIARES =================
    function scrollToTarget(targetSelector) {
        if (!targetSelector) return;
        const target = document.querySelector(targetSelector);
        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    function sanitizePhone(phone) {
        return (phone || '').replace(/[\s\-().]/g, '');
    }

    function openWhatsApp(phone, message) {
        const numeroLimpio = sanitizePhone(phone);
        if (!numeroLimpio) return;

        const url = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(message)}`;

        const whatsappWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
            window.location.href = url;
        }
    }

    // ================= SCROLL SUAVE EN MENÚ (CORREGIDO) =================
    // Solo hace scroll, NO cierra el menú ni toca el icono para evitar parpadeos
    document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            const id = enlace.getAttribute('href');
            if (id && id !== '#') {
                const target = document.querySelector(id);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // El cierre del menú se maneja exclusivamente en el evento de clic del enlace (abajo)
                }
            }
        });
    });

    // ================= MENÚ MÓVIL (ICONO SIEMPRE VISIBLE) =================
    if (mobileToggle && topbar && nav) {
        
        // 1. Al hacer clic en el icono: Abrir/Cerrar menú
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation(); 
            topbar.classList.toggle('nav-open');
            // NO cambiamos el innerHTML. El icono permanece igual siempre.
        });

        // 2. Al hacer clic en un enlace (Servicios, Contacto...):
        // Cerramos el menú desplegable, pero el icono permanece visible gracias al CSS.
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                topbar.classList.remove('nav-open');
                // IMPORTANTE: No modificamos el icono aquí.
            });
        });
    }

    // 3. Cerrar menú al hacer clic FUERA (en el Hero o cualquier lado)
    document.addEventListener('click', (e) => {
        if (topbar && topbar.classList.contains('nav-open')) {
            // Si el clic NO fue dentro de la barra ni en el botón
            if (!topbar.contains(e.target)) {
                topbar.classList.remove('nav-open');
            }
        }
    });

    // ================= BOTONES CON SCROLL GENÉRICO =================
    document.querySelectorAll('[data-scroll-target]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToTarget(this.getAttribute('data-scroll-target'));
        });
    });

    // ================= BOTONES RÁPIDOS DE WHATSAPP =================
    document.querySelectorAll('.js-wa-quick').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const phone = this.getAttribute('data-wa-phone') || '+34657878642';
            const service = this.getAttribute('data-wa-service') || 'Asesoría';
            const message = `Hola, quiero solicitar asesoría sobre ${service}`;

            openWhatsApp(phone, message);
        });
    });

    // ================= TIMELINE: OBSERVADOR DE SCROLL =================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length > 0) {
        const timelineObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        timelineItems.forEach(item => {
            timelineObserver.observe(item);
        });
    }

    // ================= FOOTER: OBSERVADOR DE SCROLL =================
    const footer = document.querySelector('.reveal-footer');
    
    if (footer) {
        const footerObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.classList.add('visible');
                    footerObserver.unobserve(footer);
                }
            });
        }, { 
            threshold: 0.2 
        });
        
        footerObserver.observe(footer);
    }

    // ================= SECCIONES REVEAL =================
    const revealElements = document.querySelectorAll('.reveal, .fade-left, .fade-right');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1
        });
        
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

});