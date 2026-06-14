import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section container flex-center text-center">
      <div className="fade-in">
        <div style={{
          width: '480px',
          height: '480px',
          borderRadius: '24px',
          margin: '0 auto 2rem auto',
          boxShadow: 'var(--shadow-md)',
          border: '4px solid var(--card-bg)',
          overflow: 'hidden'
        }}>
          <img
            src="/moi.jpeg"
            alt="Kenzy Wahid"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.15)', /* Zooms in the image slightly */
              transformOrigin: 'center center' /* Adjust this if you need to focus on top/bottom */
            }}
          />
        </div>
        <h1>Kenzy Wahid</h1>
        <h3 style={{ color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '1.5rem' }}>
          Software Engineer & Front-End Developer
        </h3>
        <p style={{ margin: '0 auto 2.5rem auto' }}>
          I build modern, elegant, and responsive web applications with a focus on clean design, smooth animations, and strong UX.
        </p>
        <div className="btn-group flex-center">
          <a href="#projects" className="btn btn-primary hover-lift">View My Work</a>
          <a href="/cv_kenzy (1).pdf" download="Kenzy_Wahid_CV.pdf" className="btn btn-secondary hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download CV
          </a>
          <a href="#contact" className="btn btn-secondary hover-lift">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
