import Header from './components/ui/Header';
import MainSection from './components/ui/MainSection';
import AboutMe from './components/ui/AboutMe';
import Gallery from './components/ui/Gallery';
import Footer from './components/ui/Footer';
import './App.css';

function App() {
  return (
  <div className="app-container" style={{background: '#0D1419'}}>
      <Header />
      <MainSection />
      <AboutMe />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
