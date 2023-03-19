import React from 'react'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import dataAll from "../data.js"
import dataFilter from '../filter';
import Footer from '../components/Footer';

function Home() {
    // add data to state
    const [filteredData, setFilteredData] = React.useState(dataAll);
    const [data, setData] = React.useState(dataAll);

    // filter data
    const handleFilter = (selectedState, action) => {
        const filter = selectedState.value;
        if(selectedState.value === "all") {
            setFilteredData(data);
        } else {
            const currData = data.filter((item) => {
                return item.tipe.toLowerCase().includes(filter);
            });
            setFilteredData(currData);
        }
    };

  return (
    <div className='bg-gray-300 min-h-screen font-inter'>
      <div className="flex justify-center">
        <div className=" w-full lg:w-1/2 bg-white min-h-screen">
            <div className='text-xl font-bold bg-primary-black px-10 py-4'>
                <Link to="/">
                    <img src={logo} alt="" srcSet="" />
                </Link>
            </div>
            <div className='px-10 py-10 pb-14'>
                <div className=''>         
                    <div className='flex justify-end'>
                        <Select
                            onChange={handleFilter}
                            options={dataFilter}
                            className={'select-input home__input-filter'}
                            placeholder='Cabang Olahraga'
                            defaultValue={dataFilter[0]}
                            name='cabor'
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                ...theme.colors,
                                primary25: '#3f4246'
                                }
                            })}
                            />
                        {/* <select name="olahraga" onChange={handleFilter} id="" className='w-2/6 py-2 bg-white border border-black px-3 text-gray-700 rounded'>
                            <option value="All">All</option>
                            <option value="Futsal">Futsal</option>
                            <option value="Bulu Tangkis">Bulu Tangkis</option>
                        </select> */}
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10'>
                    { filteredData.map((item, index) => {
                    return <div key={index} >
                        <Link to={"/venue/"+item.slug}className="space-y-2 hover:-translate-y-1 rounded py-3 duration-300">
                            <div className='w-full h-64 2xl:h-72 bg-green-200 rounded-md bg-center bg-cover' style={{ 
                                backgroundImage: `url(${item.images[0]})` 
                            }}>

                            </div>
                            <div className='space-x-3 py-2'>
                                { item.pembayaran.cash === true && item.pembayaran.transfer === false && item.pembayaran.qris === false &&
                                    <p className='rounded bg-primary-black text-white font-semibold inline p-2 md:p-1 text-sm'>Cash Only</p>
                                }
                                
                                { item.pembayaran.cash === true && (item.pembayaran.transfer === true || item.pembayaran.qris === true) &&
                                    <p className='rounded bg-primary-black text-white font-semibold inline p-2 md:p-1 text-sm'>Cash</p>
                                }
                                { item.pembayaran.transfer === true &&
                                    <p className='rounded bg-primary-black text-white font-semibold inline p-2 md:p-1 text-sm'>Transfer</p>
                                }
                                { item.pembayaran.qris === true &&
                                    <p className='rounded bg-primary-black text-white font-semibold inline p-2 md:p-1 text-sm'>Qris</p>
                                }
                            </div>
                            <div className=''>
                                <h1 className='text-xl font-semibold'>{item.venue}</h1>
                            </div>
                            <div>
                                <p className='text-gray-700'>{item.alamat.slice(0,33)}...</p>
                            </div>
                        </Link>
                    </div>
                    }) }
                </div>
            </div>
            <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Home
