import React from 'react'

export const Directions = ({ directions }) => {
  return (
    <div>
      <h2>Directions</h2>
      {directions.map((item, index) => <p key={`directions-${index}`}>{item}</p>)}
    </div>
  )
}
