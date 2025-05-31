import React from 'react'
import { assert } from '../assets/imag/ImageFile'
import {motion} from 'framer-motion'

const ProductBox = ({name, image, voltage, des1, des2}) => {
  return (
       <motion.div 
       initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{duration: 1.5}}
       className='w-full  '>
        <div className='w-full max-h-200 text-start  border border-gray-400 px-4 p-3'>
          <div className='group w-full h-40 mx-auto before: overflow-hidden'>
          <img src={image} alt="" className='mb-3 w-full h-40 mx-auto group-hover:scale-110 duration-300' />
          </div>
          <div className='flex justify-between items-center text-center mt-4'>
            <h1 className='text-[20px] font-bold '>{name}</h1>
          </div>
          <p className=' text-sm'>{voltage}</p>
          <div className='mt-5 bg-indigo-600 w-full py-4 px-2 '>
            <ul>
            <li className='text-white text-sm flex gap-2'><i class="ri-service-fill"></i>  <span>{des1}</span></li>
            <li  className='text-white text-sm flex gap-2'><i class="ri-shield-user-line"></i> <span>{des2}</span></li>

            </ul>
          </div>
        </div>
       </motion.div>
  )
}

export default ProductBox
