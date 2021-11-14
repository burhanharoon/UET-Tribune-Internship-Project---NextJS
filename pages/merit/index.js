import { useState } from "react"
import Error from "../Components/Error"

const Merit = () => {
    const [matricMarks, setMatricMarks] = useState(0)
    const [firstYearMarks, setFirstYearMarks] = useState(0)
    const [ecatMarks, setEcatMarks] = useState(0)
    const [showError, setShowError] = useState(false)
    const [errorValue, setErrorValue] = useState(0)


    const handleMatricMarks = (e, section, totalMarks) => {

        if (e.which === 32) { return false }
        else if (e.target.value <= totalMarks) {
            section == 1 ? setMatricMarks(e.target.value.trim()) : section == 2 ? setFirstYearMarks(e.target.value.trim()) : setEcatMarks(e.target.value.trim())
        } else {
            setErrorValue(totalMarks)
            setShowError(true)
            setTimeout(() => {
                setShowError(false)
            }, 1000);
        }
    }
    return (
        <div className='h-screen p-12 flex-col justify-between items-center flex-wrap'>
            {showError && <Error value={errorValue} />}

            <div className=' h-4/5 p-12 flex justify-between items-center flex-wrap sm:flex-col'>
                <div>
                    <label className="label"><span className="label-text">10th Marks:</span></label>
                    <div className='flex items-center relative'>
                        <input type="text" pattern="[^\s]+" className="input input-lg text-lg input-bordered" value={matricMarks ? matricMarks : ''} onChange={(e) => { handleMatricMarks(e, 1, 1100) }} />
                        <p className='absolute right-4 text-lg font-light'>/ 1100</p>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">1st Year Marks:</span>
                    </label>
                    <div className='flex items-center relative'>
                        <input type="text" className="input input-lg text-lg input-bordered" value={firstYearMarks ? firstYearMarks : ''} onChange={(e) => { handleMatricMarks(e, 2, 520) }} />
                        <p className='absolute right-4 text-lg font-light'>/ 520</p>
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Entry Test Marks:</span>
                    </label>
                    <div className='flex items-center relative'>
                        <input type="text" className="input input-lg text-lg input-bordered" value={ecatMarks ? ecatMarks : ''} onChange={(e) => { handleMatricMarks(e, 3, 400) }} />
                        <p className='absolute right-4 text-lg font-light'>/ 400</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Merit