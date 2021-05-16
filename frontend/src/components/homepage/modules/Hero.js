import React from 'react'
import image1 from '../../../../src/assets/port-hero-hp-01.jpg'

const Hero = () => (
  <section>

    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-heading">
          <h1>Welcome</h1>
        </div>
        <div className="hero-text">
          <h6>Digital design and developer living in the South Coast of England. Project Manager turned Full Stack Developer currently working at Investis Digital. Here you can find information on my recent Development and Design projects.</h6>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={image1} alt="logo" />
      </div>
    </div>

  </section>
)

export default Hero