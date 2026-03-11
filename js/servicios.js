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
// ================= MODAL PARA OTROS SERVICIOS =================
const modal = document.getElementById('serviceModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalWhatsapp = document.getElementById('modalWhatsapp');

// Información detallada de cada servicio
const serviceDetails = {
    "Seguros": {
        desc: "Ofrecemos asesoramiento en seguros de salud, vida, hogar y vehículos para proteger lo que más importa.",
        features: ["Seguros de salud privados", "Seguros de vida y accidentes", "Seguros de hogar y vehículos", "Gestión de siniestros"]
    },
    "Peritos Judiciales": {
        desc: "Contamos con expertos certificados para emitir informes periciales en procesos judiciales.",
        features: ["Informes periciales económicos", "Informes periciales sociales", "Testigos expertos en juicio", "Asesoramiento técnico"]
    },
    "Servicios Inmobiliarios": {
        desc: "Gestión integral de propiedades: compra, venta, alquiler y trámites relacionados.",
        features: ["Compra y venta de inmuebles", "Contratos de alquiler", "Gestión de propiedades", "Trámites registrales"]
    },
    "Eventos": {
        desc: "Organización profesional de eventos corporativos, sociales y culturales.",
        features: ["Eventos corporativos", "Bodas y celebraciones", "Gestión de permisos", "Coordinación integral"]
    },
    "Promoción de Artistas": {
        desc: "Gestión de derechos de autor, contratos y promoción para artistas y creadores.",
        features: ["Registro de propiedad intelectual", "Contratos artísticos", "Gestión de derechos", "Asesoría legal creativa"]
    },
    "Traducciones": {
        desc: "Traducciones oficiales y juradas para trámites administrativos y legales.",
        features: ["Traducciones juradas", "Documentación para extranjería", "Traducción de títulos académicos", "Entrega certificada"]
    }
};

// Abrir modal al hacer click en las tarjetas
document.querySelectorAll('.otro-card').forEach(card => {
    card.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        const phone = this.getAttribute('data-phone') || "+34657878642";
        const details = serviceDetails[service];
        
        if (details) {
            modalTitle.textContent = service;
            modalDesc.textContent = details.desc;
            
            // Limpiar y llenar características
            modalFeatures.innerHTML = '';
            details.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });
            
            // Configurar botón de WhatsApp
            const mensaje = `Hola, me interesa información sobre: ${service}`;
            modalWhatsapp.href = `https://wa.me/${phone.replace(/[\s\-().]/g, '')}?text=${encodeURIComponent(mensaje)}`;
            
            // Mostrar modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Evitar scroll
        }
    });
});

// Cerrar modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Cerrar con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});