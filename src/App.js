import React, { Component } from 'react'
import './styles/App.css'

import { Ingredients } from './components/ingredients'
import { Directions } from './components/directions'
import { Metadata } from './components/metadata'
import testRecipe from './fixtures/test-recipe-1.json'

class App extends Component {
  render() {
    const {ingredients, directions, metadata} = testRecipe

    return (
      <div className='row'>
        <div className='eight columns'>
          <Ingredients ingredients={ingredients} />
          <Directions directions={directions} />
        </div>
        <div className='four columns'>
          <Metadata metadata={metadata} />
        </div>
      </div>
    )
  }
}

export default App
