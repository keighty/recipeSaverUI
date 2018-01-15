import React from 'react'

import { Ingredients } from './ingredients'
import { Directions } from './directions'
import { Metadata } from './metadata'


export const ShowRecipe = ({match, recipeData}) => {
  const recipeId = match.params.recipeId
  const { ingredients, directions, metadata } = recipeData[recipeId]

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
