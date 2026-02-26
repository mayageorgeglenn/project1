import { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
    const { id } = useParams();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="detail-wrap">
                <p className="detail-not-found">Project not found.</p>
                <Link to="/#work" className="back-link">← back to all projects</Link>
            </div>
        );
    }

    return (
        <div className="detail-wrap">
            <Link to="/#work" className="back-link">← back to all projects</Link>

            {/* 3-col grid: text left | video center | empty right (balances center) */}
            <div className="detail-content">
                <div className="detail-left">
                    <h1 className="detail-title">{project.name}</h1>
                    <p className="detail-subtitle">{project.desc}</p>
                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tag-pill">{tag}</span>
                        ))}
                    </div>
                    <p className="detail-text">{project.detail}</p>
                </div>

                <div className="detail-body">
                    {project.video ? (
                        <div className="detail-video-wrapper">
                            <video
                                className="detail-video"
                                src={project.video}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                        </div>
                    ) : (
                        <div className={`detail-img-container ${project.aspect}`}>
                            <img src={project.img} alt={project.name} className="detail-img" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
