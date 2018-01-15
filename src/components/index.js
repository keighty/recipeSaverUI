import React, { Component } from 'react'

const recipe1 = require('../fixtures/test-recipe-1.json')
const recipe2 = require('../fixtures/test-recipe-2.json')

export default class Index extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      recipeData: [
        recipe1,
        recipe2,
      ]
    }
  }

  renderRecipeIndex ({id, name}) {
    return (
      <li>
        <a href={`/recipe/${id}`}>
          {name}
        </a>
      </li>
    )
  }

  render() {
    const { recipeData } = this.state
    return (
      <div>
        <ul>
          { recipeData.map(this.renderRecipeIndex) }
        </ul>
      </div>
    )
  }
}
