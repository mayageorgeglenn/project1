import { useState, useCallback, useEffect, useRef } from 'react';
import './Carousel.css';

export default function Carousel({ items }) {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);
    const next = useCallback(() => setIndex((i) => Math.min(i + 1, items.length - 1)), [items.length]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onKey = (e) => {
            if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
            if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
        };
        el.addEventListener('keydown', onKey);
        return () => el.removeEventListener('keydown', onKey);
    }, [prev, next]);

    return (
        <div className="carousel" ref={containerRef} tabIndex={0} aria-label="Slide carousel">
            <div className="carousel-track">
                <img
                    src={items[index].src}
                    alt={items[index].caption || `Slide ${index + 1}`}
                    className="carousel-img"
                />
                <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous" disabled={index === 0}>←</button>
                <button className="carousel-btn carousel-next" onClick={next} aria-label="Next" disabled={index === items.length - 1}>→</button>
            </div>
            <div className="carousel-footer">
                {items[index].caption && (
                    <p className="carousel-caption">{items[index].caption}</p>
                )}
                <span className="carousel-counter">{index + 1} / {items.length}</span>
            </div>
        </div>
    );
}
