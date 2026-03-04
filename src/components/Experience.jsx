import { useState } from 'react';
import './Experience.css';

const roles = [
    {
        date: 'Aug 2026',
        role: 'Incoming Deployment Strategist',
        company: 'Palantir Technologies',
        url: 'https://www.palantir.com/',
        desc: [],
    },
    {
        date: 'Jun — Aug 2025',
        role: 'M&A Summer Analyst',
        company: 'Stagwell',
        url: 'https://www.stagwellglobal.com/',
        context: 'M&A transactions and portfolio growth strategy for a $3Bn global holding company of 70+ digital marketing and advertising assets.',
        desc: [
            'Created and presented 40+ investment memos to the C-suite investment committee, driving weekly decisions on the deal pipeline.',
            'Built earnout models and operating models, performed financial analysis, and led management calls for 9 active M&A transactions.',
            'Authored 8 strategy memos on portfolio-wide AI adoption, informed by market research, internal investigation, and comp analysis.',
        ],
    },
    {
        date: 'Sep — Dec 2024',
        role: 'AI Product Intern',
        company: 'Arcade',
        url: 'https://www.arcade.ai/',
        context: 'A Series A Heretic Ventures portfolio company with $42M in VC funding. The world\'s first AI product creation platform & marketplace.',
        desc: [
            'Delivered 50-page competitive analysis to C-suite, driving pivotal shift in the go-to-market strategy ahead of a new category launch.',
            'Authored UI/UX specs for new AI zoom-in image generation and product customization abilities, accelerating MVP release by 30%.',
        ],
    },
    {
        date: 'May — Aug 2024',
        role: 'Data Science Intern',
        company: 'Arcade',
        url: 'https://www.arcade.ai/',
        context: 'A Series A Heretic Ventures portfolio company with $42M in VC funding. The world\'s first AI product creation platform & marketplace.',
        desc: [
            'Ran training data acquisition, processing, and analytics for generative AI image models, driving strategy for model improvement.',
            'Aligned AI and Design teams daily on strategic choices for training steps, base model, and caption length to optimize model output.',
            'Helped build a data management platform to automate the data acquisition and storage workflow, increasing efficiency by >60%.',
        ],
    },
    {
        date: 'Sep — Dec 2024',
        role: 'Due Diligence Extern',
        company: 'Oxcart Ventures',
        url: 'https://www.oxcart.vc/',
        context: 'Critical technologies VC firm; sourcing and due diligence across hardware, artificial intelligence, and defense tech verticals.',
        desc: [
            'Wrote comprehensive memo outlining the battery market landscape, including competitor analysis, state of market, and opportunities.',
            'Led sourcing efforts for potential investments in early-stage non-Lithium-Ion battery companies with mainly US-based supply chain.',
        ],
    },
    {
        date: 'Mar — May 2024',
        role: "Founder's Associate",
        company: 'Throne',
        url: 'https://throne.com/landing',
        context: 'Bootstrapped e-commerce marketplace for purchases and payments between creators, brands, and fans.',
        desc: [
            'Led creator partnerships, using data analysis to source high-quality influencer partners, achieving an onboarding rate above 60%.',
            'Performed product analytics to surface top-performing products and users, informing advertising and content creation strategies.',
        ],
    },
    {
        date: 'Jan 2024 — Present',
        role: 'Director of External Relations',
        company: 'Texas Venture Group',
        url: 'https://www.texasventuregroup.com/',
        context: 'UT\'s premier VC organization, dedicated to connecting students, VC firms, and startups to strengthen the Austin startup ecosystem.',
        desc: [
            'Source and organize 10+ events a semester with firms and startups; 130+ person hackathon, defensetech panel with YC, and more.',
            'Manage 6 projects a semester, pairing members with partner firms; software engineering, financial modeling, market research.',
        ],
    },
];

export default function Experience() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="experience">
            <h2 className="section-heading">CV<span className="flower-accent">✱</span></h2>

            <div className="exp-container">
                <div className="edu-block">
                    <div className="edu-row">
                        <span className="edu-date">Aug 2022 — May 2026</span>
                        <span className="edu-degree">B.S. Statistics & Data Science, Minor in Computer Science</span>
                        <span className="edu-school">UT Austin</span>
                    </div>
                </div>

                {roles.map((r, i) => (
                    <div
                        className={`exp-row${openIndex === i ? ' exp-row--open' : ''}`}
                        key={`${r.role}-${r.date}`}
                    >
                        <span className="exp-date">{r.date}</span>
                        <span className="exp-role">{r.role}</span>
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="exp-company" onClick={(e) => e.stopPropagation()}>{r.company}</a>
                        {r.desc.length > 0 && (
                            <button className="exp-toggle" onClick={() => toggle(i)} aria-label={openIndex === i ? 'collapse' : 'expand'}>
                                {openIndex === i ? '−' : '+'}
                            </button>
                        )}
                        {r.desc.length > 0 && (
                            <div className={`exp-desc${openIndex === i ? ' exp-desc--open' : ''}`}>
                                {r.context && <p className="exp-context">{r.context}</p>}
                                <ul className="exp-bullets">
                                    {r.desc.map((bullet, j) => (
                                        <li key={j}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
