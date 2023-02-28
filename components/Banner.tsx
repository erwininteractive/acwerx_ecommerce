export default function Banner() {
    return (
        <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'>
            <div>
                <h2 className='text-7xl'>Fantastic Stuffs</h2>
                <h3 className='mt-5 md:mt-0'>...and where to buy them</h3>
            </div>
            <p className='mt-5 md:mt-2 text-gray-500 max-w-sm'>
                this is where some interesting text would go!
            </p>
        </div>
    )
}
