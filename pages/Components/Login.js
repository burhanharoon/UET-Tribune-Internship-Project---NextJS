import Image from 'next/image'
import logo from "../images/login.jpg"

export const Login = () => {
    return (
        <div className="w-full h-screen flex" >

            <Image src={logo} alt="Picture of the author" />

            <div className='w-2/3 flex align-center justify-center'>

                <div className="gap-4 flex  w-7/12  flex-col align-center justify-center">

                    <h2>Login to Jobio</h2>

                    <form className="flex gap-4 flex-col align-center justify-center">
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="username" class="input input-info input-bordered" />
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password" class="input input-info input-bordered" />
                        <div className="flex justify-between itemsailwind-center">
                            <label class="cursor-pointer label">
                                <input type="checkbox" class="checkbox" />
                                <span >Remember me</span>
                            </label>
                            <p>Forgot your password?</p>
                        </div>
                        <input type="submit" value="Log In" />
                        <p>Don't have an account? Signup</p>
                    </form>

                </div>

            </div>

        </div>
    )
}
