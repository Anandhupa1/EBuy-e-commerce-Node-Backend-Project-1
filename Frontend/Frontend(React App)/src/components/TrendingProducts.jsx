import React from 'react'
import { Stack ,Heading, Text,Box,Button,Image,Icon, background} from '@chakra-ui/react' 
import {FaHeart} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
function TrendingProducts() {


  return (
    <Stack  height={{lg:"500px",base:"auto",md:"auto"}} width={"100%"} px={"8%"} py={"30px"} mb={"30px"} >
      <Heading textAlign={"center"} margin={"auto"}  mb={8} as={"H2"} fontFamily={"roboto"} >Trending Products</Heading>
      <Stack display={"flex"} alignItems={"center"} justifyContent={{lg:"space-between",md:"center"}} flexDir={"row"} flexWrap={"wrap"}  height={{base:"auto",md:"auto",lg:"80%"}} >
      
      <Box  width={{base:"100%",md:"30%",lg:"23%"}} height="350px"  >
        <Image borderRadius={"10px"}  width={"100%"} height={"70%"}  src='https://media.istockphoto.com/id/1278906674/photo/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-leaves-or-houseplant-that.jpg?s=612x612&w=0&k=20&c=_s8SHj6gP3oA0zx4jH2SvRJGvcLMnnHwMY_FvANDFiU='/>
        <Heading  m={"2"} mb={0} ml={0} fontSize={"lg"}>Modern Plant</Heading>
        <Text fontSize={"sm"} as="h4">category</Text>
        <Box display={"flex"} alignItems={"center"} flexDir={"row"} justifyContent={"space-between"} >
        <Text fontWeight={800} m={2} ml={0} >Rs.5676 </Text> 
       
        <Button mr={5} width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={()=>{alert("hi")}} > <Cart /></Button>
       
        </Box>
      </Box>
      <Box  width={{base:"100%",md:"30%",lg:"23%"}} height="350px"  >
        <Image borderRadius={"10px"}  width={"100%"} height={"70%"}  src='https://ortery.com/wp-content/uploads/2019/01/beats.png'/>
        <Heading  m={"2"} mb={0} ml={0} fontSize={"lg"}>Modern Plant</Heading>
        <Text fontSize={"sm"} as="h4">category</Text>
        <Box display={"flex"} alignItems={"center"} flexDir={"row"} justifyContent={"space-between"} >
        <Text fontWeight={800} m={2} ml={0} >Rs.5676 </Text> 
       
        <Button width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={()=>{alert("hi")}} > <Cart /></Button>
       
        </Box>
      </Box>
      <Box  width={{base:"100%",md:"30%",lg:"23%"}} height="350px"  >
        <Image borderRadius={"10px"}  width={"100%"} height={"70%"}  src='https://media.istockphoto.com/id/1278906674/photo/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-leaves-or-houseplant-that.jpg?s=612x612&w=0&k=20&c=_s8SHj6gP3oA0zx4jH2SvRJGvcLMnnHwMY_FvANDFiU='/>
        <Heading  m={"2"} mb={0} ml={0} fontSize={"lg"}>Modern Plant</Heading>
        <Text fontSize={"sm"} as="h4">category</Text>
        <Box display={"flex"} alignItems={"center"} flexDir={"row"} justifyContent={"space-between"} >
        <Text fontWeight={800} m={2} ml={0} >Rs.5676 </Text> 
       
        <Button width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={()=>{alert("hi")}} > <Cart /></Button>
       
        </Box>
      </Box>
      <Box width={{base:"100%",md:"30%",lg:"23%"}} height="350px"  >
        <Image borderRadius={"10px"}  width={"100%"} height={"70%"}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSdBLOmgUvAi4EIXg6JmMPXyqZZvL84DTLf4lvN36DDiygOK_vx7ovETSgO_lizmuGKQ&usqp=CAU'/>
        <Heading  m={"2"} mb={0} ml={0} fontSize={"lg"}>Modern Plant</Heading>
        <Text fontSize={"sm"} as="h4">category</Text>
        <Box display={"flex"} alignItems={"center"} flexDir={"row"} justifyContent={"space-between"} >
        <Text fontWeight={800} m={2} ml={0} >Rs.5676 </Text> 
        
        <Button width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={()=>{alert("hi")}} > <Cart /></Button>
       
        </Box>
      </Box>
     
     
      
      
      </Stack>
    </Stack>
  )
}

function Like(){
    return(
        <Icon cursor={"pointer"} width={"30px"} borderRadius={"50%"} height={"30px"} padding={"6px"} color={"white"} _hover={{border:"2px", background:"white",color:"gray.800"}} background={"gray.800"} as={FaHeart}></Icon>
    )
}
function Cart(){
    return(
        <Icon cursor={"pointer"} width={"30px"} borderRadius={"50%"} height={"30px"} padding={"6px"} color={"white"} _hover={{border:"2px", background:"white",color:"gray.800"}} background={"gray.800"} as={MdAddShoppingCart}></Icon>
    )
}
export default TrendingProducts
