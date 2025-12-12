import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Web Platform',
    description: 'A full-stack e-commerce solution with Angular frontend, .NET Core backend, and SQL Server database. Includes product catalog, shopping cart, order management, and payment integration.',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework', 'RESTful APIs'],
    link: '#',
  },
  {
    id: 2,
    title: 'Employee Management System',
    description: 'A real-time employee management application featuring employee records, department management, leave requests, and performance tracking with role-based access control.',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'TypeScript', 'Entity Framework'],
    link: '#',
  },
  {
    id: 3,
    title: 'Task Manager Application',
    description: 'A collaborative task management system with real-time updates, task assignments, priority levels, and status tracking for team productivity.',
    technologies: ['Angular', '.NET Core', 'SQL Server', 'WebSocket', 'Entity Framework'],
    link: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and modern web technologies to showcase professional work and skills.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS3', 'Responsive Design'],
    link: '#',
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
                <a href={project.link} className="project-link">
                  <span>Explore Project</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15M8 1L1 8M8 1L15 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
