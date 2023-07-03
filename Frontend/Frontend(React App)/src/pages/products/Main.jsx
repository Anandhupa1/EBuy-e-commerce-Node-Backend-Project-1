import React from 'react'
import Card from "./Product"
import { GridItem,Box ,SimpleGrid} from '@chakra-ui/react'

function Main() {
  
  return (
    <GridItem borderRadius={"10px"} className='boxShadow' p='4'  area={'main'}
    >
    <SimpleGrid columns={4} spacing={2}width={"100%"} height={"100%"}  >
    {/* <Box bg='tomato' height='300px'></Box> */}
   
   
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
   
    
    
  
   
    </SimpleGrid>
  </GridItem>
  )
}






export default Main
