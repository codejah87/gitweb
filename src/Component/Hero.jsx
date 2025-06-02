import React from 'react'
import { assert, assertLogo } from '../assets/imag/ImageFile'
import {motion } from 'framer-motion'
import {Link } from 'react-router-dom'
import { assertImage } from '../assets/imag/product-img/product'
const Hero = () => {
  return (
    <div className='w-full  hero-bg'>
        <div className=' h-145 sm:h-auto flex items-center pt-7 flex-col text-center '>
        <motion.div
        initial={{opacity:0, y:-100}}
        whileInView={{opacity:1, y:0}}  
        transition={{duration:1.5}}
        className=' px-3px sm:px-6  lg:px-10 w-full'>
              <h1 className='pop text-blue-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 font-bold leading-14 lg:leading-20'>Power Your Future With Hakuna Matata Solar System</h1> 
              <p className='text-white text-[15px] md:text-[18px] lg'>Will sales our product at afforable price, Get Original Product From <span className='text-white mt-6'>Hakuna Matata Energy-Tech LTD.</span></p>

             <Link to="/product"> <button className='btn'>View all Product <i className="ml-3 ri-arrow-right-line"></i></button></Link>
        </motion.div>
        <div className='overflow-x-hidden w-full px-3 mt-10 md:mt-20'>

              <div className='scrollAnimate flex justify-between items-center gap-6 '>
                    <div className='w-[350px] p-6 flex items-center rounded-lg transition border-white gap-3  bg-[var(--b-c)]'>
                        <img src={assert.battery1} alt="" className='w-20' />
                        <h3 className='text-[19px] text-gray-700 text-left'>Powerful Lithium ion battery</h3>
                    </div>

                   <div
                   
                   className='w-[400px] p-6 flex items-center rounded-lg   gap-3  bg-indigo-200'>
                        <img src={assert.light1} alt="" className='w-20' />
                        <h3 className='text-[19px] text-gray-700 text-left'>Enjoy the brightness of solar street light</h3>
                    </div>

                      <div

                      className='w-[370px] py-7 px-6 flex items-center  rounded-lg shadow-xl hover:shadow-1xl transition border-white gap-3 bg-[var(--b-c)]   '>
                        <img src={assert.solar} alt="" className='w-20' />
                        <h3 className='text-[19px] text-gray-700 text-left'>Your Solar Power Solution</h3>
                    </div>
               <div className='w-[350px] p-5 flex items-center bg-indigo-200 rounded-lg shadow-xl hover:shadow-1xl transition border-white gap-3 bg-[var(--b-c)]   '>
                        <img src={assertImage.inv1} alt="" className='w-20' />
                        <h3 className='text-[19px] text-gray-700 text-left'>SuKam solar inverter </h3>
                    </div>
              </div>
        </div>

        </div>

    </div>
  )
}

export default Hero