import React from 'react'
import Card from "./Product"
import { GridItem,Box ,SimpleGrid} from '@chakra-ui/react'
import { useSelector } from 'react-redux';

function Main() {
  let count =0;
  const cart = useSelector((store)=>store.cart.cart);
  return (
    <GridItem borderRadius={"10px"} className='boxShadow' p='4'  area={'main'}
    >
    <SimpleGrid 
    columns={4} 
     alignContent={"flex-start"}
     rowGap={"10px"} 
     spacing={2}
     width={"100%"}
     height={"100%"}  >
  
   {
   
    cart.map(item => {
      count++;
      return <Card item={item}/>
    })
    
  
   }
    

    
    </SimpleGrid>




  </GridItem>
  )
}






export default Main
