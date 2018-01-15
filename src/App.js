import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/App.css'
import { ShowRecipe } from './components/show-recipe'
import { Index } from './components/index'

const recipe1 = require('./fixtures/test-recipe-1.json')
const recipe2 = require('./fixtures/test-recipe-2.json')

class App extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      recipeData: {
        1234: recipe1,
        5467: recipe2,
      }
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
