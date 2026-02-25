import './Footer.css';

const socials = [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Email', href: 'mailto:hello@mayaglenn.dev' },
];

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__links">
                {socials.map((s) => (
                    <li key={s.label}>
                        <a className="footer__link" href={s.href} target="_blank" rel="noopener noreferrer">
                            {s.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p className="footer__copy">
                © 2026 Maya Glenn — built with <span>♥</span> and React
            </p>
        </footer>
    );
}
