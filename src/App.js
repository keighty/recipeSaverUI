import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './styles/App.css'
import { LandingPage } from './components/landing-page'
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

    return (props) => {
      return (
        <div>
          <div className='nav-container no-select fixed-top u-full-width'>
            <ul className='inline-list hover-links nav-list six columns'>
              <li><a href="/recipes" className='text-lg'>Recipe saver</a></li>
            </ul>
          </div>
          <div className='container RecipeSaver-body'>
            <Component {...props} recipeData={recipeData} />
          </div>
        </div>
      )
    }
  }

  render() {
    const renderIndex = this.renderComponentWithData(Index)
    const renderItem = this.renderComponentWithData(ShowRecipe)

    return (
      <Switch>
        <Route exact path='/' render={LandingPage} />
        <Route path='/recipes/:recipeId' render={renderItem} />
        <Route path='/recipes' render={renderIndex} />
      </Switch>
    )
  }
}

export default App
