
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <div className='h-screen w-full grid grid-rows-3 p-8'>
            <div className="flex justify-between">
                <p>Superio</p>
                <div className="flex justify-between gap-4">
                    <p>Home</p>
                    <p>Find Jobs</p>
                    <p>Employers</p>
                    <p>Candidates</p>
                    <p>Blog</p>
                    <p>Pages</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center gap-12'>
                <h1>Your Dream Job is Waiting</h1>
                <div className='flex flex-row justify-center items-center gap-4'>
                    <div className='flex items-center gap-1 pr-2 border-r-2'>
                        < FaSearch />
                        <p>Job title, keywords, or company</p>
                    </div>
                    <div className='flex items-center gap-1 pr-2 border-r-2'>
                        <FaMapMarkerAlt />
                        <p>City or postcode</p>
                    </div>
                    <div className='flex items-center gap-2 pr-2 border-r-2'>
                        <FaBriefcase />
                        <p>All Categories</p>
                    </div>
                    <div>
                        <button className="btn bg-red-600">Find Jobs</button>

                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                sds
            </div>
        </div>
    )
}
