import './About.css';

export default function About() {
    return (
        <section className="about" id="about">
            <div className="section-wrap">
                <div className="section-label">About</div>
                <h2 className="section-title">A little about who I am</h2>

                <div className="about__grid">
                    <div className="about__bio">
                        <p>
                            I'm Maya — a Statistics & Data Science student at UT Austin with a minor in Computer Science,
                            passionate about the intersection of data, technology, and strategy. I love turning complex
                            datasets into actionable insights and helping companies make smarter decisions.
                        </p>
                        <p>
                            From M&A analysis at a $3Bn holding company to building machine learning models and shaping
                            AI product strategy at a Series A startup, I thrive in fast-paced environments where analytical
                            rigor meets creative problem-solving.
                        </p>
                        <p>
                            Outside of work, you'll find me exploring health & longevity research, listening to business and tech
                            podcasts, playing the oboe, or hunting for the best espresso in town.
                        </p>
                    </div>

                    <div className="about__highlights">
                        <div className="about__stat">
                            <div className="about__stat-value">3.95</div>
                            <div className="about__stat-label">GPA</div>
                        </div>
                        <div className="about__stat">
                            <div className="about__stat-value">4+</div>
                            <div className="about__stat-label">Internships</div>
                        </div>
                        <div className="about__stat">
                            <div className="about__stat-value">50+</div>
                            <div className="about__stat-label">Memos Authored</div>
                        </div>
                        <div className="about__stat">
                            <div className="about__stat-value">'26</div>
                            <div className="about__stat-label">Graduating</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
