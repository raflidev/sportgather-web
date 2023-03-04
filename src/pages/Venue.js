import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import dataAll from "../data.js"

function Venue() {
    // get props
    const { id } = useParams();
    console.log(dataAll[id-1]);
    const [data, setData] = React.useState(dataAll[id-1]);

    const rupiah = (x) => {
        return "Rp "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  return (
    <div className='bg-gray-300 min-h-screen'>
      <div className="flex justify-center">
        <div className=" w-full lg:w-1/2 bg-white min-h-screen px-10 py-10 pb-20">
            <div className=''>
                <h1 className='text-xl font-bold'>
                    <img src={logo} alt="" srcSet="" />
                </h1>
            </div>
            <div className='space-y-6'>
                <div className='w-1/12'>
                    <Link to="/" className='flex items-center space-x-2 border border-black rounded px-2 py-1 mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <p>Back</p>
                    </Link>
                </div>

                <div className='w-full h-[30rem] bg-red-100 rounded-md'>

                </div>

                <div className='space-x-2'>
                    { data.pembayaran.cash === true && data.pembayaran.transfer === false && data.pembayaran.qris === false &&
                        <p className='rounded bg-gray-200  inline py-2 px-5'>Cash Only</p>
                    }
                    
                    { data.pembayaran.cash === true && (data.pembayaran.transfer === true || data.pembayaran.qris === true) &&
                        <p className='rounded bg-gray-200  inline py-2 px-5'>Cash</p>
                    }
                    { data.pembayaran.transfer === true &&
                        <p className='rounded bg-gray-200  inline py-2 px-5'>Transfer</p>
                    }
                    { data.pembayaran.qris === true &&
                        <p className='rounded bg-gray-200  inline py-2 px-5'>Qris</p>
                    }
                </div>
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold'>{data.venue}</h1>
                    <p className='text text-gray-400'>{data.alamat}</p>
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>Price</h1>
                    <div className='space-y-2'>
                        <div className='items-center space-x-2 text-xl pt-2'>
                            <ul className='list-disc pl-3 space-y-2'>
                                <li>Siang : {rupiah(data.sewa.siang)}</li>
                                <li>Malam : {rupiah(data.sewa.malam)}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>Member</h1>
                    <div className='space-y-2'>
                        <div className='items-center space-x-2 text-xl pt-2'>
                            <ul className='list-disc pl-3 space-y-2'>
                                <li>Weekday : {rupiah(data.member_perbulan.weekday)}</li>
                                <li>Weekend : {rupiah(data.member_perbulan.weekend)}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                <iframe
                    className='w-full mx-auto h-96 rounded'
                    loading="lazy"
                    title='maps'
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M&q=${data.venue}`}>
                    </iframe>
                </div>

                <div className='fixed bottom-0 left-0 w-full'>
                    <div className='flex justify-center'>
                        <div className='w-1/2 bg-white py-5'>
                            <div className='flex justify-between px-6 items-center'>
                                <div className='text-3xl font-bold'>{rupiah(data.sewa.siang)}</div>
                                <a href={`https://api.whatsapp.com/send?phone=${data.no_wa}&text=Halo, saya mau booking ${data.venue}`} target="_blank" rel="noreferrer"  className='py-3 px-8 bg-green-300 rounded-full'>
                                    Chat Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            



        </div>
      </div>
    </div>
  )
}

export default Venue
