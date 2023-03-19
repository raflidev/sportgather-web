import React from 'react'
import { useParams, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

    const rupiah = (x) => {
        return "Rp "+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='bg-gray-300 min-h-screen font-inter'>
      <div className="flex justify-center">
        <div className=" w-full lg:w-1/2 bg-white min-h-screen">
            <div className=''>
                <div className='text-xl font-bold bg-primary-black px-10 py-4'>
                    <Link to="/">
                        <img src={logo} alt="" srcSet="" />
                    </Link>
                </div>
            </div>
            <div className='px-10 py-10'>
                <div className='space-y-6'>
                    <div className='hover:underline'>
                        <Link to="/" className='flex items-center space-x-2 rounded px-2 py-1 mt-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        <div className='font-bold text-2xl'>Back</div>
                        </Link>
                    </div>
                    
                    <Slider {...settings}>
                    {
                        data.images.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='w-full h-[30rem] bg-green-300 rounded-md bg-cover bg-center' style={{backgroundImage: "url("+item+")"}}></div>
                            </div>
                        )
                        }
                        )
                    }
                    </Slider>

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
                
                <div className='pt-5 space-y-6 py-5'>
                    <h1 className='text-3xl font-bold'>Fasilitas</h1>
                    <div className='grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-3 mt-3'>
                        {
                            data.fasilitas.musholla !== "-" &&
                            <p className='rounded bg-gray-100 text-black font-semibold  inline p-3 text-sm text-center'>Musholla</p>
                        }
                        {
                            data.fasilitas.kamar_mandi !== "-" &&
                            <p className='rounded bg-gray-100 text-black font-semibold  inline p-3 text-sm text-center'>Kamar mandi</p>
                        }
                        {
                            data.fasilitas.lap_badminton !== "-" &&
                            <p className='rounded bg-gray-100 text-black font-semibold  inline p-3 text-sm text-center'>{data.fasilitas.lap_badminton} Lapangan</p>
                        }
                        {
                            data.fasilitas.lap_futsal !== "-" &&
                            <p className='rounded bg-gray-100 text-black font-semibold  inline p-3 text-sm text-center'>{data.fasilitas.lap_futsal} Lapangan</p>
                        }
                        {
                            data.fasilitas.lap_basket !== "-" &&
                            <p className='rounded bg-gray-100 text-black font-semibold  inline p-3 text-sm text-center'>{data.fasilitas.lap_basket} Lapangan. 
                            {
                                data.fasilitas.tipe !== "-" &&
                                <span className='text-black font-semibold'> Tipe ({data.fasilitas.tipe})</span>
                            }
                            </p>
                        }
                    </div>
                </div>

                <div className='py-5'>
                    <h1 className='text-3xl font-bold'>Harga</h1>
                    <div className=''>
                        <div className='flex justify-between flex-col md:flex-row items-start md:items-center text-lg pt-2 space-y-4 md:space-y-0'>
                            <div>
                                <h2 className='text-xl font-bold'>Sewa</h2>
                                <ul className='space-y-1 font-semibold text-gray-500'>
                                    <li>Siang : {rupiah(data.sewa.siang)}/jam</li>
                                    <li>Malam : {rupiah(data.sewa.malam)}/jam</li>
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
                                            
                                        </ul>
                                    </div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 px-4 py-6 rounded-xl my-4 border border-gray-200'>
                    <div className='flex flex-col md:flex-row items-start justify-between space-y-4 md:space-y-0'>
                        <div className='w-full md:w-7/12 space-y-5'>
                            <h2 className='font-bold text-xl'>Pembayaran</h2>
                            <div className='space-x-2'>
                                { data.pembayaran.cash === true && data.pembayaran.transfer === false && data.pembayaran.qris === false &&
                                    <p className='rounded bg-primary-black text-white font-bold text-sm inline py-2 px-3'>Cash Only</p>
                                }
                                
                                { data.pembayaran.cash === true && (data.pembayaran.transfer === true || data.pembayaran.qris === true) &&
                                    <p className='rounded bg-primary-black text-white font-bold text-sm inline py-2 px-3'>Cash</p>
                                }
                                { data.pembayaran.transfer === true &&
                                    <p className='rounded bg-primary-black text-white font-bold text-sm inline py-2 px-3'>Transfer</p>
                                }
                                { data.pembayaran.qris === true &&
                                    <p className='rounded bg-primary-black text-white font-bold text-sm inline py-2 px-3'>Qris</p>
                                }
                            </div>
                        </div>

                        <div className='w-full md:w-5/12'>
                            <h2 className='font-bold text-xl'>Keterangan</h2>
                            <ol className='text-gray-500 list-disc text-sm pl-5'>
                                <li>
                                booking via (
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
                                </li>

                                {
                                    data.member_perbulan.keterangan !== "-" &&
                                    <li>{data.member_perbulan.keterangan}</li>
                                }
                            
                                {
                                    data.sewa.keterangan !== "-" &&
                                    <li>{data.sewa.keterangan}</li>
                                }
                                
                            </ol>
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

                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {
                        random().map((item, index) => {
                            return <div key={index}>
                                <a href={"/venue/"+otherdata[item].no} className="space-y-2 hover:-translate-y-1 rounded py-3 duration-300">
                                    <div className='w-full h-56 bg-red-100 rounded-md bg-center bg-cover' style={{ 
                                        backgroundImage: `url(${otherdata[item].images[0]})` 
                                    }}>

                                    </div>
                                    <div className='space-x-3 py-2'>
                                        { otherdata[item].pembayaran.cash === true && otherdata[item].pembayaran.transfer === false && otherdata[item].pembayaran.qris === false &&
                                            <p className='rounded bg-primary-black text-white font-semibold  inline p-2 md:p-1 text-sm'>Cash Only</p>
                                        }
                                        
                                        { otherdata[item].pembayaran.cash === true && (otherdata[item].pembayaran.transfer === true || otherdata[item].pembayaran.qris === true) &&
                                            <p className='rounded bg-primary-black text-white font-semibold  inline p-2 md:p-1 text-sm'>Cash</p>
                                        }
                                        { otherdata[item].pembayaran.transfer === true &&
                                            <p className='rounded bg-primary-black text-white font-semibold  inline p-2 md:p-1 text-sm'>Transfer</p>
                                        }
                                        { otherdata[item].pembayaran.qris === true &&
                                            <p className='rounded bg-primary-black text-white font-semibold  inline p-2 md:p-1 text-sm'>Qris</p>
                                        }
                                    </div>
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>{otherdata[item].venue}</h1>
                                    </div>
                                    <div>
                                        <p className='text-gray-700'>{otherdata[item].alamat.slice(0,33)}...</p>
                                    </div>
                                </a>
                            </div>
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
