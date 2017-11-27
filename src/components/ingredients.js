import React from 'react'

export const Ingredients = ({ingredients}) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  )
}
