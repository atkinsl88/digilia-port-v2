import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className="table-item-lng">
          <p><b>Back-End</b></p>
        </div>
        <div className="table-item-lng">
          <p><b>Front-End</b></p>
        </div>
        <div className="table-item-lng">
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
        <div className="table-item-lng">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng">
          <p>REST</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Park House Care - Site Redesign</p>
        </div>
        <div className="table-item-lng">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng">
          <p>REST</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Portfolio v1</p>
        </div>
        <div className="table-item-lng">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng">
          <p>REST</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
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
        <div className="table-item-lng">
          <p><b>Back-End</b></p>
        </div>
        <div className="table-item-lng">
          <p><b>Front-End</b></p>
        </div>
        <div className="table-item-lng">
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
        <div className="table-item-lng">
          <p>-</p>
        </div>
        <div className="table-item-lng">
          <p>Vanilla JS</p>
        </div>
        <div className="table-item-lng">
          <p>-</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Dicktatorship</p>
        </div>
        <div className="table-item-lng">
          <p>-</p>
        </div>
        <div className="table-item-lng">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng">
          <p>YARN, API</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>GigMe</p>
        </div>
        <div className="table-item-lng">
          <p>Python (Django)</p>
        </div>
        <div className="table-item-lng">
          <p>ReactJS, SCSS</p>
        </div>
        <div className="table-item-lng">
          <p>MERN, NodeJS</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Soundboard</p>
        </div>
        <div className="table-item-lng">
          <p>-</p>
        </div>
        <div className="table-item-lng">
          <p>Vanilla JS</p>
        </div>
        <div className="table-item-lng">
          <p>-</p>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image1} alt="logo" /></Link>
        </div>
        <div className="table-item-sml">
          <Link to="xxx" target="_blank"><img src={image2} alt="logo" /></Link>
        </div>
      </div>
    </div>

  </section>
)

export default Table