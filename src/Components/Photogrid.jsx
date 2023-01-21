import React from 'react'
import { Box, Grid, Image, Text, Link } from "@chakra-ui/react";
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import {AiOutlineTable} from "react-icons/ai"
import {BsCamera} from "react-icons/bs"
import {GrMultimedia} from "react-icons/gr"

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
    <Box>
      <Box margin={"auto"}
        paddingTop={"20px"}
        paddingBottom={"20px"}
        width="95%"
        display={"flex"}
        gap={"10%"}
        borderTop={"1px solid gray"}
        
        >
        <Link marginLeft={{
          base:"15%",
          md:"25%",
          lg:"35%",
        }} display={"flex"} gap={"10%"}><AiOutlineTable fontSize={"25px"}/><Text >POSTS</Text></Link>
        <Link display={"flex"} gap={"10%"}><GrMultimedia fontSize={"25px"}/> <Text>REELS</Text></Link>
        <Link display={"flex"} gap={"10%"}><BsCamera fontSize={"25px"}/> <Text>TAGGED</Text></Link>
      </Box>
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
    </Box>
  )
}

export default Photogrid