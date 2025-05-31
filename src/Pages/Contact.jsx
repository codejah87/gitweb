import React from 'react'
import Title from '../Component/Title'
import { assert } from '../assets/imag/ImageFile'
import SocialMedial from '../Component/SocialMedia'
import ContactForm from '../Component/ContactForm'

const Contact = () => {
  return (
 <section>
  <Title head1={'Contact'} head2={'Us'}/>
  <p className='text-shadow-md font-light text-1xl  mt-5'>Get to know our Office real time location <i className="ri-map-pin-line text-blue-800"></i></p>
  <div className='w-full mt-5 rounded-2xl bg-white shadow-lg p-5'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4034644.197450956!2d2.8842680875000157!3d9.05626460000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bc8d0969273%3A0xff706a78b4965f15!2sHakuna%20Matata%20Energy-Tech%20Ltd!5e0!3m2!1sen!2sng!4v1748100929939!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>


    <div className='flex flex-col md:flex-row gap-10 justify-between mt-15'>
      <div className='w-full'>
        <img src={assert.locationImg} alt="" />
      </div>
      <div className='w-full flex flex-col items-start' >
       <Title head1={'Get in'} head2={'Touch'}/>
        <div className='mt-9 flex flex-col items-start gap-5 '>
           <div className='flex gap-3 items-center'>
            <i className="ri-map-pin-line p-5 w-10 flex items-center justify-center h-10 bg-blue-50 text-1xl text-indigo-600 rounded-sm"></i>
            <span className='text-gray-600 leading-5 text-[16px] '>NO: 1, JS Tarka Street, Opp. Area 2 Shopping Center Area 2 Parking, Abuja</span>
           </div>
           <div className='flex gap-3 items-center'>
            <i className="ri-mail-line p-5 w-10 flex items-center justify-center h-10 bg-indigo-500 text-1xl text-white rounded-sm"></i>
            <span className='text-gray-500  text-[17px]'>hakunamataenergy@gmail.com</span>
           </div>

           <div className='flex gap-3 items-center'>
            <i className="ri-phone-line p-5 w-10 flex items-center justify-center h-10 bg-indigo-50 text-1xl text-indigo-600 rounded-sm"></i>
            <span className='text-gray-700 pop text-[17px]'>+234 7087073302, 08034808646</span>
           </div>
           <p>Follow us at our Social Media Handles</p>
           <SocialMedial/>
        </div>
      </div>
   </div>    
   <ContactForm/>
 </section>
  )
}

export default Contact
