import Image from 'next/image'
import shirt from '../images/cloth1.png';

export const Shop = () => {
    return (
        <div className='h-screen'>

            {/* Shop */}
            <div className='w-full bg-gray-50 flex flex-col gap-1 justify-center items-center h-1/5'>
                <div className='font-bold text-2xl'>Shop</div>
                <div>Home / Shop</div>
            </div>

            <div className='flex flex-row flex-wrap justify-center p-8'>

                <div className='w-72 h-1/6 flex flex-col border border-gray-200 rounded  p-4 justify-center items-center'>
                    <figure className=''>
                        <Image src={shirt} alt="Picture of the author" />
                    </figure>

                    <h1 className='font-bold'>Album</h1>
                    <p className='text-gray-500'>$21.99</p>

                </div>

            </div>
        </div>
    )
}
