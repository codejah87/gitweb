import React from 'react'
import { assert, assertLogo } from '../assets/imag/ImageFile'

const Scroll = () => {
  return (
    <div>
      <marquee behavior="scroll" direction="left">
         <div className='flex gap-9 justify-center items-center'>
            <img src={assert.sukamLogo} alt="" className='w-50 h-20'/>
            <img src={assertLogo.africeLogo} alt="" className='w-50 h-20'/>
            <img src={assertLogo.felicityLogo} alt="" className='w-50 h-20'/>
            <img src={assertLogo.cworthLogo} alt="" className='w-50 h-20'/>
         </div>
      </marquee>
    </div>
  )
}

export default Scroll
