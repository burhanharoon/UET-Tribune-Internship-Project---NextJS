import Head from 'next/head'
import { getAllClothtIds, getClothData } from '../api/cloths'
import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaShoppingBag } from 'react-icons/fa'
import ShopNavbar from '../Components/ShopNavbar'

export default function Product({ cloth }) {

    const [counter, setCounter] = useState(0)
    const [showDescription, setshowDescription] = useState(true)
    const [showReviews, setShowReviews] = useState(false)
    const handleDescription = () => {
        setshowDescription(true)
        setShowReviews(false)
    }
    const handleReviews = () => {
        setshowDescription(false)
        setShowReviews(true)
    }
    const date = new Date()

    return (

        <div>
            <Head>
                <title>{cloth.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ShopNavbar />
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center shadow-inner items-center h-40'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-none gap-8 p-12 sm:p-4'>

                <figure className='shadow flex justify-center p-16'>
                    <img src={cloth.image} alt="Cloth Picture" width='300px' height='300px' />

                </figure>

                <div className='w-full flex flex-col gap-4'>
                    <h1 className='font-bold text-4xl'>{cloth.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusantium blanditiis nam animi, aliquam ipsa architecto exercitationem ipsam voluptatum temporibus odio, cum quasi, quia illo voluptate neque necessitatibus commodi vitae.</p>
                    <p className='stat-value text-2xl'>${cloth.price}</p>

                    {/* Quantity and stock */}
                    <div className='flex items-center gap-12'>
                        <div className="flex justify-center items-center border border-gray-300 rounded-md w-1/3 p-1">
                            <div className="flex">
                                <input type="text" readOnly value={counter} className="bg-white text-gray-900 text-center w-full focus:outline-none" />
                            </div>
                            <div className="flex flex-col gap-4 text-sm">
                                <button onClick={() => { setCounter(counter + 1) }} className=" text-center text-md rounded-br-md px-1">
                                    <FaChevronUp />                                </button>
                                <button onClick={() => { counter && setCounter(counter - 1) }} className=" text-center text-md rounded-br-md px-1">
                                    <FaChevronDown />
                                </button>
                            </div>
                        </div>
                        <p className='flex items-center gap-2'><svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-32.1 281.7c-2.4 2.4-5.8 4.4-8.8 4.4s-6.4-2.1-8.9-4.5l-56-56 17.8-17.8 47.2 47.2L340 177.3l17.5 18.1-133.6 134.3z" /></svg>432 in Stock</p>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center'>
                        <button className="btn btn-primary btn-wide normal-case btn-lg rounded-md"><FaShoppingBag /> <span className='ml-2'>Add to cart</span></button>
                    </div>
                    <div className='grid grid-rows-3 w-1/2 md:w-full'>
                        <div className='grid grid-cols-2'>
                            <p>Sku:</p>
                            <p>RTA-0058</p>
                        </div>

                        <div className='grid grid-cols-2'>
                            <p>Category:</p>
                            <p>Book</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p>Tags:</p>
                            <p>Business / SEO</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description and Reviews */}

            <div className='flex flex-col items-center p-12'>
                <div className='flex justify-center items-center mb-8 gap-8'>
                    <p onClick={handleDescription} className={showDescription ? 'text-indigo-500 text-lg font-bold  border-b-2 border-indigo-300 cursor-pointer' : 'text-lg font-bold text-center cursor-pointer'}>
                        Description
                    </p>
                    <p onClick={handleReviews} className={showReviews ? 'text-indigo-500 text-lg font-bold  border-b-2 border-indigo-300 cursor-pointer' : 'text-lg font-bold text-center cursor-pointer'}>
                        Reviews (2)
                    </p>
                </div>
                <div className={showDescription ? 'flex flex-col w-1/2 md:w-full gap-6' : 'hidden'}>
                    <h1 className='text-xl font-bold'>Details</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta suscipit optio corrupti itaque accusamus ipsam, consequatur, animi, quos sit eveniet! Consequuntur aperiam ipsam necessitatibus molestiae sunt at. In, eos!</p>
                    <h1 className='text-xl font-bold'>Material and care</h1>
                    <div className='pl-4 text-sm'>
                        <ul className='list-disc grid grid-rows-3 gap-4 grid-cols-2 sm:grid-cols-none'>
                            <li><p>Main: 100% Cotton</p></li>
                            <li><p>One size fits all</p></li>
                            <li><p>Soft twill</p></li>
                            <li><p>Imported</p></li>
                            <li><p>Ribbed, diagonal pattern</p></li>
                            <li><p>Product color: Dark greenish</p></li>
                        </ul>
                    </div>
                </div>
                <div className={showReviews ? 'flex flex-col w-1/2 md:w-full gap-6' : "hidden"}>
                    <div className='shadow p-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>Burhan Haroon</h1>
                            <p className='text-sm'>{date.toDateString()}</p>
                        </div>
                        <p>"Gotta say. The product is amazing. Loved buying it. Highly Recomended."</p>
                    </div>
                    <div className='shadow p-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>Walter White</h1>
                            <p className='text-sm'>{date.toDateString()}</p>
                        </div>
                        <p>"hehe."</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllClothtIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const cloth = getClothData(params.id)
    return {
        props: {
            cloth
        }
    }
}