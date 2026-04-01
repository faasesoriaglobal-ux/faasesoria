/* js/cookies.js - Lógica y Estilos del Banner de Cookies */

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Crear el HTML del banner dinámicamente
    const bannerHTML = `
        <div id="cookie-banner-global">
            <div class="cookie-content">
                <p>
                    Utilizamos cookies para mejorar su experiencia. Puede aceptar todas o rechazarlas. 
                    Más info en nuestra <a href="politica-cookies.html">Política de Cookies</a>.
                </p>
                <div class="cookie-actions">
                    <button id="btn-reject-cookie" class="c-btn c-reject">Rechazar</button>
                    <button id="btn-accept-cookie" class="c-btn c-accept">Aceptar</button>
                </div>
            </div>
        </div>
    `;
    
    // Insertar el banner al final del body
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    // 2. Inyectar los estilos CSS dinámicamente
    const styles = `
        #cookie-banner-global {
            position: fixed; bottom: -100%; left: 0; width: 100%;
            background: rgba(14, 26, 43, 0.98); color: #fff;
            padding: 1.5rem 2rem; z-index: 9999;
            display: flex; justify-content: space-between; align-items: center;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.2);
            transition: bottom 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
            flex-wrap: wrap; gap: 1rem; backdrop-filter: blur(10px);
            font-family: var(--font-body, sans-serif); font-size: 0.95rem;
        }
        #cookie-banner-global.show { bottom: 0; }
        #cookie-banner-global p { margin: 0; flex: 1; min-width: 280px; line-height: 1.5; }
        #cookie-banner-global a { color: #ffc107; text-decoration: underline; font-weight: 600; }
        .cookie-actions { display: flex; gap: 1rem; flex-shrink: 0; }
        .c-btn { padding: 0.6rem 1.5rem; border-radius: 50px; font-weight: 600; cursor: pointer; border: none; font-size: 0.9rem; transition: all 0.3s ease; font-family: inherit; }
        .c-accept { background: #f57c00; color: #fff; }
        .c-accept:hover { background: #c2185b; transform: translateY(-2px); }
        .c-reject { background: transparent; border: 1px solid #fff; color: #fff; }
        .c-reject:hover { background: #fff; color: #0e1a2b; }
        @media (max-width: 768px) {
            #cookie-banner-global { flex-direction: column; text-align: center; padding: 1.5rem; }
            #cookie-banner-global p { margin-bottom: 1rem; }
            .cookie-actions { width: 100%; justify-content: center; }
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // 3. Lógica de funcionamiento
    const banner = document.getElementById('cookie-banner-global');
    const btnAccept = document.getElementById('btn-accept-cookie');
    const btnReject = document.getElementById('btn-reject-cookie');

    // Solo mostrar si no hay decisión previa guardada
    if (!localStorage.getItem('fa_cookie_consent')) {
        setTimeout(() => {
            if(banner) banner.classList.add('show');
        }, 1000);
    }

    if(btnAccept) {
        btnAccept.addEventListener('click', () => {
            localStorage.setItem('fa_cookie_consent', 'accepted');
            banner.classList.remove('show');
        });
    }

    if(btnReject) {
        btnReject.addEventListener('click', () => {
            localStorage.setItem('fa_cookie_consent', 'rejected');
            banner.classList.remove('show');
        });
    }
});