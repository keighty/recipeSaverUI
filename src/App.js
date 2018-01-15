import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/App.css'
import { ShowRecipe } from './components/show-recipe'
import Index from './components/index'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/recipe/:recipeId' component={ShowRecipe} />
      </Switch>
    )
  }
}

export default App
