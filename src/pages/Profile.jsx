import React, { useState,useEffect,Component } from "react";
import AddBlog from "../components/add-blog";
import EditProfile from "../components/edit-profile";
import ProfileHeader from "../components/profile-header";
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from "../components/card";
const Profile = () => {

  const {username} = useParams()
  const [blogs,setBlogs] = useState([])
  const navigate = useNavigate();
  const [user,setUser] = useState(undefined);


  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('user'));
    // console.log(user)
    if(u==undefined){
     navigate("/login");
    }
    else {
      setUser(u);
      getArticles()
    }
},[])
const getArticles = async() => {
  let d = await axios.get(`http://172.25.25.200:3000/articles_list/${username}`);
  console.log('working')
  // console.log(d.data);
  setBlogs(d.data);
}


const [viewprofile, setViewprofile] = useState(true);
const [add, setAdd] = useState(false);
 

  return (
    <div className="">
      <ProfileHeader setAdd={setAdd} add = {add} viewprofile = {viewprofile} setViewprofile={setViewprofile} />
      {add && viewprofile?(

      <AddBlog user = {user} />
      ):('')}
      {viewprofile ? (''): <EditProfile user = {user} />}

      <div className="flex items-center justify-center flex-wrap gap-4 ml-1 mt-20">
        {blogs.map((m)=>{

          return <Card blog = {m}  />
          
         
        })}
        </div>
    </div>
  );
};

export default Profile;
