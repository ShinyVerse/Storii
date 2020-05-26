import React from 'react'
import { HeaderWithText } from "../../components/HeaderWithText/HeaderWithText"
import { Image } from "../../components/Image/Image"

import img from '../../assets/img/iconLong.png';


export const LandingPage = () => {
  return (
    <div>
      <HeaderWithText header='Storii'/>
      <Image 
        src={img}
        type='long'
        alt='storii join instructions'
      />
    </div>
  )
}

