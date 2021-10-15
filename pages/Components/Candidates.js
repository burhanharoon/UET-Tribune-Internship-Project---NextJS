import Link from 'next/link'
import { FaGreaterThan, FaMapMarkerAlt } from "react-icons/fa";
import { featuredCandidates } from '../api/featuredCandidates';
const Candidates = () => {
    return (
        <div className='p-12 grid gap-2'>
            <h1 className='text-2xl font-bold'>Featured Candidates</h1>
            <div className='flex sm:flex-col mb-4 justify-between items-center md:items-start gap-2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Link href='#'><a className='flex items-center gap-1 text-blue-600'>Browse All<FaGreaterThan /></a></Link>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-none gap-8">
                {featuredCandidates.map(candidate =>
                    <div key={candidate.id} className="p-4 shadow-sm hover:shadow-md rounded-md flex flex-col justify-center gap-4 items-center border border-gray-100">
                        <img src={candidate.image} alt="logo" className=' rounded-full w-24' />
                        <h1 className="font-bold text-xl text-center">{candidate.name}</h1>
                        <h1 className="text-sm font-bold text-center">{candidate.job}</h1>
                        <p className='flex items-center text-sm text-center gap-2'> <FaMapMarkerAlt /> {candidate.location}</p>
                        <button className="flex btn border-none btn-wide hover:bg-red-800 normal-case bg-red-200 text-red-800 hover:text-white">View Profile</button>
                    </div>
                )}
            </div>

        </div>
    )
}
export default Candidates