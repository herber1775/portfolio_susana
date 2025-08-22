import './Footer.css';
import { personalInfo, contactInfo, socialLinks } from '../../data/personalInfo';

function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            {/* <h2 className="footer-title">
              Trabajemos <span className="highlight">Juntos</span>
            </h2> */}
            <p className="footer-description">
              Siempre estoy abierta a discutir nuevas oportunidades, 
              proyectos creativos o posibles colaboraciones.
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
              {/* Sección de Servicios eliminada */}
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
          <p>&copy; 2024 {personalInfo.name}. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
