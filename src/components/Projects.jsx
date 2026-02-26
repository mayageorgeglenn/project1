import './Projects.css';

const projects = [
    {
        name: 'LONGEVITY SCIENCE THESIS',
        desc: 'Capstone thesis detailing the intersection of longevity science, the consumer wellness industry, the American healthcare system, and artificial intelligence.',
        tags: ['research', 'data science', 'healthcare'],
        img: '/img-ai.png',
        aspect: 'ar-landscape',
    },
    {
        name: 'METROBIKE ML MODELING',
        desc: 'Built an end-to-end machine learning pipeline to forecast MetroBike station demand and optimize rebalancing logistics.',
        tags: ['machine learning', 'python', 'geospatial'],
        img: '/img-ml.png',
        aspect: 'ar-landscape',
    },
    {
        name: 'M&A DEAL PIPELINE',
        desc: 'Sourcing, evaluating, and conducting due diligence on potential acquisition targets for a $3Bn TMT holding company.',
        tags: ['strategy', 'finance', 'investing'],
        img: '/img-strategy.png',
        aspect: 'ar-landscape',
    },
    {
        name: 'AI PRODUCT STRATEGY',
        desc: 'Developed strategic product roadmaps and oversaw implementation for consumer AI interaction features.',
        tags: ['product management', 'ai', 'user research'],
        img: '/img-ai.png',
        aspect: 'ar-landscape',
    },
    {
        name: 'DATA PLATFORM',
        desc: 'Architected a scalable data ingestion and visualization platform for real-time portfolio analytics.',
        tags: ['data platform', 'sql', 'dashboards'],
        img: '/img-data-viz.png',
        aspect: 'ar-landscape',
    },
];

export default function Projects() {
    return (
        <section id="work">
            <span className="section-label">02 — Projects</span>

            <div className="work-grid">
                {projects.map((p) => (
                    <div className="project-card" key={p.name}>
                        {/* Left Side: Image + Tags */}
                        <div className="project-left">
                            <div className={`img-container ${p.aspect}`}>
                                <img src={p.img} alt={p.name} className="project-img" />
                            </div>
                            <div className="project-tags">
                                {p.tags.map((tag) => (
                                    <span key={tag} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Title + Description */}
                        <div className="project-right">
                            <h3 className="project-title">{p.name}</h3>
                            <p className="project-desc">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
