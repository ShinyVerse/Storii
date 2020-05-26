import React from 'react'

const HeaderWithText = ({header, text}) => {
  return (
    <div>
      <h1 data-test="header">{header}</h1>
      <h3 data-test="text">{text}</h3>
    </div>
  )
}

export default HeaderWithText;