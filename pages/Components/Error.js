const Error = ({ value }) => {
    return (
        <div className='flex justify-center items-center absolute top-8 w-full'>

            <div class="alert alert-error">
                <div class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-6 h-6 mx-2 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                    </svg>
                    <label>Please enter a value less than or equal to {value}</label>
                </div>
            </div>

        </div>
    )

}

export default Error