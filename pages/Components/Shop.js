import { faTimes, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';
import cloths from '../api/cloths';
import ShopItem from './ShopItem';

const Shop = () => {
    const [info, setInfo] = useState(true)
    const handleInfo = () => {
        setInfo(false)
    }
    return (
        <div>
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center items-center shadow-inner h-40'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div className='flex flex-col sm:gap-4 sm:mt-4 justify-center p-8 sm:p-0'>


                <div className={info ? `alert w-2/4 sm:w-full  m-auto` : "hidden"}>
                    <div className="flex flex-row justify-between items-center w-full" >
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <label>Click on the product below to open its respective page!</label>
                        </div>
                        <span onClick={handleInfo} className='text-2xl cursor-pointer'>×</span>
                    </div>
                </div>

                <div className='flex items-center sm:flex-col sm:gap-4 justify-between pr-12 pl-12'>
                    <div>Showing <strong> {cloths.length}</strong> of  <strong> {cloths.length}</strong> results</div>

                    <div className='flex gap-4 '>
                        <select defaultValue="Most Recent" className="font-normal bg-gray-100 border-none select focus:border-gray-300 max-w-xs ">
                            <option >Most Recent</option>
                            <option>Older</option>
                        </select>
                        <select defaultValue="10" className="font-normal bg-gray-100 border-none  select  max-w-xs">
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>

                    </div>
                </div>

                <div className='flex flex-row flex-wrap justify-center p-8'>

                    {cloths.map(cloth => {
                        return (
                            <ShopItem key={cloth.id} id={cloth.id} image={cloth.image} title={cloth.title} price={cloth.price} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Shop