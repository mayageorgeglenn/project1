import './Contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <span className="section-label">05 — Contact</span>

            <div className="contact-container">
                <a href="mailto:mayaglenn@utexas.edu" className="contact-link">
                    Email
                </a>
                <a href="https://www.linkedin.com/in/maya-glenn-mgg1968/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    LinkedIn
                </a>
                <a href="https://x.com/mayagglenn" target="_blank" rel="noopener noreferrer" className="contact-link">
                    X
                </a>
            </div>
        </section>
    );
}
