import React from 'react'
import {useState} from "react"
import axios from "axios"
import { useEffect } from 'react';

const UserProfile = () => {
  const [userData, setuserData]=useState([]);

  const getuserData=()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/1`)
    .then((response)=>{
      const myData=response.data;
      setuserData(myData);
    });
  };
  
  useEffect(()=>getuserData(), [])
  console.log(userData)
  return (
    <div>
      <h1>{userData.name}</h1>
    </div>
  )
}

export default UserProfile