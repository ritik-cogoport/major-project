import React, { useEffect,useState } from 'react'
import Cards from '../components/cards-container'
import Footer from '../components/footer'
import Header from '../components/header'
import MainCard from '../components/mainCard'
import Navbar from "../components/navbar"
import Pagination from '../components/pagination'

import axios from 'axios';


const Home = () => {

const [blogs,setBlogs] = useState([]);
const [mainblog,setMainblog] = useState({});


useEffect(()=>{
    check()
},[])
// useEffect(()=>{
//   setBlogs(blogs.filter((t)=>{
//     return t.id!==mainblog.id;
//   }))
// },[mainblog])
useEffect(()=>{
  setMainblog(blogs[3]);
},[blogs])

const check = async() => {
  let d = await axios.get('http://172.25.25.200:3000/articles');
  // console.log(d.data);
  setBlogs(d.data);
}


  return (
    <div className=''>
        <Header />
        {mainblog!==undefined?(
           <MainCard mainblog = {mainblog} />
        ):('')}
       
        {/* {console.log(blogs[0].id)} */}
        <Cards array = {blogs} />
        {/* <Pagination /> */}
        <Footer />
    </div>
  )
}

export default Home