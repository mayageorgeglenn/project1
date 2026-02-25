import { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Projects', 'CV', 'Consuming'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo">
        maya<span>.</span>
      </a>

      <button
        className="navbar__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <li key={l}>
            <a
              className="navbar__link"
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
