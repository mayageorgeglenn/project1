import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
    return (
        <section id="work">
            <h2 className="section-heading">Projects<span className="flower-accent">✱</span></h2>

            <div className="work-grid">
                {projects.map((p) => (
                    <Link to={`/projects/${p.id}`} className="project-card" key={p.name}>
                        <div className="project-left">
                            <div className="img-container">
                                <img src={p.img} alt={p.name} className="project-img" />
                            </div>
                            <div className="project-tags">
                                {p.tags.map((tag) => (
                                    <span key={tag} className="tag-pill">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-right">
                            <h3 className="project-title">{p.name}</h3>
                            <p className="project-desc">{p.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
