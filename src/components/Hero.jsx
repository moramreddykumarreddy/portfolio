import './Hero.css';
import profileImage from '../assets/image.png';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
      
      <div className="hero-content">
        <div className="profile-image-container">
          <div className="image-border"></div>
          <img src={profileImage} alt="Reddy Kumar Reddy" className="profile-image" />
        </div>
        
        <div className="text-content">
          <h1 className="hero-title">
            <span className="gradient-text">Reddy Kumar Reddy</span>
          </h1>
          <p className="tagline">
            <span className="tag-highlight">Full Stack Developer</span>
            <span className="divider">|</span>
            <span>Angular</span>
            <span className="separator">•</span>
            <span>.NET Core</span>
            <span className="separator">•</span>
            <span>SQL Server</span>
          </p>
          <p className="description">
            Crafting secure, scalable, and high-performance web applications with end-to-end expertise.
          </p>
          <div className="button-group">
            <button className="cta-button" onClick={() => scrollToSection('projects')}>
              <span className="button-text">View My Work</span>
              <span className="button-glow"></span>
            </button>
            <button className="cta-button secondary" onClick={() => scrollToSection('contact')}>
              <span className="button-text">Get in Touch</span>
              <span className="button-glow"></span>
            </button>
          </div>

          <div className="social-links-hero">
            <a href="mailto:moramreddykumarreddy@gmail.com" className="social-link email" title="Email">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://github.com/moramreddykumarreddy" target="_blank" rel="noopener noreferrer" className="social-link github" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/moramreddykumarreddy/" target="_blank" rel="noopener noreferrer" className="social-link linkedin" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.776-2.237-1.088 0-1.72.722-2.002 1.418-.103.249-.129.597-.129.946v5.442h-3.554s.048-8.814 0-9.737h3.554v1.379c.43-.664 1.2-1.609 2.925-1.609 2.14 0 3.742 1.398 3.742 4.402v5.565zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.71 0-.968.759-1.71 1.951-1.71 1.189 0 1.914.742 1.938 1.71 0 .952-.749 1.71-1.974 1.71zm1.582 11.019H3.749V9.716h3.17v10.736zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
