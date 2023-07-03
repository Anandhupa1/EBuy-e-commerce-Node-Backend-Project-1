import React from 'react'
import { Box, Stack,Text ,Icon, Heading} from '@chakra-ui/react'

import { MdDeliveryDining,MdOutlineCached,MdOutlinePayments,MdOutlineHighQuality, MdHighQuality } from "react-icons/md";
function Features() {
  return (
    <Stack display={"flex"} flexDir={{lg:"row",md:"row",base:'column'}} justifyContent={"space-between"}
    width={"100%"} px={"8%"} height={{lg:"100px",md:"100px",base:"auto"}} mb={"30px"} mt={"50px"} 
    >
     <Stack borderRadius={"5px"} display={"flex"} alignItems={"center"} flexDir={"row"} width={{lg:"23%",base:"98%",md:"48%"}} height={"100px"} background={"#FDFD96"}>
    <Cash />
    <Box  >
    <Text fontWeight={"600"} as={"H1"}>Secure Payment</Text>
    <Text pr={3} fontSize={"10px"} as={"p"}>Highly secure and fully functional payment gateways.</Text>
    </Box>
    </Stack>
    <Stack borderRadius={"5px"} display={"flex"} alignItems={"center"} flexDir={"row"} width={{lg:"23%",base:"98%",md:"48%"}} height={"100px"} background={"#C1E1C1"}>
    <Truck  />
    <Box  >
    <Text fontWeight={"600"} as={"H1"}>Free Shipping</Text>
    <Text pr={3} fontSize={"10px"} as={"p"}>Free Shipping for all orders above Rs.500</Text>
    </Box>
    </Stack>
    <Stack borderRadius={"5px"} display={"flex"} alignItems={"center"} flexDir={"row"} width={{lg:"23%",base:"98%",md:"48%"}} height={"100px"} background={"#FAC898"}>
    <Return />
    <Box  >
    <Text fontWeight={"600"} as={"H1"}>Easy returns</Text>
    <Text pr={3} fontSize={"10px"} as={"p"}>Return any of the purchased product at ease.</Text>
    </Box>
    </Stack>
    <Stack borderRadius={"5px"} display={"flex"} alignItems={"center"} flexDir={"row"} width={{lg:"23%",base:"98%",md:"48%"}} height={"100px"} background={"#F8C8DC"}>
    <Quality  />
    <Box  >
    <Text fontWeight={"600"} as={"H1"}>High Quality</Text>
    <Text pr={3} fontSize={"10px"} as={"p"}>All the products are double checked .</Text>
    </Box>
    </Stack>
    
   
    
    
   
    
    </Stack>
  )
}


function Truck (){
    return <Icon padding={2} color={"white"} mx={2} width={"50px"}  height={"50px"}  borderRadius={"50%"} backgroundColor={"gray.800"} as={MdDeliveryDining} />
}
function Quality (){
    return <Icon padding={2}  color={"white"} mx={2} width={"50px"}  height={"50px"}  borderRadius={"50%"} backgroundColor={"gray.800"} as={MdOutlineHighQuality} />
}
function Cash (){
    return <Icon padding={2} color={"white"} mx={2} width={"50px"}  height={"50px"}  borderRadius={"50%"} backgroundColor={"gray.800"} as={MdOutlinePayments} />
}
function Return(){
    return <Icon padding={2}  color={"white"} mx={2} width={"50px"}  height={"50px"}  borderRadius={"50%"} backgroundColor={"gray.800"} as={MdOutlineCached} />
}


export default Features
