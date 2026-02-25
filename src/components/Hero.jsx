import './Hero.css';

function InlineStar() {
    return (
        <svg
            viewBox="0 0 24 24"
            className="hero__star-inline"
            style={{ width: '0.45em', height: '0.45em', filter: 'drop-shadow(0 0 6px rgba(232,212,140,0.5))' }}
        >
            <polygon
                points="12,0 13.5,9 24,12 13.5,15 12,24 10.5,15 0,12 10.5,9"
                fill="#E8D48C"
            />
        </svg>
    );
}

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <h1 className="hero__name">
                Maya<InlineStar />Glenn
            </h1>

            <div className="hero__subtitle hero__subtitle--top">
                Data Science & Strategy
            </div>
            <div className="hero__subtitle hero__subtitle--bottom">
                UT Austin — Incoming at Palantir
            </div>

            <div className="hero__scroll">↓ SCROLL</div>
        </section>
    );
}
