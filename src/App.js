import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/App.css'
import { ShowRecipe } from './components/show-recipe'
import { Index } from './components/index'

import recipes from './fixtures'

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      recipeData: recipes
    }
  }

  renderComponentWithData (Component) {
    const { recipeData } = this.state
    return (props) => <Component {...props} recipeData={recipeData} />
  }

  render() {
    const renderIndex = this.renderComponentWithData(Index)
    const renderItem = this.renderComponentWithData(ShowRecipe)

    return (
      <Switch>
        <Route exact path='/' render={renderIndex} />
        <Route path='/recipe/:recipeId' render={renderItem} />
      </Switch>
    )
  }
}

export default App
