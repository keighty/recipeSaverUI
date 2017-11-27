import React, { Component } from 'react'
import './styles/App.css'

import { Ingredients } from './components/ingredients'
import { Directions } from './components/directions'
import testRecipe from './fixtures/test-recipe-1.json'

class App extends Component {
  render() {
    const {ingredients, directions, keywords} = testRecipe

    return (
      <div className='RecipeSaver-recipe'>
        <div className='RecipeSaver-recipe-body'>
          <Ingredients ingredients={ingredients} />
          <Directions directions={directions} />
        </div>
        <div className='RecipeSaver-recipe-metadata'>
        </div>
      </div>
    )
  }
}

export default App
