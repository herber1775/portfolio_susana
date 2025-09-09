// Información personal y profesional de Susana Linares Gonzales

export const personalInfo = {
  name: "Susana Linares Gonzales",
  profession: "Diseñadora Gráfica & Comunicadora",
  location: "Lima, Perú",
  email: "suelinaresg@gmail.com",
  phone: "+51 987 654 321",
  cvUrl: "/doc/CV_Susana_Linares.pdf",
  currentYear: new Date().getFullYear(), // Año automático

  // Descripción profesional
  aboutMe:
    "Soy una diseñadora visual apasionada por crear experiencias digitales agradables, funcionales y centradas en el usuario. Actualmente estudio en Cibertec, donde fortalezco mis habilidades en diseño y tecnología. Combino mi formación en Derecho con mi pasión por el diseño gráfico, creando soluciones creativas únicas. Además, mi experiencia en radio me ha brindado habilidades excepcionales de comunicación que aplico en cada proyecto.",

  // Descripción breve para hero
  description:
    "Soy una diseñadora visual apasionada por crear experiencias digitales agradables, funcionales y centradas en el usuario. Con formación única en Derecho y Diseño Gráfico, aporto una perspectiva analítica y creativa a cada proyecto.",

  // Estadísticas
  stats: [],

  // Navegación
  navigation: [
    { nombre: "Inicio", href: "#home" },
    { nombre: "Sobre Mí", href: "#about" },
    { nombre: "Portfolio", href: "#portfolio" },
    { nombre: "Galería", href: "#gallery" },
  ],

  // Imágenes
  images: {
    profile: "/images/profile/fotoformal.png", // URL directa
    about: "/images/profile/susana1.jpeg", // URL directa
    hero: "/images/profile/fotoformal.png", // URL directa
  },
};

// Habilidades integradas en AboutMe component

// Portfolio/Proyectos
export const projects = [
  {
    id: 1,
    title: "The Cure - Desintegration",
    category: "Portada",
    description: "Maquetación y diseño de revista cultural",
    image:
      "/images/portfolio/4.the-cure-portada-inspirada-en-Van-Gogh-Campo-de-trigo.png", // URL directa
    technologies: ["InDesign", "Photoshop", "Ilustración"],
    year: "2025",
  },

  {
    id: 2,
    title: "Ópera de los 3 centavos",
    category: "Flyer Publicitario",
    description: "Identidad visual completa para restaurante limeño",
    image: "/images/portfolio/2.Laoperadetrescentavos.png", // URL directa
    technologies: ["Illustrator", "InDesign", "Fotografía"],
    year: "2025",
  },
  {
    id: 3,
    title: "Campaña contra el estrés",
    category: "Flyer Publicitario",
    description: "Desarrollo de contenido creativo para programa de radio",
    image: "/images/portfolio/3.flyerpublicitario.png", // URL directa
    technologies: ["Audio", "Comunicación", "Creatividad"],
    year: "2025",
  },
  {
    id: 4,
    title: "Derrame de petroleo",
    category: "Collage tipo montaje",
    description:
      "Desarrollo completo de campaña publicitaria para empresa local",
    image: "/images/portfolio/1.Collage.jpeg", // URL directa
    technologies: ["Photoshop", "Illustrator", "Fotografía"],
    year: "2025",
  },
  {
    id: 5,
    title: "La última marcha",
    category: "Collage 3D",
    description: "Diseño de cartelería para evento musical",
    image: "/images/portfolio/5.Collagetridemensional.png", // URL directa - reutiliza imagen
    technologies: ["Illustrator", "Photoshop"],
    year: "2025",
  },
];

// Información de contacto
export const contactInfo = [
  {
    icon: "📧",
    title: "Email",
    value: "suelinaresg@gmail.com",
    link: "mailto:suelinaresg@gmail.com",
  },
  {
    icon: "📱",
    title: "Teléfono",
    value: "+51 906 619 140",
    link: "tel:+51906619140",
  },
  {
    icon: "📍",
    title: "Ubicación",
    value: "Lima, Perú",
    link: "#",
  },
];

// Enlaces sociales
export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/susana-linares-gonzales-04aa73235/overlay/contact-info/",
    icon: "💼",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/susana.design",
    icon: "📸",
  },
];
