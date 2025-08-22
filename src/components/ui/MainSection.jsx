import './MainSection.css';
import { personalInfo } from '../../data/personalInfo';

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
              {/* <div className="floating-card experience-card">
                <span className="card-icon">🎨</span>
                <div>
                  <div className="card-title">3+ Años</div>
                  <div className="card-subtitle">Experiencia</div>
                </div>
              </div>
              <div className="floating-card project-card">
                <span className="card-icon">📺</span>
                <div>
                  <div className="card-title">Radio</div>
                  <div className="card-subtitle">Conductora</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
