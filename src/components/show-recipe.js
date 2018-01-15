import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Ingredients } from './ingredients'
import { Directions } from './directions'
import { Metadata } from './metadata'

import testRecipe from '../fixtures/test-recipe-2.json'

export class ShowRecipe extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { match } = this.props
    const recipeId = match.params.recipeId

    const { ingredients, directions, metadata } = testRecipe
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
