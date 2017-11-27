import React from 'react'

const renderMetadata = (key, list) => {
  if (list.length > 0) {
    return (
      <div key={key}>
        <h5>{capitalize(key)}</h5>
        <ul>
        {list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    )
  }
}

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export const Metadata = ({ metadata }) => {
  const keys = Object.keys(metadata)
  return (
    <div>
      {keys.map((key) => renderMetadata(key, metadata[key]))}
    </div>
  )
}
