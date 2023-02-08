import React,{useEffect,useState} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

const Layout = () => {
  const [user,setUser] = useState(undefined);

  useEffect(()=>{
      const u = JSON.parse(localStorage.getItem('user'));
      if(u){
        // console.log(u.user)
        setUser(u.user)
      }
      
  },[])
  return (
    <>
 
      <Navbar/>
   
    
    <Outlet/>
    </>
  )
}

export default Layout