import React from 'react'
import Hero from '../Component/Hero'
import Hero2 from '../Component/Hero2'
import Brands from '../Component/Brands'
import Choose from '../Component/Choose'
import Warant from '../Component/Warant'
// import News from '../Component/News'

export const Home = () => {
  return (
    <div>
     <Hero/>
     <Hero2/>
     <Brands/>
     <Choose/>
     <Warant/>
     {/* <News/> */}
    </div>
  )
}
export default Home