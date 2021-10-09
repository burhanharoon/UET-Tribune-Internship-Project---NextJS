
import { FaBullhorn, FaChevronDown, FaCoins, FaPenNib, FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className='main text-white h-screen grid p-8 sm:p-4'>
            <div className="flex justify-between items-start">
                <h1 className='mb-4 flex gap-2 items-center text-2xl'>
                    <img src="./logo.jpg" alt="logo" className='w-10 rounded-xl ' />
                    <p>Superio</p>
                </h1>
                <div className="flex justify-between items-center sm:hidden gap-8">
                    <Link href="/"><a className='flex gap-2 items-center'>Home <FaChevronDown /></a></Link>
                    <Link href="/shop"><a className='flex gap-2 items-center'>Shop <FaChevronDown /></a></Link>
                    <Link href="/shop/1"><a className='flex gap-2 items-center'>Shop Item <FaChevronDown /></a></Link>
                    <Link href='/login'><button class="btn border-gray-100 bg-transparent hover:bg-white btn-primary"><span className='text-white hover:text-black'>Login </span></button></Link>
                    <Link href='/register'><button class="btn border-gray-100 bg-transparent hover:bg-white btn-primary"><span className='text-white hover:text-black'>Register</span></button></Link>
                </div>
                {/* For Smaller Screens */}
                <Link href="/"><a className='hidden sm:flex gap-2 items-center'>Home <FaChevronDown /></a></Link>
            </div>

            <div className='flex flex-col items-center gap-12'>
                <h1 className="text-3xl text-center font-bold tracking-wider">Your Dream Job is Waiting</h1>

                <div className='bg-white text-gray-600 p-4 rounded-lg flex flex-row sm:flex-col justify-center items-center gap-4'>
                    <div className='flex items-center gap-2 pr-2 border-r-2 md:border-none'>
                        < FaSearch />
                        <input type="text" placeholder="Job title, keywords, or company" class="input focus:shadow-none" />
                    </div>
                    <div className='flex lg:hidden items-center gap-2 pr-2 border-r-2'>
                        <FaMapMarkerAlt />
                        <input type="text" placeholder="City or postcode" class="input focus:shadow-none" />
                    </div>
                    <div className='flex lg:hidden items-center gap-2 pr-2'>
                        <FaBriefcase />
                        <input type="text" placeholder="All Categories" class="input focus:shadow-none" />
                    </div>
                    <div>
                        <button className="btn border-none pr-6 pl-6 hover:bg-red-700  bg-red-600">Find Jobs</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-center gap-32 lg:gap-4 items-center'>
                <div className='flex flex-col gap-1 items-center text-center justify-center'>
                    <FaCoins />
                    <h1 className="font-bold">Accounting </h1>
                    <p className="sm:text-xs">(2 open positions)</p>
                </div>
                <div className='flex flex-col gap-1 items-center text-center justify-center'>
                    <FaBullhorn />
                    <h1 className="font-bold">Marketing</h1>
                    <p className="sm:text-xs">(2 open positions)</p>
                </div>
                <div className='flex flex-col gap-1 items-center text-center justify-center'>
                    <FaPenNib />
                    <h1 className="font-bold">Design</h1>
                    <p className="sm:text-xs">(2 open positions)</p>
                </div>
            </div>
        </div>
    )
}
