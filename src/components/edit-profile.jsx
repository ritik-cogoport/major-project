import React, { useState } from 'react'
import pic from '../assets/profile-pic.svg'
import upload from '../assets/upload.svg'
import axios from 'axios'
const EditProfile = ({user}) => {

  const [name,setName] = useState();
  const [bio,setBio] = useState();
  const [avatar,setAvatar] = useState();

  // console.log(user.token);


  const editApi = async() => {
    try {
      const { data } = await axios({
          method: 'put',
          url: `http://172.25.25.200:3000/users/${user.user.username}`,
          headers:{
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `Bearer ${user.token}`
            },
          data: {
              name: {name},
              description: {bio},
          }
      });
  
      console.log(data);
  } catch (err) {
      if (err.response.status === 404) {
          console.log('Resource could not be found!');
      } else {
          console.log(err.message);
      }
  }
  
  }


  const handleEditProfile = () => {
      console.log(name)
      console.log(bio)
      editApi()
  }


  return (
    <div className='flex items-center justify-center md:justify-around w-full mb-10'>
            <div className="flex flex-col text-left text-base text-gray-700 font-text-sm-medium1 py-0 px-4 gap-[20px] md:flex md:flex-row md:mt-20 lg:gap-32 ml-2 mt-20 md:gap-12 md:ml-14 ">
      {/* HEADING  */}
      <div className=" w-full flex flex-col items-start justify-start md:w-1/4">
        <div className="self-stretch relative leading-[20px] font-medium">
          Personal info
        </div>
        <div className="self-stretch relative leading-[20px] text-gray-600">
          Update your photo and personal details.
        </div>
      </div>
      {/* Remaining Container Form */}
      <div className="self-stretch rounded-xl bg-white shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] overflow-hidden flex flex-col items-start justify-start text-gray-600 border-[1px] border-solid border-gray-200 lg:w-3/4 ">
       <form className="self-stretch bg-white flex flex-col py-5 px-4 items-start justify-start gap-[24px]">
          {/* First and Last Name  */}
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[20px] font-medium w-full">Name</div>
              <input onChange={(e)=>{setName(e.target.value)}} className="self-stretch w-full rounded-lg bg-white py-2.5 px-3.5 gap-[8px] text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="text"  placeholder="Enter your name" />
          </div>
          {/* Email  */}
          <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
            <div className="relative leading-[20px] font-medium">Profile Bio</div>
              <input onChange={(e)=>{setBio(e.target.value)}} className="self-stretch rounded-lg bg-white py-2.5 px-3.5 gap-[8px] text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[14px] focus:outline-none" type="text"  placeholder="Enter your Profile Bio" />
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] lg:flex-row ">
            <img
              className="rounded-base w-16 h-16 shrink-0 object-cover"
              alt=""
              src={pic}
            />
            <div className="self-stretch flex flex-col items-start justify-start lg:w-full">
              <div className="self-stretch rounded-xl bg-base-white1 flex flex-col py-4 px-6 items-center justify-start border-[1px] border-solid border-gray-200 transition ease-in duration-200 hover:border-[#7F56D9] hover:border-[2px] hover:m-[-0.75px] ">
                <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
                  <img
                    className="relative rounded-small w-[46px] h-[46px] shrink-0 cursor-pointer"
                    alt=""
                    src={upload}
                  />
                  <div className="flex flex-col items-center justify-center">
                    <div className="leading-[18px] mb-2 text-center">
                      <span className="text-primary-7001 font-semibold">
                        Click to upload
                      </span>
                      <span> or drag and drop</span>
                    </div>
                    <span className="leading-[18px] text-center">
                      SVG, PNG, JPG or GIF (max. 800x400px)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="self-stretch flex flex-col pt-0 px-0 pb-3 items-center justify-start gap-[12px]">
          <div className="h-0.5 w-full bg-[#EAECF0]"></div>
          <div className="self-stretch flex flex-row py-0 px-4 items-center justify-end gap-[16px]">
            <div className="flex-1 flex flex-row items-center justify-end gap-[12px]">
              {/* <button className="cursor-pointer py-2.5 px-4 bg-white rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-300 transition ease-in duration-200 hover:bg-[#F9FAFB]">
                <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-gray-700 text-left">
                  Cancel
                </div>
              </button> */}
              <button onClick={handleEditProfile}
                className="cursor-pointer py-2.5 px-4 bg-[#7f56d9] rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-primary-6001 transition ease-in duration-200 hover:bg-[#6941C6]"
              >
                <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-white text-left">
                  Save changes
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default EditProfile