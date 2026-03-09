document.addEventListener("DOMContentLoaded", function() {

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

    // ================= BOTÓN "CONSULTA ONLINE" =================
    // Solo funciona al HACER CLIC, nunca al cargar la página
    const consultBtn = document.querySelector('.consult-btn');
    if (consultBtn) {
        consultBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const formSection = document.getElementById('formulario');
            if (formSection) {
                formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

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