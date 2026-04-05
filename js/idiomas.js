document.addEventListener('DOMContentLoaded', function() {

    // ================= OBJETO DE TRADUCCIONES COMPLETO =================
    const translations = {
        es: {
            // Header & Nav
            nav_inicio: "Inicio", nav_servicios: "Servicios", nav_empresa: "Sobre nosotros", nav_contacto: "Contacto", consulta_online: "Consulta online",
            // Hero
            hero_text_0: "Siempre contigo en tu proceso legal y migratorio",
            hero_text_1: "Acompañamiento humano, ético y profesional",
            hero_text_2: "Soluciones legales, fiscales y administrativas integrales",
            hero_text_3:"Tranquilidad financiera y crecimiento",
            hero_text_4:"Empatía, protección y soluciones humanas",
            hero_text_5:"Ahorro, cumplimiento y eficiencia",
            hero_text_6:"Reencuentro, unidad familiar y éxito en trámites",
            hero_text_7:"Protege tu Creatividad e Innovación",

            // Empresa
            quienes_somos_badge: "Nuestra Esencia",
            quienes_somos_title: "Más que una asesoría, <br>tu aliado estratégico en Barcelona",
            empresa_lead_new: "FA Asesoría Global es una firma legal y de gestión integral especializada en acompañar a la comunidad migrante y emprendedora. Transformamos la burocracia en soluciones claras, seguras y personalizadas.",
            empresa_text_new: "Con un enfoque humano y ético, no solo gestionamos trámites; coordinamos una red de expertos para garantizar tu tranquilidad jurídica. Tu éxito es nuestro compromiso.",
            stat_anios: "Años de experiencia",
            stat_clientes: "Clientes internacionales",
            nuestro_origen: "El Origen",
            fundador_text_new_1: "Nacido de la visión de <strong>Flor Andino</strong>. Tras vivir en primera persona los desafíos migratorios en 2004, transformó esa experiencia en un puente de ayuda real, consolidando en 2016 una firma estructurada y multidisciplinaria.",
            fundador_text_new_2: "\"Nuestro compromiso es brindar soluciones reales, escuchando cada necesidad para convertir la asesoría en un verdadero apoyo.\"",
            // >>> NUEVAS CLAVES AÑADIDAS <<<
            founder_lemma: "\"No pongas límites a tus exigencias\"",
            founder_signature: "— Flor Andino, Fundadora",
            
            valores_title: "Nuestros Pilares",
            val_1_t: "Acompañamiento Humano", val_1_d: "Cercanía y empatía en cada trámite.",
            val_2_t: "Integridad Ética", val_2_d: "Transparencia total y seguridad jurídica.",
            val_3_t: "Innovación", val_3_d: "Soluciones ágiles adaptadas a ti.",
            val_4_t: "Respeto a la Diversidad", val_4_d: "Un espacio inclusivo para todos.",
            timeline_title: "Nuestra Evolución",
            time_1_year: "2004-2008", hist_t1: "Inicios y Vocación", historia_1_new: "Comenzamos asesorando a familias migrantes con un enfoque cercano y humano, identificando la necesidad de información clara.",
            time_2_year: "2016", hist_t2: "Expansión Integral", historia_2_new: "Ampliamos servicios al área legal y fiscal, creando una red de colaboradores especializados para garantías totales.",
            time_3_year: "Actualidad", hist_t3: "Referente Global", historia_3_new: "Hoy somos líderes en Barcelona por nuestra ética, innovación y compromiso social con clientes nacionales e internacionales.",

            // Servicios Principales
            servicios: "Servicios",
            badge_extranjeria: "Extranjería", badge_legal: "Legal", badge_fiscal: "Fiscal", badge_autonomo: "Autónomos",
            label_extranjeria: "Departamento Extranjería", label_legal: "Departamento Legal", label_fiscal: "Departamento Fiscal", label_autonomo: "Departamento Autónomos",
            
            servicio_1_title: "Extranjería y trámites migratorios", servicio_1_subtitle: "Residencia · Nacionalidad · Arraigo · Visados",
            servicio_2_title: "Área Legal Integral", servicio_2_subtitle: "Penal · Civil · Familia · Laboral",
            servicio_3_title: "Fiscal y Contable", servicio_3_subtitle: "Autónomos · Empresas · IRPF",
            servicio_4_title: "Departamento Autónomo", servicio_4_subtitle: "Autónomos · Empresas · Trámites",
            
            // Extranjería (8 Items)
            servicio_1_item_1: "Solicitud y renovación de NIE y TIE", 
            servicio_1_item_2: "Residencia o permiso de trabajo país de origen", 
            servicio_1_item_3: "Residencia por familiar de español y comunitarias", 
            servicio_1_item_4: "Tramites de nacionalidad",
            servicio_1_item_5: "Arraigos: sociolaboral, socio formativo, social y de segunda oportunidad",
            servicio_1_item_6: "Recuperación de tarjetas",
            servicio_1_item_7: "Reagrupación familiar",
            servicio_1_item_8: "Recursos administrativos y contenciosos",
            
            // Legal (9 Items)
            servicio_2_item_1: "Defensa Penal", 
            servicio_2_item_2: "Cancelación de antecedentes penales y policiales", 
            servicio_2_item_3: "Violencia de género (defensa y acompañamiento)", 
            servicio_2_item_4: "Contratos civiles (alquiler, compraventa, servicios).",
            servicio_2_item_5: "Constitución de sociedades",
            servicio_2_item_6: "Recursos administrativos y contenciosos",
            servicio_2_item_7: "Visados",
            servicio_2_item_8: "Homologación de títulos universitarios",
            servicio_2_item_9: "Seguimiento documental y confidencialidad",
            
            // Fiscal (7 ÍTEMS)
            servicio_3_item_1: "Declaraciones anuales e IRPF", 
            servicio_3_item_2: "Contabilidad para autónomos y empresas", 
            servicio_3_item_3: "Gestión de impuestos", 
            servicio_3_item_4: "Asesoría financiera y previsión fiscal",
            servicio_3_item_5: "Atención y asesoramiento presencial y telefónica",
            servicio_3_item_6: "Constitución de empresas (Mercantil)",
            servicio_3_item_7: "Patentes",
            
            // Autónomos (8 ÍTEMS)
            servicio_4_item_1: "Atención y asesoramiento presencial y telefónico", 
            servicio_4_item_2: "Revisión de notificaciones diarias", 
            servicio_4_item_3: "Certificados digitales", 
            servicio_4_item_4: "Alta y baja de autónomos",
            servicio_4_item_5: "Creación de empresas", 
            servicio_4_item_6: "Número de Seguridad Social", 
            servicio_4_item_7: "Prestaciones y ayudas", 
            servicio_4_item_8: "Registro de marcas",
            
            btn_solicitar_asesoria: "Solicitar asesoría",

            // Separador Animado
            separator_text: "¡Y mucho más!",

            // Otros Servicios
            otros_badge: "Servicios Complementarios", otros_title: "Otros Servicios", otros_subtitle: "Descubre nuestra gama de servicios adicionales diseñados para cubrir todas tus necesidades",
            otros_card_1_title: "Seguros", otros_card_1_desc: "Protección completa para ti y tu familia",
            otros_card_2_title: "Peritos Judiciales", otros_card_2_desc: "Expertos certificados para tus casos legales",
            otros_card_3_title: "Servicios Inmobiliarios", otros_card_3_desc: "Gestión integral de propiedades",
            otros_card_4_title: "Eventos", otros_card_4_desc: "Organización profesional de eventos",
            otros_card_5_title: "Promoción de Artistas", otros_card_5_desc: "Derecho de autor y gestión artística",
            otros_card_6_title: "Traducciones", otros_card_6_desc: "Traducciones oficiales y juradas",
            overlay_text: "Solicitar información",
            otros_btn: "Solicitar asesoría completa",
            // CORREGIDO: Comillas escapadas para que funcione el HTML dentro del JSON
            otros_note: "¿No encuentras lo que buscas? <a href=\"https://wa.me/34657878642?text=Hola,%20necesito%20una%20asesoría%20personalizada\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--brand-orange);font-weight:bold;text-decoration:underline;\">Contáctanos aquí</a> para una solución personalizada.",

            // Formulario
            formulario_title: "HAZ TU CONSULTA", form_nombre: "Nombre", form_apellidos: "Apellidos", form_correo: "Correo electrónico", form_telefono: "Teléfono",
            form_idioma: "Idioma de atención", form_idioma_placeholder: "Selecciona un idioma", form_idioma_es: "Español", form_idioma_en: "Inglés", form_idioma_fr: "Francés", form_idioma_ca: "Catalán",
            form_descripcion: "Describe brevemente tu consulta", form_placeholder_descripcion: "Cuéntanos tu situación...",
            form_consent: "Acepto la <a href='politica-privacidad.html' target='_blank' rel='noopener'>política de privacidad</a> y autorizo el tratamiento de mis datos",
            form_btn: "Enviar consulta por WhatsApp",

            // Footer
            footer_empresa: "FA Asesoría Global", footer_servicios: "Legal · Fiscal · Extranjería",
            avisos_legales: "Avisos legales", aviso_legal: "Aviso legal", privacidad: "Privacidad", cookies: "Cookies",
            footer_contacto: "Contacto", footer_copy: "© 2026 FA Asesoría Global · Todos los derechos reservados",
            ph_nombre: "Tu nombre", ph_apellidos: "Tus apellidos", ph_correo: "tu@email.com", ph_telefono: "+34 657 87 86 42",

            // --- POLÍTICA DE PRIVACIDAD ---
            privacy_title: "Política de Privacidad",
            privacy_intro: "En cumplimiento del <strong>RGPD</strong> y la <strong>LOPDGDD</strong>, en <strong>FA Asesoría Global</strong> le informamos sobre el tratamiento de sus datos personales con la máxima confidencialidad.",
            privacy_responsible_title: "1. Responsable del Tratamiento",
            label_identity: "Identidad:",
            label_address: "Dirección:",
            label_email: "Email:",
            label_phone: "Teléfono:",
            privacy_data_title: "2. Datos Recogidos",
            privacy_data_intro: "Debido a nuestra actividad legal y de extranjería, podemos recoger:",
            privacy_data_1: "Datos identificativos (Nombre, DNI/NIE, Pasaporte).",
            privacy_data_2: "Datos de contacto (Email, Teléfono, Dirección).",
            privacy_data_3: "Datos laborales, fiscales y migratorios necesarios para el trámite.",
            privacy_data_4: "Datos especialmente protegidos solo si son estrictamente necesarios y con su consentimiento explícito.",
            privacy_purpose_title: "3. Finalidad",
            privacy_purpose_1: "Gestión de servicios de asesoría legal, fiscal y de extranjería.",
            privacy_purpose_2: "Comunicación con administraciones públicas.",
            privacy_purpose_3: "Envío de comunicaciones comerciales (solo con consentimiento).",
            privacy_rights_title: "4. Derechos ARCO-POL",
            privacy_rights_text: "Puede ejercer sus derechos de Acceso, Rectificación, Supresión, Limitación, Portabilidad y Oposición enviando un email a <strong>faasesoriaglobal@gmail.com</strong> adjuntando copia de su DNI/NIE. También puede reclamar ante la AEPD.",
            btn_back_home: "← Volver al Inicio",
            link_privacy: "Política de Privacidad",
            link_cookies: "Política de Cookies",
            link_legal: "Aviso Legal",

            // --- POLÍTICA DE COOKIES ---
            cookies_title: "Política de Cookies",
            cookies_intro: "En <strong>FA Asesoría Global</strong> utilizamos cookies propias y de terceros para mejorar su experiencia de navegación, analizar el tráfico y asegurar el correcto funcionamiento de nuestros servicios legales.",
            cookies_types_title: "Tipos de cookies que utilizamos:",
            cookies_tech: "<strong>Técnicas (Necesarias):</strong> Imprescindibles para navegar y usar funciones básicas como el formulario de contacto.",
            cookies_pref: "<strong>Preferencias:</strong> Recuerdan su idioma seleccionado.",
            cookies_analytics: "<strong>Analíticas:</strong> Nos ayudan a entender cómo interactúa con la web para mejorar nuestros contenidos (Google Analytics).",
            cookies_manage_title: "Gestión de cookies",
            cookies_manage_text: "Puede configurar su navegador para aceptar o rechazar cookies. Si las desactiva, algunas funcionalidades podrían no estar disponibles.",
            cookies_chrome: "<strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies",
            cookies_safari: "<strong>Safari:</strong> Preferencias → Privacidad → Cookies",
            cookies_firefox: "<strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies",
            cookie_banner_text: "Utilizamos cookies para mejorar su experiencia. Puede aceptarlas todas o rechazarlas. Más info en nuestra <a href='politica-cookies.html'>Política de Cookies</a>.",
            btn_accept: "Aceptar",
            btn_reject: "Rechazar",

            // --- AVISO LEGAL ---
            legal_title_aviso: "Aviso Legal",
            legal_data_title: "1. Datos Identificativos",
            legal_lssi_text: "De conformidad con la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI), se identifican los siguientes datos:",
            label_owner: "Titular:",
            label_address_full: "Domicilio Social:",
            label_email_contact: "Email de contacto:",
            label_phone_full: "Teléfono:",
            legal_ip_title: "2. Propiedad Intelectual e Industrial",
            legal_ip_text_1: "Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño gráfico y código fuente) son propiedad exclusiva de <strong>FA Asesoría Global</strong> y están protegidos por las leyes de propiedad intelectual e industrial.",
            legal_ip_text_2: "Queda prohibida la reproducción, distribución, comunicación pública o transformación de los contenidos sin la autorización expresa de FA Asesoría Global.",
            legal_disclaimer_title: "3. Exclusión de Responsabilidad",
            legal_disclaimer_text: "FA Asesoría Global no se hace responsable de los daños o perjuicios que puedan derivarse del uso incorrecto de la información contenida en esta web, ni de las acciones realizadas por terceros basándose en dicha información."
        },

        en: {
            // Header & Nav
            nav_inicio: "Home", nav_servicios: "Services", nav_empresa: "About us", nav_contacto: "Contact", consulta_online: "Online Consultation",
            // Hero
            hero_text_0: "Always with you in your legal and migration process",
            hero_text_1: "Human, ethical and professional support",
            hero_text_2: "Comprehensive legal, tax and administrative solutions",
            hero_text_3: "Financial peace of mind and business growth",
            hero_text_4: "Empathy, protection and human solutions for your family",
            hero_text_5: "Tax savings, regulatory compliance and efficiency",
            hero_text_6: "Family reunification and success in immigration procedures",
            hero_text_7: "Protect your creativity, innovation and intellectual property",
            
            // Empresa
            quienes_somos_badge: "Our Essence",
            quienes_somos_title: "More than an advisory, <br>your strategic ally in Barcelona",
            empresa_lead_new: "FA Asesoría Global is a legal and management firm specialized in supporting the migrant and entrepreneurial community. We turn bureaucracy into clear, safe, and personalized solutions.",
            empresa_text_new: "With a human and ethical approach, we don't just manage procedures; we coordinate a network of experts to guarantee your legal peace of mind. Your success is our commitment.",
            stat_anios: "Years of experience",
            stat_clientes: "International clients",
            nuestro_origen: "The Origin",
            fundador_text_new_1: "Born from the vision of <strong>Flor Andino</strong>. After experiencing migration challenges firsthand in 2004, she transformed that experience into a bridge of real help, consolidating a structured firm in 2016.",
            fundador_text_new_2: "\"Our commitment is to provide real solutions, listening to every need to make our advisory a true support.\"",
            // >>> NEW KEYS ADDED <<<
            founder_lemma: "\"Don't limit your demands\"",
            founder_signature: "— Flor Andino, Founder",

            valores_title: "Our Pillars",
            val_1_t: "Human Support", val_1_d: "Closeness and empathy in every procedure.",
            val_2_t: "Ethical Integrity", val_2_d: "Total transparency and legal security.",
            val_3_t: "Innovation", val_3_d: "Agile solutions adapted to you.",
            val_4_t: "Respect for Diversity", val_4_d: "An inclusive space for everyone.",
            timeline_title: "Our Evolution",
            time_1_year: "2004-2008", hist_t1: "Beginnings & Vocation", historia_1_new: "We began by advising migrant families with a close, human approach, identifying the need for clear information.",
            time_2_year: "2016", hist_t2: "Integral Expansion", historia_2_new: "We expanded services to legal and tax areas, creating a network of specialized collaborators for total guarantees.",
            time_3_year: "Present", hist_t3: "Global Reference", historia_3_new: "Today we are leaders in Barcelona for our ethics, innovation, and social commitment to national and international clients.",

            // Services
            servicios: "Services",
            badge_extranjeria: "Immigration", badge_legal: "Legal", badge_fiscal: "Tax", badge_autonomo: "Self-Employed",
            label_extranjeria: "Immigration Dept.", label_legal: "Legal Dept.", label_fiscal: "Tax Dept.", label_autonomo: "Self-Employed Dept.",
            
            servicio_1_title: "Immigration Procedures", servicio_1_subtitle: "Residence · Nationality · Visas",
            servicio_2_title: "Legal Area", servicio_2_subtitle: "Criminal · Civil · Family",
            servicio_3_title: "Tax & Accounting", servicio_3_subtitle: "Self-employed · Companies",
            servicio_4_title: "Self-Employed Dept", servicio_4_subtitle: "Procedures & Management",
            
            // Immigration (8 Items)
            servicio_1_item_1: "Application and renewal of NIE and TIE", 
            servicio_1_item_2: "Residence or work permit from country of origin", 
            servicio_1_item_3: "Residence for family members of Spanish and EU citizens", 
            servicio_1_item_4: "Nationality procedures",
            servicio_1_item_5: "Roots permits: socio-labor, socio-educational, social, and second chance",
            servicio_1_item_6: "Card recovery",
            servicio_1_item_7: "Family reunification",
            servicio_1_item_8: "Administrative and contentious appeals",
            
            // Legal (9 Items)
            servicio_2_item_1: "Criminal Defense", 
            servicio_2_item_2: "Cancellation of criminal and police records", 
            servicio_2_item_3: "Gender violence (defense and support)", 
            servicio_2_item_4: "Civil contracts (rental, sale, services).",
            servicio_2_item_5: "Company incorporation",
            servicio_2_item_6: "Administrative and contentious appeals",
            servicio_2_item_7: "Visas",
            servicio_2_item_8: "Validation of university degrees",
            servicio_2_item_9: "Documentary follow-up and confidentiality",
            
            // Tax (7 ITEMS)
            servicio_3_item_1: "Annual tax returns & IRPF", 
            servicio_3_item_2: "Accounting for self-employed and companies", 
            servicio_3_item_3: "Tax management", 
            servicio_3_item_4: "Financial advice and tax planning",
            servicio_3_item_5: "In-person and phone support",
            servicio_3_item_6: "Company incorporation (Commercial)",
            servicio_3_item_7: "Patents",
            
            // Self-Employed (8 ITEMS)
            servicio_4_item_1: "In-person and phone advice", 
            servicio_4_item_2: "Daily notifications review", 
            servicio_4_item_3: "Digital certificates", 
            servicio_4_item_4: "Self-employed registration/deregistration",
            servicio_4_item_5: "Company formation", 
            servicio_4_item_6: "Social Security Number", 
            servicio_4_item_7: "Benefits and grants", 
            servicio_4_item_8: "Trademark registration",
            
            btn_solicitar_asesoria: "Request Consultation",

            // Separator
            separator_text: "And much more!",

            // Other Services
            otros_badge: "Complementary Services", otros_title: "Other Services", otros_subtitle: "Discover our additional services",
            otros_card_1_title: "Insurance", otros_card_1_desc: "Complete protection for you and your family",
            otros_card_2_title: "Court Experts", otros_card_2_desc: "Certified experts for your legal cases",
            otros_card_3_title: "Real Estate", otros_card_3_desc: "Comprehensive property management",
            otros_card_4_title: "Events", otros_card_4_desc: "Professional event organization",
            otros_card_5_title: "Artist Promotion", otros_card_5_desc: "Copyright and artistic management",
            otros_card_6_title: "Translations", otros_card_6_desc: "Official and sworn translations",
            overlay_text: "Request Info",
            otros_btn: "Request Full Consultation",
            // CORREGIDO: Comillas escapadas para inglés
            otros_note: "Can't find what you're looking for? <a href=\"https://wa.me/34657878642?text=Hello,%20I%20need%20personalized%20advice\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--brand-orange);font-weight:bold;text-decoration:underline;\">Contact us here</a> for a personalized solution.",

            // Form
            formulario_title: "MAKE YOUR QUERY", form_nombre: "Name", form_apellidos: "Surname", form_correo: "Email", form_telefono: "Phone",
            form_idioma: "Language", form_idioma_placeholder: "Select language", form_idioma_es: "Spanish", form_idioma_en: "English", form_idioma_fr: "French", form_idioma_ca: "Catalan",
            form_descripcion: "Describe your query", form_placeholder_descripcion: "Tell us about your situation...",
            form_consent: "I accept the <a href='politica-privacidad.html' target='_blank' rel='noopener'>privacy policy</a>",
            form_btn: "Send via WhatsApp",

            // Footer
            footer_empresa: "FA Asesoría Global", footer_servicios: "Legal · Tax · Immigration",
            avisos_legales: "Legal Notices", aviso_legal: "Legal Notice", privacidad: "Privacy", cookies: "Cookies",
            footer_contacto: "Contact", footer_copy: "© 2026 FA Asesoría Global · All rights reserved",
            ph_nombre: "Your name", ph_apellidos: "Your surnames", ph_correo: "your@email.com", ph_telefono: "+34 657 87 86 42",

            // --- PRIVACY POLICY ---
            privacy_title: "Privacy Policy",
            privacy_intro: "In compliance with the <strong>GDPR</strong> and <strong>LOPDGDD</strong>, at <strong>FA Asesoría Global</strong> we inform you about the processing of your personal data with maximum confidentiality.",
            privacy_responsible_title: "1. Data Controller",
            label_identity: "Identity:",
            label_address: "Address:",
            label_email: "Email:",
            label_phone: "Phone:",
            privacy_data_title: "2. Data Collected",
            privacy_data_intro: "Due to our legal and immigration activities, we may collect:",
            privacy_data_1: "Identifying data (Name, DNI/NIE, Passport).",
            privacy_data_2: "Contact data (Email, Phone, Address).",
            privacy_data_3: "Labor, tax and migration data necessary for the procedure.",
            privacy_data_4: "Specially protected data only if strictly necessary and with your explicit consent.",
            privacy_purpose_title: "3. Purpose",
            privacy_purpose_1: "Management of legal, tax and immigration advisory services.",
            privacy_purpose_2: "Communication with public administrations.",
            privacy_purpose_3: "Sending commercial communications (only with consent).",
            privacy_rights_title: "4. ARCO-POL Rights",
            privacy_rights_text: "You can exercise your rights of Access, Rectification, Erasure, Restriction, Portability and Opposition by sending an email to <strong>faasesoriaglobal@gmail.com</strong> attaching a copy of your ID/NIE. You can also file a claim with the AEPD.",
            btn_back_home: "← Back to Home",
            link_privacy: "Privacy Policy",
            link_cookies: "Cookies Policy",
            link_legal: "Legal Notice",

            // --- COOKIES POLICY ---
            cookies_title: "Cookies Policy",
            cookies_intro: "At <strong>FA Asesoría Global</strong> we use our own and third-party cookies to improve your browsing experience, analyze traffic and ensure the correct functioning of our legal services.",
            cookies_types_title: "Types of cookies we use:",
            cookies_tech: "<strong>Technical (Necessary):</strong> Essential for browsing and using basic functions like the contact form.",
            cookies_pref: "<strong>Preferences:</strong> Remember your selected language.",
            cookies_analytics: "<strong>Analytics:</strong> Help us understand how you interact with the website to improve our content (Google Analytics).",
            cookies_manage_title: "Cookie Management",
            cookies_manage_text: "You can configure your browser to accept or reject cookies. If you disable them, some functionalities may not be available.",
            cookies_chrome: "<strong>Chrome:</strong> Settings → Privacy and security → Cookies",
            cookies_safari: "<strong>Safari:</strong> Preferences → Privacy → Cookies",
            cookies_firefox: "<strong>Firefox:</strong> Options → Privacy and security → Cookies",
            cookie_banner_text: "We use cookies to improve your experience. You can accept all or reject them. More info in our <a href='politica-cookies.html'>Cookies Policy</a>.",
            btn_accept: "Accept",
            btn_reject: "Reject",

            // --- LEGAL NOTICE ---
            legal_title_aviso: "Legal Notice",
            legal_data_title: "1. Identifying Data",
            legal_lssi_text: "In accordance with Law 34/2002 on Information Society Services (LSSI), the following data is identified:",
            label_owner: "Owner:",
            label_address_full: "Registered Office:",
            label_email_contact: "Contact Email:",
            label_phone_full: "Phone:",
            legal_ip_title: "2. Intellectual and Industrial Property",
            legal_ip_text_1: "All content on this website (texts, images, logos, graphic design and source code) is the exclusive property of <strong>FA Asesoría Global</strong> and is protected by intellectual and industrial property laws.",
            legal_ip_text_2: "Reproduction, distribution, public communication or transformation of the content without the express authorization of FA Asesoría Global is prohibited.",
            legal_disclaimer_title: "3. Disclaimer",
            legal_disclaimer_text: "FA Asesoría Global is not responsible for any damages or losses that may arise from the incorrect use of the information contained on this website, nor from actions taken by third parties based on such information."
        },

        fr: {
            // Header & Nav
            nav_inicio: "Accueil", nav_servicios: "Services", nav_empresa: "À propos", nav_contacto: "Contact", consulta_online: "Consultation en ligne",
            // Hero
            hero_text_0: "Toujours à vos côtés dans votre processus juridique et migratoire",
            hero_text_1: "Accompagnement humain, éthique et professionnel",
            hero_text_2: "Solutions juridiques, fiscales et administratives complètes",
            hero_text_3: "Sérénité financière et croissance de votre entreprise",
            hero_text_4: "Empathie, protection et solutions humaines pour votre famille",
            hero_text_5: "Économie d'impôts, conformité et efficacité",
            hero_text_6: "Retrouvailles familiales et réussite dans vos démarches d'immigration",
            hero_text_7: "Protégez votre créativité, innovation et propriété intellectuelle",
            
            // Empresa
            quienes_somos_badge: "Notre Essence",
            quienes_somos_title: "Plus qu'un cabinet, <br>votre allié stratégique à Barcelone",
            empresa_lead_new: "FA Asesoría Global est un cabinet juridique et de gestion spécialisé dans l'accompagnement de la communauté migrante et entrepreneuriale. Nous transformons la bureaucratie en solutions claires et personnalisées.",
            empresa_text_new: "Avec une approche humaine et éthique, nous ne gérons pas seulement des procédures ; nous coordonnons un réseau d'experts pour garantir votre tranquillité juridique. Votre réussite est notre engagement.",
            stat_anios: "Années d'expérience",
            stat_clientes: "Clients internationaux",
            nuestro_origen: "L'Origine",
            fundador_text_new_1: "Né de la vision de <strong>Flor Andino</strong>. Après avoir vécu les défis migratoires en 2004, elle a transformé cette expérience en un pont d'aide réelle, consolidant un cabinet structuré en 2016.",
            fundador_text_new_2: "\"Notre engagement est de fournir de vraies solutions, en écoutant chaque besoin pour faire de notre conseil un véritable soutien.\"",
            // >>> NOUVELLES CLÉS AJOUTÉES <<<
            founder_lemma: "\"Ne fixez pas de limites à vos exigences\"",
            founder_signature: "— Flor Andino, Fondatrice",

            valores_title: "Nos Piliers",
            val_1_t: "Accompagnement Humain", val_1_d: "Proximité et empathie dans chaque démarche.",
            val_2_t: "Intégrité Éthique", val_2_d: "Transparence totale et sécurité juridique.",
            val_3_t: "Innovation", val_3_d: "Solutions agiles adaptées à vous.",
            val_4_t: "Respect de la Diversité", val_4_d: "Un espace inclusif pour tous.",
            timeline_title: "Notre Évolution",
            time_1_year: "2004-2008", hist_t1: "Débuts & Vocation", historia_1_new: "Nous avons commencé par conseiller les familles migrantes avec une approche humaine, identifiant le besoin d'informations claires.",
            time_2_year: "2016", hist_t2: "Expansion Intégrale", historia_2_new: "Nous avons étendu nos services aux domaines juridique et fiscal, créant un réseau de collaborateurs spécialisés.",
            time_3_year: "Actuel", hist_t3: "Référence Mondiale", historia_3_new: "Aujourd'hui, nous sommes leaders à Barcelone pour notre éthique, notre innovation et notre engagement social.",

            // Services
            servicios: "Services",
            badge_extranjeria: "Étranger", badge_legal: "Juridique", badge_fiscal: "Fiscal", badge_autonomo: "Indépendants",
            label_extranjeria: "Dépt. Étranger", label_legal: "Dépt. Juridique", label_fiscal: "Dépt. Fiscal", label_autonomo: "Dépt. Indépendants",
            
            servicio_1_title: "Procédures d'immigration", servicio_1_subtitle: "Résidence · Nationalité · Visas",
            servicio_2_title: "Domaine Juridique", servicio_2_subtitle: "Pénal · Civil · Famille",
            servicio_3_title: "Fiscal et Comptable", servicio_3_subtitle: "Indépendants · Entreprises",
            servicio_4_title: "Dépt. Indépendants", servicio_4_subtitle: "Gestion et Démarches",
            
            // Immigration (8 Items)
            servicio_1_item_1: "Demande et renouvellement de NIE et TIE", 
            servicio_1_item_2: "Titre de séjour ou permis de travail depuis le pays d'origine", 
            servicio_1_item_3: "Titre de séjour pour famille de ressortissants espagnols et communautaires", 
            servicio_1_item_4: "Procédures de nationalité",
            servicio_1_item_5: "Enracinement : socio-professionnel, socio-éducatif, social et seconde chance",
            servicio_1_item_6: "Récupération de cartes",
            servicio_1_item_7: "Regroupement familial",
            servicio_1_item_8: "Recours administratifs et contentieux",
            
            // Legal (9 Items)
            servicio_2_item_1: "Défense pénale", 
            servicio_2_item_2: "Annulation des casiers judiciaires et policiers", 
            servicio_2_item_3: "Violence de genre (défense et accompagnement)", 
            servicio_2_item_4: "Contrats civils (location, vente, services).",
            servicio_2_item_5: "Création de sociétés",
            servicio_2_item_6: "Recours administratifs et contentieux",
            servicio_2_item_7: "Visas",
            servicio_2_item_8: "Homologation de diplômes universitaires",
            servicio_2_item_9: "Suivi documentaire et confidentialité",
            
            // Fiscal (7 ITEMS)
            servicio_3_item_1: "Déclarations annuelles et IRPF", 
            servicio_3_item_2: "Comptabilité pour indépendants et entreprises", 
            servicio_3_item_3: "Gestion fiscale", 
            servicio_3_item_4: "Conseil financier et prévision fiscale",
            servicio_3_item_5: "Assistance en personne et par téléphone",
            servicio_3_item_6: "Création d'entreprises (Commercial)",
            servicio_3_item_7: "Brevets",
            
            // Indépendants (8 ITEMS)
            servicio_4_item_1: "Conseils en personne et par téléphone", 
            servicio_4_item_2: "Révision des notifications quotidiennes", 
            servicio_4_item_3: "Certificats numériques", 
            servicio_4_item_4: "Inscription et radiation des indépendants",
            servicio_4_item_5: "Création d'entreprises", 
            servicio_4_item_6: "Numéro de sécurité sociale", 
            servicio_4_item_7: "Prestations et aides", 
            servicio_4_item_8: "Enregistrement de marques",
            
            btn_solicitar_asesoria: "Demander une consultation",

            // Separator
            separator_text: "Et bien plus encore !",

            // Other Services
            otros_badge: "Services Complémentaires", otros_title: "Autres Services", otros_subtitle: "Découvrez nos services supplémentaires",
            otros_card_1_title: "Assurances", otros_card_1_desc: "Protection complète pour vous et votre famille",
            otros_card_2_title: "Experts judiciaires", otros_card_2_desc: "Experts certifiés pour vos affaires juridiques",
            otros_card_3_title: "Services immobiliers", otros_card_3_desc: "Gestion immobilière complète",
            otros_card_4_title: "Événements", otros_card_4_desc: "Organisation professionnelle d'événements",
            otros_card_5_title: "Promotion d'artistes", otros_card_5_desc: "Droit d'auteur et gestion artistique",
            otros_card_6_title: "Traductions", otros_card_6_desc: "Traductions officielles et assermentées",
            overlay_text: "Demander Infos",
            otros_btn: "Demander une consultation complète",
            // CORREGIDO: Comillas escapadas para francés
            otros_note: "Vous ne trouvez pas ce que vous cherchez ? <a href=\"https://wa.me/34657878642?text=Bonjour,%20j'ai%20besoin%20d'un%20conseil%20personnalisé\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--brand-orange);font-weight:bold;text-decoration:underline;\">Contactez-nous ici</a>.",

            // Form
            formulario_title: "POSEZ VOTRE QUESTION", form_nombre: "Nom", form_apellidos: "Prénom", form_correo: "Email", form_telefono: "Téléphone",
            form_idioma: "Langue", form_idioma_placeholder: "Sélectionnez une langue", form_idioma_es: "Espagnol", form_idioma_en: "Anglais", form_idioma_fr: "Français", form_idioma_ca: "Catalan",
            form_descripcion: "Décrivez brièvement votre question", form_placeholder_descripcion: "Racontez-nous votre situation...",
            form_consent: "J'accepte la <a href='politica-privacidad.html' target='_blank' rel='noopener'>politique de confidentialité</a>",
            form_btn: "Envoyer par WhatsApp",

            // Footer
            footer_empresa: "FA Asesoría Global", footer_servicios: "Juridique · Fiscal · Étranger",
            avisos_legales: "Avis légaux", aviso_legal: "Avis juridique", privacidad: "Confidentialité", cookies: "Cookies",
            footer_contacto: "Contact", footer_copy: "© 2026 FA Asesoría Global · Tous droits réservés",
            ph_nombre: "Votre nom", ph_apellidos: "Votre nom de famille", ph_correo: "votre@email.com", ph_telefono: "+34 657 87 86 42",

            // --- POLITIQUE DE CONFIDENTIALITÉ ---
            privacy_title: "Politique de Confidentialité",
            privacy_intro: "Conformément au <strong>RGPD</strong> et à la <strong>LOPDGDD</strong>, chez <strong>FA Asesoría Global</strong>, nous vous informons du traitement de vos données personnelles avec la plus grande confidentialité.",
            privacy_responsible_title: "1. Responsable du Traitement",
            label_identity: "Identité:",
            label_address: "Adresse:",
            label_email: "Email:",
            label_phone: "Téléphone:",
            privacy_data_title: "2. Données Collectées",
            privacy_data_intro: "En raison de nos activités juridiques et d'immigration, nous pouvons collecter:",
            privacy_data_1: "Données d'identification (Nom, DNI/NIE, Passeport).",
            privacy_data_2: "Données de contact (Email, Téléphone, Adresse).",
            privacy_data_3: "Données professionnelles, fiscales et migratoires nécessaires à la procédure.",
            privacy_data_4: "Données spécialement protégées uniquement si strictement nécessaires et avec votre consentement explicite.",
            privacy_purpose_title: "3. Finalité",
            privacy_purpose_1: "Gestion des services de conseil juridique, fiscal et d'immigration.",
            privacy_purpose_2: "Communication avec les administrations publiques.",
            privacy_purpose_3: "Envoi de communications commerciales (uniquement avec consentement).",
            privacy_rights_title: "4. Droits ARCO-POL",
            privacy_rights_text: "Vous pouvez exercer vos droits d'Accès, Rectification, Effacement, Limitation, Portabilité et Opposition en envoyant un email à <strong>faasesoriaglobal@gmail.com</strong> avec une copie de votre pièce d'identité/NIE. Vous pouvez également déposer une réclamation auprès de l'AEPD.",
            btn_back_home: "← Retour à l'accueil",
            link_privacy: "Politique de Confidentialité",
            link_cookies: "Politique des Cookies",
            link_legal: "Avis Légal",

            // --- POLITIQUE DES COOKIES ---
            cookies_title: "Politique des Cookies",
            cookies_intro: "Chez <strong>FA Asesoría Global</strong>, nous utilisons des cookies propres et tiers pour améliorer votre expérience de navigation, analyser le trafic et assurer le bon fonctionnement de nos services juridiques.",
            cookies_types_title: "Types de cookies que nous utilisons :",
            cookies_tech: "<strong>Techniques (Nécessaires) :</strong> Indispensables pour naviguer et utiliser les fonctions de base comme le formulaire de contact.",
            cookies_pref: "<strong>Préférences :</strong> Mémorisent votre langue sélectionnée.",
            cookies_analytics: "<strong>Analytiques :</strong> Nous aident à comprendre comment vous interagissez avec le site pour améliorer notre contenu (Google Analytics).",
            cookies_manage_title: "Gestion des cookies",
            cookies_manage_text: "Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. Si vous les désactivez, certaines fonctionnalités pourraient ne pas être disponibles.",
            cookies_chrome: "<strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies",
            cookies_safari: "<strong>Safari :</strong> Préférences → Confidentialité → Cookies",
            cookies_firefox: "<strong>Firefox :</strong> Options → Confidentialité et sécurité → Cookies",
            cookie_banner_text: "Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez tout accepter ou tout refuser. Plus d'infos dans notre <a href='politica-cookies.html'>Politique des Cookies</a>.",
            btn_accept: "Accepter",
            btn_reject: "Refuser",

            // --- AVIS LÉGAL ---
            legal_title_aviso: "Avis Légal",
            legal_data_title: "1. Données d'identification",
            legal_lssi_text: "Conformément à la loi 34/2002 sur les services de la société de l'information (LSSI), les données suivantes sont identifiées :",
            label_owner: "Titulaire :",
            label_address_full: "Siège social :",
            label_email_contact: "Email de contact :",
            label_phone_full: "Téléphone :",
            legal_ip_title: "2. Propriété intellectuelle et industrielle",
            legal_ip_text_1: "Tout le contenu de ce site web (textes, images, logos, design graphique et code source) est la propriété exclusive de <strong>FA Asesoría Global</strong> et est protégé par les lois sur la propriété intellectuelle et industrielle.",
            legal_ip_text_2: "La reproduction, la distribution, la communication publique ou la transformation du contenu sans l'autorisation expresse de FA Asesoría Global est interdite.",
            legal_disclaimer_title: "3. Exclusion de responsabilité",
            legal_disclaimer_text: "FA Asesoría Global n'est pas responsable des dommages ou pertes pouvant résulter d'une utilisation incorrecte des informations contenues sur ce site, ni des actions entreprises par des tiers sur la base de ces informations."
        },

        ca: {
            // Header & Nav
            nav_inicio: "Inici", nav_servicios: "Serveis", nav_empresa: "Sobre nosaltres", nav_contacto: "Contacte", consulta_online: "Consulta en línia",
            // Hero
            hero_text_0: "Sempre amb tu en el teu procés legal i migratori",
            hero_text_1: "Acompanyament humà, ètic i professional",
            hero_text_2: "Solucions legals, fiscals i administratives integrals",
            hero_text_3: "Tranquil·litat financera i creixement empresarial",
            hero_text_4: "Empatia, protecció i solucions humanes per a la teva família",
            hero_text_5: "Estalvi fiscal, compliment normatiu i eficiència",
            hero_text_6: "Retrobament familiar i èxit en els teus tràmits d'estrangeria",
            hero_text_7: "Protegeix la teva creativitat, innovació i propietat intel·lectual",
            
            // Empresa
            quienes_somos_badge: "La Nostra Essència",
            quienes_somos_title: "Més que una assessoria, <br>el teu aliat estratègic a Barcelona",
            empresa_lead_new: "FA Asesoría Global és una firma legal i de gestió integral especialitzada en acompanyar la comunitat migrant i emprenedora. Transformem la burocràcia en solucions clares i personalitzades.",
            empresa_text_new: "Amb un enfocament humà i ètic, no només gestionem tràmits; coordinem una xarxa d'experts per garantir la teva tranquil·litat jurídica. El teu èxit és el nostre compromís.",
            stat_anios: "Anys d'experiència",
            stat_clientes: "Clients internacionals",
            nuestro_origen: "L'Origen",
            fundador_text_new_1: "Nascut de la visió de <strong>Flor Andino</strong>. Després de viure els reptes migratoris en primera persona el 2004, va transformar aquesta experiència en un pont d'ajuda real, consolidant una firma estructurada el 2016.",
            fundador_text_new_2: "\"El nostre compromís és brindar solucions reals, escoltant cada necessitat per convertir l'assessoria en un veritable suport.\"",
            // >>> NOVES CLAUS AFEGIDES <<<
            founder_lemma: "\"No posis límits a les teves exigències\"",
            founder_signature: "— Flor Andino, Fundadora",

            valores_title: "Els Nostres Pilars",
            val_1_t: "Acompanyament Humà", val_1_d: "Proximitat i empatia en cada tràmit.",
            val_2_t: "Integritat Ètica", val_2_d: "Transparència total i seguretat jurídica.",
            val_3_t: "Innovació", val_3_d: "Solucions àgils adaptades a tu.",
            val_4_t: "Respecte a la Diversitat", val_4_d: "Un espai inclusiu per a tothom.",
            timeline_title: "La Nostra Evolució",
            time_1_year: "2004-2008", hist_t1: "Inicis i Vocació", historia_1_new: "Vam començar assessorant famílies migrants amb un enfocament proper i humà, identificant la necessitat d'informació clara.",
            time_2_year: "2016", hist_t2: "Expansió Integral", historia_2_new: "Vam ampliar serveis a l'àrea legal i fiscal, creant una xarxa de col·laboradors especialitzats per a garanties totals.",
            time_3_year: "Actualitat", hist_t3: "Referent Global", historia_3_new: "Avui som líders a Barcelona per la nostra ètica, innovació i compromís social amb clients nacionals i internacionals.",

            // Serveis
            servicios: "Serveis",
            badge_extranjeria: "Estrangeria", badge_legal: "Legal", badge_fiscal: "Fiscal", badge_autonomo: "Autònoms",
            label_extranjeria: "Departament d'Estrangeria", label_legal: "Departament Legal", label_fiscal: "Departament Fiscal", label_autonomo: "Departament d'Autònoms",
            
            servicio_1_title: "Estrangeria i tràmits migratoris", servicio_1_subtitle: "Residència · Nacionalitat · Arrelament · Visats",
            servicio_2_title: "Àrea Legal Integral", servicio_2_subtitle: "Penal · Civil · Família · Laboral",
            servicio_3_title: "Fiscal i Comptable", servicio_3_subtitle: "Autònoms · Empreses · IRPF",
            servicio_4_title: "Departament d'Autònoms", servicio_4_subtitle: "Autònoms · Empreses · Tràmits",
            
            // Estrangeria (8 Items)
            servicio_1_item_1: "Sol·licitud i renovació de NIE i TIE", 
            servicio_1_item_2: "Residència o permís de treball des del país d'origen", 
            servicio_1_item_3: "Residència per familiar d'espanyol i comunitaris", 
            servicio_1_item_4: "Tràmits de nacionalitat",
            servicio_1_item_5: "Arrelaments: sociolaboral, socioformatiu, social i de segona oportunitat",
            servicio_1_item_6: "Recuperació de targetes",
            servicio_1_item_7: "Reagrupament familiar",
            servicio_1_item_8: "Recursos administratius i contenciosos",
            
            // Legal (9 Items)
            servicio_2_item_1: "Defensa Penal", 
            servicio_2_item_2: "Cancel·lació d'antecedents penals i policials", 
            servicio_2_item_3: "Violència de gènere (defensa i acompanyament)", 
            servicio_2_item_4: "Contractes civils (lloguer, compravenda, serveis).",
            servicio_2_item_5: "Constitució de societats",
            servicio_2_item_6: "Recursos administratius i contenciosos",
            servicio_2_item_7: "Visats",
            servicio_2_item_8: "Homologació de títols universitaris",
            servicio_2_item_9: "Seguiment documental i confidencialitat",
            
            // Fiscal (7 ITEMS)
            servicio_3_item_1: "Declaracions anuals i IRPF", 
            servicio_3_item_2: "Comptabilitat per a autònoms i empreses", 
            servicio_3_item_3: "Gestió d'impostos", 
            servicio_3_item_4: "Assessoria financera i prevenció fiscal",
            servicio_3_item_5: "Atenció presencial i telefònica",
            servicio_3_item_6: "Constitució d'empreses (Mercantil)",
            servicio_3_item_7: "Patents",
            
            // Autònoms (8 ITEMS)
            servicio_4_item_1: "Atenció i assessorament presencial i telefònic", 
            servicio_4_item_2: "Revisió de notificacions diàries", 
            servicio_4_item_3: "Certificats digitals", 
            servicio_4_item_4: "Alta i baixa d'autònoms",
            servicio_4_item_5: "Creació d'empreses", 
            servicio_4_item_6: "Número de Seguretat Social", 
            servicio_4_item_7: "Prestacions i ajudes", 
            servicio_4_item_8: "Registre de marques",
            
            btn_solicitar_asesoria: "Sol·licitar assessoria",

            // Separator
            separator_text: "I molt més!",

            // Altres Serveis
            otros_badge: "Serveis Complementaris", otros_title: "Altres Serveis", otros_subtitle: "Descobreix la nostra gamma de serveis addicionals dissenyats per cobrir totes les teves necessitats",
            otros_card_1_title: "Assegurances", otros_card_1_desc: "Protecció completa per a tu i la teva família",
            otros_card_2_title: "Perits Judicials", otros_card_2_desc: "Experts certificats per als teus casos legals",
            otros_card_3_title: "Serveis Immobiliaris", otros_card_3_desc: "Gestió integral de propietats",
            otros_card_4_title: "Esdeveniments", otros_card_4_desc: "Organització professional d'esdeveniments",
            otros_card_5_title: "Promoció d'Artistes", otros_card_5_desc: "Dret d'autor i gestió artística",
            otros_card_6_title: "Traduccions", otros_card_6_desc: "Traduccions oficials i jurades",
            overlay_text: "Sol·licitar informació",
            otros_btn: "Sol·licitar assessoria completa",
            // CORREGIDO: Comillas escapadas para catalán
            otros_note: "No trobes el que busques? <a href=\"https://wa.me/34657878642?text=Hola,%20necessito%20un%20consell%20personalitzat\" target=\"_blank\" rel=\"noopener\" style=\"color:var(--brand-orange);font-weight:bold;text-decoration:underline;\">Contacta'ns aquí</a> per a una solució personalitzada.",

            // Formulari
            formulario_title: "FES LA TEVA CONSULTA", form_nombre: "Nom", form_apellidos: "Cognoms", form_correo: "Correu electrònic", form_telefono: "Telèfon",
            form_idioma: "Idioma d'atenció", form_idioma_placeholder: "Selecciona un idioma", form_idioma_es: "Espanyol", form_idioma_en: "Anglès", form_idioma_fr: "Francès", form_idioma_ca: "Català",
            form_descripcion: "Descriu breument la teva consulta", form_placeholder_descripcion: "Explica'ns la teva situació...",
            form_consent: "Accepto la <a href='politica-privacidad.html' target='_blank' rel='noopener'>política de privadesa</a> i autoritzo el tractament de les meves dades",
            form_btn: "Enviar consulta per WhatsApp",

            // Footer
            footer_empresa: "FA Asesoría Global", footer_servicios: "Legal · Fiscal · Estrangeria",
            avisos_legales: "Avisos legals", aviso_legal: "Avís legal", privacidad: "Privadesa", cookies: "Cookies",
            footer_contacto: "Contacte", footer_copy: "© 2026 FA Asesoría Global · Tots els drets reservats",
            ph_nombre: "El teu nom", ph_apellidos: "Els teus cognoms", ph_correo: "el teu@email.com", ph_telefono: "+34 657 87 86 42",

            // --- POLÍTICA DE PRIVADESA ---
            privacy_title: "Política de Privadesa",
            privacy_intro: "En compliment del <strong>RGPD</strong> i la <strong>LOPDGDD</strong>, a <strong>FA Asesoría Global</strong> li informem sobre el tractament de les seves dades personals amb la màxima confidencialitat.",
            privacy_responsible_title: "1. Responsable del Tractament",
            label_identity: "Identitat:",
            label_address: "Adreça:",
            label_email: "Email:",
            label_phone: "Telèfon:",
            privacy_data_title: "2. Dades Recollides",
            privacy_data_intro: "Degut a la nostra activitat legal i d'estrangeria, podem recollir:",
            privacy_data_1: "Dades identificatives (Nom, DNI/NIE, Passaport).",
            privacy_data_2: "Dades de contacte (Email, Telèfon, Adreça).",
            privacy_data_3: "Dades laborals, fiscals i migratòries necessàries per al tràmit.",
            privacy_data_4: "Dades especialment protegides només si són estrictament necessàries i amb el seu consentiment explícit.",
            privacy_purpose_title: "3. Finalitat",
            privacy_purpose_1: "Gestió de serveis d'assessoria legal, fiscal i d'estrangeria.",
            privacy_purpose_2: "Comunicació amb administracions públiques.",
            privacy_purpose_3: "Enviament de comunicacions comercials (només amb consentiment).",
            privacy_rights_title: "4. Drets ARCO-POL",
            privacy_rights_text: "Pot exercir els seus drets d'Accés, Rectificació, Supressió, Limitació, Portabilitat i Oposició enviant un email a <strong>faasesoriaglobal@gmail.com</strong> adjuntant còpia del seu DNI/NIE. També pot reclamar davant l'AEPD.",
            btn_back_home: "← Tornar a l'Inici",
            link_privacy: "Política de Privadesa",
            link_cookies: "Política de Cookies",
            link_legal: "Avís Legal",

            // --- POLÍTICA DE COOKIES ---
            cookies_title: "Política de Cookies",
            cookies_intro: "A <strong>FA Asesoría Global</strong> utilitzem cookies pròpies i de tercers per millorar la seva experiència de navegació, analitzar el trànsit i assegurar el correcte funcionament dels nostres serveis legals.",
            cookies_types_title: "Tipus de cookies que utilitzem:",
            cookies_tech: "<strong>Tècniques (Necessàries):</strong> Imprescindibles per navegar i utilitzar funcions bàsiques com el formulari de contacte.",
            cookies_pref: "<strong>Preferències:</strong> Recorden el seu idioma seleccionat.",
            cookies_analytics: "<strong>Analítiques:</strong> Ens ajuden a entendre com interactua amb el web per millorar els nostres continguts (Google Analytics).",
            cookies_manage_title: "Gestió de cookies",
            cookies_manage_text: "Pot configurar el seu navegador per acceptar o rebutjar cookies. Si les desactiva, algunes funcionalitats podrien no estar disponibles.",
            cookies_chrome: "<strong>Chrome:</strong> Configuració → Privadesa i seguretat → Cookies",
            cookies_safari: "<strong>Safari:</strong> Preferències → Privadesa → Cookies",
            cookies_firefox: "<strong>Firefox:</strong> Opcions → Privadesa i seguretat → Cookies",
            cookie_banner_text: "Utilitzem cookies per millorar la seva experiència. Pot acceptar-les totes o rebutjar-les. Més info a la nostra <a href='politica-cookies.html'>Política de Cookies</a>.",
            btn_accept: "Acceptar",
            btn_reject: "Rebutjar",

            // --- AVÍS LEGAL ---
            legal_title_aviso: "Avís Legal",
            legal_data_title: "1. Dades Identificatives",
            legal_lssi_text: "De conformitat amb la Llei 34/2002 de Serveis de la Societat de la Informació (LSSI), s'identifiquen les següents dades:",
            label_owner: "Titular:",
            label_address_full: "Domicili Social:",
            label_email_contact: "Email de contacte:",
            label_phone_full: "Telèfon:",
            legal_ip_title: "2. Propietat Intel·lectual i Industrial",
            legal_ip_text_1: "Tots els continguts d'aquest lloc web (textos, imatges, logotips, disseny gràfic i codi font) són propietat exclusiva de <strong>FA Asesoría Global</strong> i estan protegits per les lleis de propietat intel·lectual i industrial.",
            legal_ip_text_2: "Queda prohibida la reproducció, distribució, comunicació pública o transformació dels continguts sense l'autorització expressa de FA Asesoría Global.",
            legal_disclaimer_title: "3. Exclusió de Responsabilitat",
            legal_disclaimer_text: "FA Asesoría Global no es fa responsable dels danys o perjudicis que puguin derivar-se de l'ús incorrecte de la informació continguda en aquest web, ni de les accions realitzades per terços basant-se en dicha informació."
        }
    };

    // ================= VARIABLES =================
    let currentLang = 'es';
    const langTrigger = document.getElementById('langTrigger');
    const langDropdown = document.querySelector('.lang-dropdown');
    const langMenu = document.getElementById('langMenu');
    const langOptions = document.querySelectorAll('.lang-option');
    const mainFlagContainer = document.getElementById('mainFlag');
    const langTextEl = document.querySelector('.lang-text');
    const htmlElement = document.documentElement;

    // ================= SVGs DE BANDERAS =================
    const flagsSVG = {
        es: '<svg viewBox="0 0 640 480" width="22" height="22"><path fill="#AA151B" d="M0 0h640v480H0z"/><path fill="#F1BF00" d="M0 120h640v240H0z"/></svg>',
        en: '<svg viewBox="0 0 640 480" width="22" height="22"><path fill="#012169" d="M0 0h640v480H0z"/><path stroke="#FFF" stroke-width="60" d="M0 0l640 480M640 0L0 480"/><path stroke="#C8102E" stroke-width="40" d="M0 0l640 480M640 0L0 480"/><path fill="#FFF" d="M0 180h640v120H0zM240 0h160v480H240z"/><path fill="#C8102E" d="M0 220h640v40H0zM280 0h80v480h-80z"/></svg>',
        fr: '<svg viewBox="0 0 640 480" width="22" height="22"><path fill="#002395" d="M0 0h213.33v480H0z"/><path fill="#FFF" d="M213.33 0h213.34v480H213.33z"/><path fill="#ED2939" d="M426.67 0H640v480H426.67z"/></svg>',
        ca: '<svg viewBox="0 0 640 480" width="22" height="22"><path fill="#FCDD09" d="M0 0h640v480H0z"/><path stroke="#DA121A" stroke-width="24" d="M0 30h640M0 90h640M0 150h640M0 210h640M0 270h640M0 330h640M0 390h640M0 450h640"/></svg>'
    };
    const shortNames = { es: 'ES', en: 'EN', fr: 'FR', ca: 'CA' };

    // ================= FUNCIONES =================
    function detectBrowserLanguage() {
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && translations[saved]) return saved;
        const browser = navigator.language || navigator.languages?.[0];
        if (browser?.startsWith('en')) return 'en';
        if (browser?.startsWith('fr')) return 'fr';
        if (browser?.startsWith('ca')) return 'ca';
        return 'es';
    }

    function updateTriggerVisuals(lang) {
        if (mainFlagContainer) mainFlagContainer.innerHTML = flagsSVG[lang];
        if (langTextEl) langTextEl.textContent = shortNames[lang];
    }

    function setActiveOptionInMenu(lang) {
        langOptions.forEach(opt => {
            opt.classList.toggle('active-option', opt.dataset.idioma === lang);
        });
    }

    // FUNCIÓN PRINCIPAL DE TRADUCCIÓN AUTOMÁTICA
    function applyTranslations(lang) {
        currentLang = lang;
        const t = translations[lang];
        if (!t) return;
        
        htmlElement.setAttribute('lang', lang);
        updateTriggerVisuals(lang);
        setActiveOptionInMenu(lang);
        
        // 1. Recorrer TODOS los elementos con data-lang
        document.querySelectorAll('[data-lang]').forEach(el => {
            const key = el.getAttribute('data-lang');
            
            if (t[key]) {
                const textoTraducido = t[key];
                
                // DETECCIÓN ROBUSTA DE HTML:
                if (textoTraducido.includes('<') && textoTraducido.includes('>')) {
                    el.innerHTML = textoTraducido;
                } else {
                    el.textContent = textoTraducido;
                }
            }
        });

        // 2. Traducir placeholders
        document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
            const key = el.getAttribute('data-lang-placeholder');
            if (t[key]) el.placeholder = t[key];
        });

        // 3. Actualizar opciones del select de idioma manualmente
        const idiomaOpts = document.querySelectorAll('#idioma option');
        if (idiomaOpts.length >= 5) {
            idiomaOpts[0].textContent = t.form_idioma_placeholder;
            idiomaOpts[1].textContent = t.form_idioma_es;
            idiomaOpts[2].textContent = t.form_idioma_en;
            idiomaOpts[3].textContent = t.form_idioma_fr;
            idiomaOpts[4].textContent = t.form_idioma_ca;
        }

        localStorage.setItem('preferredLanguage', lang);
        console.log(`🌍 Idioma cambiado a: ${lang.toUpperCase()}`);
    }

    // ================= EVENT LISTENERS =================
    if (langTrigger) {
        langTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langDropdown.classList.contains('open');
            langDropdown.classList.toggle('open', !isOpen);
            langTrigger.setAttribute('aria-expanded', !isOpen);
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = opt.getAttribute('data-idioma');
            applyTranslations(selectedLang);
            langDropdown.classList.remove('open');
            langTrigger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('click', (e) => {
        if (langDropdown && !langDropdown.contains(e.target)) {
            langDropdown.classList.remove('open');
            langTrigger.setAttribute('aria-expanded', 'false');
        }
    });

    // ================= INICIALIZACIÓN =================
    const initialLang = detectBrowserLanguage();
    applyTranslations(initialLang);
});