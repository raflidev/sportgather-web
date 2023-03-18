import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useParams, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dataAll from "../data.js"
import Footer from '../components/Footer';

function Venue() {
    // get props
    const { id } = useParams();
    const [data, setData] = React.useState(dataAll[id-1]);

    const otherdata = dataAll.filter((item) => {
      return item.tipe.toLowerCase().includes(data.tipe.toLowerCase()) && item.no !== data.no;
    }); 
     
    // pick random number 3 times and not same
    const random = () => {
      let x = 0;
      if(otherdata.length < 2) {
        x = 1
      }else if(otherdata.length < 3){
        x = 2
      }else {
        x = 3
      }
    //   return x;
      let arr = [];
      for(let i = 0; i < x; i++) {
        let num = Math.floor(Math.random() * otherdata.length);
        if(arr.includes(num)) {
          i--;
        } else {
          arr.push(num);
        }
      }
      return arr;
    }
  
    console.log(random());

    const rupiah = (x) => {
        return "Rp "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  return (
    <div className='bg-gray-300 min-h-screen font-inter'>
      <div className="flex justify-center">
        <div className=" w-full lg:w-1/2 bg-white min-h-screen">
            <div className=''>
                <div className='text-xl font-bold bg-primary-black px-10 py-4'>
                    <img src={logo} alt="" srcSet="" />
                </div>
            </div>
            <div className='px-10 py-10'>
                <div className='space-y-6'>
                    <div className='hover:underline'>
                        <Link to="/" className='flex items-center space-x-2 rounded px-2 py-1 mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        <div className='font-bold text-2xl'>Detail Lapangan</div>
                        </Link>
                    </div>

                    <Carousel infiniteLoop={true} showThumbs={false}>
                    {
                        data.images.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='w-full h-[30rem] bg-red-100 rounded-md bg-cover bg-center' style={{backgroundImage: "url("+item+")"}}></div>
                            </div>
                        )
                        }
                        )
                    }
                    </Carousel>

                    <div className='space-y-2'>
                        <h1 className='text-3xl font-bold'>{data.venue}</h1>
                        <p className='font-semibold text-lg text-gray-500'>{data.alamat}</p>
                    </div>
                    <iframe
                        className='w-full mx-auto h-72 rounded'
                        loading="lazy"
                        title='maps'
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M&q=${data.venue}`}>
                    </iframe>
                </div>
                
                <div className='pt-5'>
                    <h1 className='text-3xl font-bold'>Fasilitas</h1>
                    <div className='space-x-2 mt-3'>
                        {
                            data.fasilitas.musholla !== "-" &&
                            <p className='rounded bg-gray-200 text-black font-semibold  inline p-1 text-sm py-3 px-5'>Musholla</p>
                        }
                        {
                            data.fasilitas.kamar_mandi !== "-" &&
                            <p className='rounded bg-gray-200 text-black font-semibold  inline p-1 text-sm py-3 px-5'>Kamar mandi</p>
                        }
                        {
                            data.fasilitas.lap_badminton !== "-" &&
                            <p className='rounded bg-gray-200 text-black font-semibold  inline p-1 text-sm py-3 px-5'>{data.fasilitas.lap_badminton} Lapangan
                            
                            </p>

                        }
                    </div>
                </div>

                <div className='pt-5'>
                    <h1 className='text-3xl font-bold'>Harga</h1>
                    <div className='space-y-2'>
                        <div className='items-center text-lg pt-2 space-y-4'>
                            <div>
                                <h2 className='text-xl font-bold'>Sewa</h2>
                                <ul className='space-y-1 font-semibold text-gray-500'>
                                    <li>Siang : {rupiah(data.sewa.siang)}/jam</li>
                                    <li>Malam : {rupiah(data.sewa.malam)}/jam</li>
                                    {
                                        data.sewa.keterangan !== "-" &&
                                        <li>Keterangan : {data.sewa.keterangan}</li>
                                    }
                                </ul>
                            </div>
                            <div>
                                {
                                    data.member_perbulan.siang !== "-" && data.member_perbulan.malam !== "-" && data.member_perbulan.keterangan !== "-" &&
                                <div>
                                    <h2 className='text-xl font-bold'>Membership</h2>
                                    <div className='items-center text-lg pt-2'>
                                        <ul className='space-y-1 font-semibold text-gray-500'>
                                            {
                                                data.member_perbulan.siang !== "-" &&
                                                <li>Siang : {rupiah(data.member_perbulan.siang)}/bulan</li>
                                            }
                                            {
                                                data.member_perbulan.malam !== "-" &&
                                                <li>Malam : {rupiah(data.member_perbulan.malam)}/bulan</li>
                                            }
                                            {
                                                data.member_perbulan.keterangan !== "-" &&
                                                <li>Keterangan : {data.member_perbulan.keterangan}</li>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200 px-4 py-6 rounded-xl my-4'>
                    <div className='flex items-center justify-between'>
                        <div className='space-y-5'>
                            <h2 className='font-bold'>Pembayaran</h2>
                            <div className='space-x-2'>
                                { data.pembayaran.cash === true && data.pembayaran.transfer === false && data.pembayaran.qris === false &&
                                    <p className='rounded bg-primary-black text-white font-bold  inline py-2 px-4'>Cash Only</p>
                                }
                                
                                { data.pembayaran.cash === true && (data.pembayaran.transfer === true || data.pembayaran.qris === true) &&
                                    <p className='rounded bg-primary-black text-white font-bold  inline py-2 px-4'>Cash</p>
                                }
                                { data.pembayaran.transfer === true &&
                                    <p className='rounded bg-primary-black text-white font-bold  inline py-2 px-4'>Transfer</p>
                                }
                                { data.pembayaran.qris === true &&
                                    <p className='rounded bg-primary-black text-white font-bold  inline py-2 px-4'>Qris</p>
                                }
                            </div>
                        </div>

                        <div className='space-y-5'>
                            <h2 className='font-bold'>Status</h2>
                            <div className='font-bold text-gray-500'>booking via (
                                {
                                    data.booking.onsite && data.booking.wa === false &&
                                    <span>
                                     onsite
                                    </span>
                                }
                                {
                                    data.booking.wa && data.booking.onsite === false &&
                                    <span>
                                     wa
                                    </span>
                                }
                                {
                                    data.booking.wa && data.booking.onsite &&
                                    <span>
                                        onsite / wa
                                    </span>
                                }
                            )
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <a href={`https://api.whatsapp.com/send?phone=${data.no_wa}&text=Halo, saya mau booking ${data.venue}`} target="_blank" rel="noreferrer"  className='py-3 px-8 bg-green-300 rounded-full w-full text-center font-bold'>
                        Chat Sekarang
                    </a>
                </div>

                <div className='pt-4'> 
                    <div className='space-y-4'>
                    <h1 className='text-3xl font-bold'>Lainnya</h1>

                    <div className='grid grid-cols-3 gap-4'>
                        {
                        random().map((item, index) => {
                            return <a href={"/venue/"+otherdata[item].no} key={index} className="space-y-2 hover:-translate-y-1 rounded py-3 duration-300">
                                <div className='w-full h-56 bg-red-100 rounded-md bg-center bg-cover' style={{ 
                                    backgroundImage: `url(${otherdata[item].images[0]})` 
                                }}>

                                </div>
                                <div className='space-x-2'>
                                    { otherdata[item].pembayaran.cash === true && otherdata[item].pembayaran.transfer === false && otherdata[item].pembayaran.qris === false &&
                                        <p className='rounded bg-primary-black text-white font-semibold  inline p-1 text-sm'>Cash Only</p>
                                    }
                                    
                                    { otherdata[item].pembayaran.cash === true && (otherdata[item].pembayaran.transfer === true || otherdata[item].pembayaran.qris === true) &&
                                        <p className='rounded bg-primary-black text-white font-semibold  inline p-1 text-sm'>Cash</p>
                                    }
                                    { otherdata[item].pembayaran.transfer === true &&
                                        <p className='rounded bg-primary-black text-white font-semibold  inline p-1 text-sm'>Transfer</p>
                                    }
                                    { otherdata[item].pembayaran.qris === true &&
                                        <p className='rounded bg-primary-black text-white font-semibold  inline p-1 text-sm'>Qris</p>
                                    }
                                </div>
                                <div className=''>
                                    <h1 className='text-xl font-semibold'>{otherdata[item].venue}</h1>
                                </div>
                                <div>
                                    <p className='text-gray-700'>{otherdata[item].alamat.slice(0,33)}...</p>
                                </div>
                            </a>
                        })
                        }
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Venue
