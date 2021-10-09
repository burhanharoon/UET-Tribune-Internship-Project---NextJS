import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link'


const ShopNavbar = () => {
    return (
        <div className="flex justify-between items-start p-4 pr-8 pl-8 text-black font-bold">
            <Link href='/'>
                <a>
                    <h1 className='flex gap-2 items-center text-2xl'>
                        <img src="/logo.jpg" alt="logo" className='w-10 rounded-xl ' />
                        <p>Superio</p>
                    </h1>
                </a>
            </Link>
            <div className="flex justify-between items-center sm:hidden gap-12">
                <Link href="/"><a className='link link--metis'>Home</a></Link>
                <Link href="/shop"><a className='link link--metis'>Shop</a></Link>
                <Link href="/shop/1"><a className='link link--metis'>Shop Item</a></Link>
                <Link href='/login'><button className="btn  border-blue-100 bg-blue-100 hover:bg-white hover:border-blue-100 btn-primary"><span className='text-indigo-500 pl-4 pr-4'>Login </span></button></Link>
                <Link href='/login'><button className="btn border-blue-100 bg-blue-100 hover:bg-white hover:border-blue-100 btn-primary"><span className='text-indigo-500 pl-4 pr-4'>Register </span></button></Link>

            </div>

            {/* For Smaller Screens */}
            <div className="dropdown dropdown-hover hidden relative sm:flex justify-center items-center">
                <Link tabIndex="0" href="/"><a className='hidden sm:flex gap-2 pt-2 items-center'>Home <FaChevronDown /></a></Link>
                <ul tabIndex="0" className="p-2 text-black shadow menu dropdown-content bg-base-100 rounded-box w-52 absolute right-0 top-6">
                    <li>
                        <Link href="/shop"><a className='flex gap-2 items-center'>Shop</a></Link>
                    </li>
                    <li>
                        <Link href="/shop/1"><a className='flex gap-2 items-center'>Shop Item</a></Link>
                    </li>
                    <li>
                        <Link href="/login"><a className='flex gap-2 items-center'>Login</a></Link>
                        <Link href="/register"><a className='flex gap-2 items-center'>Register</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ShopNavbar