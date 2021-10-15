import React from 'react'

const RegisterCards = () => {
    return (
        <div className='grid grid-cols-2 place-content-center sm:grid-cols-none p-12 gap-6'>

            <div className='bg-gray-400 rounded-md text-white flex flex-col items-start p-12 gap-4'>
                <h1 className='text-xl font-bold'>Employers</h1>
                <p>Sit amet, consectetur adipisicing elit. Omnis sint, aperiam suscipit, fuga aliquid fugiat vero molestiae ex praesentium debitis maxime.</p>
                <button className='btn bg-white hover:bg-gray-800 hover:text-white text-black font-bold capitalize btn-wide border-none'> Register Account</button>
            </div>
            <div className='bg-red-400 rounded-md text-white flex flex-col items-start p-12 gap-4'>
                <h1 className='text-xl font-bold'>Candidate</h1>
                <p>Sit amet, consectetur adipisicing elit. Omnis sint, aperiam suscipit, fuga aliquid fugiat vero molestiae ex praesentium debitis maxime.</p>
                <button className='btn bg-white hover:bg-red-800 hover:text-white text-red-500 font-bold capitalize btn-wide border-none'> Register Account</button>
            </div>

        </div>
    )
}

export default RegisterCards
