import React from 'react'

const TextRenderer = ({ text }) => {
  return (
    <section dangerouslySetInnerHTML={{ __html: text }}/>
  )
}

export default TextRenderer;
