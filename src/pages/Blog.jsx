import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import BlogDescription from '../components/blog-description'
import BlogDescriptionHeader from '../components/blog-description-header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import axios from 'axios'
const Blog = () => {

  const {id} = useParams()

  const [blogs,setBlogs] = useState([]);
  const [blog,setBlog] = useState({});


  useEffect(()=>{
      check()
  console.log(id)
  },[])

  useEffect(()=>{
    // console.log(blogs)
    setBlog(blogs.filter(t => t.id==id));
  },[blogs])

  const check = async() => {
    let d = await axios.get('http://172.25.25.200:3000/articles');
    console.log(d.data);
    setBlogs(d.data);
  }



  return (
    <div>
        {/* <Navbar /> */}
        {/* headerc */}
        {/* {console.log(blogs)} */}
        {blog.length>0?(
        <BlogDescriptionHeader blog = {blog[0]}/>

        ):('')}
        {/* details  */}
        <BlogDescription />
        {/* footer  */}
      <div className="mt-1 w-full">
            <Footer />
        </div>
    </div>
  )
}

export default Blog