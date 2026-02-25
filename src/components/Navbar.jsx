import './Navbar.css';
import { useState } from 'react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Consuming', href: '#consuming' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__left">Portfolio 2026</div>

      <button
        className="navbar__toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
        {links.map((l) => (
          <li key={l.label}>
            <a className="navbar__link" href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__socials">
        <a href="https://linkedin.com/in/maya-glenn-mgg1968" target="_blank" rel="noopener noreferrer">LI</a>
        <a href="mailto:mayaglenn@utexas.edu">EM</a>
      </div>
    </nav>
  );
}
