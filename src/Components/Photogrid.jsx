import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';

const Photogrid = () => {
  const [photo, setPhoto]=useState([]);

const getPhoto=()=>{
  axios.get(`http://jsonplaceholder.typicode.com/photos`)
  .then((response)=>{
    const myData=response.data;
    setPhoto(myData);
  });
};

useEffect(()=>getPhoto(), [])
//console.log(photo)

  return (
    <div>Photogrid</div>
  )
}

export default Photogrid