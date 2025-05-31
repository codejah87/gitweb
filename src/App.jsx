import React from 'react'
import Home from './Pages/Home'
import Navbar from './Component/NavBar'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Footer from './Component/Footer'
import Service from './Pages/Service'
import WhatApp from './Component/WhatApp'


const App = () => {
  return (
 <div className='w-full overflow-x-hidden'>
  
     <Navbar/>
     
   <div className='w-full px-5 sm:px-8 xl:px-29'>
    <Router>  

       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/service' element={<Service/>}/>
         <Route path='/product' element={<Product/>}/>
         <Route path='/contact' element={<Contact/>}/>
       </Routes>
    </Router>

   </div>
   <WhatApp/>
   <Footer/>
 </div>
  )
}
export default App;

