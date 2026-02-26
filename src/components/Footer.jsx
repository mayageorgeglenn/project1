import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__col footer__col--left">
                <span>Maya Glenn</span>
                <span style={{ fontWeight: 300, letterSpacing: '0.05em', fontSize: '0.6rem', color: 'var(--gray-400)' }}>
                    Statistics & Data Science
                </span>
            </div>

            <div className="footer__col footer__col--center">
                <span>Available for Opportunities</span>
                <span>2026</span>
            </div>

            <div className="footer__col footer__col--right">
                <a href="https://linkedin.com/in/maya-glenn-mgg1968" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:mayaglenn@utexas.edu">mayaglenn@utexas.edu</a>
            </div>
        </footer>
    );
}
