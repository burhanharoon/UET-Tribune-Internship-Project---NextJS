import React from 'react'
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa'

const TopJobs = () => {
    return (
        <div className='grid grid-cols-2 p-12 lg:grid-cols-none gap-12 border-b-2'>
            <div className='flex justify-center items-center'>
                <img src="./top_jobs_img.jpg" alt="Girl Working" className='rounded-lg md:w-full' />
            </div>
            <div className='flex flex-col gap-4 justify-center'>
                <h1 className='font-bold text-2xl'>Top Jobs For You</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse perferendis ea ab maxime nesciunt alias magni eum! </p>
                <div className='flex flex-col gap-4'>
                    <div className='shadow border border-gray-100 rounded-xl'>
                        <div className='flex hover:border-l-2 hover:pl-3 hover:border-red-500 hover:bg-blue-50 p-4 gap-4 items-center'>
                            <img src="https://www.thebalancesmb.com/thmb/HCk--ysUcmvGXuMp5gtRdfbhK9s=/800x780/filters:no_upscale():max_bytes(150000):strip_icc()/Adobe_illustrator-c95bd1da899349bca8ea9cf4df937d1e.jpg" alt="logo" className=' w-16' />
                            <div className='flex flex-col gap-1 lg:gap-2 w-full'>
                                <h1 className='font-bold'>Software Engineer</h1>
                                <div className='flex flex-row lg:flex-col gap-4 lg:gap-2 text-gray-500 text-sm'>
                                    <p className='flex items-center gap-2'><FaBriefcase /> Segment</p>
                                    <p className='flex items-center gap-2'> <FaMapMarkerAlt /> London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow border border-gray-100 rounded-xl'>
                        <div className='flex  hover:border-l-2 hover:pl-3 hover:border-red-500 hover:bg-blue-50 p-4 gap-4 items-center'>
                            <img src="data:image/png;base64,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" alt="logo" className=' w-16' />
                            <div className='flex flex-col gap-1 lg:gap-2 w-full'>
                                <h1 className='font-bold'>Software Engineer</h1>
                                <div className='flex flex-row lg:flex-col gap-4 lg:gap-2 text-gray-500 text-sm'>
                                    <p className='flex items-center gap-2'><FaBriefcase /> Segment</p>
                                    <p className='flex items-center gap-2'> <FaMapMarkerAlt /> London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow border border-gray-100 rounded-xl'>
                        <div className='flex hover:border-l-2 hover:pl-3 hover:border-red-500 hover:bg-blue-50 p-4 gap-4 items-center'>
                            <img src="https://www.saashub.com/images/app/service_logos/125/jyd3pirbz4w1/large.png?1579340184" alt="logo" className=' w-16' />
                            <div className='flex flex-col gap-1 lg:gap-2 w-full'>
                                <h1 className='font-bold'>Software Engineer</h1>
                                <div className='flex flex-row lg:flex-col gap-4 lg:gap-2 text-gray-500 text-sm'>
                                    <p className='flex items-center gap-2'><FaBriefcase /> Segment</p>
                                    <p className='flex items-center gap-2'> <FaMapMarkerAlt /> London, UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopJobs