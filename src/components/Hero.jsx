import './Hero.css';

export default function Hero() {
    return (
        <header className="hero-section" id="hero">
            <div className="mega-name">
                <div>Maya</div>
                <div>Glenn<span className="hero-outline-char">*</span></div>
            </div>

            <p className="hero-subtitle">
                data science student at UT Austin in the world of tech and venture
            </p>
        </header>
    );
}
