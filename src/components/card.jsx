import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import blogPic from '../assets/blog-image.svg'
import profile from '../assets/profile-pic.svg'
const Card = ({blog}) => {

  return (
    <div className='w-[400px] self-stretch flex flex-col items-center pt-6 pr-6 pb-8 pl-6 gap-6 h-max bg-white mb-8 shadow-2xl md:mr-4 rounded-md'>
        <Link to={`${blog.id}`}>
          <img src={blog.cover_url} alt="" className='w-[400px] h-[250px] rounded-md hover:scale-120 ' />
        </Link>
       
        <div className='self-stretch gap-6  flex flex-col items-start justify-start'>
            <div className='flex flex-col items-start h-max b'>
                <div className='text-[#6941C6] h-5 font-semibold text-base leading-5'>{blog.category_name}</div>
                <div className='flex flex-col items-start gap-2 h-max self-stretch'>
                    <div className='h-max font-semibold text-xl text-gray-900'>{blog.title}</div>
                    <div className='h-max font-normal text-lg text-gray-600'>{blog.description}</div>
                </div>
            </div>
            <div className='flex items-center w-max h-10 '>
                <img src={profile} alt="" className='p-0 w-10 h-10 mr-3'/>
                <div className='flex flex-col items-start w-max'>
                    <div className='font-semibold text-sm text-gray-900'>{blog.author}</div>
                    <div className='font-normal text-sm text-gray-600'>{blog.created_at.slice(0,10)}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card