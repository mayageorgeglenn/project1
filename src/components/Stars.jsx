import { useEffect } from 'react';
import './Stars.css';

/* Delicate 4-pointed twinkle star */
function TwinkleStar({ size = 24, color = '#E8D48C' }) {
    return (
        <svg
            viewBox="0 0 24 24"
            width={size}
            height={size}
            style={{ filter: 'drop-shadow(0 0 4px rgba(232,212,140,0.35))' }}
        >
            <polygon
                points="12,0 13.5,9 24,12 13.5,15 12,24 10.5,15 0,12 10.5,9"
                fill={color}
            />
        </svg>
    );
}

const starData = [
    { top: '12%', left: '8%', size: 24, anim: 'animate-float-medium', delay: '0.1s', opacity: 0.6, color: '#E8D48C' },
    { top: '6%', left: '30%', size: 14, anim: 'animate-float-slow', delay: '0.5s', opacity: 0.4, color: '#D4C478' },
    { top: '18%', right: '12%', size: 28, anim: 'animate-float-fast', delay: '0.3s', opacity: 0.5, color: '#E8D48C' },
    { top: '55%', left: '5%', size: 16, anim: 'animate-float-slow', delay: '0.7s', opacity: 0.35, color: '#D4C478' },
    { top: '70%', right: '8%', size: 18, anim: 'animate-float-medium', delay: '1s', opacity: 0.45, color: '#E8D48C' },
    { top: '38%', left: '85%', size: 12, anim: 'animate-float-slow', delay: '0.2s', opacity: 0.3, color: '#D4C478' },
    { top: '85%', left: '18%', size: 20, anim: 'animate-float-fast', delay: '0.6s', opacity: 0.4, color: '#E8D48C' },
    { top: '45%', right: '25%', size: 10, anim: 'animate-float-medium', delay: '0.8s', opacity: 0.25, color: '#D4C478' },
];

export default function Stars() {
    useEffect(() => {
        const handler = (e) => {
            const stars = document.querySelectorAll('.floating-star');
            const x = (window.innerWidth / 2 - e.pageX) / 50;
            const y = (window.innerHeight / 2 - e.pageY) / 50;
            stars.forEach((s, i) => {
                const speed = (i + 1) * 0.4;
                s.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        };
        document.addEventListener('mousemove', handler);
        return () => document.removeEventListener('mousemove', handler);
    }, []);

    return (
        <div className="stars-container">
            {starData.map((s, i) => (
                <div
                    key={i}
                    className={`floating-star ${s.anim}`}
                    style={{
                        position: 'absolute',
                        top: s.top,
                        left: s.left,
                        right: s.right,
                        opacity: s.opacity,
                        animationDelay: s.delay,
                    }}
                >
                    <TwinkleStar size={s.size} color={s.color} />
                </div>
            ))}
        </div>
    );
}
