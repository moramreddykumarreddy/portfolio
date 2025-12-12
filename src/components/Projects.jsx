import './Projects.css';

const projects = [
  {
    id: 1,
    title: '2048 Game',
    description: 'A browser implementation of the classic 2048 puzzle game. Includes smooth animations, keyboard controls, and score tracking.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Vite'],
    link: 'https://github.com/moramreddykumarreddy/2048_Game',
    liveDemo: 'https://2048-game-nine-plum.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">Innovative solutions built with modern technologies</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ '--card-index': index }}>
              <div className="project-glow"></div>
              <div className="project-content">
                <div className="project-number">0{project.id}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.link && (
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span>Explore Project</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1V15M8 1L1 8M8 1L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}

                  {project.liveDemo && (
                    <a href={project.liveDemo} className="project-link secondary" target="_blank" rel="noopener noreferrer">
                      <span>Live Demo</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8h10M8 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
