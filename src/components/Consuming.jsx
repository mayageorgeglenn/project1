import './Consuming.css';

export default function Consuming() {
    return (
        <section id="consuming">
            <span className="section-label">04 — Consuming</span>

            <div className="consuming-container">
                <div className="consuming-grid">
                    <div className="consuming-col">
                        <span className="consuming-title">Listening</span>
                        <p>Acquired</p>
                        <p>My First Million</p>
                        <p>Lenny's Podcast</p>
                    </div>
                    <div className="consuming-col">
                        <span className="consuming-title">Reading</span>
                        <p>Stratechery</p>
                        <p>The Design of Everyday Things</p>
                        <p>Zero to One</p>
                    </div>
                    <div className="consuming-col">
                        <span className="consuming-title">Interests</span>
                        <p>Formula 1</p>
                        <p>Film Photography</p>
                        <p>Oolong Tea</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
