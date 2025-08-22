import './AboutMe.css';
import { personalInfo } from '../../data/personalInfo';

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
              {/* <div className="skill-item">
                <span className="skill-icon">🤖</span>
                <div>
                  <h4>IA para Imágenes</h4>
                  <p>Generación de contenido visual con inteligencia artificial</p>
                </div>
              </div> */}
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

export default AboutMe;
