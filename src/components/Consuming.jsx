import './Consuming.css';

export default function Consuming() {
    return (
        <section id="consuming">
            <h2 className="section-heading">Consuming<span className="flower-accent">✱</span></h2>

            <div className="consuming-container">
                <div className="consuming-grid">
                    <div className="consuming-col">
                        <span className="consuming-title">Listening</span>
                        <p><a href="https://thisweekinstartups.com/" target="_blank" rel="noopener noreferrer">This Week in Start Ups</a></p>
                        <p><a href="https://www.allinpodcast.co/" target="_blank" rel="noopener noreferrer">All In</a></p>
                        <p><a href="https://www.nytimes.com/column/the-daily" target="_blank" rel="noopener noreferrer">The Daily</a></p>
                        <p><a href="https://www.thewellnessprocess.com/" target="_blank" rel="noopener noreferrer">The Wellness Process</a></p>
                    </div>
                    <div className="consuming-col">
                        <span className="consuming-title">Reading</span>
                        <p><a href="https://www.therundown.ai/" target="_blank" rel="noopener noreferrer">This Week in AI Newsletter</a></p>
                        <p><a href="https://github.com/anthropics/courses" target="_blank" rel="noopener noreferrer">Anthropic Courses</a></p>
                        <p><a href="https://www.goodreads.com/book/show/33313.Kitchen_Confidential" target="_blank" rel="noopener noreferrer">Kitchen Confidential</a></p>
                    </div>
                    <div className="consuming-col">
                        <span className="consuming-title">Interests</span>
                        <p>Health, Wellness, Longevity</p>
                        <p>Espresso</p>
                        <p>Entrepreneurship</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
