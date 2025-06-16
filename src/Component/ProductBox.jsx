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
        <div className='w-full mb-6 h-auto shadow-md text-start  border border-gray-300 px-2 p-2'>
          <div className='group bg-red-400 w-full  mx-auto before: overflow-hidden'>
          <img src={image} alt="" className=' w-full mx-auto group-hover:scale-110 duration-300' />
          </div>
          <div className='flex justify-between items-center text-center mt-4'>
            <h1 className='text-[20px] font-bold '>{name}</h1>
          </div>
          <p className=' text-sm'>{voltage}</p>
          <div className='mt-5 bg-indigo-400 w-full py-4 px-2 '>
            <ul>
            <li className='text-white text-sm sm:text-[16px] flex gap-2'><i class="ri-service-fill"></i>  <span>{des1}</span></li>
            <li  className='text-white text-sm text-[16px] flex gap-2'><i class="ri-shield-user-line"></i> <span>{des2}</span></li>

            </ul>
          </div>
        </div>
       </motion.div>
  )
}

export default ProductBox