import './Consuming.css';

const items = [
    { type: 'Podcast', title: 'Acquired', author: 'Ben Gilbert & David Rosenthal', progress: 85 },
    { type: 'Podcast', title: 'All-In Podcast', author: 'Chamath, Jason, Sacks & Friedberg', progress: 70 },
    { type: 'Interest', title: 'Health & Longevity Research', author: 'Ongoing deep-dive', progress: 60 },
    { type: 'Book', title: 'Shoe Dog', author: 'Phil Knight', progress: 100 },
    { type: 'Hobby', title: 'Espresso Exploration', author: 'Finding the best shots in Austin', progress: 80 },
    { type: 'Hobby', title: 'The Oboe', author: 'Classical & contemporary pieces', progress: 75 },
];

export default function Consuming() {
    return (
        <section className="consuming" id="consuming">
            <div className="section-wrap">
                <div className="section-label">Currently Consuming</div>
                <h2 className="section-title">What I'm into right now</h2>
                <p className="section-body" style={{ marginBottom: 'var(--space-m)' }}>
                    Podcasts about business & tech, health research, espresso, and the oboe.
                </p>

                <div className="consuming__grid">
                    {items.map((item) => (
                        <div className="consuming-card" key={item.title}>
                            <div className="consuming-card__type">{item.type}</div>
                            <div className="consuming-card__title">{item.title}</div>
                            <div className="consuming-card__author">{item.author}</div>
                            <div className="consuming-card__progress">
                                <div className="consuming-card__bar-track">
                                    <div className="consuming-card__bar-fill" style={{ width: `${item.progress}%` }} />
                                </div>
                                <span className="consuming-card__pct">{item.progress}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
