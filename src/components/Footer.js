import React from 'react'
import { SocialIcon } from 'react-social-icons';
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div>
      <div className='bg-primary-black py-4 px-8 flex items-center justify-between text-white'>
            <div>
                <img src={logo} className="w-20" alt=""  />
            </div>
            <div>
                Copyright &copy; {new Date().getFullYear()} Sportgather
            </div>
            <div className='flex space-x-1 items-center'>
                <SocialIcon network='instagram' bgColor="#131313" fgColor='#fff' style={{ height: 40, width: 40 }}/>
                <div className='font-semibold'>Sportgatherid</div>
            </div>
        </div>
    </div>
  )
}

export default Footer
