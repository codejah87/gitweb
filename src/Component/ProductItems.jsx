import React, { useEffect, useState } from 'react'
import { assert } from '../assets/imag/ImageFile'
import Scroll from './Scroll'
import ProductBox from './ProductBox'
import { productsList } from '../assets/imag/product-img/product'
import Job from './Job'
import { Link } from 'react-router'
const ProductItems = () => {
  const [product, setProduct] = useState([]);

  useEffect(()=> {
    setProduct(productsList)
  },[product])
  return (
    <div className='mt-20'>
    <div>

      <div className='flex items-center justify-center gap-3 mb-5'>
        <div className='w-40 h-[2px] bg-indigo-700'></div>
      <h3 className='text-1xl sm:text-2xl text-center text-gray-700'>We deal with this brands</h3>
        <div className='w-40 h-[2px] bg-indigo-700'></div>

      </div>

    <Scroll/>
    </div>

  <Job/>
  <div>
    <h1 className='mt-7 text-2.9xl sm:text-4xl text-black font-semibold inline-flex items-center gap-3 '>Original Products On Sale <div className='h-5 w-5 bg-indigo-600 rounded-full'></div></h1>
  </div>
        
     <div className='w-full hero-con2 gap-4 mt-8'>
      {
        product.map((item)=> {
          return(
            <ProductBox key={item.id} name={item.name} image={item.image} voltage={item.votes} des1={item.des1} des2={item.des2}/>
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductItems
