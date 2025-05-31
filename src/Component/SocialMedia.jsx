import React from 'react'

const SocialMedial = () => {
  return (
    <div className='flex gap-2 items-center justify-center'>
      <a href="https://www.facebook.com/hakuna.matata.energy.tech" className='group py-2 px-2 border-2 h-9 w-9 rounded-full inline-flex justify-center items-center border-blue-700 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1'>
        <i class="ri-facebook-fill text-blue-700 text-xl font-medium group-hover:text-white"></i>
      </a>

      <a href="http://wa.me/+23408135140012?text=Hello%20I%20am%20interested%20in%20your%20Services" className='group py-2 px-2 border-2 h-9 w-9 rounded-full inline-flex justify-center items-center border-blue-700 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1'>
        <i class="ri-whatsapp-fill text-blue-700 text-xl font-medium group-hover:text-white"></i>
      </a>
              
        <a href="https://www.instagram.com/hakunamatata_energy?igsh=cHo4NDdoZ25rbmE3" className='group py-2 px-2 border-2 h-9 w-9 rounded-full inline-flex justify-center items-center border-blue-700 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1'>
        <i class="ri-instagram-fill text-blue-700 text-xl font-medium group-hover:text-white"></i>
      </a>
    </div>
  )
}

export default SocialMedial
