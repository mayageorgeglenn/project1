import './CV.css';

const experience = [
    {
        role: 'Senior Frontend Developer',
        org: 'Acme Corp',
        date: '2023 — Present',
        desc: 'Leading the design-system team and building performant, accessible interfaces used by millions.',
    },
    {
        role: 'Full-Stack Developer',
        org: 'Startup Studio',
        date: '2021 — 2023',
        desc: 'Shipped 6 web apps from zero-to-launch, handling both frontend architecture and backend APIs.',
    },
    {
        role: 'Junior Developer',
        org: 'Digital Agency',
        date: '2019 — 2021',
        desc: 'Built client-facing websites and dashboards, focusing on responsive design and animation.',
    },
];

const education = [
    {
        role: 'B.Sc. Computer Science',
        org: 'State University',
        date: '2015 — 2019',
        desc: 'Graduated with honors. Focused on HCI, web technologies, and software engineering.',
    },
];

const skills = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
    'Frameworks': ['React', 'Next.js', 'Node.js', 'Express'],
    'Tools': ['Git', 'Figma', 'Docker', 'PostgreSQL', 'MongoDB'],
    'Soft Skills': ['Communication', 'Leadership', 'Problem Solving'],
};

export default function CV() {
    return (
        <section className="cv" id="cv">
            <div className="section">
                <p className="section__label">Curriculum Vitae</p>
                <h2 className="section__title">My journey so far</h2>

                <div className="cv__columns">
                    {/* Left: Experience + Education */}
                    <div>
                        <h3 className="cv__column-title">Experience</h3>
                        <div className="cv__timeline">
                            {experience.map((e) => (
                                <div className="cv__item" key={e.role}>
                                    <div className="cv__item-role">{e.role}</div>
                                    <div className="cv__item-org">{e.org}</div>
                                    <div className="cv__item-date">{e.date}</div>
                                    <div className="cv__item-desc">{e.desc}</div>
                                </div>
                            ))}
                        </div>

                        <h3 className="cv__column-title" style={{ marginTop: 'var(--space-xl)' }}>Education</h3>
                        <div className="cv__timeline">
                            {education.map((e) => (
                                <div className="cv__item" key={e.role}>
                                    <div className="cv__item-role">{e.role}</div>
                                    <div className="cv__item-org">{e.org}</div>
                                    <div className="cv__item-date">{e.date}</div>
                                    <div className="cv__item-desc">{e.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Skills */}
                    <div>
                        <h3 className="cv__column-title">Skills</h3>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
