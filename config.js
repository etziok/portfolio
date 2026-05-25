// ╔══════════════════════════════════════════════════════════════════╗
// ║   CONFIG.JS  —  EDITÁ SOLO ESTE ARCHIVO, NO TOQUES index.html  ║
// ╚══════════════════════════════════════════════════════════════════╝
//
//  Instrucciones rápidas:
//    • Reemplazá los valores entre comillas por los tuyos
//    • Dejá vacío ("") para usar el placeholder gráfico por defecto
//    • Para imágenes: ponelas en la carpeta images/ y escribí "images/archivo.jpg"
//    • Para el video elegí un tipo y completá solo esos campos
//    • Guardá y recargá el navegador — listo

const CONFIG = {

  // ──────────────────────────────────────────────────────────────────────
  //  IDENTIDAD
  // ──────────────────────────────────────────────────────────────────────

  nombre_completo: "Franco Kees",   // aparece en el footer
  nombre:          "Franco",          // primera línea del hero
  apellido:        "Kees",             // segunda línea del hero (en cursiva)
  iniciales:       "FK",                 // logo del nav   ej: "FG" o "MK"

  // ──────────────────────────────────────────────────────────────────────
  //  ROL  (se muestra encima del nombre en el hero)
  // ──────────────────────────────────────────────────────────────────────

  rol_en: "Game Developer · Unity · AI Integration",
  rol_es: "Desarrollador de Videojuegos · Unity · IA Aplicada",

  // ──────────────────────────────────────────────────────────────────────
  //  TAGLINE  (frase corta debajo del nombre)
  // ──────────────────────────────────────────────────────────────────────

  tagline_en: "Shipping games on Unity, Godot & Unreal — with AI automation, voice systems, and MQTT integration built in.",
  tagline_es: "Publico juegos en Unity, Godot y Unreal — con automatización por IA, sistemas de voz y conexiones MQTT integradas.",

  // ──────────────────────────────────────────────────────────────────────
  //  IMÁGENES
  //    Dejá en "" para usar el placeholder gris con ícono
  // ──────────────────────────────────────────────────────────────────────

  foto_perfil: "images/profile.png",    // ej: "images/profile.png"  — formato cuadrado recomendado
  hero_fondo:  "",    // ej: "images/hero-bg.jpg"  — opcional, el fondo oscuro queda bien igual

  // ──────────────────────────────────────────────────────────────────────
  //  SECCIÓN SOBRE MÍ
  // ──────────────────────────────────────────────────────────────────────

  anios_experiencia: 5,   // número que aparece en el badge de la foto

  // Bio: cada string es un párrafo separado
  bio_en: [
    "Hi, I'm Franco — a game developer based in Argentina specializing in Unity, with solid experience in Godot and Unreal Engine. I build complete games from architecture to store submission on Android and iOS, covering Addressables, URP/HDRP rendering, MQTT-based remote connections, and IoT integrations.",
    "Lately I've been pushing AI hard — automating development tasks with local models and cloud APIs, building voice command systems and AI-generated voice directly into games, and integrating intelligent behaviors for NPCs. If there's a repetitive pipeline in the way, I automate it."
  ],
  bio_es: [
    "Hola, soy Franco — desarrollador de videojuegos de Argentina especializado en Unity, con experiencia sólida en Godot y Unreal Engine. Construyo juegos completos desde la arquitectura hasta la publicación en Google Play y App Store, cubriendo Addressables, rendering URP/HDRP, conexiones remotas via MQTT e integraciones IoT.",
    "Últimamente estoy centrandome en la IA — automatizando tareas con modelos locales y APIs cloud, construyendo sistemas de comandos de voz y voz generada por IA directamente en los juegos, e integrando comportamientos inteligentes para NPCs. Si hay un pipeline repetitivo en el camino, lo automatizo."
  ],

  // Highlights: lista de puntos rápidos
  highlights_en: [
    "Unity · Godot · Unreal Engine 5",
    "Published on Google Play & App Store",
    "AI automation — local models & cloud APIs",
    "MQTT / IoT real-time integrations",
    "Bilingual: Spanish / English — Buenos Aires"
  ],
  highlights_es: [
    "Unity · Godot · Unreal Engine 5",
    "Publicado en Google Play & App Store",
    "Automatización con IA — modelos locales y APIs cloud",
    "Integraciones MQTT / IoT en tiempo real",
    "Bilingüe: Español / Inglés — Buenos Aires"
  ],

  // ──────────────────────────────────────────────────────────────────────
  //  VIDEO / SHOWREEL
  //
  //    video_tipo: "youtube"  → usá video_youtube_id
  //                "local"    → usá video_local_src (y opcionalmente video_poster)
  //                "none"     → muestra el placeholder gráfico
  // ──────────────────────────────────────────────────────────────────────

  video_tipo:       "none",
  video_youtube_id: "",          // solo el ID  ej: "dQw4w9WgXcQ"
  video_local_src:  "",          // ej: "video/showreel.mp4"
  video_poster:     "",          // ej: "images/video-poster.jpg"

  // ──────────────────────────────────────────────────────────────────────
  //  GALERÍA DE TRABAJOS  (máximo 5 items)
  //
  //    imagen:    ruta a la imagen estática (.jpg / .png / .webp).
  //               Dejá "" para mostrar placeholder.
  //    loop:      ruta a un archivo animado que se reproduce solo en loop,
  //               sin necesidad de clic. Tiene prioridad sobre "imagen".
  //               Soporta:  .webp animado  ·  .gif  ·  .mp4  ·  .webm
  //               Ejemplo:  "images/juego1.webp"  o  "images/demo.mp4"
  //    youtube:   URL de YouTube o ID del video. Se embebe en autoplay + loop + mute.
  //               Acepta cualquier formato:
  //                 "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  //                 "https://youtu.be/dQw4w9WgXcQ"
  //                 "dQw4w9WgXcQ"
  //               Prioridad: youtube > loop > imagen
  //    titulo_en: nombre del proyecto en inglés
  //    titulo_es: nombre del proyecto en español
  //    link:      URL externa (ej: itch.io). Si está, aparece un botón "Play"
  //               sobre la imagen. Dejá "" para no mostrar botón.
  // ──────────────────────────────────────────────────────────────────────

  galeria: [    
    { imagen: "", loop: "images/tao.mp4", youtube: "", titulo_en: "The Abyss of Oblivion", titulo_es: "The Abyss of Oblivion", link: "https://etziok.itch.io/tao" },
    { imagen: "", loop: "images/oddisey.mp4", youtube: "", titulo_en: "Oddysey VR",    titulo_es: "Oddysey VR",        link: "https://tryhard-studios.itch.io/ods-odyssey-vr" },
    { imagen: "images/cloudlabsi2.jpg", loop: "", youtube: "", titulo_en: "Cloudlabs learning", titulo_es: "Cloudlabs learning", link: "https://cloudlabslearning.com/" },
    { imagen: "images/recessIMG.png", loop: "", youtube: "", titulo_en: "Recess Rumble X",    titulo_es: "Recess Rumble X",   link: "https://etziok.itch.io/recess-rumble" }
  ],

  // ──────────────────────────────────────────────────────────────────────
  //  HABILIDADES / SERVICIOS
  //    Podés agregar, quitar o reordenar los objetos de este array
  // ──────────────────────────────────────────────────────────────────────

  habilidades: [

    {
      icono:     "🎮",
      titulo_en: "Unity Development",
      titulo_es: "Desarrollo en Unity",
      desc_en:   "Primary engine. Full production pipeline from architecture to store submission — Addressables for scalable asset delivery, MQTT for real-time remote connections, URP/HDRP rendering, Scriptable Object architecture, Shader Graph, DOTween, Cinemachine, and the new Input System.",
      desc_es:   "Motor principal. Pipeline de producción completo desde arquitectura hasta publicación en tiendas — Addressables para entrega de assets escalable, MQTT para conexiones remotas en tiempo real, rendering URP/HDRP, arquitectura con Scriptable Objects, Shader Graph, DOTween, Cinemachine y nuevo Input System.",
      tags: ["C#", "Addressables", "MQTT", "URP / HDRP", "Shader Graph", "DOTween", "Scriptable Objects", "UI Toolkit", "Input System", "Cinemachine", "Profiler & Optimization"]
    },

    {
      icono:     "🌐",
      titulo_en: "Godot & Unreal Engine",
      titulo_es: "Godot & Unreal Engine",
      desc_en:   "Cross-engine experience: GDScript and C# in Godot 4 for rapid prototyping and indie projects; Blueprints and C++ in Unreal Engine 5 for high-fidelity productions. Able to switch engines based on project needs.",
      desc_es:   "Experiencia multi-motor: GDScript y C# en Godot 4 para prototipado rápido y proyectos indie; Blueprints y C++ en Unreal Engine 5 para producciones de alta fidelidad. Capacidad de cambiar de motor según las necesidades del proyecto.",
      tags: ["Godot 4", "GDScript", "C#", "Unreal Engine 5", "Blueprints", "C++", "Lumen", "Nanite", "MetaSounds"]
    },

    {
      icono:     "📱",
      titulo_en: "Mobile & Store Deployment",
      titulo_es: "Mobile & Publicación en Tiendas",
      desc_en:   "End-to-end mobile shipping on Android and iOS — build optimization, IL2CPP, profiling, APK/AAB packaging, signing, versioning, and full Google Play / App Store submission and review process.",
      desc_es:   "Publicación mobile de punta a punta en Android e iOS — optimización de builds, IL2CPP, profiling, empaquetado APK/AAB, firmado, versionado y proceso completo de revisión en Google Play / App Store.",
      tags: ["Android", "iOS", "Google Play", "App Store", "IL2CPP", "ARM64", "Gradle", "Xcode", "APK / AAB", "Build Optimization"]
    },

    {
      icono:     "🤖",
      titulo_en: "AI Integration & Automation",
      titulo_es: "Integración de IA & Automatización",
      desc_en:   "AI applied across the full development stack: task automation pipelines via local models (Ollama, LM Studio) and cloud APIs (OpenAI, Anthropic); in-game AI for NPC behavior and dynamic difficulty; voice command recognition and AI-generated voice (TTS) integrated directly into games — both local and via API.",
      desc_es:   "IA aplicada en todo el stack: pipelines de automatización via modelos locales (Ollama, LM Studio) y APIs cloud (OpenAI, Anthropic); IA en el juego para NPCs y dificultad dinámica; reconocimiento de comandos de voz y voz generada por IA (TTS) integrados directamente — tanto local como por API.",
      tags: ["OpenAI API", "Anthropic API", "Ollama", "LM Studio", "Voice Commands", "AI TTS / Voice", "NPC AI", "Procedural Gen", "Automation Pipelines", "Whisper", "ElevenLabs"]
    },

    {
      icono:     "📡",
      titulo_en: "IoT & Remote Connections",
      titulo_es: "IoT & Conexiones Remotas",
      desc_en:   "Real-time bidirectional communication between games and external systems via MQTT — remote control of in-game events, sensor data integration, and live state synchronization across devices and platforms.",
      desc_es:   "Comunicación bidireccional en tiempo real entre juegos y sistemas externos via MQTT — control remoto de eventos en el juego, integración de datos de sensores y sincronización de estado en vivo entre dispositivos y plataformas.",
      tags: ["MQTT", "WebSockets", "REST APIs", "IoT", "Real-time Sync", "Raspberry Pi", "Arduino"]
    },

    {
      icono:     "📊",
      titulo_en: "Analytics & Data for Games",
      titulo_es: "Analytics & Datos para Juegos",
      desc_en:   "Full instrumentation and analysis pipelines using Unity Analytics and Meta (Facebook) Analytics — funnel design, retention events, A/B testing, and custom dashboards. Data is also structured and exported as training sets for future AI models: player behavior, session patterns, and economy data ready for ML pipelines.",
      desc_es:   "Pipelines completos de instrumentación y análisis con Unity Analytics y Meta (Facebook) Analytics — diseño de funnels, eventos de retención, A/B testing y dashboards personalizados. Los datos también se estructuran y exportan como conjuntos de entrenamiento para modelos de IA futuros: comportamiento de jugadores, patrones de sesión y datos de economía listos para pipelines de ML.",
      tags: ["Unity Analytics", "Meta Analytics", "Facebook SDK", "Funnel Analysis", "A/B Testing", "Retention Metrics", "Custom Events", "LTV Tracking", "ML Dataset Export", "BigQuery", "Data Studio"]
    },

    {
      icono:     "🎬",
      titulo_en: "Motion & Video",
      titulo_es: "Motion & Video",
      desc_en:   "Game trailers, devlogs, and motion graphics — from screen capture and editing to animated UI reveals and promotional assets.",
      desc_es:   "Trailers de juegos, devlogs y motion graphics — desde captura y edición hasta reveals animados de UI y material promocional.",
      tags: ["After Effects", "Premiere Pro", "DaVinci Resolve", "OBS", "GSAP"]
    },

  ],

  // ──────────────────────────────────────────────────────────────────────
  //  CONTACTO
  // ──────────────────────────────────────────────────────────────────────

  email: "francokees94@gmail.com",

  // ──────────────────────────────────────────────────────────────────────
  //  REDES SOCIALES
  //    ocultar: true  → no muestra esa red en la página
  // ──────────────────────────────────────────────────────────────────────

  github: {
    url:     "https://github.com/tu-usuario",
    handle:  "@tu-usuario",
    ocultar: false
  },
  linkedin: {
    url:     "https://www.linkedin.com/in/franco-kees-b1a2a034a/",
    handle:  "Franco Kees",
    ocultar: false
  },
  twitter: {
    url:     "https://x.com/tu-usuario",
    handle:  "@tu-usuario",
    ocultar: true
  },
  instagram: {
    url:     "https://instagram.com/tu-usuario",
    handle:  "@tu-usuario",
    ocultar: true
  },

  // ──────────────────────────────────────────────────────────────────────
  //  HERO — CHIP DE VIDEOJUEGOS
  // ──────────────────────────────────────────────────────────────────────

  juegos_publicados: 6,   // número que aparece en el chip "X games shipped"

};
