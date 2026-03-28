// ================= MANEJAR CLICS EN SERVICIOS =================
document.querySelectorAll('.service-more ul li[data-service]').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Obtener servicio y teléfono (con fallback a número por defecto)
        const serviceName = this.getAttribute('data-service');
        const phone = this.getAttribute('data-phone') || "+34657878642"; // 👈 Número por defecto
        
        // Feedback visual
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 500);
        
        // Construir mensaje personalizado
        const mensaje = `
🌟 *INTERÉS EN SERVICIO* 🌟

Hola, estoy interesado en el siguiente servicio:

📝 *Servicio seleccionado:*
${serviceName}

Por favor, me gustaría recibir más información sobre:
• Proceso y requisitos
• Tiempo estimado
• Costo aproximado
• Documentación necesaria

Gracias por su atención.

─────────────────
*FA Asesoría Global*
Asesoría Legal, Fiscal y de Extranjería
─────────────────
        `.trim();
        
        // Limpiar número y construir URL
        const numeroLimpio = phone.replace(/[\s\-().]/g, '');
        const url = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`;
        
        console.log("📱 Abriendo WhatsApp para:", serviceName);
        console.log("📞 Número:", phone);
        console.log("🔗 URL:", url);
        
        // Abrir WhatsApp
        try {
            const whatsappWindow = window.open(url, '_blank', 'noopener,noreferrer');
            
            if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
                console.warn("⚠️ Popup bloqueado, usando location.href");
                
                if (confirm("⚠️ Tu navegador bloqueó la ventana emergente.\n\n¿Quieres abrir WhatsApp ahora para consultar sobre: " + serviceName + "?")) {
                    window.location.href = url;
                }
            } else {
                console.log("✅ WhatsApp abierto correctamente");
            }
        } catch (error) {
            console.error("❌ Error al abrir WhatsApp:", error);
            alert("❌ Error al abrir WhatsApp. Por favor, inténtalo de nuevo.");
        }
    });
});

console.log("✅ Servicios WhatsApp activados");
// ================= MODAL PARA OTROS SERVICIOS (CON LOGOS Y SOCIOS) =================
const modal = document.getElementById('serviceModal');
const modalClose = document.getElementById('modalClose');
const modalLogoContainer = document.getElementById('modalLogo'); // Nuevo contenedor para el logo
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const modalPartnerNote = document.getElementById('modalPartnerNote'); // Nuevo elemento para nota de socio

// Información detallada de cada servicio con Identidad Corporativa
const serviceDetails = {
    "Seguros": {
        company: "Seguros", // Nombre de la empresa socia
        logo: "img/FAGRUP.png", // Ruta de tu imagen (PNG transparente recomendado)
        desc: "Asesoramiento integral en seguros de salud, vida, hogar y vehículos. Protegemos lo que más importa con las mejores aseguradoras.",
        features: ["Seguros de salud privados", "Seguros de vida y accidentes", "Seguros de hogar y vehículos", "Gestión de siniestros"],
        color: "#0056b3" // Azul confianza
    },
    "Peritos Judiciales": {
        company: "Justicia Pericial Expertos",// aun no se ha dicho q logo poner
        desc: "Equipo de expertos certificados para emitir informes periciales rigurosos en procesos judiciales civiles y penales.",
        features: ["Informes periciales económicos", "Informes periciales sociales", "Testigos expertos en juicio", "Asesoramiento técnico"],
        color: "#8e44ad" // Violeta justicia
    },
    "Servicios Inmobiliarios": {
        company: "FA Inmobiliaria & Gestión",
        logo: "img/FAGRUP.png",
        desc: "Gestión integral de propiedades: compra, venta, alquiler y trámites relacionados.",
        features: ["Compra y venta de inmuebles", "Contratos de alquiler", "Gestión de propiedades", "Trámites registrales"],
        color: "#d35400" // Naranja ladrillo/tierra
    },
    "Eventos": {
        company: "Global Eventos",
        logo: "img/CARD.png",
        desc: "Organización profesional de eventos corporativos, bodas y celebraciones. Nos ocupamos de todo para que tú disfrutes.",
        features: ["Eventos corporativos", "Bodas y celebraciones", "Gestión de permisos", "Coordinación integral"],
        color: "#e91e63" // Rosa celebración
    },
    "Promoción de Artistas": {
        company: "Promoción de Artistas",
        logo: "img/CARD.png",
        desc: "Gestión especializada de derechos de autor, contratos discográficos y promoción para artistas y creadores.",
        features: ["Registro de propiedad intelectual", "Contratos artísticos", "Gestión de derechos", "Asesoría legal creativa"],
        color: "#27ae60" // Verde creatividad
    },
    "Traducciones": {
        company: "FA Traducciones",// no hay logo , son externos
        desc: "Traducciones oficiales y juradas para trámites administrativos y legales.",
        features: ["Traducciones juradas", "Documentación para extranjería", "Traducción de títulos académicos", "Entrega certificada"],
        color: "#2980b9" // Azul institucional
    }
};

// Abrir modal al hacer click en las tarjetas 24/3
document.querySelectorAll('.otro-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceKey = this.getAttribute('data-service'); // Usamos la clave del objeto
        const phone = this.getAttribute('data-phone') || "+34657878642";
        const details = serviceDetails[serviceKey];
        
        if (details) {
            // 1. Inyectar Logo
            if (modalLogoContainer) {
                modalLogoContainer.innerHTML = `<img src="${details.logo}" alt="Logo ${details.company}" class="partner-logo" onerror="this.style.display='none'">`;
                // Opcional: Cambiar color de algún detalle del modal según la marca
                // modalTitle.style.color = details.color; 
            }

            // 2. Títulos y Descripción
            modalTitle.textContent = details.company; // Mostramos el nombre de la empresa socia
            // Si prefieres mostrar el nombre del servicio como título principal y la empresa abajo, descomenta esto:
            // modalTitle.textContent = serviceKey; 
            // modalDesc.textContent = `${details.company}: ${details.desc}`;
            modalDesc.textContent = details.desc;
            
            // 3. Lista de Características (Con iconos de check)
            modalFeatures.innerHTML = '';
            details.features.forEach(feature => {
                const li = document.createElement('li');
                // Añadimos un span para el icono check
                li.innerHTML = `<span class="check-icon">✓</span> ${feature}`;
                modalFeatures.appendChild(li);
            });
            
            // 4. Nota de pie de página (Opcional, da confianza)
            if (modalPartnerNote) {
                modalPartnerNote.innerHTML = `Servicio gestionado por <strong>${details.company}</strong>, colaboradores de confianza de FA Asesoría Global.`;
            }

            // 5. Configurar botón de WhatsApp
            const mensaje = `Hola, me interesa el servicio de ${details.company} (${serviceKey}). ¿Podéis darme más información?`;
            modalWhatsapp.href = `https://wa.me/${phone.replace(/[\s\-().]/g, '')}?text=${encodeURIComponent(mensaje)}`;
            
            // 6. Mostrar modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evitar scroll
        } else {
            console.warn("Servicio no configurado:", serviceKey);
        }
    });
});

// Cerrar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});