import Link from 'next/link'
export const Footer = () => {
    return (
        <div className='footer grid grid-cols-5 md:grid-cols-2 sm:grid-cols-none p-24 lg:p-20  md:p-20 md:pl-4 md:pr-4 sm:p-12  text-white'>
            <div className='flex flex-col gap-2 '>
                <h1 className='mb-4 flex gap-2 items-center font-bold text-2xl'>
                    <img src="./logo.jpg" alt="logo" className='w-12 rounded-2xl ' />
                    <p>Superio</p>
                </h1>
                <p className='text-bold'>Call us</p>
                <address className='text-bold'>123 456 789</address>
                <address>329 Queensberry Street, London</address>
                <address>3051, Australia.</address>
                <Link href='#'>
                    <a><address>support@jobio.com</address></a>
                </Link>
            </div>
            <div className='flex md:hidden flex-col gap-2 '>
                <h1 className='mb-4 font-bold'>For Candidates</h1>
                <Link href='#'><a>Browse Jobs</a></Link>
                <Link href='#'><a>Candidate Dashboard</a></Link>
                <Link href='#'><a>Job Alerts</a></Link>
                <Link href='#'><a>My Bookmarks</a></Link>
            </div>
            <div className='flex md:hidden flex-col gap-2 '>
                <h1 className='mb-4 font-bold'>For Employers</h1>
                <Link href='#'><a>Browse Candidates</a></Link>
                <Link href='#'><a>Employer Dashboard</a></Link>
                <Link href='#'><a>Add Job</a></Link>
                <Link href='#'><a>Job Packages</a></Link>
            </div>
            <div className='flex md:hidden flex-col gap-2 '>
                <h1 className='mb-4 font-bold'>About Us</h1>
                <Link href='#'><a>Job Page</a></Link>
                <Link href='#'><a>Job Page Alternative</a></Link>
                <Link href='#'><a>Resume Page</a></Link>
                <Link href='#'><a>Blog</a></Link>
                <Link href='#'><a>Contact</a></Link>
            </div>
            <div className='flex flex-col gap-2 '>
                <h1 className='mb-4 font-bold'>Join Us On</h1>
                <Link href='#'><a>We dont send spam so don't worry.</a></Link>
                <input type="text" placeholder="Email..." class="input input-bordered" />
            </div>
        </div>
    )
}
