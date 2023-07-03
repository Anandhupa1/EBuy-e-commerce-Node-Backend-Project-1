import React from 'react'
import { GridItem,Button,Box,Text, } from '@chakra-ui/react'
function Pagination() {
  return (
    <GridItem  borderRadius={"10px"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"space-between"} p='2' className='boxShadow' area={'footer'}>
    <Text pl={2} fontSize={"12px"}>12 out of 30</Text>
    <Box display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"space-evenly"} >
      <Box as="Button" m={2} fontSize={"9px"} fontWeight={800}  bgColor={"gray.300"} borderRadius={"full"} width={"20px"} height={"20px"}  >1</Box>
      <Box as="Button" m={2} fontSize={"9px"} fontWeight={800}  bgColor={"gray.300"} borderRadius={"full"} width={"20px"} height={"20px"}  >1</Box>
      <Box as="Button" m={2} fontSize={"9px"} fontWeight={800}  bgColor={"gray.300"} borderRadius={"full"} width={"20px"} height={"20px"}  >1</Box>
      <Box as="Button" m={2} fontSize={"9px"} fontWeight={800}  bgColor={"gray.300"} borderRadius={"full"} width={"20px"} height={"20px"}  >1</Box>
    </Box>
  </GridItem>
  )
}

export default Pagination
