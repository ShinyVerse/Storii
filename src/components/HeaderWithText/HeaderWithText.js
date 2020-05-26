import React from 'react'

import './HeaderWithText.scss';

export const HeaderWithText = ({header, text}) => {
  return (
    <div>
      <h1 className="header" data-test="header">{header}</h1>
      <div className="text" data-test="text">{text}</div>
    </div>
  )
}

