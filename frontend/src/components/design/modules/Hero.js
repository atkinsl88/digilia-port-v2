import React from 'react'
import image1 from '../../../../src/assets/port-hero-des-01.jpg'

const Hero = () => (
  <section>

    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-heading">
          <h1>Design</h1>
        </div>
        <div className="hero-text">
          <h6>Here you can find information on my recent projects.</h6>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={image1} alt="logo" />
      </div>
    </div>

  </section>
)

export default Hero