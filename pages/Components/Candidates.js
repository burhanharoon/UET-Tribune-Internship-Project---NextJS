import { FaMapMarkerAlt } from "react-icons/fa";
import { featuredCandidates } from '../api/featuredCandidates';
const Candidates = () => {
    return (
        <div className="border-b-2 p-12 sm:p-4 grid grid-cols-4 lg:grid-cols-2 md:grid-cols-none md:grid-rows-4 gap-8">
            {featuredCandidates.map(candidate =>
                <div key={candidate.id} className="p-4 shadow flex flex-col justify-center gap-4 items-center border border-gray-100">
                    <img src={candidate.image} alt="logo" className=' rounded-full w-24' />
                    <h1 className="font-bold text-xl text-center">{candidate.name}</h1>
                    <h1 className="text-sm font-bold text-center">{candidate.job}</h1>
                    <p className='flex items-center text-sm text-center gap-2'> <FaMapMarkerAlt /> {candidate.location}</p>
                    <button className="flex btn border-none btn-wide hover:bg-red-800 normal-case bg-red-200 text-red-700 hover:text-white">View Profile</button>
                </div>
            )}
        </div>
    )
}
export default Candidates