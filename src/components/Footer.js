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
            <div className='text-xs'>
                Copyright &copy; {new Date().getFullYear()} Sportgather
            </div>
            <a href='https://instagram.com/sportgatherid' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                <SocialIcon network='instagram' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                <div className='font-semibold z-10 text-xs'>Sportgatherid</div>
            </a>
        </div>
    </div>
  )
}

export default Footer
