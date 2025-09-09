import { useState } from 'react';
import { personalInfo, projects, contactInfo, socialLinks } from './data/personalInfo';
import './Portfolio.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">Susana Linares</div>
        <nav className="header__nav">
          {personalInfo.navigation?.filter(item => item.href !== '#gallery').map((item, idx) => (
            <a key={idx} href={item.href} className="nav-link">{item.nombre}</a>
          ))}
          <button className="btn-hire">Contrátame</button>
        </nav>
      </div>
    </header>
  );
}

// Main Hero Section
function MainSection() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Hola, soy</span>
            <h1 className="hero-title">
              <span className="hero-name">{personalInfo.name}</span>
              <br />
              <span className="hero-profession">{personalInfo.profession}</span>
            </h1>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href={personalInfo.cvUrl} download>Descargar CV</a>
              <button className="btn-secondary">
                <span className="play-icon">▶</span>
                Ver Portfolio
              </button>
            </div>
            <div className="hero-stats">
              {personalInfo.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img
                src={personalInfo.images.profile}
                alt="Susana Linares Gonzales"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <img
                src={personalInfo.images.about}
                alt="Sobre mí"
                loading="lazy"
              />
              <div className="image-decoration"></div>
            </div>
          </div>
          <div className="about-text">
            <span className="section-label">Sobre Mí</span>
            <h2 className="section-title">
              Soy <span className="highlight">{personalInfo.profession}</span> de {personalInfo.location}
            </h2>
            <p className="about-description">
              {personalInfo.aboutMe}
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-icon">🎨</span>
                <div>
                  <h4>Diseño Creativo</h4>
                  <p>Creación de diseños únicos y atractivos para marcas</p>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-icon">📺</span>
                <div>
                  <h4>Comunicación</h4>
                  <p>Experiencia en radio y medios audiovisuales</p>
                </div>
              </div>
            </div>
            <div className="about-buttons">
              <a className="btn-primary" href={personalInfo.cvUrl} download>Descargar CV</a>
              <button className="btn-secondary">Contáctame</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Gallery Section with Carousel
function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image) => {
    setLightbox(image);
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="portfolio-section" id="gallery">
      <div className="container">
        <div className="portfolio-header">
          <span className="section-label">Mi Portfolio</span>
          <h2 className="section-title">
            Mis Trabajos <span className="highlight">Recientes</span>
          </h2>
          <p className="section-description">
            Navega por mi galería de proyectos creativos. Haz clic para ver en detalle.
          </p>
        </div>
        
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <button className="carousel-arrow carousel-arrow-left" onClick={prevSlide}>
              ‹
            </button>
            
            <div className="carousel-track" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              {projects.map((project) => (
                <div key={project.id} className="carousel-slide">
                  <div className="carousel-image" onClick={() => openLightbox(project.image)}>
                    <img src={project.image} alt={project.title} />
                    <div className="carousel-overlay">
                      <div className="carousel-content">
                        <span className="carousel-category">{project.category}</span>
                        <h3 className="carousel-title">{project.title}</h3>
                        <p className="carousel-description">{project.description}</p>
                        <span className="carousel-year">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-arrow carousel-arrow-right" onClick={nextSlide}>
              ›
            </button>
          </div>
          
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          <div className="carousel-counter">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {lightbox && (
          <div className="lightbox" onClick={closeLightbox}>
            <img src={lightbox} alt="Vista ampliada" className="lightbox__image" />
            <button className="lightbox__close" onClick={closeLightbox}>×</button>
          </div>
        )}
      </div>
    </section>
  );
}

// Footer Section
function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <p className="footer-description">
              
            </p>
            <div className="contact-info">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item">
                  <span className="contact-icon">{contact.icon}</span>
                  <span>{contact.value}</span>
                </div>
              ))}
            </div>
            <div className="footer-buttons">
              <button className="btn-primary">Contáctame</button>
              <a className="btn-secondary" href={personalInfo.cvUrl} download>Descargar CV</a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Navegación</h4>
              <ul>
                {personalInfo.navigation?.filter(n => n.href !== '#gallery' && n.href !== '#services').map((n) => (
                  <li key={n.href}><a href={n.href}>{n.nombre}</a></li>
                ))}
              </ul>
            </div>
            <div className="link-group">
              <h4>Sígueme</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {personalInfo.currentYear} {personalInfo.name}. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Portfolio Component
function Portfolio() {
  return (
    <div className="app-container">
      <Header />
      <MainSection />
      <AboutMe />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Portfolio;
