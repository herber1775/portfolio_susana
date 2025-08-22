# Gestión de Imágenes del Portfolio - Susana Linares Gonzales

## 📁 Estructura de Carpetas

```
public/
└── images/
    ├── profile/          # Fotos de perfil de Susana
    │   ├── susana-main.jpg
    │   ├── susana-about.jpg
    │   └── susana-hero.jpg
    └── portfolio/        # Imágenes de proyectos
        ├── campana-publicitaria.jpg
        ├── branding-restaurante.jpg
        ├── proyecto-radial.jpg
        ├── diseno-editorial.jpg
        ├── identidad-visual.jpg
        └── fotografia-comercial.jpg
```

## 📷 Imágenes Requeridas

### Fotos de Perfil
1. **susana-main.jpg** (400x500px)
   - Foto principal para la sección hero
   - Debe ser profesional y reflejar su personalidad como diseñadora
   - Fondo neutro o minimalista

2. **susana-about.jpg** (400x500px)
   - Foto alternativa para la sección "Sobre Mí"
   - Puede ser más casual o creativa
   - Mostrando su lado comunicativo/radial

3. **susana-hero.jpg** (800x600px)
   - Foto de alta calidad para header
   - Opcional, se usa como fallback

### Proyectos del Portfolio

1. **campana-publicitaria.jpg** (400x300px)
   - Imagen representativa del proyecto de campaña publicitaria regional
   - Puede ser mockup o foto real del trabajo

2. **branding-restaurante.jpg** (400x300px)
   - Logo o identidad visual del restaurante limeño
   - Preferible mostrar aplicación en diferentes elementos

3. **proyecto-radial.jpg** (400x300px)
   - Imagen relacionada con radio/comunicación
   - Puede ser foto en estudio de radio o diseño gráfico para radio

4. **diseno-editorial.jpg** (400x300px)
   - Maquetación de revista o material editorial
   - Mostrar páginas abiertas o diseño final

## 🚀 Cómo Subir las Imágenes

1. **Guardar las imágenes** en las carpetas correspondientes:
   ```
   public/images/profile/susana-main.jpg
   public/images/portfolio/campana-publicitaria.jpg
   ```

2. **Las imágenes se cargarán automáticamente** gracias al sistema modular implementado

3. **Fallback automático**: Si una imagen no se encuentra, se usa una imagen de placeholder de Unsplash

## 🔧 Sistema Modular Implementado

El archivo `src/data/imageAssets.js` gestiona:
- ✅ Rutas centralizadas de imágenes
- ✅ Fallbacks automáticos
- ✅ Funciones helper para cargar imágenes
- ✅ Configuración de optimización

## 🎯 Especificaciones Técnicas

- **Formato recomendado**: JPG o WebP
- **Calidad**: Alta (80-90%)
- **Optimización**: Las imágenes deben estar optimizadas para web
- **Tamaños máximos**:
  - Perfil: 500KB por imagen
  - Portfolio: 300KB por imagen

## 📝 Instrucciones de Uso

1. Coloca las imágenes en las carpetas correspondientes
2. Reinicia el servidor de desarrollo si es necesario
3. Las imágenes aparecerán automáticamente en el portfolio
4. Si una imagen no aparece, verifica:
   - Que el nombre coincida exactamente
   - Que esté en la carpeta correcta
   - Que el formato sea compatible (jpg, png, webp)

## 🔄 Estado Actual

- [x] Sistema de gestión de imágenes implementado
- [x] Estructura de carpetas creada
- [x] Fallbacks configurados
- [ ] **PENDIENTE**: Subir imágenes reales de Susana
- [ ] **PENDIENTE**: Subir imágenes de proyectos reales

## 💡 Tips para Mejores Resultados

1. **Fotos de perfil**: Buena iluminación, expresión profesional pero cálida
2. **Proyectos**: Mostrar el trabajo en contexto real cuando sea posible
3. **Consistencia**: Mantener un estilo visual coherente en todas las imágenes
4. **Resolución**: Usar imágenes de alta resolución que se vean bien en pantallas retina
