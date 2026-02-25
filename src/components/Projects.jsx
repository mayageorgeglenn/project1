import './Projects.css';

const projects = [
    {
        emoji: '🎨',
        title: 'Design System Kit',
        desc: 'A comprehensive component library and design-token system built for scalability and consistency across products.',
        tags: ['React', 'Figma', 'Storybook'],
    },
    {
        emoji: '📊',
        title: 'Analytics Dashboard',
        desc: 'Real-time data visualization dashboard with custom charts, filters, and an intuitive drill-down interface.',
        tags: ['D3.js', 'Node', 'PostgreSQL'],
    },
    {
        emoji: '🤖',
        title: 'AI Writing Assistant',
        desc: 'An intelligent writing tool that suggests improvements, detects tone, and helps users write more clearly.',
        tags: ['Python', 'GPT API', 'React'],
    },
    {
        emoji: '🛒',
        title: 'E-Commerce Platform',
        desc: 'A full-stack storefront with cart management, Stripe payments, and an admin panel for inventory tracking.',
        tags: ['Next.js', 'Stripe', 'MongoDB'],
    },
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="section">
                <p className="section__label">Projects</p>
                <h2 className="section__title">Things I've built</h2>
                <p className="section__subtitle">
                    A selection of projects that showcase my skills across design, frontend, and full-stack development.
                </p>

                <div className="projects__grid">
                    {projects.map((p) => (
                        <article className="project-card" key={p.title}>
                            <div className="project-card__image">{p.emoji}</div>
                            <div className="project-card__body">
                                <h3 className="project-card__title">{p.title}</h3>
                                <p className="project-card__desc">{p.desc}</p>
                                <div className="project-card__tags">
                                    {p.tags.map((t) => (
                                        <span className="pill" key={t}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
