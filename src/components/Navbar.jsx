import { useState } from 'react';
import './Navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'CV', href: '#cv' },
  { label: 'Now', href: '#consuming' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Maya Glenn</div>

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

      <div className="navbar__right">
        <a href="https://linkedin.com/in/maya-glenn-mgg1968" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:mayaglenn@utexas.edu">Email</a>
      </div>
    </nav>
  );
}
