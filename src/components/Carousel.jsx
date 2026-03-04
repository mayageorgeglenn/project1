import { useState } from 'react';
import './Carousel.css';

export default function Carousel({ items }) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => Math.max(i - 1, 0));
    const next = () => setIndex((i) => Math.min(i + 1, items.length - 1));

    return (
        <div className="carousel">
            <div className="carousel-track">
                <img
                    src={items[index].src}
                    alt={items[index].caption}
                    className="carousel-img"
                />
                <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous" disabled={index === 0}>←</button>
                <button className="carousel-btn carousel-next" onClick={next} aria-label="Next" disabled={index === items.length - 1}>→</button>
            </div>
            <div className="carousel-footer">
                <p className="carousel-caption">{items[index].caption}</p>
                <span className="carousel-counter">{index + 1} / {items.length}</span>
            </div>
        </div>
    );
}
