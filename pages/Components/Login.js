import Image from 'next/image'
import logo from "../images/login.jpg"

export const Login = () => {
    return (
        <div className="w-full h-screen flex" >

            <figure className="flex md:hidden">
                <Image src={logo} alt="Picture of the author" />

            </figure>

            <div className='w-2/3 flex align-center justify-center md:w-full'>

                <div className="gap-4 flex  w-7/12 flex-col align-center justify-center">

                    <h1 className='font-bold text-2xl'>Login to Jobio</h1>

                    <form className="flex gap-4 flex-col align-center justify-center">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="username" class="input input-info input-bordered" />
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password" placeholder="password" class="input input-info input-bordered" />
                        <div className="flex justify-between items-center sm:w-full">
                            <label class="cursor-pointer label flex gap-2 ">
                                <input type="checkbox" class="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <p className='font-bold sm:text-right'>Forgot your password?</p>
                        </div>
                        <button class="btn btn-block btn-info">LogIn</button>
                        <p className="flex justify-center">Don't have an account? Signup</p>
                    </form>

                    <div className='flex justify-between sm:flex-col sm:gap-4'>

                        <button class="btn sm:w-full w-1/2 text-xs btn-outline btn-primary gap-2 mr-2">
                            <svg class="h-5 w- text-blue-500" viewBox="0 0 24 24" fill="blue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            <span> Log in via Facebook</span>
                        </button>

                        <button class="btn w-1/2 sm:w-full text-xs btn-outline gap-2 btn-secondary">
                            <svg class="h-5 w-5 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M17.788 5.108A9 9 0 1021 12h-8" /></svg>
                            <span> Login via Google+</span>
                        </button>
                    </div>


                </div>

            </div>

        </div>
    )
}
