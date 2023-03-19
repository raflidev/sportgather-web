import React from 'react'
import { SocialIcon } from 'react-social-icons';
import logo from "../assets/logo.png";
function Footer() {
  return (
    <div>
      <div className='hidden md:flex bg-primary-black py-4 px-8 flex-col md:flex-row  items-center justify-between text-white'>
            <div className='flex flex-col space-y-2'>
                <div className=''>
                    <img src={logo} className="w-auto md:w-20" alt=""  />
                </div>
                <div className='text-md md:text-xs'>
                    Copyright &copy;{new Date().getFullYear()} Sportgather
                </div>
            </div>
            <div className='flex flex-col xl:flex-row space-x-0 space-y-2 xl:space-y-0 xl:space-x-3'>
                <a href='https://instagram.com/sportgatherid' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                    <SocialIcon network='instagram' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                    <div className='font-semibold z-10 text-md md:text-xs'>Sportgatherid</div>
                </a>
                <a href='wa.me/6281287475131' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                    <SocialIcon network='whatsapp' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                    <div className='font-semibold z-10 text-md md:text-xs'>0812-8747-5131</div>
                </a>
                <a href='mailto:sportgatherid@gmail.com' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                    <SocialIcon network='email' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                    <div className='font-semibold z-10 text-md md:text-xs'>Sportgatherid@gmail.com</div>
                </a>
            </div>
        </div>
      <div className='bg-primary-black py-4 px-8 flex md:hidden flex-col md:flex-row space-y-5  items-center justify-between text-white'>
            <div className=''>
                <img src={logo} className="w-auto md:w-20" alt=""  />
            </div>
            <div className='flex  flex-col xl:flex-row space-x-0 space-y-2 xl:space-y-0 xl:space-x-3'>
                <a href='https://instagram.com/sportgatherid' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                    <SocialIcon network='instagram' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                    <div className='font-semibold z-10 text-md md:text-xs'>Sportgatherid</div>
                </a>
                <a href='wa.me/6281287475131' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                    <SocialIcon network='whatsapp' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                    <div className='font-semibold z-10 text-md md:text-xs'>0812-8747-5131</div>
                </a>
                <a href='mailto:sportgatherid@gmail.com' target="_blank" rel="noreferrer" className='flex -space-x-1 items-center hover:underline'>
                    <SocialIcon network='email' bgColor="#131313" className='z-0' fgColor='#fff' style={{ height: 40, width: 40 }}/>
                    <div className='font-semibold z-10 text-md md:text-xs'>Sportgatherid@gmail.com</div>
                </a>
            </div>
            <div className='text-md md:text-xs text-center'>
                Copyright &copy;{new Date().getFullYear()} Sportgather
            </div>
        </div>
    </div>
  )
}

export default Footer
