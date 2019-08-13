import React from 'react';
import NavBar from './NavBar';
import Home from './Home'
import Routes from './router/Routes'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
          <NavBar />
          <Routes/>
      </div>
    )
  }
}


export default App;
