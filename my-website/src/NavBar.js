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
        <li><a href='/Home'>Home</a></li>
        <li><a href="/AboutMe">About Me</a></li>
        <li><a href="/Projects">Projects</a></li>
        <li><a href="#contact">Contact Me!</a></li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}

export default NavBar
