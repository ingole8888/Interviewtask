import React from 'react'
import { Box, Button, Image, Link, Text, Grid } from "@chakra-ui/react";
import {useState} from "react"
import axios from "axios"
import { useEffect } from 'react';
import { MdVerified,MdOutlinePersonAdd } from "react-icons/md";
import {BsThreeDots} from "react-icons/bs"

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
    
    <Box 
    margin={"auto"}
    marginTop={"5%"}
    marginBottom={"5%"}
    display={"flex"}
    width={"95%"}
    >
      
      <Box width={"35%"}
      >
        <Image 
        marginLeft={"25%"}
        height={"40vh"}
        width={"18vw"}
        borderRadius={"50%"}
         src={"data:image/jpeg;base64,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"}
         />
      

      </Box>
      <Box >
           <Grid display={"flex"} gap={"2vw"}>
               <Box display={"flex"} gap={"2vw"} marginTop={"5px"}><Text fontSize={"2vw"} marginTop={"-5px"} >{userData.username}</   Text><MdVerified  fontSize={"2vw"} color={"#0095F6"}/>
               </Box>
               <Box display={"flex"} gap={"10px"}>
                 <Button backgroundColor={"#0095F6"} 
                  paddingLeft={"2vw"}
                  paddingRight={"2vw"}
                   color={"white"} _hover={{
                   background:"#0095F6"
                   }}
                  >Follow</Button>
                 <Button
                   paddingLeft={"1.5vw"}
                   paddingRight={"1.5vw"}
                   _hover={{
                    background:"#EFEFEF"
                   }}
                  >Message</Button>
                 <Button
           
                   _hover={{
                   background:"#EFEFEF"
                   }}><MdOutlinePersonAdd fontSize={"2vw"}/></Button>
                </Box>
                  <Button backgroundColor={"#FAFAFA"} 
                   _hover={{
                  background:"#FAFAFA"
                   }}
                    ><BsThreeDots fontSize={"3vw"}/></Button>
           </Grid>
           {/* start here */}
            <Box display={"flex"} gap={"5%"} marginTop={"8%"} marginBottom={"7%"}> 
                  <Box display={"flex"} gap={"3%"}><Text fontSize={"2vw"}>5000 </Text><Text  color='#262626' fontSize={"2vw"} fontWeight={"light"} >posts</Text></Box>
                  <Button display={"flex"} gap={"3%"} backgroundColor={"#FAFAFA"}  _hover={{
                    backgroundColor:"#FAFAFA"
                  }}><Text fontSize={"2vw"}>232M </Text><Text  color='#262626' fontSize={"2vw"} fontWeight={"light"} marginTop={"3%"}>followers</Text></Button>
                  <Button display={"flex"} gap={"3%"} backgroundColor={"#FAFAFA"}  _hover={{
                    backgroundColor:"#FAFAFA"}}><Text fontSize={"2vw"}>262 </Text><Text color='#262626' fontSize={"2vw"} fontWeight={"light"} marginTop={"3%"}>following</Text></Button>
            </Box>
            <Box alignContent={"flex-start"} marginBottom={"5%"}>
            <Text fontSize={"1.5vw"} color='#262626'>{userData.name}</Text>
            <Text color='#262626'>{userData.email}</Text>
            <Link color={"#385898"} fontSize={"1.5vw"} >{userData.website}</Link>
            </Box>
            <Link fontSize={"1.5vw"} display={"flex"} ><Text color={"gray"} fontSize={"1.5vw"}>Followed by </Text> simran_vedpathak, khushibaraili, _kadam_nilkanth <Text color={"gray"} fontSize={"1.5vw"}>+ 180 more</Text></Link>
      </Box>
      
    </Box>
    
  )
}

export default UserProfile