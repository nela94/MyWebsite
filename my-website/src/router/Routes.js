import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../Home'
import AboutMe from '../AboutMe'



const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/AboutMe" component={AboutMe} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes
