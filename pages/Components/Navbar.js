import { FaBullhorn, FaChevronDown, FaCoins, FaCross, FaPenNib, FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {

    const [jobTitle, setJobTitle] = useState('')
    const [cityName, setCityName] = useState('')
    const [category, setCategory] = useState('')

    return (
        <div className='main text-white h-screen grid p-8 sm:p-4'>

            <div className="flex justify-between items-start sm:items-center sm:h-2/5">
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
                    <Link href="/shop/1"><a className='link link--metis '>Shop Item</a></Link>
                    <Link href='/login'><button className="btn border-gray-100 bg-transparent hover:bg-white btn-primary"><span className='text-white hover:text-black pl-4 pr-4'>Login </span></button></Link>
                    <Link href='/register'><button className="btn border-gray-100 bg-transparent hover:bg-white btn-primary"><span className='text-white hover:text-black pl-4 pr-4'>Register</span></button></Link>
                </div>

                {/* For Smaller Screens */}
                <div className="dropdown dropdown-hover hidden relative gap-4 sm:flex items-center">
                    <Link tabIndex="0" href="/"><a>Home</a></Link>
                    <p> <FaChevronDown /></p>

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

            <div className='flex flex-col items-center gap-12'>
                <h1 className="text-3xl text-center font-bold tracking-wider">Your Dream Job is Waiting</h1>

                <div className='bg-white text-gray-600 p-4 rounded-lg flex flex-row sm:flex-col justify-center items-center gap-4'>
                    <div className='flex items-center gap-2 pr-2 border-r-2 md:border-none relative'>
                        <FaSearch />
                        <input type="text" placeholder="Job title, keywords, or company" className="input focus:shadow-none" value={jobTitle} onChange={(e) => { setJobTitle(e.target.value) }} />
                        {jobTitle && <p className='absolute cursor-pointer right-3 hover:bg-red-600 w-6 text-lg h-6 flex items-center justify-center rounded-full hover:text-white' onClick={() => { setJobTitle('') }} >×</p>}
                    </div>
                    <div className='flex lg:hidden items-center gap-2 pr-2 border-r-2 relative'>
                        <FaMapMarkerAlt />
                        <input type="text" placeholder="City or postcode" className="input focus:shadow-none" value={cityName} onChange={(e) => { setCityName(e.target.value) }} />
                        {cityName && <p className='absolute cursor-pointer right-3 hover:bg-red-600 w-6 text-lg h-6 flex items-center justify-center rounded-full hover:text-white' onClick={() => { setCityName('') }} >×</p>}
                    </div>
                    <div className='flex lg:hidden items-center gap-2 pr-2 relative'>
                        <FaBriefcase />
                        <input type="text" placeholder="All Categories" className="input focus:shadow-none" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                        {category && <p className='absolute cursor-pointer right-0 hover:bg-red-600 w-6 text-lg h-6 flex items-center justify-center rounded-full hover:text-white' onClick={() => { setCategory('') }} >×</p>}
                    </div>
                    <div>
                        <button type='submit' className="btn border-none pr-6 pl-6 hover:bg-red-700 capitalize bg-red-600">Find Jobs</button>
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
        </div >
    )
}

export default Navbar