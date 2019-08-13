import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from './Home'
import AboutMe from './AboutMe'



const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/AboutMe" component={AboutMe} />

    </Switch>
  )
}

export default Routes
