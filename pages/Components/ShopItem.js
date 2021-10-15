import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'

const ShopItem = ({ id, image, title, price }) => {
    const [displayButton, setDisplayButton] = useState("notdisplayed");
    const [displayPrice, setDisplayPrice] = useState("displayed");

    const showButton = e => {
        e.preventDefault();
        setDisplayPrice('notdisplayed')
        setDisplayButton("displayed");
    }

    const hideButton = e => {
        e.preventDefault();
        setDisplayPrice('displayed')
        setDisplayButton("notdisplayed");
    }

    return (
        <div key={id} className='shadow-sm w-72 h-72  flex flex-col border border-gray-200 rounded p-4 m-2 justify-center items-center' onMouseEnter={e => showButton(e)} onMouseLeave={e => hideButton(e)}>
            <div className='w-full flex items-center justify-center'>
                <Link href={`/shop/${id}`}><a><img src={image} className='w-48 h-48' alt="Picture of the Cloth" /></a></Link>
            </div>
            <div className={`${displayPrice} flex flex-col`}>
                <h1 className=" font-bold text-center">{title}</h1>
                <p className="text-gray-500 text-center cloth-price">${price}</p>
            </div>
            <button className={`${displayButton} btn normal-case btn-info btn-wide cloth-cart`}>Add to cart</button>
        </div>
    )
}

export default ShopItem