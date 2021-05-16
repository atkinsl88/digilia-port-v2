import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <section>

    <div className="footer-container">
      <div className="footer-container-left">
        <div className="footer-header">
          <p>Useful Links</p>
        </div>
        <div className="footer-item">
          <Link to="/development"><p>- Development Work</p></Link>
          <Link to="/design"><p>- Design Work</p></Link>
          <Link to="/curriculum-vitae"><p>- Curriculum Vitae</p></Link>
        </div>
      </div>
      <div className="footer-container-mid">
        <div className="footer-header">
          <p>Social</p>
        </div>
        <div className="footer-item">
          <a href="https://github.com/atkinsl88/" target="_blank" rel="noreferrer"><p>- GitHub</p></a>
          <a href="https://stackoverflow.com/users/9015783/liam-atkins" target="_blank" rel="noreferrer"><p>- Stack Overflow</p></a>
          <a href="https://www.linkedin.com/in/liam-atkins-51753444/" target="_blank" rel="noreferrer"><p>- LinkedIn</p></a>
        </div>
      </div>
      <div className="footer-container-right">
        <div className="footer-header">
          <p>Contact</p>
        </div>
        <div className="white footer-item">
          <a href="mailto: liamatkins24@gmail.com"><p>e: liamatkins24@gmail.com</p></a>
          <p>t: +44 (0) 7531219924</p>
        </div>
      </div>
    </div>

  </section>
)

export default Footer