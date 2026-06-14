import React from 'react';

const About = () => {
  return (
    <section id="about" className="section container">
      <div className="fade-in delay-1">
        <h2>About Me</h2>
        <p>
          I am a Software Engineering graduate with a passion for elegant and minimal web design. I enjoy creating smooth, user-friendly interfaces that combine creativity with simplicity, focusing on details that enhance the overall user experience.
        </p>
        
        <div className="mt-8">
          <h3>Frontend Skills</h3>
          <div className="tags-container">
            <span className="tag">React</span>
            <span className="tag">JavaScript (ES6+)</span>
            <span className="tag">HTML5 & CSS3</span>
            <span className="tag">Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-8">
          <h3>Tools & Workflow</h3>
          <div className="tags-container">
            <span className="tag">Git & GitHub</span>
            <span className="tag">VS Code</span>
            <span className="tag">Vercel</span>
          </div>
        </div>

        <div className="mt-8">
          <h3>UI/UX Basics</h3>
          <div className="tags-container">
            <span className="tag">Figma</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
