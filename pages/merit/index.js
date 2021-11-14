import { useEffect, useState } from "react"
import Error from "../Components/Error"

const Merit = () => {
    const [matricMarks, setMatricMarks] = useState(0)
    const [firstYearMarks, setFirstYearMarks] = useState(0)
    const [ecatMarks, setEcatMarks] = useState(0)
    const [aggregate, setAggregate] = useState(0)
    const [showError, setShowError] = useState(false)
    const [errorValue, setErrorValue] = useState(0)

    const calculateAggregate = () => {
        const x = ((matricMarks / 1100 * 25) + (firstYearMarks / 520 * 45) + (ecatMarks / 400 * 30))
        setAggregate(x)
    }

    const handleMatricMarks = (e, section, totalMarks) => {

        if (e.which === 32) { return false }
        else if (e.target.value <= totalMarks) {
            section == 1 ? setMatricMarks(e.target.value.trim()) : section == 2 ? setFirstYearMarks(e.target.value.trim()) : setEcatMarks(e.target.value.trim())
        } else {
            if (!showError) {
                setErrorValue(totalMarks)
                setShowError(true)
                setTimeout(() => {
                    setShowError(false)
                }, 1000);
            }
        }
    }

    useEffect(() => {
        calculateAggregate()
    }, [matricMarks, firstYearMarks, ecatMarks, aggregate])

    return (
        <div className='h-screen p-12 flex flex-col items-center flex-wrap'>
            {showError && <Error value={errorValue} />}

            <div className='h-full p-12 flex flex-col justify-center items-center gap-28 w-full'>

                <div className='flex flex-wrap w-full justify-between '>
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


                <div class="shadow stats">
                    <div class="stat">
                        <div class="stat-title">Your Aggregate is</div>
                        <div class="stat-value">{aggregate}%</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                </div>

                {/* <div className='text-4xl'>
                    <h1>Your Aggregate is: <span className='stat-value'>{aggregate}%</span></h1>
                </div> */}
            </div>


        </div>
    )
}

export default Merit