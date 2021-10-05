import Image from 'next/image'
import shirt from '../images/shirt.png';

export const Shop = () => {
    return (
        <div className='h-screen'>

            {/* Shop */}
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center items-center h-1/5'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div>

                <div className='w-3/12 h-1/5 flex flex-col justify-center items-center'>
                    <figure className=' h-3/5'>
                        <Image src={shirt} alt="Picture of the author" />
                    </figure>
                    <h1>Album</h1>
                    <p>$21.99</p>
                </div>

            </div>
        </div>
    )
}
