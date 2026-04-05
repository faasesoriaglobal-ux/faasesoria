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

    // ================= SCROLL SUAVE EN MENÚ =================
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
                }
            }
        });
    });

    // ================= MENÚ MÓVIL =================
    if (mobileToggle && topbar && nav) {
        
        // 1. Al hacer clic en el icono: Abrir/Cerrar menú
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation(); 
            topbar.classList.toggle('nav-open');
        });

        // 2. Al hacer clic en un enlace: Cerrar menú
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                topbar.classList.remove('nav-open');
            });
        });
    }

    // 3. Cerrar menú al hacer clic FUERA
    document.addEventListener('click', (e) => {
        if (topbar && topbar.classList.contains('nav-open')) {
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

    // ================= SECCIONES REVEAL (UNIFICADO) =================
    // Incluye: reveal, fade-left, fade-right y separator-section
    const revealElements = document.querySelectorAll('.reveal, .fade-left, .fade-right, .separator-section');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active'); // Para reveal normales
                    
                    // Específico para el separador animado
                    if (entry.target.classList.contains('separator-section')) {
                        entry.target.classList.add('visible');
                    }
                }
            });
        }, {
            threshold: 0.2
        });
        
        revealElements.forEach(el => {
            revealObserver.observe(el);
        });
    }

    // ================= CARRUSEL DE RESEÑAS GOOGLE =================
    const reviewsTrack = document.getElementById('reviewsTrack');
    
    if (reviewsTrack) {
        let index = 0;
        const cards = reviewsTrack.querySelectorAll('.review-card');
        const total = cards.length;
        const dots = document.querySelectorAll('.carousel-dots .dot');

        // Función para actualizar la posición del carrusel y los puntos
        const updateCarousel = () => {
            // Mover el track horizontalmente
            reviewsTrack.style.transform = `translateX(-${index * 100}%)`;
            
            // Actualizar clase 'active' en los puntos
            dots.forEach((d, i) => {
                if (i === index) {
                    d.classList.add('active');
                } else {
                    d.classList.remove('active');
                }
            });
        };

        // Cambiar cada 4 segundos
        setInterval(() => {
            index = (index + 1) % total; // Volver a 0 cuando llega al final
            updateCarousel();
        }, 4000);
    }

});