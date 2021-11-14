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



        <div class="drawer h-screen">
            <input id="my-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content m-4 rounded-box">
                    <div class="flex-none">
                        <label for="my-drawer" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div class="flex-1 px-2 mx-2">
                        <span class="text-lg font-bold">
                            With two icons
                        </span>
                    </div>
                    <div class="flex-none">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className='p-12 lg:p-0 flex flex-col items-center flex-wrap'>
                    {showError && <Error value={errorValue} />}
                    <div className='h-full p-12 flex flex-col justify-center items-center gap-28 sm:gap-8 w-full'>

                        <div className='flex lg:flex-col flex-wrap w-full items-center justify-between lg:justify-center '>
                            <div>
                                <label className="label"><span className="label-text">10th Marks:</span></label>
                                <div className='flex items-center relative'>
                                    <input type="text" inputmode="numeric" className="input input-lg text-lg input-bordered" value={matricMarks ? matricMarks : ''} onChange={(e) => { handleMatricMarks(e, 1, 1100) }} />
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
                                <div class="stat-value md:text-3xl sm:text-2xl">{aggregate}%</div>
                                <div class="stat-desc">21% more than last month</div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>


            <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li>
                        <a>Menu Item</a>
                    </li>
                    <li>
                        <a>Menu Item</a>
                    </li>
                </ul>
            </div>
        </div>




    )
}

export default Merit