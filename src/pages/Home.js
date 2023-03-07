import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import dataAll from "../data.js"

function Home() {
    // add data to state
    const [data, setData] = React.useState(dataAll);

    // filter data
    const handleFilter = (e) => {
        if(e.target.value === "All") return setData(dataAll);
        const filter = e.target.value;
        console.log(filter);
        const filteredData = data.filter((item) => {
            return item.venue.toLowerCase().includes(filter.toLowerCase());
        });
        setData(filteredData);
    };

  return (
    <div className='bg-gray-300 min-h-screen font-inter'>
      <div className="flex justify-center">
        <div className=" w-full lg:w-1/2 bg-white min-h-screen px-10 py-10">
            <div className=''>
                <h1 className='text-xl font-bold'>
                    <img src={logo} alt="" srcSet="" />
                </h1>
                <div className='flex justify-start mt-10'>
                    <select name="olahraga" onChange={handleFilter} id="" className='w-2/6 py-2 bg-white border border-black px-3 text-gray-700 rounded'>
                        <option value="All">All</option>
                        <option value="Futsal">Futsal</option>
                        <option value="Bulu Tangkis">Bulu Tangkis</option>
                        <option value="Basket">Basket</option>
                    </select>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10'>
                { data.map((item, index) => {
                return <Link to={"/venue/"+item.no} key={index} className="space-y-2 hover:-translate-y-1 rounded px-2 py-3 duration-300">
                    <div className='w-full h-72 bg-red-100 rounded-md' style={{ 
                        backgroundImage: `url("https://dispora.bengkuluutarakab.go.id/wp-content/uploads/2020/09/IMG_7617.jpg")` 
                    }}>

                    </div>
                    <div className='space-x-2'>
                        { item.pembayaran.cash === true && item.pembayaran.transfer === false && item.pembayaran.qris === false &&
                            <p className='rounded bg-gray-200 inline p-1 text-sm'>Cash Only</p>
                        }
                        
                        { item.pembayaran.cash === true && (item.pembayaran.transfer === true || item.pembayaran.qris === true) &&
                            <p className='rounded bg-gray-200 inline p-1 text-sm'>Cash</p>
                        }
                        { item.pembayaran.transfer === true &&
                            <p className='rounded bg-gray-200 inline p-1 text-sm'>Transfer</p>
                        }
                        { item.pembayaran.qris === true &&
                            <p className='rounded bg-gray-200 inline p-1 text-sm'>Qris</p>
                        }
                    </div>
                    <div className=''>
                        <h1 className='text-xl font-semibold'>{item.venue}</h1>
                    </div>
                    <div>
                        <p className='text-gray-700'>{item.alamat.slice(0,33)}...</p>
                    </div>
                </Link>
                }) }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
