document.addEventListener("DOMContentLoaded", function() {

    const topbar = document.querySelector('.topbar');
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('header.topbar nav');

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

                    if (topbar && topbar.classList.contains('nav-open')) {
                        topbar.classList.remove('nav-open');
                        if (mobileToggle) {
                            mobileToggle.setAttribute('aria-expanded', 'false');
                            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                }
            }
        });
    });

    // ================= MENÚ MÓVIL =================
    if (mobileToggle && topbar && nav) {
        mobileToggle.setAttribute('aria-expanded', 'false');

        mobileToggle.addEventListener('click', function() {
            const isOpen = topbar.classList.toggle('nav-open');
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
            mobileToggle.innerHTML = isOpen
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        });
    }

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