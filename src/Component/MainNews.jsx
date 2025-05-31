
import React from 'react'
import { assert } from '../assets/imag/ImageFile'
import {motion} from 'framer-motion'
const MainNews = ({title, description, src, url }) => {
  return (
      <div>
     <motion.div
     initial={{opacity:0, x:-100}}
     whileInView={{opacity:1, x:0}}
     transition={{duration:1.5}}   
     className="w-full mt-14 ">
      <div className='p-2 h-80 bg-slate-900 rounded-md border flex flex-col items-start '>
        <div className='w-full rounded-sm overflow-hidden h-50 bg-amber-300 group'>
          <img src={src?src:assert.newLogo} alt="" className='w-full h-full group-hover:scale-110 transition-all' />
        </div>
        <h2 className='text-2xl font-bold text-white mt-3'>{title.slice(0, 30) + '...'}</h2>
        <p className='text-white mt-3'>{description?description.slice(0, 80) + '...':"New  solar sytem in Nigeria"}</p>

        <a href={url} className='py-2 mt-3 cursor-pointer text-sm px-8 bg-yellow-400'>Read More</a>
      </div>
     </motion.div>
     <div>
     </div>
</div>
  )
}

export default MainNews
