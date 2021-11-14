import { useState } from "react"
import Error from "../Components/Error"

const Merit = () => {
    const [matricMarks, setMatricMarks] = useState(0)
    const [showError, setShowError] = useState(false)
    const [errorValue, setErrorValue] = useState(0)

    const handleShowError = () => {

    }
    // [0-9]+[0-9][0-9]+[0-9][0-9][0-9]+[1][0-9][0-9][0-9]/  const regex = new RegExp([0 - 9] + [0 - 9][0 - 9] + [0 - 9][0 - 9][0 - 9] + [1][0 - 9][0 - 9][0 - 9])
    const handleMatricMarks = (e) => {
        // matricMarks <= 1100 ? setMatricMarks(e.target.value) : setTimeout(() => {
        //     setErrorValue(1100)
        //     setShowError(true)
        // }, 100); setShowError(false);
        console.log(/^([a-z0-9]{5,})$/.test(e.target.value))
        // if (/^([a-z0-9]{5,})$/.test(e.target.value)) {
        //     setMatricMarks(e.target.value)
        // }
    }
    return (
        <div className='h-screen relative p-12 flex justify-between items-center flex-wrap sm:flex-col'>
            {showError && <Error value={errorValue} />}
            <div>
                <label class="label"><span class="label-text">10th Marks:</span></label>
                <div className='flex items-center relative'>
                    <input type="text" class="input h-16 w-60 text-lg pr-20 input-bordered" value={matricMarks ? matricMarks : ''} onChange={(e) => { handleMatricMarks(e) }} />
                    <p className='absolute right-4 text-lg font-light'>/ 1100</p>
                </div>
            </div>
            <div>
                <label class="label">
                    <span class="label-text">1st Year Marks:</span>
                </label>
                <div className='flex items-center relative'>
                    <input type="text" class="input h-16 w-60 text-lg pr-20 input-bordered" />
                    <p className='absolute right-4 text-lg font-light'>/ 520</p>
                </div>
            </div>
            <div>
                <label class="label">
                    <span class="label-text">Entry Test Marks:</span>
                </label>
                <div className='flex items-center relative'>
                    <input type="text" class="input h-16 w-60 text-lg pr-20 input-bordered" />
                    <p className='absolute right-4 text-lg font-light'>/ 400</p>
                </div>
            </div>
        </div >
    )
}

export default Merit