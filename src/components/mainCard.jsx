import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../assets/blog-image.svg'
import profile from '../assets/profile-pic.svg'
const MainCard = ({mainblog}) => {



  return (
    <div className='hidden md:flex pr-10 pl-10 w-full mb-20 flex-col w-full'>
        <Link to={`${mainblog.id}`}>
        <img src={mainblog.cover_url} alt="" className='w-full h-[300px] object-cover -mt-10 hover:scale-110 rounded-md' /></Link>
        <div className='self-stretch flex flex-col items-start pt-6 pr-6 pb-8 pl-6 gap-6 h-max'>
        {/* <img src={blog} alt="" className='w-[900px] h-60 object-fill ' /> */}
        {/* <div className='self-stretch gap-6  flex flex-col items-start justify-start'> */}
            <div className='flex flex-col items-start h-max '>
                <div className='text-[#6941C6] h-5 font-semibold text-base leading-5'>{mainblog.category}</div>
                <div className='flex flex-col items-start gap-2 h-max self-stretch'>
                    <div className='h-max font-semibold text-xl text-gray-900'>{mainblog.title}</div>
                    <div className='h-max font-normal text-lg text-gray-600'>{mainblog.description}</div>
                </div>
            </div>
            <div className='flex items-center w-[135px] h-10 '>
                <img src={profile} alt="" className='p-0 w-10 h-10 mr-3'/>
                <div className='flex flex-col items-start w-[85px]'>
                    <div className='font-semibold text-sm text-gray-900'>{mainblog.author}</div>
                    <div className='font-normal text-sm text-gray-600'>2022</div>
                </div>
            </div>
        {/* </div> */}
    </div>
    </div>
  )
}

export default MainCard