import React, { useState, useEffect } from "react";
import { RichTextEditor } from "@mantine/rte";
import { getByDisplayValue } from "@testing-library/react";
import axios from 'axios'
const initialValue =
  "<p>Your initial <b>html value</b> or an empty string to init editor without value</p>";
const imageUrl = 'https://s3-alpha-sig.figma.com/img/b085/31ec/74251700739464df6dfadf9bb2126963?Expires=1676851200&Signature=WfV8n3iizaJT8YTPA1u5fzgL0bcf-KiCOpSjiE7TaudSyZzJPFnvXINrqvdDPmxnXBF-bKVbs8O291nNFCQBgNsU85TQfaHauxbRMiszsKQGCw2Ksqeng3M52vr8ben7LfbND7WeZX2KT7FggqsF0HU57Uk9prbor8gBYSHD9hJR6KHE9QCNGGIZUfZ3YTL3poUQH3qKnTyTgOu2b0nLhts7y32PEsLAZpNqc~TdjM4Dkg5DgppwVWD7OaeMFlnufPnJXHKDVmo16cg0mAPgT61nTVcXqWKqfcFDFD7fbK3~kLXKsvtQeKUqhe-rBVpS5E9oAu5N0zXqSJYEniUMOA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

const AddBlog = ({user}) => {

  // console.log(user.user)
  // const [editorState, setEditorState] = useState(

  const text = "text";
  const category_id = 15;
  const cover_url = "";

  const [value, onChange] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 

  
  const handleAdd = () => {
    const array = value.split('</p>');
      let t1 = array[0].slice(3);
      let t2 = array[1].slice(3);
      addArticleApi(t1,t2);


  }


  const addArticleApi = async(heading,des)=>{
    const res = await fetch('http://172.25.25.200:3000/articles',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${user.token}`,
      },
      body:JSON.stringify({
        title:heading,
        cover_url:imageUrl,
        description:des,
        category_id:15,
        user_id:user.user.id,
        author:user.user.name,
      })
    });
    console.log(res);
    const data = await res.json();
    console.log(data)
  }

  return (
    <div className="flex items-center justify-center mt-20 flex-col gap-6">
      <RichTextEditor
        className="min-h-[500px] w-[85vw] md:w-[70cw] lg:w-[60vw]"
        value={value}
        onChange={onChange}
        id="rte"
      />
      <button
        onClick={handleAdd}
        className="text-white font-semibold cursor-pointer py-2.5 px-4 bg-[#7f56d9] rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)]  flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-[#7f56d9] transition ease-in duration-200 hover:bg-[#6941C6]"
      >
        Add Article
      </button>
    </div>
  );
};

export default AddBlog;
