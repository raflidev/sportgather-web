import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { useParams, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dataAll from "../data.js"

function Venue() {
    // get props
    const { id } = useParams();
    const [data, setData] = React.useState(dataAll[id-1]);

    const otherdata = dataAll.filter((item) => {
      return item.tipe.toLowerCase().includes(data.tipe.toLowerCase()) && item.no !== data.no;
    }); 
     
    // pick random number 3 times and not same
    const random = () => {
      let arr = [];
      for(let i = 0; i < 3; i++) {
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
  return (
    <div className='bg-gray-300 min-h-screen font-inter'>
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                      </svg>
                      <div>Back</div>
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
                    {/* <div>
                        <div className='w-full h-[30rem] bg-red-100 rounded-md' style={{backgroundImage: "url(https://1.bp.blogspot.com/-m4JLMKtOiHM/X-_SIfmH0BI/AAAAAAAAJtg/L-FPuZoAvHghkJvZzz4NUP0Qp1Pd94iVACLcBGAsYHQ/s800/GOR-Gelanggang-Olahraga.jpg)"}}></div>
                    </div>
                    <div>
                        <div className='w-full h-[30rem] bg-red-100 rounded-md' style={{backgroundImage: "url(https://1.bp.blogspot.com/-m4JLMKtOiHM/X-_SIfmH0BI/AAAAAAAAJtg/L-FPuZoAvHghkJvZzz4NUP0Qp1Pd94iVACLcBGAsYHQ/s800/GOR-Gelanggang-Olahraga.jpg)"}}></div>
                    </div> */}
                </Carousel>

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
                    <p className='font-semibold text-lg text-gray-500'>{data.alamat}</p>
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>Price</h1>
                    <div className='space-y-2'>
                        <div className='items-center space-x-2 text-lg pt-2'>
                            <ul className='space-y-2 font-semibold text-gray-500'>
                                <li>Siang : {rupiah(data.sewa.siang)}</li>
                                <li>Malam : {rupiah(data.sewa.malam)}</li>
                                <li>Keterangan : {data.sewa.keterangan}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-3xl font-bold'>Member</h1>
                    <div className='space-y-2'>
                        <div className='items-center space-x-2 text-lg pt-2'>
                            <ul className='space-y-2 font-semibold text-gray-500'>
                                <li>Siang : {rupiah(data.member_perbulan.siang)}</li>
                                <li>Malam : {rupiah(data.member_perbulan.malam)}</li>
                                <li>Keterangan : {data.member_perbulan.keterangan}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex'>
                  <a href={`https://api.whatsapp.com/send?phone=${data.no_wa}&text=Halo, saya mau booking ${data.venue}`} target="_blank" rel="noreferrer"  className='py-3 px-8 bg-green-300 rounded-full w-full text-center font-bold'>
                      Chat Sekarang
                  </a>
                </div>

                <div>
                <iframe
                    className='w-full mx-auto h-96 rounded'
                    loading="lazy"
                    title='maps'
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M&q=${data.venue}`}>
                    </iframe>
                </div>

                
                <div className='space-y-4'>
                  <h1 className='text-3xl font-bold'>Lainnya</h1>

                  <div className='grid grid-cols-3'>
                    {
                      random().map((item, index) => {
                        return <a href={"/venue/"+otherdata[item].no} key={index} className="space-y-2 hover:-translate-y-1 rounded px-2 py-3 duration-300">
                            <div className='w-full h-72 bg-red-100 rounded-md bg-center bg-cover' style={{ 
                                backgroundImage: `url(${otherdata[item].images[0]})` 
                            }}>

                            </div>
                            <div className='space-x-2'>
                                { otherdata[item].pembayaran.cash === true && otherdata[item].pembayaran.transfer === false && otherdata[item].pembayaran.qris === false &&
                                    <p className='rounded bg-gray-200 inline p-1 text-sm'>Cash Only</p>
                                }
                                
                                { otherdata[item].pembayaran.cash === true && (otherdata[item].pembayaran.transfer === true || otherdata[item].pembayaran.qris === true) &&
                                    <p className='rounded bg-gray-200 inline p-1 text-sm'>Cash</p>
                                }
                                { otherdata[item].pembayaran.transfer === true &&
                                    <p className='rounded bg-gray-200 inline p-1 text-sm'>Transfer</p>
                                }
                                { otherdata[item].pembayaran.qris === true &&
                                    <p className='rounded bg-gray-200 inline p-1 text-sm'>Qris</p>
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
      </div>
    </div>
  )
}

export default Venue
