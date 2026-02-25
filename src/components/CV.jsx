import './CV.css';

const experience = [
    {
        role: 'Deployment Strategist',
        org: 'Palantir Technologies',
        date: 'August 2026',
        desc: "Incoming Deployment Strategist at Palantir's New York office.",
    },
    {
        role: 'M&A Summer Analyst',
        org: 'Stagwell',
        date: 'June 2025 — August 2025',
        desc: 'M&A transactions and portfolio growth strategy for a $3Bn global holding company. Created 40+ investment memos for C-suite, built earnout and operating models for 9 active deals, and authored 8 AI adoption strategy memos.',
    },
    {
        role: 'AI Product Intern / Data Science Intern',
        org: 'Arcade',
        date: 'May 2024 — December 2024',
        desc: 'Series A startup ($42M funding). Delivered 50-page competitive analysis to C-suite, authored UI/UX specs accelerating MVP by 30%, ran training data pipelines for generative AI models, and helped build a data management platform increasing efficiency by 60%+.',
    },
    {
        role: 'Due Diligence Extern',
        org: 'Oxcart Ventures',
        date: 'September 2024 — December 2024',
        desc: 'Critical technologies VC firm. Authored battery market landscape memo with competitor analysis, and led sourcing for early-stage non-Li-Ion battery investments.',
    },
    {
        role: 'Founder\'s Associate',
        org: 'Throne',
        date: 'March 2024 — May 2024',
        desc: 'Marketing analytics for a bootstrapped e-commerce marketplace. Led creator partnerships achieving 60%+ onboarding rate, and performed product analytics to inform advertising strategies.',
    },
];

const education = [
    {
        role: 'B.S. Statistics & Data Science',
        org: 'The University of Texas at Austin',
        date: '2022 — 2026',
        desc: 'Minor in Computer Science. Polymathic Scholars Honors Program. GPA: 3.95/4.0. College of Natural Sciences Scholarship.',
    },
];

const skills = {
    'Languages & Tools': ['Python', 'SQL', 'R', 'Tableau', 'Excel', 'Power BI'],
    'Python Libraries': ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    'Domains': ['Financial Modeling', 'Valuation', 'M&A', 'Data Visualization'],
    'ML & AI': ['XGBoost', 'Random Forest', 'SVM', 'Linear Regression'],
};

export default function CV() {
    return (
        <section className="cv" id="cv">
            <div className="section-wrap">
                <div className="section-label">Experience</div>
                <h2 className="section-title">My journey so far</h2>

                <div className="cv__columns">
                    <div>
                        <div className="cv__col-title">Work</div>
                        {experience.map((e) => (
                            <div className="cv__item" key={e.role}>
                                <div className="cv__item-role">{e.role}</div>
                                <div className="cv__item-org">{e.org}</div>
                                <div className="cv__item-date">{e.date}</div>
                                <div className="cv__item-desc">{e.desc}</div>
                            </div>
                        ))}

                        <div className="cv__col-title" style={{ marginTop: 'var(--space-m)' }}>Education</div>
                        {education.map((e) => (
                            <div className="cv__item" key={e.role}>
                                <div className="cv__item-role">{e.role}</div>
                                <div className="cv__item-org">{e.org}</div>
                                <div className="cv__item-date">{e.date}</div>
                                <div className="cv__item-desc">{e.desc}</div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="cv__col-title">Skills</div>
                        {Object.entries(skills).map(([cat, items]) => (
                            <div className="cv__category" key={cat}>
                                <div className="cv__category-label">{cat}</div>
                                <div className="cv__skills-grid">
                                    {items.map((s) => (
                                        <span className="cv__skill" key={s}>{s}</span>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="cv__col-title" style={{ marginTop: 'var(--space-m)' }}>Leadership</div>
                        <div className="cv__item">
                            <div className="cv__item-role">Director of External Relations</div>
                            <div className="cv__item-org">Texas Venture Group</div>
                            <div className="cv__item-date">January 2024 — Present</div>
                            <div className="cv__item-desc">
                                UT's premier VC organization. Build relationships with 20+ venture firms and startups,
                                and oversee consulting projects from software engineering to market landscaping.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
