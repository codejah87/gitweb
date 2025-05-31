import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import { assert } from '../assets/imag/ImageFile'
import SocialMedial from './SocialMedia'

const Footer = () => {
  return (
    <div className='bg-blue-50 w-full'>      
    <div className='  flex flex-col sm:grid grid-cols-[3fr_1fr_2fr] gap-14 pt-7 px-[3vw] mt-20 mb-[1rem] text-sm'>
      <div>
        <img src={assert.logo} className="mb- w-32"alt="" />
        <p className='w-full text-[17px] md:w-2/3 text-gray-600'>Get all kind of solar system technology to unleash electricity bills and embrace a clean energy with 24/7 access to healthy energy  </p>
         <div className='mt-7 flex justify-start items-start flex-col gap-3'>
            <h1 className='text-2xl text-black font-semibold'>Social Medial</h1>
          <SocialMedial/>
        </div>
      </div>
      <div>
        <div className=' flex relative flex-col text-justify justify-center gap-0'>
        <span className='text-2xl font-semi-bold mb-5 text-blue-600'>PAGES</span>
      <span className='w-[80px] absolute top-7 h-[2px] rounded-full bg-gray-700'></span>
        </div>
        <ul className='flex flex-col gap-2 text-slate-600 mt-4'>
          <NavLink to='/'>
          <li className='text-[17px] hover:text-blue-600 cursor-pointer'>Home</li>
          </NavLink>
          <NavLink to='/product'>
          <li className='text-[17px] hover:text-blue-600 cursor-pointer '>View Products</li>
          </NavLink>
          <NavLink to='/contact'>
          <li className='text-[17px] hover:text-blue-600 cursor-pointer '>Contact Us</li>

          </NavLink>
        </ul>
      </div>
      <div>
          <div className=' flex relative flex-col text-justify justify-center gap-0'>
        <span className='text-[19px] font-semi-bold mb-5 text-blue-600'>CONTACT ADDRESS</span>
      <span className='w-[80px] absolute top-7 h-[2px] rounded-full bg-gray-700'></span>
        </div>
        <div className='flex flex-col gap-3'>
    <span className='flex gap-2'><i className="ri-map-pin-fill p-3 bg-indigo-600 rounded-md text-white text-[19px]"></i> <p className='text-[16px] text-gray-600'>NO: 1, JS Tarka Street, Opp. Area 2 Shopping Center Area 2 Parking, Abuja</p>
    </span>

    <span className='flex gap-2 items-center'><i className="ri-mail-line p-3 bg-indigo-600 rounded-md text-white text-[19px]"></i> <p className='text-[16px] text-gray-600'>hakunamatataenergy@gmail.com</p>
    </span>

 <span className='flex gap-2 items-center'><i className="ri-phone-line p-3 bg-indigo-600 rounded-md text-white text-[19px]"></i> <p className='text-[16px] text-gray-600'>
  07087073302, 08034808646
 </p>
    </span>
</div>

</div>

</div>
<div className='flex items-center justify-center flex-col'>
<p className='h-[2px] w-[50vw] 
      bg-gray-300'></p>
        <p className='py-5 text-sm text-center font-medium text-gray-500'>
          Copyright &copy; 2025 Hakuna Matata ❤️ | All Right Reserved
        </p>
        
        <span className='text-md mb-7 text-gray-500'>
      This Website is designed by <a href="https://codejah87.github.io/portfolioweb/" className='text-indigo-600 underline' target="_blank">Codejah dev.</a>
    </span>
      </div>
    </div>

  )
}
export default Footer;
