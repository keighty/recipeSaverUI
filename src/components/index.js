import React from 'react'

const renderRecipeIndex = ({ id, name }) => {
  return (
    <li key={id}>
      <a href={`/recipes/${id}`}>
        {name}
      </a>
    </li>
  )
}

export const Index = ({recipeData}) => {
  return (
    <div>
    <ul>
      { Object.values(recipeData).map(renderRecipeIndex) }
    </ul>
    </div>
  )
}
