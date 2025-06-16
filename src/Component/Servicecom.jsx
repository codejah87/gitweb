import React from 'react'
import { assert, assertLogo } from '../assets/imag/ImageFile'
import { Link } from 'react-router'
import { assertImage } from '../assets/imag/product-img/product'
import {motion} from 'framer-motion';
const Servicecom = () => {
  return (
     <section>
       <motion.div
       initial={{ opacity: 0, x: 100 }}
       whileInView={{opacity: 1, x: 0}}
       transition={{duration : 1.5}}>
       <h1 className='text-4xl sm:text-7xl font-bold text-center mt-10 fer'>Our Services</h1>
        <p className='text-center text-1xl text-black mt-5'>We offer sales, Installation and Maintainace of Solar call us for more info and home services.
            System</p>
       </motion.div>
      
      <div
      className='mt-11 hero-con gap-7'>
 
            <div className=' shadow-md  border-[1px] border-gray-200 rounded-2xl overflow-hidden '>
                <div className='overflow-hidden w-full h-70'>
                    <img src={assert.worker1} alt="" className='w-full  h-full'/>

                </div>
                <div className='px-3 mt-4 py-5 text-center'>
                    <h1 className='text-2xl text-black font-bold  text-center '>Solar Panel Installation</h1>
                <p className=' text-center mt-3'>Hakuna Matata Energy offers solar installation, home service delivery & Sales</p>
                <div className='mt-7 text-indigo-600 text-[17px] underline'>
                <Link to='/contact' className=''>
                Contact us for home services
                 </Link>
                </div>
                
                </div>
                
            </div>


             <div className=' border-[1px] border-gray-200 shadow-md rounded-2xl overflow-hidden '>
                <div className='overflow-hidden w-full h-70 overflow-hidden'>
                    <img src={assertImage.b1} alt="" className='w-full  object-center'/>

                </div>
                <div className='px-3 mt-4 py-5 text-center'>
                    <h1 className='text-2xl text-black font-bold text-center '>Solar Battery Service</h1>
                <p className=' text-center mt-3'>Hakuna Matata Energy offers solar installation, home service delivery & Sales</p>
                <div className='mt-7 text-indigo-600 text-[17px] underline'>
                <Link to='/contact' className=''>
                Contact us for home services
                 </Link>
                </div>
                
                </div>
                
            </div>

             <div className=' border-[1px] border-gray-200 shadow-md rounded-2xl overflow-hidden '>
                <div className='overflow-hidden w-full h-70'>
                    <img src={assert.inve4} alt="" className='w-full ' />

                </div>
                <div className='px-3 mt-4 py-5 text-center'>
                    <h1 className='text-2xl text-black font-bold text-center '>Solar Inverter Maintenance</h1>
                <p className=' text-center mt-3'>Hakuna Matata Energy offers Inverter Repairs, home service delivery & Sales</p>
                <div className='mt-7 text-indigo-600 text-[17px] underline'>
                <Link to='/contact' className=''>
                Contact us for home services
                 </Link>
                </div>
                
                </div>
                
            </div>


              <div className=' border-[1px] border-gray-200 shadow-md rounded-2xl overflow-hidden '>
                <div className='overflow-hidden w-full h-70'>
                    <img src={assertImage.solarLight2} alt="" className='w-full h-full' />

                </div>
                <div className='px-3 mt-4 py-5 text-center'>
                    <h1 className='text-2xl text-black font-bold text-center '>Solar Street Installation </h1>
                <p className=' text-center mt-3'>Hakuna Matata Energy offers Inverter Repairs, home service delivery & Sales</p>
                <div className='mt-7 text-indigo-600 text-[17px] underline'>
                <Link to='/contact' className=''>
                Contact us for home services
                 </Link>
                </div>
                
                </div>
                
            </div>
            
              <div className=' border-[1px] border-gray-200 shadow-md rounded-2xl overflow-hidden '>
                <div className='overflow-hidden w-full '>
                    <img src={assertImage.w2} alt="" className='w-full' />

                </div>

                <div className='px-3 mt-4 py-5 text-center'>
                    <h1 className='text-2xl text-black font-bold text-center '>Solar Water Heater Installation</h1>
                <p className=' text-center mt-3'>Hakuna Matata Energy offers Inverter Repairs, home service delivery & Sales</p>
                <div className='mt-7 text-indigo-600 text-[17px] underline'>
                <Link to='/contact' className=''>
                Contact us for home services
                 </Link>
                </div>
                
                </div>

                
         
                
            </div>


                 <div className=' border-[1px] border-gray-200 shadow-md rounded-2xl overflow-hidden '>
                <div className='overflow-hidden w-full h-70 
                '>
                    <img src={assertImage.p1} alt="" className='w-full' />

                </div>
                <div className='px-3 mt-4 py-5 text-center'>
                    <h1 className='text-2xl text-black font-bold text-center '>Solar Bolehole </h1>
                <p className=' text-center mt-3'>Hakuna Matata Energy offers Inverter Repairs, home service delivery & Sales</p>
                <div className='mt-7 text-indigo-600 text-[17px] underline'>
                <Link to='/contact' className=''>
                Contact us for home services
                 </Link>
                </div>
                
                </div>
                
            </div>

      </div>
    </section>
  )
}

export default Servicecom
