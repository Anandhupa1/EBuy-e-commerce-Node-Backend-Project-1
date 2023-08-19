import React from 'react'
import { Box, SimpleGrid,Image,Heading,Text } from '@chakra-ui/react' ;
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Categories() {

  const navigate =useNavigate()
  const staticData = useSelector((store)=>store.static.static);

  








  return (
    <>
    <Heading textAlign={"center"} mb={"50px"} mt={"50px"}  ></Heading>
    <SimpleGrid  mb={"30px"} px={"8%"} minChildWidth={"200px"} spacing={"20px"}  >
      


    {
      staticData.categories.map((item)=>{
        return  <Box 
        onClick={()=>{
          navigate(`/products?category=${item._id}`)
        }}
        cursor={"pointer"} pl={"15px"} display={"flex"} alignItems={"center"} borderRadius={"5px"} className='boxShadow' height={"100px"} >
        <Box  width={"60%"}>
            <Text fontWeight={900} fontSize={"13px"} >{item.name}</Text>
            <Text fontSize={"12px"} >8 items</Text>
        </Box>
        <Image width={"40%"}  height={"100%"} padding={2} src={item.image} />
      </Box>
      })
    }

     
    
    
     

  
    

     
     
     
    </SimpleGrid>
    </>
  )
}

export default Categories
