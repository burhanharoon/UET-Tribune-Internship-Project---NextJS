import Image from 'next/image'
import logo from "../images/login.jpg"
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {
    const [candidate, setCandidate] = useState(false)
    const [employer, setEmployer] = useState(false)

    const candidateHandler = () => {
        setCandidate(true)
        setEmployer(false)
    }

    const employerHandler = () => {
        setCandidate(false)
        setEmployer(true)
    }
    return (
        <div className="w-full flex sm:p-4 h-screen">

            <Link href='/'>
                <a>
                    <h1 className='absolute z-10 mb-4 flex md:hidden gap-2 items-center p-8 text-white sm:text-black text-2xl'>
                        <img src="./logo.jpg" alt="logo" className='w-10 rounded-xl ' />
                        <p>Superio</p>
                    </h1>
                </a>
            </Link>
            <figure className="flex z-0 md:hidden">
                <Image src={logo} alt="Picture of the author" />
            </figure>

            <div className='w-2/3 flex flex-col h-screen py-4 md:gap-4 md:w-full'>

                <div className='flex justify-end md:justify-between mr-8 sm:m-0 mt-4'>
                    <Link href='/'>
                        <a>
                            <h1 className='hidden md:flex gap-2 items-center justify-center text-white md:text-black text-2xl'>
                                <img src="./logo.jpg" alt="logo" className='w-10 rounded-xl ' />
                                <p>Superio</p>
                            </h1>
                        </a>
                    </Link>
                    <Link href='/login'><button className="btn btn-outline btn-primary">Login / Register</button></Link>
                </div>

                <div className='flex flex-col align-center justify-center gap-4 h-full p-0 pr-28 pl-28  xl:p-12 sm:p-0'>

                    <h1 className='font-bold text-2xl sm:text-center'>Create a Free Jobio Account</h1>
                    <div className='flex justify-between sm:flex-col gap-2'>

                        <button onClick={candidateHandler} className={candidate ? "btn  sm:w-full w-1/2 text-xs border-none bg-accent btn-success mr-2" : "btn w-1/2 sm:w-full text-xs border-none gap-2 bg-gray-100 text-green-600 hover:bg-green-50"}>
                            <span> Candidate</span>
                        </button>

                        <button onClick={employerHandler} className={employer ? "btn sm:w-full w-1/2 text-xs border-none bg-accent btn-success ml-2" : "btn w-1/2 sm:w-full text-xs border-none gap-2 bg-gray-100 text-green-600 hover:bg-green-50"} >
                            <span> Employer</span>
                        </button>
                    </div>

                    <form className="flex gap-4 flex-col align-center justify-center">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" placeholder="email" className="input input-info input-bordered" />
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password" placeholder="password" className="input input-info input-bordered" />
                        <button className="btn btn-block btn-info">Register</button>
                    </form>

                    <div className='flex justify-between sm:flex-col sm:gap-4'>

                        <button className="btn sm:w-full w-1/2 text-xs btn-outline btn-primary gap-2 mr-2">
                            <svg className="h-5 text-blue-500" viewBox="0 0 24 24" fill="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            <span> Log in via Facebook</span>
                        </button>

                        <button className="btn w-1/2 sm:w-full text-xs btn-outline gap-2 btn-secondary">
                            <svg className="h-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                            <span> Login via Google+</span>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login