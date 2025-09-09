# Portfolio Susana Linares Gonzales

Portfolio profesional de Susana Linares Gonzales - Diseñadora Gráfica & Comunicadora

## 🚀 Estructura del Proyecto (Simplificada)

```
src/
├── data/
│   ├── personalInfo.js    # Datos centralizados (info personal, proyectos, contacto)
│   └── imageAssets.js     # Gestión de imágenes y paths
├── App.jsx               # Componente principal de la aplicación
├── Portfolio.jsx         # Componente consolidado con todas las secciones
├── Portfolio.css         # Estilos consolidados
├── App.css              # Estilos base (legacy - se puede eliminar)
├── index.css            # Estilos globales base
└── main.jsx             # Punto de entrada de React

public/
├── doc/
│   └── CV_Susana_Linares.pdf    # CV descargable
└── images/
    ├── profile/                  # Imágenes de perfil
    └── portfolio/               # Imágenes de proyectos
```

## 📋 Características

- ✅ **Arquitectura simplificada**: Un solo componente consolidado
- ✅ **Datos centralizados**: Toda la información en `personalInfo.js`
- ✅ **Gestión de assets**: Rutas de imágenes organizadas
- ✅ **Tema personalizado**: Colores #0D1419 (fondo) y #FFC100 (acento)
- ✅ **Responsive design**: Adaptado a móviles y tablets
- ✅ **Lightbox para galería**: Visualización de proyectos
- ✅ **Descarga de CV**: Funcionalidad integrada

## 🎨 Secciones

1. **Header**: Navegación fija con logo y menú
2. **Hero**: Presentación principal con estadísticas
3. **Sobre Mí**: Información personal y habilidades
4. **Galería**: Portfolio de proyectos con lightbox
5. **Footer**: Contacto y enlaces sociales

## 🛠️ Tecnologías

- React 18
- Vite
- CSS3 con Grid y Flexbox
- Fuentes Google (Inter)

## 📦 Instalación

```bash
npm install
npm run dev
```

## 🔧 Personalización

Para personalizar el portfolio:

1. **Datos personales**: Editar `src/data/personalInfo.js`
2. **Imágenes**: Subir a `public/images/profile/` y `public/images/portfolio/`
3. **CV**: Reemplazar `public/doc/CV_Susana_Linares.pdf`
4. **Colores**: Modificar variables CSS en `Portfolio.css`

## 📁 Gestión de Assets

### Imágenes de perfil:
- `public/images/profile/susana1.jpeg` - Imagen principal
- `public/images/profile/fotoformal.png` - Imagen para "Sobre Mí"

### Imágenes de proyectos:
- `public/images/portfolio/Collage1.jpeg` - Proyecto ejemplo

### Documento:
- `public/doc/CV_Susana_Linares.pdf` - CV descargable

## 🎯 Optimizaciones Realizadas

- ❌ Eliminada estructura modular excesiva (`src/components/ui/`)
- ❌ Removidos archivos CSS duplicados
- ❌ Eliminado componente Skills no utilizado
- ❌ Limpiadas carpetas vacías (`src/styles/`)
- ✅ Consolidado en un solo componente funcional
- ✅ CSS unificado con mejor organización
- ✅ Datos centralizados para fácil mantenimiento

## 📝 Notas de Desarrollo

- El proyecto mantiene la funcionalidad completa pero con menos archivos
- Los datos están centralizados en `personalInfo.js` para fácil edición
- Las rutas de imágenes se gestionan desde `imageAssets.js`
- El CSS está optimizado y sin duplicaciones
- Estructura limpia y mantenible
