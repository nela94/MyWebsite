import React from 'react'
import './Navbar.css'

class NavBar extends React.Component{
  render(){
    return(
  <nav id="nav">
    <div className="container-fluid">
      <div className="navbar-header">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
      </div>

    <div className="collapse navbar-collapse" id="menu">
      <ul>
        <li className="active"><a href="#header">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact Me!</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default NavBar
