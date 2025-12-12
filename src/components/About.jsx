import './About.css';

export default function About() {
  const skills = {
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Responsive Design'],
    backend: ['.NET Core', 'C#', 'REST APIs', 'Entity Framework'],
    database: ['SQL Server', 'Database Design', 'Query Optimization'],
    languages: ['C', 'C++', 'Python', 'Java'],
    tools: ['Git', 'Data Structures', 'Problem Solving'],
  };

  const stats = [
    { number: '1+', label: 'Year Experience' },
    { number: '5+', label: 'Real Projects' },
    { number: '14+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" className="about">
      <div className="about-background">
        <div className="gradient-blob about-blob-1"></div>
        <div className="gradient-blob about-blob-2"></div>
      </div>

      <div className="container">
        <div className="about-header">
          <h2 className="about-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="about-subtitle">Junior Full Stack Developer | Problem Solver | Lifelong Learner</p>
        </div>

        <div className="about-wrapper">
          <div className="about-left">
            <div className="about-card">
              <div className="card-icon">👨‍💻</div>
              <h3>Professional Background</h3>
              <p>
                I'm a passionate Full Stack Developer with strong expertise in Angular, .NET Core, and SQL Server. As a Junior Software Engineer at Clove Technologies (since September 2025), I specialize in building secure, scalable, and high-performance web applications.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">🎯</div>
              <h3>What I Do</h3>
              <p>
                I focus on end-to-end development — from designing responsive UI screens to implementing robust APIs, database structures, and complex business logic. I have hands-on experience with Task Manager, Employee Management System, and E-Commerce platforms.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="skills-section">
              <h3 className="skills-title">Skills & Technologies</h3>
              
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skill-tags">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skill-tags">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Database</h4>
                <div className="skill-tags">
                  {skills.database.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {skills.languages.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>Tools & Other</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
