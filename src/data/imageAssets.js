// Gestión centralizada de imágenes del portafolio

// NOTA: En Vite, cualquier archivo bajo `public/` se sirve desde la raíz del sitio.
// Por eso, usa rutas absolutas como "/images/..." en vez de rutas relativas a src.

// Imágenes de perfil por variante
export const profileImages = {
  main: "/images/profile/fotoformal.png",      // Foto principal (hero)
  about: "/images/profile/susana1.jpeg",       // Foto para la sección "Sobre Mí"
  hero: "/images/profile/hero.jpg",            // Si quieres una del hero distinta
  fallback: "/images/profile/fotoformal.png",  // Fallback por defecto
};

// Imágenes del portfolio/proyectos
export const portfolioImages = {
  project1: "/images/portfolio/Collage1.jpeg",
  project2: "/images/portfolio/branding-restaurante.jpg",
  project3: "/images/portfolio/proyecto-radial.jpg",
  project4: "/images/portfolio/diseno-editorial.jpg",
};

// Placeholders para desarrollo (cuando aún no hay imágenes reales)
export const placeholderImages = {
  designWork1:
    "/images/portfolio/Collage1.jpg",
  designWork2:
    "/images/portfolio/Collage1.jpg",
  designWork3:
    "/images/portfolio/Collage1.jpg",
  designWork4:
    "/images/portfolio/Collage1.jpg",
};

// Helper: obtiene imagen con fallback
export const getImageWithFallback = (primaryPath, fallbackPath) =>
  primaryPath || fallbackPath;

// Imagen de perfil (variant opcional: 'main' | 'about' | 'hero')
export const getProfileImage = (variant = "main") => {
  const candidate = profileImages[variant];
  return getImageWithFallback(candidate, profileImages.fallback);
};

// Imagen de proyecto
export const getProjectImage = (projectId) => {
  const key = `project${projectId}`;
  return getImageWithFallback(
    portfolioImages[key],
    placeholderImages[`designWork${projectId}`] || placeholderImages.designWork1
  );
};
