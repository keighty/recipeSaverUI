import React from 'react'

export const Directions = ({ directions }) => {
  return (
    <div>
      <h2>Directions</h2>
      {directions.map((item) => <p>{item}</p>)}
    </div>
  )
}
