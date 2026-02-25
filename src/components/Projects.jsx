import './Projects.css';

const projects = [
    {
        name: 'MetroBike ML Modeling',
        desc: 'Built 4 machine learning models (SVM, XGBoost, RandomForest, Linear Regression) to predict bike trip durations, with feature scaling and hyperparameter tuning.',
        tags: ['Python', 'Scikit-learn', 'XGBoost'],
    },
    {
        name: 'NotedSource Due Diligence Pitch',
        desc: 'Performed sourcing and due diligence on 50+ early-stage Expert Networks startups. Created pitch deck with market sizing, KPIs, and valuation — placed 4th among 100+ attendees.',
        tags: ['Pitchbook', 'Valuation', 'Market Sizing'],
    },
    {
        name: 'AI Competitive Analysis',
        desc: 'Delivered a 50-page competitive analysis to C-suite at Arcade, driving a pivotal shift in go-to-market strategy ahead of a new category launch.',
        tags: ['Market Research', 'Strategy', 'AI'],
    },
    {
        name: 'Portfolio AI Adoption Strategy',
        desc: 'Authored 8 strategy memos on portfolio-wide AI adoption at Stagwell, informed by market research, internal investigation, and competitive analysis.',
        tags: ['M&A', 'AI Strategy', 'Research'],
    },
];

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="section-wrap">
                <div className="section-label">Selected Work</div>
                <h2 className="section-title">Things I've built & delivered</h2>

                <div className="projects__list">
                    {projects.map((p) => (
                        <div className="project-row" key={p.name}>
                            <span className="project-row__name">{p.name}</span>
                            <span className="project-row__desc">{p.desc}</span>
                            <div className="project-row__tags">
                                {p.tags.map((t) => (
                                    <span className="project-row__tag" key={t}>{t}</span>
                                ))}
                            </div>
                            <span className="project-row__arrow">→</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
