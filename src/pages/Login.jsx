import React,{useState,useEffect} from 'react'
import icon from '../assets/navbar-icon.svg'
import iphone from '../assets/iphone.svg'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {

  const navigate = useNavigate();

  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('user'));
      // console.log(user)
      if(user){
       navigate("/");

      }
  },[navigate])


  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleSubmit = () => {
    console.log(email)
    console.log(password)

    postRequest()
  }

  const postRequest = async() => {

    axios({
      method: 'post',
      responseType: 'json',
      url: `http://172.25.25.200:3000/auth/login`,
      data: {
        email,
        password,
      }
    })
     .then(response => {
       console.log(response);
       localStorage.setItem("user", JSON.stringify(response.data));
       navigate("/");
     })
     .catch(error => {
      console.log(error);
      alert("Wrong credentials ! Try Again")
      //  dispatch({ type: AUTH_FAILED });
      //  dispatch({ type: ERROR, payload: error.data.error.message });
     });
    
  }

  return (
    // container 
    <div className='self-stretch flex items-center justify-center w-full'>
      <div className='flex self-stretch items-center justify-center w-full md:w-max mt-16 '>
          {/* signup */}
      <div className='self-stretch flex flex-col items-center py-12 px-8 gap-8 bg-red-white md:w-1/2 w-full md:ml-20'>
        {/* form  */}
        <div className='self-stretch flex flex-col items-center gap-8'>
          {/* header  */}
          <div className='self-stretch flex flex-col items-start p-0 gap-6'>
            {/* <img src={icon} alt="" className='h-8 w-8' /> */}
            <div className='flex flex-col items-start gap-2'>
              <div className='font-semibold text-2xl text-gray-900'>Welcome Back</div>
              <div className='font-normal text-lg text-gray-600'>Welcome back! Please enter your details</div>
            </div>
          </div>
          {/* content  */}
          <div className='self-stretch flex flex-col items-center p-0 gap-6 rounded-xl'>
            {/* inputs */}
            <div className='self-stretch flex flex-col items-start gap-5'>
                {/* Email  */}
               
                <div className='self-stretch flex flex-col items-start gap-1.5'>
                  <span className='font-medium text-base text-gray-700'>Email</span>
                  <input onChange={(e)=>{setEmail(e.target.value)}} className='focus:border-gray-600 w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="text" placeholder='Enter your email' />
                </div>
                <div className='self-stretch flex flex-col items-start gap-1.5'>
                  <span className='font-medium text-base text-gray-700'>Password</span>
                  <input onChange={(e)=>{setPassword(e.target.value)}} className='focus:border-gray-600 w-full pt-3 pb-3 pr-4 pl-4 rounded-lg  border border-solid border-gray-300 outline-none' type="password" placeholder='*******' />
                </div>
            </div>
            {/* button  */}
            <button onClick={handleSubmit} className='self-stretch pt-2.5 pb-2.5 pr-5 pl-5 bg-[#7F56D9] border border-[#7F56D9] rounded-lg font-semibold text-lg text-center text-white transition ease-in duration-200 hover:bg-[#6941C6]'>Sign in</button>
          </div>
          {/* login  */}
          <div className='flex items-center justify-center gap-1 p-0'>
            <span className='font-normal text-base text-gray-600 mr-2'>Don't have a account ?</span>
            <Link to='/signup'>
            <button className='flex items-center justify-center gap-2 font-semibold text-base text-[#6941C6] outline-none hover:underline'>Sign up</button>
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

export default Login