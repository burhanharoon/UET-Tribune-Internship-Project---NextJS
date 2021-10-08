
import { FaBullhorn, FaChevronDown, FaCoins, FaPenNib, FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className='main text-white w-full h-screen grid grid-rows-3 p-8'>
            <div className="flex justify-between items-center w-full h-10">
                <p className='text-2xl'>Superio</p>
                <div className="flex justify-between gap-8">
                    <Link href="/"><a className='flex gap-2 items-center'>Home <FaChevronDown /></a></Link>
                    <Link href="/"><a className='flex gap-2 items-center'>Find Jobs <FaChevronDown /></a></Link>
                    <Link href="/"><a className='flex gap-2 items-center'>Employers <FaChevronDown /></a></Link>
                    <Link href="/"><a className='flex gap-2 items-center'>Candidates <FaChevronDown /></a></Link>
                    <Link href="/"><a className='flex gap-2 items-center'>Blog <FaChevronDown /></a></Link>
                    <Link href="/"><a className='flex gap-2 items-center'>Pages <FaChevronDown /></a></Link>
                    <Link href='/register'><button class="btn border-gray-100 bg-transparent hover:bg-white btn-primary"><span className='text-white hover:text-black'>Login / Register</span></button></Link>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-12'>
                <h1 className="text-3xl font-bold tracking-wider">Your Dream Job is Waiting</h1>

                <div className=' bg-white text-gray-600  p-4 rounded-lg flex flex-row justify-center items-center gap-4'>
                    <div className='flex items-center gap-2 pr-2 border-r-2'>
                        < FaSearch />
                        <input type="text" placeholder="Job title, keywords, or company" class="input" />
                    </div>
                    <div className='flex items-center gap-2 pr-2 border-r-2'>
                        <FaMapMarkerAlt />
                        <input type="text" placeholder="City or postcode" class="input" />
                    </div>
                    <div className='flex items-center gap-2 pr-2'>
                        <FaBriefcase />
                        <input type="text" placeholder="All Categories" class="input" />
                    </div>
                    <div>
                        <button className="btn border-none pr-6 pl-6 hover:bg-red-700  bg-red-600">Find Jobs</button>

                    </div>
                </div>
            </div>

            <div className='flex justify-center gap-20 items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <FaCoins />
                    <h1>Accounting / Finance</h1>
                    <p>(2 open positions)</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <FaBullhorn />
                    <h1>Marketing</h1>
                    <p>(2 open positions)</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <FaPenNib />
                    <h1>Design</h1>
                    <p>(2 open positions)</p>
                </div>
            </div>
        </div>
    )
}
