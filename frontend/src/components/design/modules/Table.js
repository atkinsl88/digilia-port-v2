import React from 'react'
import { Link } from 'react-router-dom'

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
        <div className="table-item-xlng mob-hidden">
          <p><b>Description</b></p>
        </div>
        <div className="table-item-xlng">
          <p><b>Link</b></p>
        </div>
      </div>
      <div className="table-row">
        <div className="table-item-xlng">
          <p>Park House Care - Redesign</p>
        </div>
        <div className="table-item-xlng mob-hidden">
          <p>Responsive website design.</p>
        </div>
        <div className="table-item-xlng">
          <Link to="https://invis.io/ZHYOH7XAJKU" target="_blank">Invision Board</Link>
        </div>
      </div>
    </div>

  </section>
)

export default Table