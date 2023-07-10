import React from 'react'
import Card from "./Product"
import { GridItem,Box ,SimpleGrid,Image} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import emptyImage from "../../assets/images/empty1.png"
function Main() {
  let count =0;
  const cart = useSelector((store)=>store.cart.cart);
  return (
    <GridItem borderRadius={"10px"} className='boxShadow' p='4'  area={'main'}
    >
 {
   cart.length!==0?(
      
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
   )
   :
   
   <Image marginLeft={"200px"} marginTop={"100px"} width={"400px"} height={"400px"} src={emptyImage} />
  
   }
    

    
  




  </GridItem>
  )
}






export default Main
