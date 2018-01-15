import React, { Component } from 'react'

const renderRecipeIndex = ({ id, name }) => {
  return (
    <li key={id}>
      <a href={`/recipe/${id}`}>
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
