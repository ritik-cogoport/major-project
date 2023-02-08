import React from 'react'
import icon from '../assets/navbar-icon.svg'
import navHeading from '../assets/navbar-heading.svg'
const Tnc = () => {
  return (
    // conatiner 
    <div className='flex flex-col w-full justify-center self-stretch '>
        {/* iphone image  */}
        <div></div>
        {/* policies  */}
        <div className='flex flex-col items-start pt-12 pb-12 gap-12 bg-gray-800 w-full pr-2 pl-2 md:pr-8 md:pl-8'>
            {/* container  */}
            <div className='w-full md:flex '>
                {/* settings  */}
            <div className='flex flex-col items-start justify-start pr-4 pl-4 gap-8 w-full'>
                <div className='flex items-center justify-start'>
                <img src={icon} alt="" className='mr-3' />
                 <img src={navHeading} alt="" className='text-white' />
                </div>
                {/* <div className='flex items-center justify-center w-full'> */}
                <div className='flex items-center justify-start gap-32 w-full'>
                    <div className='flex flex-col gap-4 w-50%'>
                        <span className='font-semibold text-lg text-gray-200'>Overview</span>
                        <span className='font-semibold text-lg text-gray-200'>Features</span>
                        <span className='font-semibold text-lg text-gray-200'>Pricing</span>
                    </div>
                    <div className='flex flex-col self-end gap-4 w-50%'>
                        <span className='font-semibold text-lg text-gray-200'>Careers</span>
                        <span className='font-semibold text-lg text-gray-200'>Help</span>
                        <span className='font-semibold text-lg text-gray-200'>Contact Us</span>
                    </div>
                {/* </div> */}
                </div>
                
            </div>
            {/* email  */}
            <div className='flex flex-col items-start pr-4 pl-4 gap-8 w-full'>
                <div className='font-semibold text-base text-white'>Stay up to date</div>
                {/* email container  */}
                {/* <div className='flex flex-col gap-4'></div> */}
                <div className='gap-4 flex flex-col items-start w-full md:flex-row'>
                {/* input container  */}
                <input className='w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="text" placeholder='Enter your email' />
                <button className='self-stretch pt-2.5 pb-2.5 pr-5 pl-5 bg-[#7F56D9] border border-[#7F56D9] rounded-lg font-semibold text-lg  text-white'>Subscribe</button>
            </div>
            </div>
            </div>
            {/* tnc  */}
            <div className='w-full flex flex-col items-start pr-4 pl-4 gap-8 pt-8 border-t-2 border-gray-600 md:flex-row-reverse md:justify-between'>
                {/* links  */}
                <div className='flex items-start gap-4'>
                    <div className='font-normal text-base text-gray-300'>Terms</div>
                    <div className='font-normal text-base text-gray-300'>Privacy</div>
                    <div className='font-normal text-base text-gray-300'>Cookies</div>
                </div>
                <div className='font-normal text-base text-[#F4F5F7]'> © 2077 Untitled UI.All rights reserved</div>
            </div>
        </div>
    </div>
  )
}

export default Tnc