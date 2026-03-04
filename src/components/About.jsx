import './About.css';

export default function About() {
    return (
        <section className="about-section" id="about">
            <h2 className="section-heading">About<span className="flower-accent">✱</span></h2>
            <div className="about-body">
                <div className="about-text">
                    <p>I'm a senior at UT Austin studying Statistics & Data Science, with a breadth of experiences across M&A investing, AI product and data science, and growth strategy. On campus, I lead Texas Venture Group, managing partnerships with top VCs and startups through events and projects. This fall, I'm joining Palantir in New York as a Deployment Strategist. Outside of work, I'm into wellness, great food and coffee, and outdoor activities.</p>
                </div>
                <img src="/digital_headshot.png" alt="Maya Glenn" className="about-headshot" />
            </div>
        </section>
    );
}
