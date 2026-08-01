import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ICT Hub Egypt',
      description: 'A responsive and modern website built for ICT Hub Egypt to showcase their services',
      image: '/project 1.jpeg',
      link: 'https://final-icthub.vercel.app/'
    },
    {
      id: 2,
      title: 'Auto Drive',
      description: 'Auto Drive is a modern responsive car showroom website for exploring and showcasing premium cars with a clean UI',
      image: '/Auto drive.png',
      link: 'https://auto-navy-delta.vercel.app/'
    },
    {
      id: 3,
      title: 'MUST International Students Hub',
      description: 'The International Students Portal is a responsive web platform designed to support international students interested in studying at MUST University',
      image: '/project 3.png',
      link: 'https://student-after-login.vercel.app/'
    },
    {
      id: 4,
      title: 'Dashboard',
      description: 'A modern and responsive dashboard designed to manage, monitor, and visualize data through an intuitive and user-friendly interface.',
      image: '/core.png',
      link: 'https://core-dash-one.vercel.app/'
    },
    {
      id: 5,
      title: 'HealthCare Plus',
      description: 'HealthCare Plus is a responsive healthcare platform that connects patients with medical services through a clean and user-friendly interface. ',
      image: '/health .png',
      link: 'https://health-care-flame-seven.vercel.app/'
    },
    {
      id: 6,
      title: 'UI Craft',
      description: 'A collection of UI/UX design projects created in Figma, focusing on modern aesthetics, usability, and user-centered design principles',
      image: '/Ui .png',
      link: 'https://portfolio-beta-two-bhn516wk8n.vercel.app/'
    },
    {
      id: 7,
      title: 'StreamX',
      description: 'StreamX \u2013 Movie Discovery Platform. A responsive movie streaming showcase that allows users to explore trending films',
      image: '/project 5.png',
      link: 'https://stream-x-blue.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="section container">
      <div className="fade-in delay-2">
        <h2>Check out my projects</h2>

        <div className="project-grid">
          {projects.map((item) => (
            <a href={item.link} target={item.link !== '#' ? "_blank" : "_self"} rel="noopener noreferrer" className="project-card hover-lift" key={item.id}>
              {item.image ? (
                <div style={{ padding: '1.5rem 1.5rem 0 1.5rem', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                </div>
              ) : (
                <div className="project-image-placeholder"></div>
              )}
              <div className="project-content">
                <h3>{item.title}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
