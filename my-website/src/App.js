import React from 'react';
import NavBar from './NavBar';
import Home from './Home'
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
          <NavBar />
          <Home />

      </div>
    )
  }
}


export default App;
