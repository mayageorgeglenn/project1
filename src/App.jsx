import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Consuming from './components/Consuming';
import Footer from './components/Footer';
import Stars from './components/Stars';

export default function App() {
  return (
    <>
      {/* Grid overlay */}
      <div className="bg-grid" />

      {/* Floating pixel stars */}
      <Stars />

      <Navbar />
      <main>
        <Hero />
        <div className="separator" />
        <About />
        <div className="separator" />
        <Projects />
        <div className="separator" />
        <CV />
        <div className="separator" />
        <Consuming />
      </main>
      <Footer />
    </>
  );
}
