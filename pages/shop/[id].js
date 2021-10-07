import { useRouter } from 'next/router'
import Link from 'next/link'
import { cloths } from '../cloths'
import Image from 'next/image'
import { useState } from 'react'

const cloth = {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71LQknrzcLS._AC_UX522_.jpg",
    title: "Album",
    price: 21.99
}
const Product = () => {

    const [counter, setCounter] = useState(0)

    // const router = useRouter()
    // const { id } = router.query

    // const cloth = cloths.find(cloth => cloth.id == id)

    return (

        <div className='h-screen'>
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center items-center h-1/5'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div className='flex gap-4 p-8 flex-col items-center'>
                
                <figure className='shadow flex justify-center p-16'>
                    <Image src={cloth.image} layout='intrinsic' width='300px' height='300px' alt="Picture of the Cloth" />
                </figure>

                <div className='w-full flex flex-col gap-4'>
                    <h1 className='font-bold text-xl'>{cloth.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium blanditiis nam animi, aliquam ipsa architecto exercitationem ipsam voluptatum temporibus odio, cum quasi, quia illo voluptate neque necessitatibus commodi vitae.</p>
                    <p className='stat-value'>${cloth.price}</p>

                    {/* Quantity and stock */}
                    <div className='flex items-center justify-between gap-4'>
                        <div class="flex border border-gray-300 rounded-md">
                            <div class=" w-24 flex">
                                <input type="text" value={counter} class="bg-white text-sm text-gray-900 text-center w-full focus:outline-none" />
                            </div>
                            <div class="flex flex-col">
                                <button onClick={() => { setCounter(counter + 1) }} class=" text-center text-md rounded-br-md px-1">
                                    <p className='rotate-90'>&lt;</p>
                                </button>
                                <button onClick={() => { counter && setCounter(counter - 1) }} class=" text-center text-md rounded-br-md px-1">
                                    <p className='rotate-90'>&gt;</p>
                                </button>
                            </div>
                        </div>
                        <p className='flex items-center gap-2'><svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" /></svg>432 in Stock</p>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Product