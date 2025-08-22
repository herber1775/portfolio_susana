import './Gallery.css';
import { useState } from 'react';
import { projects } from '../../data/personalInfo';

function Gallery() {
  const categories = ['Todos', 'Publicidad', 'Branding', 'Radio', 'Editorial'];
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (img) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Mis Trabajos <span className="highlight">Recientes</span>
          </h2>
          <p className="section-description">
            Selección de piezas visuales. Pasa el cursor y haz clic en el icono para ver en grande.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`filter-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item simple">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <button className="action-btn view-btn" onClick={() => openLightbox(project.image)} aria-label="Ver grande">
                    👁️
                  </button>
                </div>
                <div className="hover-caption" aria-hidden="true">
                  <span className="hover-caption__category">{project.category}</span>
                  <span className="hover-caption__title">{project.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {lightboxImage && (
          <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
            <button className="lightbox__close" aria-label="Cerrar" onClick={closeLightbox}>✕</button>
            <img className="lightbox__image" src={lightboxImage} alt="Vista ampliada" onClick={(e) => e.stopPropagation()} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
