import React, { useEffect } from 'react'
import {Box,Icon,Image,Stack,Text,Heading,Button} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import {FaHeart} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../store/cart-slice';
import fetchProducts from './fetchProducts';
import { baseUrl } from '../../configs/baseUrl';

function Product({item}) {
  let dispatch = useDispatch();
  let count = useSelector((store)=>store.cart.count)
  
  function handleclick(){
  dispatch(increase())
  }


  return (
    <Box className='boxShadow' p={2} borderRadius={"5px"} display={"flex"} flexDir={"column"}  height='300px'>
    <Image objectFit={"contain"} borderRadius={"5px"} width={"100%"} height={"45%"} src={item.image}  />
    <Box display={"flex"} flexDir={"column"} >
      <Heading color={"black"} pt={2} pb={2} fontSize={"15px"}>{item.name.substring(0,20)}</Heading>
      <Text fontSize={"10px"} >{item.description.substring(0,100)+". . ."}</Text>
      <Stack mt={2} display={"flex"} flexDir={"row"} justifyContent={"space-between"} >
      <Box display={"flex"} p={2} flexDir={"row"} width={"auto"} >
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
      </Box> 
      <Text>₹ {item.price}</Text>
      </Stack>
      <Stack mt={2} display={"flex"} flexDir={"row"} justifyContent={"space-between"} width={"100%"} >
      <Button  width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={()=>{alert("Hi")}} > <Like /></Button>
      <Button  width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={()=>{alert("hi")}} > <Cart /></Button>
      </Stack>
    </Box>
    </Box>
  )
}

export default Product
function Like(){
  return(
      <Icon cursor={"pointer"} width={"30px"} borderRadius={"50%"} height={"30px"} padding={"6px"} color={"white"} _hover={{border:"2px", background:"white",color:"gray.800"}} background={"gray.800"} as={FaHeart}></Icon>
  )
}
function Cart(){
  return(
      <Icon  cursor={"pointer"} width={"30px"} borderRadius={"50%"} height={"30px"} padding={"6px"} color={"white"} _hover={{border:"2px", background:"white",color:"gray.800"}} background={"gray.800"} as={MdAddShoppingCart}></Icon>
  )
}