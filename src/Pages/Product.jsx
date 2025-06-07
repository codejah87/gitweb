import React from 'react'
import Title from '../Component/Title'
import { assert } from '../assets/imag/ImageFile'
import ProductItems from '../Component/ProductItems'
import Warant from '../Component/Warant'
import {motion} from 'framer-motion'
import Typed from 'typed.js';

const Product = () => {

// function MyComponent() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['100 Watts', '200 Watts', '300 Watts', '400 Watts'],
      typeSpeed: 130,
      loop:true,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
  <div>
    <div className=' mx-auto text-center h-auto prod rounded-2xl flex flex-col  items-center justify-center  bg-cover bg-center)]'>
      <h1 className='text-4xl sm:text-7xl text-amber-500 font-bold pop backdrop-blur-[1px] p-3'>Get your</h1>
     <h1 className=' text-7xl md:text-8xl font-bold mt-1 text-white backdrop-blur-[1px] p-3'>Powerful Solar Panel </h1>
      <h3 className='text-6xl sm:text-4xl   lg:text-5xl font-bold mt- text-slate-100 pop backdrop-blur-[1px] p-3'x><span ref={el}> </span></h3>
    </div>
    <section>

     <div className='w-full '>
      <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
        <motion.div
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration: 1.5}}
         className='w-full md:w-[60%] '>
      <Title head1={'Explore Our'} head2={'Products'} /> 
          <p className='text-gray-600 pop text-[15px] md:text-[18px] mt-4 '><b>Why Choose Hakuna Matata Energy LTD? </b> 
          At Hakuna Matata Energy LTD, we understand that investing in solar energy is a big decision, and you want to be sure you're making the right choice. Our commitment to quality, reliability, and customer satisfaction sets us apart. Here's how we ensure you get the best solar solution for your needs <br /> <br />
          
        <b>Exceptional Customer Support</b> 
Your journey with Hakuna Matata Energy LTD doesn't end with installation. We pride ourselves on providing unparalleled customer service, from your initial consultation to post-installation support. Our dedicated team is always available to answer your questions, provide maintenance advice, and address any concerns you may have. We offer comprehensive warranties and ongoing support to ensure your peace of mind and the continuous performance of your solar system.</p>

          <div className='text-white bg-indigo-700 w-fit py-2 pl-3 pr-5 gap-3 mt-3 rounded-full flex items-center justify-center'> <i class="ri-home-8-line bg-white rounded-full w-10 h-10  mr-2 inline-flex items-center justify-center text-indigo-600"></i> <span>Home Services</span> </div>
        </motion.div>
  
<motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration: 1.5}}
className='w-full md:w-[40%] h-100'>
  <img src={assert.jj} alt="" className='rounded-2xl w-full h-100 object-cover'/>
</motion.div>
      </div>
      
     </div>
   <ProductItems/>
   <h1 className='text-2xl md:text-3xl text-gray-400 mt-5 text-center'>Get Any Products of your Choice from Hakuna Matata Energy-Tech LTD Office</h1>
    </section>
   <Warant/>

  </div>
  )
}

export default Product