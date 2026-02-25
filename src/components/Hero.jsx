import './Hero.css';

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero__orb hero__orb--one" />
            <div className="hero__orb hero__orb--two" />

            <p className="hero__greeting">Hello, I'm</p>
            <h1 className="hero__name">
                Maya <span>Glenn</span>
            </h1>
            <p className="hero__tagline">
                Developer, designer &amp; creative thinker — crafting digital experiences that feel effortless.
            </p>
            <a href="#about" className="hero__cta">
                Get to know me ↓
            </a>

            <div className="hero__scroll-hint">
                <span>scroll</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
}
