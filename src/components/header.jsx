import React from 'react'
// import search from '../assets/search.svg'
import {BsSearch} from 'react-icons/bs'
const Header = () => {
  return (
    <div className='w-full self-stretch h-[400px] bg-[#1D2939] gap-16 flex flex-col items-center pt-16 pb-32'>
        <div className='self-stretch flex items-center justify-center pl-4 pr-4 h-[350px]' >
            <div className='self-stretch flex flex-col items-center justify-center p-0 gap-8'>
                {/* Heading  */}
                <div className='self-stretch flex flex-col items-center p-0 gap-4 h-[175px]'>
                    <div className='self-stretch flex flex-col items-center h-[75px] p-0 gap-3'>
                        <div className='self-stretch h-[20px] font-semibold text-md text-center text-gray-200'>
                            All Blogs
                        </div>
                        <div className='h-[45px] self-stretch font-semibold text-4xl leading-[44px] text-center text-[#FFFFFF] '>Resource library</div>
                    </div>
                    <div className='self-stretch h-[85px] font-normal text-lg text-[#EAECF0] text-center'>
                        Subscribe to learn about new product features the latest in technology solutions and updates
                    </div>
                </div>
                {/* Search  */}
                <div className='flex items-center p-0 gap-2 h-[45px] bg-white rounded-md w-full'>
                    <BsSearch className='w-5 h-5 ml-3'/>
                    <input type="text" placeholder='Search' className='outline-none self-stretch w-full rounded-md'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header