import Image from 'next/image'
import logo from "../images/login.jpg"

export const Login = () => {
    return (
        <div className="w-full h-screen flex" >

            <Image src={logo} alt="Picture of the author" />

            <div className='w-2/3 flex align-center justify-center'>

                <div className="gap-4 flex flex-col align-center justify-center">
                    
                    <h2>Login to Jobio</h2>

                    <form className="flex gap-4 flex-col align-center justify-center">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password" />
                        <div className="flex justify-between">
                            <p>Remember Me</p>
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
