import React, { useState } from 'react'
import { GridItem,Icon ,Input, border} from '@chakra-ui/react' 
import { FaSearch } from "react-icons/fa";
import { baseUrl } from '../../configs/baseUrl';
import { useNavigate } from 'react-router-dom';
function Search() {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  let [inputValue,setInputValue]=useState(queryParams.get("search"));
  function appendQuery(q,v){ //_________function for updating the data of query param
    const queryParams = new URLSearchParams(location.search);
   queryParams.set(q, v);
   navigate(`?${queryParams.toString()}`);
  //_______________________________________________________________________
  }








  return (
    <GridItem pr={"50px"} alignItems={"center"} justifyContent={"space-between"} display={"flex"} flexDir={"row"} pl='0' borderRadius={"10px"} className='boxShadow' area={'header'}>
     <Input onChange={(e)=>{setInputValue(e.target.value)}} onKeyDown={(e)=>{appendQuery("search",inputValue)}} value={inputValue} placeholder='search anything here' borderRadius={"10px"}  border={"0px"} width={"90%"} type="text" />
     < FaSearch onClick={()=>{appendQuery("search",inputValue)}} cursor={"pointer"}/>
  </GridItem>
  )
}

function searchIcon(){
  return(
  <Icon  as={FaSearch}></Icon>
  )
}
export default Search
