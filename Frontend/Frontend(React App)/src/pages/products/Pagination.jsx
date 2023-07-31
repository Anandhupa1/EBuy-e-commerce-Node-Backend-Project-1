import React, { useState } from 'react';
import { GridItem, Text, Box } from '@chakra-ui/react'; // Assuming you are using Chakra UI

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const queryParams = new URLSearchParams(location.search);
  
  const [clickedButton, setClickedButton] = useState(parseInt(queryParams.get("page"))-1);
  const totalCount = useSelector((store)=>store.cart.totalProducts);
  const products = useSelector((store)=>store.cart.cart);
  
  const navigate = useNavigate()
  function appendQuery(q,v){ //_________function for updating the data of query param
  const queryParams = new URLSearchParams(location.search);
  queryParams.set(q, v);
  navigate(`?${queryParams.toString()}`);
  //_______________________________________________________________________
  }

  const handleButtonClick = (buttonIndex) => {
    setClickedButton(buttonIndex);
  };
  
  return (
    <GridItem borderRadius="10px" display="flex" flexDir="row" alignItems="center" justifyContent="space-between" p="2" className="boxShadow" area="footer">
      <Text pl={2} fontSize="12px"> {products.length} out of {totalCount}</Text>
      <Box display="flex" flexDir="row" alignItems="center" justifyContent="space-evenly">
        
        {Array.apply(null,{length:Math.ceil(totalCount/12)}).map((item,i)=>{
          return   <Box as="button" m={2} fontSize="9px" fontWeight={800} bgColor={clickedButton === i ? 'blue.500' : 'gray.300'} borderRadius="full" width="20px" height="20px"
          onClick={() =>{ handleButtonClick(i);appendQuery("page",i+1) }} >
            {i+1}
          </Box>
        })}
      

        
        
        {/* <Box
          as="button"
          m={2}
          fontSize="9px"
          fontWeight={800}
          bgColor={clickedButton === 3 ? 'blue.800' : 'gray.300'}
          borderRadius="full"
          width="20px"
          height="20px"
          onClick={() => handleButtonClick(3)}
        >
          4
        </Box> */}
      </Box>
    </GridItem>
  );
}

export default Pagination;
