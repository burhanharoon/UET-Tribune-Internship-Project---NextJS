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
        <div className="w-full h-screen flex" >

            <figure className="flex md:hidden">
                <Image src={logo} alt="Picture of the author" />

            </figure>

            <div className='w-2/3 flex flex-col h-screen py-4 md:w-full'>

                <div className='text-right mr-4'>
                    <Link href='/login'><button class="btn btn-outline btn-primary">Login / Register</button></Link>
                    <button class=" ml-4 btn btn-primary">Job Post</button>
                </div>

                <div className='flex justify-center items-center h-screen'>
                    <div className='flex flex-col align-center justify-center gap-4 '>

                        <h1 className='font-bold text-2xl'>Create a Free Jobio Account</h1>
                        <div className='flex justify-between sm:flex-col sm:gap-4'>

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
                                <svg className="h-5 w- text-blue-500" viewBox="0 0 24 24" fill="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                <span> Log in via Facebook</span>
                            </button>

                            <button className="btn w-1/2 sm:w-full text-xs btn-outline gap-2 btn-secondary">
                                <svg className="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                                <span> Login via Google+</span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login