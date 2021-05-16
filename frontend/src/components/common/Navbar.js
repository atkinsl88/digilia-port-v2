import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import image from '../../assets/logo.png'

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
          <Link to="/" className="navbar-item navbar-start"><img src={image} alt="logo" /></Link>
          <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`} aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div className={`navbar-end navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
          <Link to="/development" className="navbar-item navbar-end">Development</Link>
          <Link to="/design" className="navbar-item navbar-end">Design</Link>
          <Link to="/curriculum-vitae" className="navbar-item navbar-end navbar-space">Curriculum Vitae</Link>
        </div>
      </nav>

    )
  }
}

export default withRouter(Navbar)