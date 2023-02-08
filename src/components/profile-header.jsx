import React,{useState,useEffect} from 'react'
import pic from '../assets/profile-pic.svg'
import bg from '../assets/background.png'
const ProfileHeader = ({add,setAdd,viewprofile,setViewprofile}) => {
  const [user,setUser] = useState(undefined)

  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('user'));
    setUser(u);
  },[])

const handleAdd = () => {
  setAdd(!add);
}
const handleview = () => {
  setViewprofile(!viewprofile);
}
  return (
    
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base font-text-sm-medium1">
    {/* Background Image  */}
      <div className="self-stretch relative h-40 shrink-0 overflow-hidden lg:h-60">
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-40 object-cover md:h-60"
          alt=""
          src={bg}
        />
      </div>
      {/* Avatar and details  */}
      {user!==undefined?(
        
        <div className="self-stretch flex flex-col justify-start items-start py-0 px-4 gap-[16px] mt-[-48px]  lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-[-40px] md:mx-10 mx-4">
        <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px] text-xl text-gray-900 lg:flex lg:flex-row lg:items-center lg:justify-center">
          <img
            className="relative rounded-base w-24 h-24 shrink-0 z-[0] lg:w-44 lg:h-44 border-4 border-white rounded-full"
            alt=""
            src={pic}
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[1] -mt-5 lg:mt-14">
            <div className="self-stretch relative leading-[32px] font-bold text-2xl">
              {user.user.name}
            </div>
            <div className="self-stretch relative text-lg leading-[24px] text-gray-600">
              Email : {user.user.email}
            </div>
            <div className="self-stretch relative text-lg leading-[24px] text-gray-600">
              Username : {user.user.username}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start  ">
        <button onClick={handleAdd} className="cursor-pointer py-2.5 px-4 bg-[white] rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-400 transition ease-in duration-200 hover:bg-gray-100 mr-3">
            <div className="relative text-black leading-[20px] font-semibold font-text-sm-medium1 text-white text-left">
              {add && viewprofile?('Close'):('Add Article')}
            </div>
          </button>
          <button onClick={handleview} className="cursor-pointer py-2.5 px-4 bg-[#7f56d9] rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-[#7f56d9] transition ease-in duration-200 hover:bg-[#6941C6]">
            <div className="relative text-white leading-[20px] font-semibold font-text-sm-medium1 text-white text-left">
              {viewprofile?('Edit Profile'):('View Profile')}
            </div>
          </button>
        </div>
      </div>
      ):('')}
      
  </div>
  )
}

export default ProfileHeader