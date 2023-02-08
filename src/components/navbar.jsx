import React,{useEffect,useState} from 'react'
import navLogo from '../assets/navbar-icon.svg'
import pic from '../assets/profile-pic.svg'
import navHeading from '../assets/navbar-heading.svg'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {

  const [user,setUser] = useState(undefined);
  const navigate = useNavigate();

  useEffect(()=>{
      const u = JSON.parse(localStorage.getItem('user'));
      if(u){
        // console.log(u.user)
        setUser(u.user)
      }
      
  },[])



  const handleLogout = () => {
    localStorage.clear()
    navigate("/");
    setUser(undefined)
  }

  return (
    <div className='h-[80px] w-full sticky top-0 z-50 flex items-center bg-[#1D2939]'>
      {/* container  */}
      <div className='flex items-center justify-between  h-11 w-full mr-4 ml-4 md:mr-12 md:ml-12'>
        {/* logo  */}
        <Link to='/'>
        <div className='flex'>
          <img src={navLogo} alt="" className='mr-3' />
          <img src={navHeading} alt="" className='text-white' />
        </div></Link>
        {/* login-signup  */}
        {user!==undefined?(
          <div className='flex items-center justify-center'>
            <Link to={`/users/${user.username}`}>
            <img
              className="rounded-base w-12 h-102 object-cover mr-4"
              alt=""
              src={pic}
            /></Link>
                <button onClick={handleLogout} className='pt-[10px] pb-[10px] pl-[10px] pr-[10px] rounded-lg font-semibold text-[16px] text-white leading-6 mr-2 hover:bg-gray-700'>Log out</button>
          </div>
        ):(
              <div className=''>
              <Link to='/login'>
                <button className='pt-[10px] pb-[10px] pl-[10px] pr-[10px] rounded-lg font-semibold text-[16px] text-white leading-6 mr-2 hover:bg-gray-700'>Log in</button>
              </Link>
              <Link to='/signup'>
                <button className='pt-[10px] pb-[10px] pl-[10px] pr-[10px] rounded-lg bg-[#7F56D9] font-semibold text-[16px] text-white leading-6 transition ease-in duration-200 hover:bg-[#6941C6]'>Sign up</button>
              </Link>
            </div>
        )}
        
      </div>
    </div>
  )
}

export default Navbar