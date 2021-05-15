import React from 'react'
import image1 from '../../../../src/assets/port-hero-hp-01.jpg'

const Hero = () => (
  <section>

    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-heading">
          <h1>Design</h1>
        </div>
        <div className="hero-text">
          <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tincidunt augue, id mollis nibh. Praesent nunc nisi, lobortis eget augue a, aliquam volutpat magna. Phasellus ac tristique ipsum, eget faucibus metus. Pellentesque ut lorem nec nunc porttitor dictum. Maecenas vitae purus augue.</h6>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={image1} alt="logo" />
      </div>
    </div>

  </section>
)

export default Hero