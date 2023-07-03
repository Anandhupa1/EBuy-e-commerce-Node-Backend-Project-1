import React from 'react'
import { GridItem,Icon ,Input, border} from '@chakra-ui/react' 
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <GridItem pr={"50px"} alignItems={"center"} justifyContent={"space-between"} display={"flex"} flexDir={"row"} pl='0' borderRadius={"10px"} className='boxShadow' area={'header'}>
     <Input placeholder='search anything here' borderRadius={"10px"}  border={"0px"} width={"90%"} type="text" />
     < FaSearch cursor={"pointer"}/>
  </GridItem>
  )
}

function searchIcon(){
  return(
  <Icon bgColor={"red"} as={FaSearch}></Icon>
  )
}
export default Search
