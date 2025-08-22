// Información personal y profesional de Susana Linares Gonzales
import { getProfileImage, getProjectImage } from './imageAssets';

export const personalInfo = {
  name: "Susana Linares Gonzales",
  profession: "Diseñadora Gráfica & Comunicadora",
  location: "Lima, Perú",
  email: "susana.linares@email.com",
  phone: "+51 987 654 321",
  cvUrl: "/doc/CV_Susana_Linares.pdf",
  
  // Información académica
  education: [
    {
      degree: "Bachiller en Derecho",
      institution: "Universidad Nacional Federico Villarreal",
      year: "2020",
      status: "Completado"
    },
    {
      degree: "Diseño Gráfico",
      institution: "Cibertec",
      year: "En curso",
      status: "Estudiando"
    },
    {
      course: "UI/UX Básico",
      institution: "Certificación Digital",
      year: "2023",
      status: "Completado"
    }
  ],

  // Experiencia y habilidades
  experience: [
    {
      role: "Conductora de Radio",
      company: "Equipo de Radio Local",
      description: "Parte activa del equipo de radio como conductora",
      current: true
    },
    {
      role: "Diseñadora en Proyectos Publicitarios",
      company: "Proyectos Freelance",
      description: "Participación en múltiples proyectos de publicidad y branding",
      current: false
    }
  ],

  // Descripción profesional
  bio: "Soy Susana Linares Gonzales, una diseñadora gráfica apasionada de Lima, Perú. Con formación en Derecho y actualmente estudiando Diseño Gráfico en Cibertec, combino el pensamiento analítico con la creatividad visual. Mi experiencia abarca desde proyectos publicitarios hasta mi rol como conductora de radio, donde desarrollo mi talento comunicativo y creativo.",

  aboutMe: "Soy una diseñadora visual apasionada por crear experiencias digitales agradables, funcionales y centradas en el usuario. Actualmente estudio en Cibertec, donde fortalezco mis habilidades en diseño y tecnología. Combino mi formación en Derecho con mi pasión por el diseño gráfico, creando soluciones creativas únicas. Además, mi experiencia en radio me ha brindado habilidades excepcionales de comunicación que aplico en cada proyecto.",

  // Descripción breve para hero
  description: "Soy una diseñadora visual apasionada por crear experiencias digitales agradables, funcionales y centradas en el usuario. Con formación única en Derecho y Diseño Gráfico, aporto una perspectiva analítica y creativa a cada proyecto.",

  // Estadísticas
  stats: [
    // { number: "3+", label: "Años de Experiencia" },
    { number: "3", label: "Proyectos personales completados" },
    { number: "2", label: "Carreras Profesionales" },
    { number: "100%", label: "Satisfacción del Cliente" }
  ],

  // Navegación
  navigation: [
    { nombre: "Inicio", href: "#home" },
    { nombre: "Sobre Mí", href: "#about" },
    { nombre: "Portfolio", href: "#portfolio" },
    { nombre: "Galería", href: "#gallery" },
    { nombre: "Contacto", href: "#contact" }
  ],

  // Imágenes
  images: {
    profile: getProfileImage('main'),
    about: getProfileImage('about'),
    hero: getProfileImage('hero')
  }
};

// Servicios que ofrece
export const services = [
  {
    icon: '🎨',
    title: 'Diseño Gráfico',
    description: 'Creación de diseños visuales para branding, publicidad y comunicación visual.',
    features: ['Illustrator', 'Photoshop', 'InDesign', 'Canva']
  },
  {
    icon: '📸',
    title: 'Fotografía & Composición',
    description: 'Captura y composición fotográfica profesional para proyectos comerciales y creativos.',
    features: ['Fotografía Digital', 'Composición Visual', 'Edición Fotográfica', 'Fotografía Comercial']
  },
  {
    icon: '🎙️',
    title: 'Comunicación & Radio',
    description: 'Experiencia en comunicación radial y desarrollo de contenido audiovisual creativo.',
    features: ['Conducción Radial', 'Locución', 'Contenido Creativo', 'Comunicación Efectiva']
  }
];

// Habilidades técnicas
export const skills = [
  { name: 'Photoshop', level: 90, icon: '🎨' },
  { name: 'Illustrator', level: 85, icon: '✏️' },
  { name: 'InDesign', level: 80, icon: '📄' },
  { name: 'Canva', level: 95, icon: '🎯' },
  { name: 'UI/UX', level: 70, icon: '📱' },
  { name: 'Fotografía', level: 85, icon: '📸' },
  { name: 'IA Imágenes', level: 75, icon: '🤖' },
  { name: 'Comunicación', level: 90, icon: '🎙️' }
];

// Portfolio/Proyectos
export const projects = [
  {
    id: 1,
    title: 'Campaña Publicitaria Regional',
    category: 'Publicidad',
    description: 'Desarrollo completo de campaña publicitaria para empresa local',
    image: getProjectImage(1),
    technologies: ['Photoshop', 'Illustrator', 'Fotografía'],
    year: '2024'
  },
  {
    id: 2,
    title: 'Branding Restaurante',
    category: 'Branding',
    description: 'Identidad visual completa para restaurante limeño',
    image: getProjectImage(2),
    technologies: ['Illustrator', 'InDesign', 'Fotografía'],
    year: '2023'
  },
  {
    id: 3,
    title: 'Proyecto Radial Creativo',
    category: 'Radio',
    description: 'Desarrollo de contenido creativo para programa de radio',
    image: getProjectImage(3),
    technologies: ['Audio', 'Comunicación', 'Creatividad'],
    year: '2024'
  },
//   {
//     id: 4,
//     title: 'Diseño Editorial',
//     category: 'Editorial',
//     description: 'Maquetación de revista cultural universitaria',
//     image: getProjectImage(4),
//     technologies: ['InDesign', 'Photoshop', 'Fotografía'],
//     year: '2023'
//   }
];

// Información de contacto
export const contactInfo = [
  {
    icon: '📧',
    title: 'Email',
    value: 'susana.linares@email.com',
    link: 'mailto:susana.linares@email.com'
  },
  {
    icon: '📱',
    title: 'Teléfono',
    value: '+51 987 654 321',
    link: 'tel:+51987654321'
  },
  {
    icon: '📍',
    title: 'Ubicación',
    value: 'Lima, Perú',
    link: '#'
  }
];

// Enlaces sociales
export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/susana-linares-gonzales-04aa73235/overlay/contact-info/',
    icon: '💼'
  },
//   {
//     name: 'Behance',
//     url: 'https://behance.net/susana-linares',
//     icon: '🎨'
//   },
  {
    name: 'Instagram',
    url: 'https://instagram.com/susana.design',
    icon: '📸'
  }
];
