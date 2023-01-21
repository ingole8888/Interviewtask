import React from 'react'
import { Box, Grid, Image } from "@chakra-ui/react";
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
//console.log(photo.length)

  return (
    
    <Grid
    margin={"auto"}
    marginTop={"10px"}
    width="95%"
    templateColumns={
        {

          base:"repeat(3, 1fr)",
          md:"repeat(3, 1fr)",
          lg:"repeat(3, 1fr)",
        }
      }
      gap={{
        base:"5px",
        md:"5px",
        lg:"32px"
      }}
    display={"grid"}
    >
      {/* for display data in grid format */}
      {photo?.length > 0 &&
        photo?.map((item) => {
          return (
            <Box key={item.id}
          margin={"auto"}
            >
              <Image src={item.url}/>
            </Box>
          );
        })}
    </Grid>
  )
}

export default Photogrid