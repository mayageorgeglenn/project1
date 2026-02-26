import './index.css';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Consuming from './components/Consuming';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* Top Left Navigation Header */}
      <nav className="frame-anchor nav-tl" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#work">Projects</a>
        <a href="#experience">CV</a>
        <a href="#consuming">Consuming</a>
        <a href="#contact">Contact</a>
      </nav>

      <Hero />

      <main className="content-wrap">
        <div id="about"><About /></div>
        <Projects />
        <Experience />
        <Consuming />
        <Contact />
      </main>
    </>
  );
}
