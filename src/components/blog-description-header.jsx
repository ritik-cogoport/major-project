import React from 'react'
import profile from '../assets/profile-pic.svg'
import image1 from '../assets/blog-image-2.svg'
const BlogDescriptionHeader = ({blog}) => {
  return (
    
    <div className='pt-16 pb-16 gap-12 bg-white flex flex-col items-center'>
        {/* details  */}
        {console.log(blog)}
        <div className='pr-4 pl-4 gap-8'>
            {/* heading  */}
            <div className='flex flex-col items-center gap-4'>
                {/* hading and date  */}
                <div className='flex flex-col items-center gap-3'>
                    <div className='font-semibold text-sm text-center text-[#7F56D9]'>Published {blog.created_at.slice(0,10)}</div>
                    <div className='font-semibold text-4xl text-center text-gray-900'>{blog.title}</div>
                </div>
                <div className='font-normal text-lg text-gray-600 leading-7 text-center'>{blog.description}</div>
            </div>
            {/* category  */}
            <div className='flex items-center justify-center'>
                <div className='w-max pt-0.5 pb-0.5 pr-2.5 pl-2.5 bg-[#F9F5FF] rounded-2xl font-medium text-sm text-[#6941C6] mt-5'>{blog.category_name}</div>
            </div>
            {/* avatar  */}
            <div className='gap-4 flex items-center justify-center mt-8'>
                <img src={profile} alt="" className='w-14 h-14'/>
                <div className='flex items-start flex-col'>
                    <div className='font-semibold text-lg leading-7 text-gray-900'>{blog.author}</div>
                    <div className='font-normal text-base text-gray-600'>{blog.created_at.slice(0,10)}</div>
                </div>
            </div>
        </div>
        {/* image  */}
        <div className='pr-4 pl-4 w-full flex items-center justify-center'>
         <img src={blog.cover_url} alt="" className='md:w-[90vw] md:h-[350px] object-cover pr-10 pl-10 lg:h-[400px] object-center'/>

        </div>
    </div>
  )
}

export default BlogDescriptionHeader