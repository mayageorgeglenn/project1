import './Experience.css';

const roles = [
    { date: '2026 —', role: 'Deployment Strategist', company: 'Palantir Technologies', url: 'https://www.palantir.com/' },
    { date: '2025', role: 'M&A Summer Analyst', company: 'Stagwell', url: 'https://www.stagwellglobal.com/' },
    { date: '2024', role: 'AI Product & Data Science Intern', company: 'Arcade', url: 'https://www.arcade.ai/' },
    { date: '2024', role: 'Due Diligence Extern', company: 'Oxcart Ventures', url: 'https://www.oxcart.vc/' },
    { date: '2024', role: "Founder's Associate", company: 'Throne', url: 'https://throne.com/landing' },
    { date: '2024 —', role: 'Director of External Relations', company: 'Texas Venture Group', url: 'https://www.texasventuregroup.com/' }
];

export default function Experience() {
    return (
        <section id="experience">
            <span className="section-label">03 — CV</span>

            <div className="exp-container">
                {/* Education Header */}
                <div className="edu-block">
                    <div className="edu-row">
                        <span className="edu-date">2022 — 2026</span>
                        <span className="edu-degree">B.S. Statistics & Data Science, Minor in Computer Science</span>
                        <span className="edu-school">UT Austin</span>
                    </div>
                    <div className="edu-details">
                    </div>
                </div>

                {/* Experience Index */}
                {roles.map((r) => (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="exp-row" key={r.role}>
                        <span className="exp-date">{r.date}</span>
                        <span className="exp-role">{r.role}</span>
                        <span className="exp-company">{r.company}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
