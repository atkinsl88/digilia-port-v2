import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  state = {
    isOpen: false,
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render(){
    return (

      <nav className="navbar">
        <div className="navbar-brand">

          {/* <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span> */}

        </div>

        <div className={`navbar-end navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
            
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/carehome" className="navbar-item">Care Home</Link>
          </div>

          <Link to="/daycare" className="navbar-item">Day Care</Link>

          <Link to="/meet-the-team/carehome" className="navbar-item">Meet the Team</Link>

          {/* <Link to="/gallery" className="navbar-item">Gallery</Link> */}

          <Link to="/testimonials/carehome" className="navbar-item">Testimonials</Link>

          <Link to="/contact" className="navbar-item navbar-end">Contact Us</Link>
        </div>

      </nav>

    )
  }
}

export default withRouter(Navbar)