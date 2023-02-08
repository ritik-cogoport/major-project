import React,{useEffect} from "react";
import Card from "./card";
import { Link } from "react-router-dom";

const Cards = ({array}) => {

  
// console.log(array)
return (
    // <div className="flex flex-wrap gap-4">
      <div className="flex items-center justify-center flex-wrap gap-4 ml-1">
        {array.map((m)=>{

          return  <Card blog = {m}  />
         
        })}
      </div>
    // </div>

  );
};

export default Cards;
