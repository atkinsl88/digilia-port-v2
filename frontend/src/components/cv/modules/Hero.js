import React from 'react'
import image1 from '../../../../src/assets/port-hero-cv-01.jpg'

const Hero = () => (
  <section>

    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-heading">
          <h1>Curriculum Vitae</h1>
        </div>
        <div className="hero-text">
          <h6>A breakdown of my rolls throughout my career as a Project Manager and a Developer.</h6>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={image1} alt="logo" />
      </div>
    </div>

  </section>
)

export default Hero