import React from 'react'

const Testimonials = () => {
    return (
        <div className='testimonial  text-white p-16 pl-12 pr-12 sm:pl-2 sm:pr-2 flex items-center justify-center'>
            <div className='lg:w-full flex items-center justify-center gap-12 flex-col w-6/12 '>
                <div className='flex gap-2 text-center items-center justify-center flex-col'>
                    <h1 className='text-2xl font-bold'>Testimonials From Our Customers</h1>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className='flex gap-4 text-center items-center justify-center flex-col'>
                    <h2 className='font-bold'>Great quality!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci, dolores explicabo vel quisquam, eum eaque minus repudiandae, illo libero assumenda accusantium harum! Nihil nulla veniam labore ut rerum cumque.</p>
                </div>
                <div className='flex gap-2 text-center items-center justify-center flex-col'>
                    <img src='./candidates/candidate-1.jpg' alt="logo" className=' rounded-full w-16 border-4 border-white' />
                    <h1>Gabriel Nolan</h1>
                    <p className='text-xs'>Consultant</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials