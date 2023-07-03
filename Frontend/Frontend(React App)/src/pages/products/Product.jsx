import React from 'react'
import {Box,Icon,Image,Stack,Text,Heading,Button} from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import {FaHeart} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../store/cart-slice';

function Product() {
  
  let count = useSelector((store)=>store.cart.count)
  let dispatch = useDispatch();
  function handleclick(){
  dispatch(increase())
  }

  return (
    <Box className='boxShadow' p={2} borderRadius={"5px"} display={"flex"} flexDir={"column"}  height='300px'>
    <Image borderRadius={"5px"} width={"100%"} height={"45%"} src='https://cdn.statically.io/img/img.fixthephoto.com/f=auto//blog/UserFiles/Image/333_2/clothing-photography-wrong-shutter-speed.jpg'  />
    <Box display={"flex"} flexDir={"column"} >
      <Heading color={"black"} pt={2} pb={2} fontSize={"15px"}>Product name</Heading>
      <Text fontSize={"10px"} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, aspernatur.</Text>
      <Stack mt={2} display={"flex"} flexDir={"row"} justifyContent={"space-between"} >
      <Box display={"flex"} p={2} flexDir={"row"} width={"auto"} >
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
        <StarIcon color={"gold"} width={"10px"} height={"10px"} />
      </Box> 
      <Text>$3000</Text>
      </Stack>
      <Stack mt={2} display={"flex"} flexDir={"row"} justifyContent={"space-between"} width={"100%"} >
      <Button  width={"30px"} background={"transparent"} _hover={{background:"transparent"}} borderRadius={"50%"} height={"30px"} onClick={handleclick} > <Like /></Button>
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