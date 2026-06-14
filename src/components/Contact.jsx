import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section container flex-center text-center">
      <div className="fade-in delay-3" style={{ maxWidth: '600px', width: '100%' }}>
        <h2>Contact</h2>
        <p style={{ margin: '0 auto 2rem auto' }}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Location:</span>
            <span>Cairo, Egypt</span>
          </div>

          <a href="https://wa.me/201001741891" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', color: 'inherit' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Phone:</span>
            <span>+20 1001741891</span>
          </a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kenzywahid62@gmail.com" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--card-bg)', padding: '1rem 2rem', borderRadius: '50px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', color: 'inherit' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Email:</span>
            <span>kenzywahid62@gmail.com</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;
