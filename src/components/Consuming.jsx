import './Consuming.css';

const items = [
    {
        type: 'Book',
        icon: '📖',
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
        progress: 72,
    },
    {
        type: 'Podcast',
        icon: '🎧',
        title: 'Syntax.fm',
        author: 'Wes Bos & Scott Tolinski',
        progress: 100,
    },
    {
        type: 'Show',
        icon: '📺',
        title: 'Black Mirror',
        author: 'Netflix',
        progress: 45,
    },
    {
        type: 'Book',
        icon: '📖',
        title: 'Atomic Habits',
        author: 'James Clear',
        progress: 90,
    },
    {
        type: 'Article',
        icon: '📝',
        title: 'The Future of CSS',
        author: 'Smashing Magazine',
        progress: 100,
    },
    {
        type: 'Podcast',
        icon: '🎧',
        title: 'The Changelog',
        author: 'Changelog Media',
        progress: 60,
    },
];

export default function Consuming() {
    return (
        <section id="consuming">
            <div className="section">
                <p className="section__label">Currently Consuming</p>
                <h2 className="section__title">What I'm into right now</h2>
                <p className="section__subtitle">
                    Books, podcasts, shows, and articles that are keeping my brain busy.
                </p>

                <div className="consuming__grid">
                    {items.map((item) => (
                        <div className="consuming-card" key={item.title}>
                            <div className="consuming-card__icon">{item.icon}</div>
                            <div className="consuming-card__info">
                                <div className="consuming-card__type">{item.type}</div>
                                <div className="consuming-card__title">{item.title}</div>
                                <div className="consuming-card__author">{item.author}</div>
                                <div className="consuming-card__progress">
                                    <div
                                        className="consuming-card__progress-bar"
                                        style={{ width: `${item.progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
