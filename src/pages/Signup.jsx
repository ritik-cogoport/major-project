import React, { useState,useEffect } from 'react'
import icon from '../assets/navbar-icon.svg'
import iphone from '../assets/iphone.svg'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signup = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log(user)
    if(user){
     navigate("/");
    }
},[])

  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleSubmit = () => {
    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password)
     

    postRequest()
  }



  const postRequest = async() => {

    axios({
      method: 'post',
      responseType: 'json',
      url: `http://172.25.25.200:3000/signup`,
      data: {
        username,
        email,
        password,
        name,
      }
    })
     .then(response => {
       console.log(response);
       navigate("/login");
     })
     .catch(error => {
      console.log(error);
      if(error.status=422)
      alert('User with similar Username and Email already exists')
      //  dispatch({ type: AUTH_FAILED });
      //  dispatch({ type: ERROR, payload: error.data.error.message });
     });
    
  }



  return (
    // container 
    <div className='self-stretch flex items-center justify-center w-full '>
      <div className='flex self-stretch items-center justify-center w-full md:w-max'>
          {/* signup */}
      <div className='self-stretch flex flex-col items-center py-12 px-8 gap-8 bg-red-white md:w-1/2 w-full md:ml-20'>
        {/* form  */}
        <div className='self-stretch flex flex-col items-center gap-8'>
          {/* header  */}
          <div className='self-stretch flex flex-col items-start p-0 gap-6'>
            {/* <img src={icon} alt="" className='h-8 w-8' /> */}
            <div className='flex flex-col items-start'>
              <div className='font-semibold text-2xl text-gray-900'>Sign Up</div>
            </div>
          </div>
          {/* content  */}
          <div className='self-stretch flex flex-col items-center p-0 gap-2 rounded-xl'>
            {/* inputs */}
            <div className='self-stretch flex flex-col items-start gap-5'>
                {/* name  */}
                <div className='self-stretch flex flex-col items-start gap-1.5'>
                  <span className='font-medium text-base text-gray-700'>Name</span>
                  <input onChange={(e)=>{setName(e.target.value)}} className='focus:border-gray-600 w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="text" placeholder='Enter your Name' />
                </div>
                <div className='self-stretch flex flex-col items-start gap-1'>
                  <span className='font-medium text-base text-gray-700'>Username</span>
                  <input onChange={(e)=>{setUsername(e.target.value)}} className='focus:border-gray-600 w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="text" placeholder='Enter your Username' />
                </div>
                <div className='self-stretch flex flex-col items-start gap-1.5'>
                  <span className='font-medium text-base text-gray-700'>Email</span>
                  <input onChange={(e)=>{setEmail(e.target.value)}} className='focus:border-gray-600 w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="email" id="email" name="email" placeholder='Enter your email' />
                </div>
                <div className='self-stretch flex flex-col items-start gap-1.5'>
                  <span className='font-medium text-base text-gray-700'>Password</span>
                  <input onChange={(e)=>{setPassword(e.target.value)}} className='w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none focus:border-gray-600 ' type="password" placeholder='Create a password' />
                </div>
            </div>
            <button type='submit' onClick={handleSubmit} className='self-stretch pt-2.5 pb-2.5 pr-5 pl-5 bg-[#7F56D9] border border-[#7F56D9] rounded-lg font-semibold text-lg text-center text-white transition ease-in duration-200 hover:bg-[#6941C6]'>Get Started</button>

            
            {/* button  */}
            {/* <button type='submit' className='self-stretch pt-2.5 pb-2.5 pr-5 pl-5 bg-[#7F56D9] border border-[#7F56D9] rounded-lg font-semibold text-lg text-center text-white transition ease-in duration-200 hover:bg-[#6941C6]'>Get Started</button> */}
          </div>
          {/* login  */}
          <div className='flex items-center justify-center gap-1 p-0'>
            <span className='font-normal text-base text-gray-600 mr-2'>Already have a account ?</span>
            <Link to='/login'>
            <button className='flex items-center justify-center gap-2 font-semibold text-base text-[#6941C6] outline-none hover:underline'>Log in</button>
            </Link>
          </div>
        </div>
      </div>
      {/* image */}
      <div className='hidden md:flex md:w-1/2 md:ml-4 rounded-2xl'>
        <img src={iphone} alt="" className='pl-20 pt-12 max-h-[600px]' />
      </div>
      </div>
      
    </div>
  )
}

export default Signup