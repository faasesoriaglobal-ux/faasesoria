document.addEventListener('DOMContentLoaded', function() {

    // ================= OBJETO DE TRADUCCIONES COMPLETO =================
    const translations = {
        es: {
            // Header & Nav
            nav_inicio: "Inicio", nav_servicios: "Servicios", nav_empresa: "Empresa", nav_contacto: "Contacto", consulta_online: "Consulta online",
            // Hero
            hero_text_0: "Siempre contigo en tu proceso legal y migratorio",
            hero_text_1: "Acompañamiento humano, ético y profesional",
            hero_text_2: "Soluciones legales, fiscales y administrativas integrales",
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
            
            // Extranjería
            servicio_1_item_1: "Permisos de residencia", 
            servicio_1_item_2: "Renovación de NIE", 
            servicio_1_item_3: "Reagrupación familiar", 
            servicio_1_item_4: "Nacionalidad española",
            
            // Legal
            servicio_2_item_1: "Divorcios y custodia", 
            servicio_2_item_2: "Contratos y reclamaciones", 
            servicio_2_item_3: "Despidos y sanciones", 
            servicio_2_item_4: "Antecedentes penales",
            
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
            otros_note: "¿No encuentras lo que buscas? <a href='contacto.html'>Contáctanos</a> para una solución personalizada",

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
            ph_nombre: "Tu nombre", ph_apellidos: "Tus apellidos", ph_correo: "tu@email.com", ph_telefono: "+34 657 87 86 42"
        },
        en: {
            // Header & Nav
            nav_inicio: "Home", nav_servicios: "Services", nav_empresa: "Company", nav_contacto: "Contact", consulta_online: "Online Consultation",
            // Hero
            hero_text_0: "Always with you in your legal and migration process",
            hero_text_1: "Human, ethical and professional support",
            hero_text_2: "Comprehensive legal, tax and administrative solutions",
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
            
            // Immigration
            servicio_1_item_1: "Residence permits", 
            servicio_1_item_2: "NIE Renewal", 
            servicio_1_item_3: "Family reunification", 
            servicio_1_item_4: "Spanish nationality",
            
            // Legal
            servicio_2_item_1: "Divorces and custody", 
            servicio_2_item_2: "Contracts and claims", 
            servicio_2_item_3: "Dismissals and sanctions", 
            servicio_2_item_4: "Criminal records",
            
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
            otros_note: "Can't find what you're looking for? <a href='contacto.html'>Contact us</a>",

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
            ph_nombre: "Your name", ph_apellidos: "Your surnames", ph_correo: "your@email.com", ph_telefono: "+34 657 87 86 42"
        },
        fr: {
            // Header & Nav
            nav_inicio: "Accueil", nav_servicios: "Services", nav_empresa: "Entreprise", nav_contacto: "Contact", consulta_online: "Consultation en ligne",
            // Hero
            hero_text_0: "Toujours à vos côtés dans votre processus juridique",
            hero_text_1: "Accompagnement humain, éthique et professionnel",
            hero_text_2: "Solutions juridiques, fiscales et administratives complètes",
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
            
            // Immigration
            servicio_1_item_1: "Permis de résidence", 
            servicio_1_item_2: "Renouvellement de NIE", 
            servicio_1_item_3: "Regroupement familial", 
            servicio_1_item_4: "Nationalité espagnole",
            
            // Legal
            servicio_2_item_1: "Divorces et garde", 
            servicio_2_item_2: "Contrats et réclamations", 
            servicio_2_item_3: "Licenciements et sanctions", 
            servicio_2_item_4: "Casiers judiciaires",
            
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
            otros_note: "Vous ne trouvez pas ce que vous cherchez ? <a href='contacto.html'>Contactez-nous</a>",

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
            ph_nombre: "Votre nom", ph_apellidos: "Votre nom de famille", ph_correo: "votre@email.com", ph_telefono: "+34 657 87 86 42"
        },
        ca: {
            // Header & Nav
            nav_inicio: "Inici", nav_servicios: "Serveis", nav_empresa: "Empresa", nav_contacto: "Contacte", consulta_online: "Consulta en línia",
            // Hero
            hero_text_0: "Sempre amb tu en el teu procés legal i migratori",
            hero_text_1: "Acompanyament humà, ètic i professional",
            hero_text_2: "Solucions legals, fiscals i administratives integrals",
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
            
            // Estrangeria
            servicio_1_item_1: "Permisos de residència", 
            servicio_1_item_2: "Renovació de NIE", 
            servicio_1_item_3: "Reagrupament familiar", 
            servicio_1_item_4: "Nacionalitat espanyola",
            
            // Legal
            servicio_2_item_1: "Divorcis i custòdia", 
            servicio_2_item_2: "Contractes i reclamacions", 
            servicio_2_item_3: "Acomiadaments i sancions", 
            servicio_2_item_4: "Antecedents penals",
            
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
            otros_note: "No trobes el que busques? <a href='contacto.html'>Contacta'ns</a> per a una solució personalitzada",

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
            ph_nombre: "El teu nom", ph_apellidos: "Els teus cognoms", ph_correo: "el teu@email.com", ph_telefono: "+34 657 87 86 42"
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
            
            // Verificamos que la clave exista en el diccionario del idioma
            if (t[key]) {
                const textoTraducido = t[key];
                
                // DETECCIÓN ROBUSTA DE HTML:
                // Si el texto contiene '<' y '>', asumimos que tiene etiquetas (<strong>, <br>, etc.)
                // y usamos innerHTML para que el navegador las renderice.
                if (textoTraducido.includes('<') && textoTraducido.includes('>')) {
                    el.innerHTML = textoTraducido;
                } else {
                    // Si no hay etiquetas, usamos textContent por seguridad y rendimiento.
                    el.textContent = textoTraducido;
                }
            }
        });

        // 2. Traducir placeholders (inputs y textareas)
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