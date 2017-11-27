import React from 'react'

export const Ingredients = ({ingredients}) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => <li key={`ingredient-${index}`}>{item}</li>)}
      </ul>
    </div>
  )
}
