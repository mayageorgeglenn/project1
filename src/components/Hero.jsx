import './Hero.css';

export default function Hero() {
    return (
        <header className="hero-section" id="hero">
            {/* Shooting star trail — arcs up-left from the Glenn ✱ */}
            <div className="star-trail" aria-hidden="true">
                {/* Arc up through space right of MAYA letters */}
                <span className="trail-star" style={{ left: '78vw', top: '50vh', fontSize: '3.0rem' }}>✱</span>
                <span className="trail-star" style={{ left: '76vw', top: '44vh', fontSize: '2.8rem' }}>✱</span>
                <span className="trail-star" style={{ left: '74vw', top: '38vh', fontSize: '2.65rem' }}>✱</span>
                {/* Enter whitespace above MAYA */}
                <span className="trail-star" style={{ left: '73vw', top: '31vh', fontSize: '2.5rem' }}>✱</span>
                <span className="trail-star" style={{ left: '70vw', top: '26vh', fontSize: '2.35rem' }}>✱</span>
                {/* Loop 1 — large */}
                <span className="trail-star" style={{ left: '66vw', top: '22vh', fontSize: '2.2rem' }}>✱</span>
                <span className="trail-star" style={{ left: '61vw', top: '19vh', fontSize: '2.05rem' }}>✱</span>
                <span className="trail-star" style={{ left: '57vw', top: '22vh', fontSize: '1.9rem' }}>✱</span>
                <span className="trail-star" style={{ left: '60vw', top: '27vh', fontSize: '1.8rem' }}>✱</span>
                <span className="trail-star" style={{ left: '56vw', top: '24vh', fontSize: '1.7rem' }}>✱</span>
                {/* Continue left */}
                <span className="trail-star" style={{ left: '51vw', top: '21vh', fontSize: '1.55rem' }}>✱</span>
                <span className="trail-star" style={{ left: '46vw', top: '19vh', fontSize: '1.4rem' }}>✱</span>
                {/* Loop 2 — medium */}
                <span className="trail-star" style={{ left: '42vw', top: '22vh', fontSize: '1.25rem' }}>✱</span>
                <span className="trail-star" style={{ left: '40vw', top: '26vh', fontSize: '1.15rem' }}>✱</span>
                <span className="trail-star" style={{ left: '44vw', top: '29vh', fontSize: '1.05rem' }}>✱</span>
                <span className="trail-star" style={{ left: '47vw', top: '26vh', fontSize: '0.95rem' }}>✱</span>
                <span className="trail-star" style={{ left: '43vw', top: '22vh', fontSize: '0.85rem' }}>✱</span>
                {/* Continue left */}
                <span className="trail-star" style={{ left: '38vw', top: '21vh', fontSize: '0.72rem' }}>✱</span>
                {/* Loop 3 — small */}
                <span className="trail-star" style={{ left: '34vw', top: '23vh', fontSize: '0.6rem' }}>✱</span>
                <span className="trail-star" style={{ left: '32vw', top: '26vh', fontSize: '0.5rem' }}>✱</span>
                <span className="trail-star" style={{ left: '36vw', top: '28vh', fontSize: '0.42rem' }}>✱</span>
                {/* Fade out toward portrait */}
                <span className="trail-star" style={{ left: '31vw', top: '26vh', fontSize: '0.33rem' }}>✱</span>
                <span className="trail-star" style={{ left: '27vw', top: '24vh', fontSize: '0.22rem' }}>✱</span>
                <span className="trail-star" style={{ left: '24vw', top: '25vh', fontSize: '0.13rem' }}>✱</span>
            </div>

            <div className="hero-inner">
                <img src="/portrait.png" alt="" className="hero-portrait" />
                <div className="hero-text">
                    <div className="mega-name">
                        <div>Maya</div>
                        <div>Glenn<span className="hero-outline-char">*</span></div>
                    </div>
                    <p className="hero-subtitle">
                        data science student at UT Austin in the world of tech and venture
                    </p>
                </div>
            </div>
        </header>
    );
}
