import './Header.css';
import { personalInfo } from '../../data/personalInfo';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">Susana Linares</div>
        <nav className="header__nav">
          {personalInfo.navigation?.filter(item => item.href !== '#gallery').map((item, idx) => (
            <a key={item.href} href={item.href} className={`nav-link ${idx === 0 ? 'active' : ''}`}>
              {item.nombre}
            </a>
          ))}
        </nav>
        {/* <button className="btn-hire">Contrátame</button> */}
      </div>
    </header>
  );
}

export default Header;
