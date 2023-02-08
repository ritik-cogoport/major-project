import React from 'react'

const Newsletter = () => {
  return (
    <div>
        {/* container  */}
        <div className='bg-gray-50 pt-16 pb-16 gap-12 rounded-2xl pr-10 pl-10'>
            {/* heading  */}
            <div className='pr-4 pl-4 gap-8 flex flex-col items-center'>
                <div className='font-semibold text-3xl text-center text-gray-900'>Sign up for our newsletter</div>
                <div className='font-normal text-lg text-center text-gray-600'>Be the first to know about releases and industry news and insights</div>
            </div>
            {/* email  */}
            <div className='gap-4 flex flex-col items-center justify-center mt-8 md:flex-row'>
                {/* input container  */}
                <div className='gap-1.5 flex flex-col items-start mr-6'>
                <input className='w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="text" placeholder='Enter your email' />
                <div>We care about your data in our privacy policy</div>
                </div>
                <button className='md:h-12 md:-ml-4 md:pt-2 mr-6 ml-6 self-stretch gap-2 pt-3 pb-3 pr-5 pl-5 bg-[#7F56D9] border border-[#7F56D9] rounded-lg font-semibold text-lg leading-8 text-white'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter