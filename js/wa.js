document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("form-whatsapp");

    if (!form) {
        console.error("❌ Error: Formulario con ID 'form-whatsapp' no encontrado");
        return;
    }

    console.log("✅ Formulario encontrado y listo para enviar");

    // ================= MAPEO IDIOMA → PREFIJO TELEFÓNICO =================
    const phonePrefixByLanguage = {
        "Español": "+34",    // España
        "Catalán": "+34",    // España
        "Inglés": "+44",     // Reino Unido
        "Francés": "+33",    // Francia
        // 👇 Agrega más idiomas aquí si es necesario
    };
    const defaultPrefix = "+34"; // Prefijo por defecto (España)

    // ================= FUNCIÓN: APLICAR PREFIJO AUTOMÁTICO =================
    function applyPhonePrefix() {
        const idiomaSelect = document.getElementById("idioma");
        const telefonoInput = document.getElementById("telefono");
        
        if (!idiomaSelect || !telefonoInput) return;
        
        const idiomaSeleccionado = idiomaSelect.value;
        const prefijo = phonePrefixByLanguage[idiomaSeleccionado] || defaultPrefix;
        let valorActual = telefonoInput.value.trim();
        
        // Limpiar valor de prefijos existentes para evitar duplicados
        valorActual = valorActual.replace(/^\+?\d{1,3}/, '').replace(/^[\s\-().]/, '');
        
        // Si el campo está vacío o no tiene prefijo, agregar el correspondiente
        if (!valorActual.startsWith('+')) {
            telefonoInput.value = prefijo + (valorActual ? ' ' + valorActual : '');
        }
    }

    // ================= EVENTO: CAMBIO DE IDIOMA → ACTUALIZAR PREFIJO =================
    const idiomaSelect = document.getElementById("idioma");
    if (idiomaSelect) {
        idiomaSelect.addEventListener('change', applyPhonePrefix);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log("📝 Enviando formulario...");

        // === 1. VALIDAR CHECKBOX DE CONSENTIMIENTO ===
        const consentCheckbox = document.getElementById("consent");
        if (!consentCheckbox || !consentCheckbox.checked) {
            alert("⚠️ Debes aceptar la política de privacidad para continuar.");
            return;
        }

        // === 2. OBTENER Y LIMPIAR VALORES ===
        const nombre = document.getElementById("nombre")?.value.trim();
        const apellidos = document.getElementById("apellidos")?.value.trim();
        const correo = document.getElementById("correo")?.value.trim();
        const telefono = document.getElementById("telefono")?.value.trim();
        const idioma = document.getElementById("idioma")?.value;
        const descripcion = document.getElementById("descripcion")?.value.trim();

        // === 3. VALIDAR CAMPOS VACÍOS ===
        if (!nombre || !apellidos || !correo || !telefono || !idioma || !descripcion) {
            alert("⚠️ Por favor, completa todos los campos obligatorios.");
            return;
        }

        // === 4. VALIDAR EMAIL ===
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("⚠️ Por favor, introduce un correo electrónico válido.");
            return;
        }

        // === 5. PROCESAR TELÉFONO (con prefijo automático si falta) ===
        let telefonoLimpio = telefono.replace(/[\s\-().]/g, '');
        
        // Si no tiene prefijo, intentar inferirlo del idioma seleccionado
        if (!telefonoLimpio.startsWith('+')) {
            const prefijoIdioma = phonePrefixByLanguage[idioma] || defaultPrefix;
            telefonoLimpio = prefijoIdioma + telefonoLimpio;
        }
        
        // Asegurar formato internacional correcto
        if (!telefonoLimpio.startsWith('+')) {
            telefonoLimpio = '+' + telefonoLimpio;
        }

        console.log("📞 Teléfono procesado:", telefonoLimpio);

        // === 6. VALIDAR FORMATO DE TELÉFONO ===
        const phoneRegex = /^\+?[1-9]\d{7,14}$/;
        if (!phoneRegex.test(telefonoLimpio.replace('+', ''))) {
            alert("⚠️ Por favor, introduce un número de teléfono válido.\nEjemplo: +34 657 87 86 42");
            return;
        }

        // === 7. CONSTRUIR MENSAJE ===
        const mensaje = `
🌟 *NUEVA CONSULTA DESDE LA WEB* 🌟

👤 *Nombre completo:*
${nombre} ${apellidos}

📧 *Correo electrónico:*
${correo}

📞 *Teléfono:*
${telefonoLimpio}

🌍 *Idioma de atención:*
${idioma}

📝 *DETALLES DE LA CONSULTA:*
${descripcion}

─────────────────
*FA Asesoría Global*
Asesoría Legal, Fiscal y de Extranjería
─────────────────
        `.trim();

        // === 8. CONFIGURAR NÚMERO DE WHATSAPP ===
        const numeroWhatsApp = "+34657878642";
        const numeroLimpio = numeroWhatsApp.replace(/[\s\-().]/g, '');

        // === 9. CONSTRUIR URL (SIN ESPACIOS) ✅
        const url = `https://wa.me/${numeroLimpio}?text=${encodeURIComponent(mensaje)}`;
        
        console.log("🔗 URL generada:", url);

        // === 10. ABRIR WHATSAPP ===
        try {
            const whatsappWindow = window.open(url, '_blank', 'noopener,noreferrer');
            
            if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
                if (confirm("⚠️ Tu navegador bloqueó la ventana emergente.\n\n¿Quieres abrir WhatsApp ahora?")) {
                    window.location.href = url;
                }
            } else {
                form.reset();
                if (consentCheckbox) consentCheckbox.checked = false;
                alert("✅ ¡Consulta enviada!\n\nSe abrirá WhatsApp para completar tu mensaje.");
            }
        } catch (error) {
            console.error("❌ Error al abrir WhatsApp:", error);
            if (confirm("❌ Error al abrir WhatsApp.\n\n¿Quieres copiar el enlace manualmente?")) {
                navigator.clipboard.writeText(url).then(() => {
                    alert("✅ Enlace copiado al portapapeles.");
                }).catch(() => {
                    alert("URL para WhatsApp:\n\n" + url);
                });
            }
        }
    });

    // === FORMATO DE TELÉFONO: LIMPIEZA SIMPLE SIN SALTO DE CURSOR ===
    const telefonoInput = document.getElementById("telefono");
    if (telefonoInput) {
        // Aplicar prefijo inicial según idioma por defecto
        setTimeout(applyPhonePrefix, 100);
        
        telefonoInput.addEventListener('input', function() {
            // Solo permitir números, + y espacios
            let valor = this.value.replace(/[^0-9+\s]/g, '');
            
            // Asegurar máximo un + al inicio
            const tienePlus = valor.includes('+');
            valor = valor.replace(/\+/g, '');
            if (tienePlus) {
                valor = '+' + valor;
            }
            
            this.value = valor;
        });
        
        // Al perder el foco, asegurar que tenga prefijo si está vacío
        telefonoInput.addEventListener('blur', function() {
            if (!this.value || this.value === '+') {
                applyPhonePrefix();
            }
        });
    }

    // Limitar longitud de campos
    const nombreInput = document.getElementById("nombre");
    const apellidosInput = document.getElementById("apellidos");
    
    if (nombreInput) nombreInput.setAttribute("maxlength", "50");
    if (apellidosInput) apellidosInput.setAttribute("maxlength", "100");
    if (telefonoInput) telefonoInput.setAttribute("maxlength", "20");

    console.log("✅ Script de WhatsApp con prefijo automático por idioma listo");
});