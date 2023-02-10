import React from 'react'

function JobCard() {
    return (
        <div className='border p-6 rounded-xl bg-white shadow-sm  hover:border-gray-400 cursor-pointer h-fit'>
            <h1 className='text-md font-semibold text-gray-900 w-auto'>Software Developer </h1>

            <div className='flex flex-row gap-4  items-center my-2'>
                <h4 className='text-sm font-normal  text-gray-500'>Abc pvt ltd</h4>
                <h4 className='text-sm font-normal  text-gray-500 border-l-2 pl-4 border-gray-300 w-auto '>Mangalore , India </h4>

            </div>
            <div className='flex justify-between items-center mb-3'>
                <h4 className='text-md font-semibold  text-stone-800'>$12k - $20k</h4>

            </div>

            
            <div className='flex items-end justify-start gap-4'>
                <button className='bg-rose-500 text-sm p-2 px-5 text-white font-normal rounded-md hover:bg-rose-700'>Apply now </button>

            </div>
        </div>
    )
}

export default JobCard