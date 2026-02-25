import './About.css';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="section">
                <p className="section__label">About Me</p>
                <h2 className="section__title">A little about who I am</h2>

                <div className="about__grid">
                    <div className="about__avatar-wrapper">
                        <div className="about__avatar">👩‍💻</div>
                        <div className="about__avatar-accent" />
                    </div>

                    <div className="about__content">
                        <div className="about__bio">
                            <p>
                                I'm Maya — a developer and designer who loves turning complex ideas into elegant,
                                user-friendly digital products. I believe the best software feels invisible: it
                                just works, and it feels great doing it.
                            </p>
                            <p>
                                When I'm not coding, you'll find me sketching UI concepts, exploring new music,
                                or diving into a good book. I'm endlessly curious and always learning something new.
                            </p>
                            <p>
                                I care deeply about accessibility, performance, and the small details that make
                                an interface feel truly polished.
                            </p>
                        </div>

                        <div className="about__highlights">
                            <div className="about__stat">
                                <div className="about__stat-value">5+</div>
                                <div className="about__stat-label">Years Experience</div>
                            </div>
                            <div className="about__stat">
                                <div className="about__stat-value">20+</div>
                                <div className="about__stat-label">Projects Shipped</div>
                            </div>
                            <div className="about__stat">
                                <div className="about__stat-value">∞</div>
                                <div className="about__stat-label">Curiosity Level</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
