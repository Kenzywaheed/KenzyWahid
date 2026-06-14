import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p style={{ margin: 0, fontSize: '0.875rem' }}>
          Designed & Built by Kenzy Wahid
        </p>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', opacity: 0.5 }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
