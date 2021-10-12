import { FaBriefcase, FaClock, FaMapMarkedAlt, FaMapMarker, FaMapMarkerAlt, FaMoneyBill } from 'react-icons/fa';
import { jobs } from '../api/jobs';

const Jobs = () => {
    const length = jobs.length
    return (
        <div className=' border-b-2 p-12 grid grid-cols-4 lg:gap-16 lg:grid-cols-none lg:grid-rows-1'>
            <div className="col-span-3 lg:col-auto gap-4 grid pr-12 lg:p-0">
                <h1 className='text-3xl font-extrabold'>Featured Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>
                <div className='shadow border border-gray-100 rounded-xl'>
                    {jobs.map((job, i) => {
                        return (
                            <div key={job.id} className={i + 1 == length ? `flex hover:border-l-2 sm:hover:border-l-0 hover:pl-3 sm:hover:pl-4 hover:border-red-500 sm:hover:border-gray-200 hover:bg-blue-50 sm:hover:bg-transparent p-4 gap-4 items-center` : 'flex border-b hover:border-b-0 sm:hover:border-b hover:border-l-2 sm:hover:border-l-0  hover:pl-3 sm:hover:pl-4 hover:border-red-500 sm:hover:border-gray-200 hover:bg-blue-50 sm:hover:bg-transparent p-4 gap-4 items-center'}>
                                <img src={job.image} alt="logo" className=' rounded-lg w-16 ' />
                                <div className='flex flex-col gap-1 lg:gap-2 w-full'>
                                    <h1 className='font-bold'>{job.title}</h1>
                                    <div className='flex flex-row lg:flex-col gap-4 lg:gap-2 text-gray-500 text-sm'>
                                        <p className='flex items-center gap-2'><FaBriefcase /> {job.software}</p>
                                        <p className='flex items-center gap-2'> <FaMapMarkerAlt /> {job.Location}</p>
                                        <p className='flex items-center gap-2'><FaClock /> {job.timePosted} hours ago</p>
                                        <p className='flex items-center gap-2'><FaMoneyBill /> {job.salary}</p>
                                        <p className="badge text-center badge-info lg:p-0 lg:pr-4 lg:pl-4 xl:p-4"> <span className="text-xs">{job.jobTime}</span></p>
                                        <button className=" hidden sm:flex btn border-none pr-6 pl-6 hover:bg-red-700 normal-case bg-red-200 text-red-800 hover:text-white">Apply Job</button>

                                    </div>
                                </div>
                                <button className="flex sm:hidden btn border-none pr-6 pl-6 hover:bg-red-700 normal-case bg-red-200 text-red-800 hover:text-white">Apply Job</button>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl font-extrabold'>Recent Jobs</h1>
                <p>Know your worth and find the job that qualify your life</p>

                <div className="p-4 shadow flex flex-col justify-center gap-2 items-center border border-gray-100">
                    <p className="badge badge-info pr-4 pl-4"> <span className="text-xs">{jobs[0].jobTime}</span></p>
                    <img src={jobs[0].image} alt="logo" className=' rounded-full w-24' />
                    <h1 className="font-bold text-center">Software Engineer (Android) Java Libraries</h1>
                    <p className='flex items-center gap-2'> <FaMapMarkerAlt /> {jobs[0].Location}</p>
                </div>
                <div className="p-4 shadow flex flex-col justify-center gap-2 items-center border border-gray-100">
                    <p className="badge  badge-info pr-4 pl-4"> <span className="text-xs">{jobs[2].jobTime}</span></p>
                    <img src={jobs[3].image} alt="logo" className=' rounded-full w-24' />
                    <h1 className="font-bold text-center">{jobs[2].title}</h1>
                    <p className='flex items-center gap-2'> <FaMapMarkerAlt /> {jobs[0].Location}</p>
                </div>

            </div>

        </div>
    )
}

export default Jobs