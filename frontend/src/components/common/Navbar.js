import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Navbar = () => (
  <section>

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-end">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/development" className="navbar-item">Development</Link>
          <Link to="/design" className="navbar-item">Design</Link>
          <Link to="/curriculum-vitae" className="navbar-item">Curriculum Vitae</Link>
        </div>
      </div>
    </nav>

  </section>
)

export default withRouter(Navbar)