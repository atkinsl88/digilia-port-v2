import React from 'react'
import image1 from '../../../../src/assets/globe.png'
import image2 from '../../../../src/assets/github.png'

const Table = () => (
  <section>

    <div className="table-year">
      <h2>2021</h2>
    </div>
    <div className="table-container">
      <div className="table-headings">
        <div className="table-item-xlng">
          <p><b>Project Name</b></p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p><b>Back-End</b></p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p><b>Front-End</b></p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p><b>Other</b></p>
        </div>
        <div className="table-item-sml">
          <p><b>Link</b></p>
        </div>
        <div className="table-item-sml">
          <p><b>GitHub</b></p>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Portfolio v2</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>REST</p>
        </div>
        <div className="table-item-sml">
          <a href="https://digilia-port-v2.herokuapp.com/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/digilia" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Park House Care - Redesign</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>REST</p>
        </div>
        <div className="table-item-sml">
          <a href="https://parkhouse-dorset-2.herokuapp.com/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/Park-House-SEI-Project-004" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Portfolio v1</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>REST</p>
        </div>
        <div className="table-item-sml">
          <a href="https://digilia-port.herokuapp.com/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/My-Portfolio/" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
    </div>

    <div className="table-year">
      <h2>2020</h2>
    </div>
    <div className="table-container">
      <div className="table-headings">
        <div className="table-item-xlng">
          <p><b>Project Name</b></p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p><b>Back-End</b></p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p><b>Front-End</b></p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p><b>Other</b></p>
        </div>
        <div className="table-item-sml">
          <p><b>Link</b></p>
        </div>
        <div className="table-item-sml">
          <p><b>GitHub</b></p>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Zeldas Quest - Game</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>-</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Vanilla JS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>-</p>
        </div>
        <div className="table-item-sml">
          <a href="https://zeldas-quest.netlify.app/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/Zeldas-Quest" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Dicktatorship</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>-</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>YARN, API</p>
        </div>
        <div className="table-item-sml">
          <a href="https://dicktatorship.netlify.app/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/Dicktatorship" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>GigMe</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>MERN, NodeJS</p>
        </div>
        <div className="table-item-sml">
          <a href="https://gigme-app.herokuapp.com/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/GigMe/" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Soundboard</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>-</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Vanilla JS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>-</p>
        </div>
        <div className="table-item-sml">
          <a href="https://daft-punk-sound-board.netlify.app/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/Daftpunk-Soundboard" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>TFL - Status Update</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>-</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>Vanilla JS</p>
        </div>
        <div className="table-item-lng mob-hidden">
          <p>API (TFL)</p>
        </div>
        <div className="table-item-sml">
          <a href="https://react-tfl-tube-updates.netlify.app/" target="_blank" rel="noreferrer"><img src={image1} alt="logo" /></a>
        </div>
        <div className="table-item-sml">
          <a href="https://github.com/atkinsl88/Tubeline-TFL-API" target="_blank" rel="noreferrer"><img src={image2} alt="logo" /></a>
        </div>
      </div>
    </div>

  </section>
)

export default Table