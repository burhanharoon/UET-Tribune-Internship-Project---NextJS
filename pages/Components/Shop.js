import { useState } from 'react';
import shirt from '../images/cloth1.png';
import { cloths } from '../cloths';
import { ShopItem } from './ShopItem';

export const Shop = () => {
    return (

        <div className='h-screen'>

            {/* Shop */}
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center items-center h-1/5'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div className='flex flex-col flex-wrap justify-center p-8'>

                <div className='flex items-center sm:flex-col sm:gap-4 justify-between pr-12 pl-12'>
                    <div>Showing <strong> {cloths.length}</strong> of  <strong> {cloths.length}</strong> results</div>

                    <div className='flex gap-4 '>
                        <select class="font-normal bg-gray-100 border-none select focus:border-gray-300 max-w-xs ">
                            <option disabled="disabled" selected="selected">Most Recent</option>
                            <option>Older</option>
                        </select>
                        <select class="font-normal bg-gray-100 border-none  select  max-w-xs">
                            <option disabled="disabled" selected="selected">Show 10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>

                    </div>
                </div>

                <div className='flex flex-row flex-wrap justify-center p-8'>

                    {cloths.map(cloth => {
                        return (
                            <ShopItem image={cloth.image} title={cloth.title} price={cloth.price} />
                        )
                    })}
                </div>

            </div>
        </div>
    )
}
