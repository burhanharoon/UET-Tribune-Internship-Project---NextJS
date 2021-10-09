import React from 'react'

export const Stats = () => {
    return (
        <div>
            <div className='grid grid-cols-3 p-12 md:grid-cols-none md:gap-8'>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4'>4M</h1>
                    <p>4 million daily active users</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4'>12K</h1>
                    <p>Over 12k open job positions</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold mb-4'>20M</h1>
                    <p>Over 20 million stories shared</p>
                </div>

            </div>
        </div>
    )
}
