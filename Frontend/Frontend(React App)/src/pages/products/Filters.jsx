import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons';
import { GridItem,Input,Stack,Heading,Checkbox, Box, Button,Text,Image,P, SimpleGrid } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';




function Filters() {
  return (
     <GridItem display={"flex"} justifyContent={"space-between"} flexDir={"column"}  area={'filter'}>
     <Categories1/>
     <Subfilter/>
     {/* <Tags/> */}
     <Random/>
     </GridItem>

  )
}

export default Filters

// sub componenents
function Categories(){
  return(
    <Stack p={"4"} width={"100%"} height={"auto"} className='boxShadow' borderRadius={"10px"} >
    <Heading fontWeight={900} color={"grey.800"} fontSize={"17px"} >Shop By Categories</Heading>
    <Button p={1} value={"laptop"} onClick={(e)=>{alert(e.target.value)}} color={"gray.600"} backgroundColor={"yellow.100"} >Laptops</Button>
    <Button textAlign={"left"} p={1} value={"laptop"} onClick={(e)=>{alert(e.target.value)}} color={"gray.600"} backgroundColor={"pink.200"} >Mobile</Button>
    <Button textAlign={"left"} p={1} value={"laptop"} onClick={(e)=>{alert(e.target.value)}} color={"gray.600"} backgroundColor={"blue.200"} >Plants</Button>
   </Stack>
  )
}

function Subfilter(){
  return (
    <Stack p={"4"} width={"100%"} mt={"20px"} height={"auto"} className='boxShadow' borderRadius={"10px"} >
     <Heading color={"black"} fontWeight={900} fontSize={"17px"}>Filter By</Heading>
     
     <Heading mt={"2"} mb={"2"} fontSize={"15px"} >Price</Heading>
     <Stock/>
     <Heading mt={"2"} mb={"2"}fontSize={"15px"} >color</Heading>
     <Colors/>
     <Heading mt={"2"} mb={"2"} fontSize={"15px"} >size</Heading>
     <Size/>
 
     </Stack>
  )
}


function Colors(){
  let arr = ["pink.500","blue.700","gray.500","blue.100","yellow.300","orange.700","green","gold","black","gray.300"]
  return(
    <SimpleGrid gap={1.5}  minChildWidth={"20px"} width={"100%"}  height={"50%"}>
     <GridItem as={"Button"} value="#ffff" cursor={"pointer"} onClick={(e)=>{alert(e.target.value)}}  borderRadius={"50%"} height={"20px"} bgColor={"pink.400"}></GridItem>
     <GridItem as={"Button"} value="#ffff" cursor={"pointer"} onClick={(e)=>{alert(e.target.value)}} borderRadius={"50%"} height={"20px"} bgColor={"blue.500"}></GridItem>
      <GridItem as={"Button"} value="#ffff" cursor={"pointer"} onClick={(e)=>{alert(e.target.value)}} borderRadius={"50%"} height={"20px"} bgColor={"red"}></GridItem>
     {arr.map((item,i)=>{
      return <GridItem key={i} as={"Button"} value="#ffff" cursor={"pointer"} onClick={(e)=>{alert(e.target.value)}} borderRadius={"50%"} height={"20px"} bgColor={item}></GridItem>
    
     })}
     </SimpleGrid>
  )
}
function Stock(){
  return(
    <Stack>
      <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>below 500</Checkbox>
      <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>500 to 1000</Checkbox>
      <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>above 1000</Checkbox>
      
      {/* select a price range */}
      <label htmlFor="">or select a price range</label>
      <Stack display={"flex"} flexDir={"row"} width={"100%"}>
      <Input placeholder='min' type='number'/>
      <Input placeholder='max' type='number'/>
      <Button ><CheckCircleIcon/></Button>
      </Stack>
      
      
    </Stack>
  )
}

function Categories1(){
  const queryParams = new URLSearchParams();
  const navigate = useNavigate();
  // queryParams.append('category', selectedCategory);
  // queryParams.append('price', selectedPrice);
  // const link = `/product?${queryParams.toString()}`;
  function appendQuery(q,v){
   queryParams.append(q,v);
   
   navigate(`?${queryParams.toString()}`);
  //  alert("appended")
  }


  return(
    
    <Stack className='boxShadow' borderRadius={"10px"} mt={2} width={"100%"} p={3}  height={"auto"} >
    <Heading color={"black"} fontSize={"15px"}>Categories</Heading>
    <Stack display={"flex"} flexWrap={"wrap"} flexDir={"row"} >
    <Button onClick={(e)=>{appendQuery("category",e.target.innerText)}}>any </Button>
    <Button>indor plants</Button>
    <Button>laptop</Button>
    <Button>outdoor plants</Button>
    
    <Button>iphone</Button>
    
    </Stack>
    
    </Stack>
  )
}
function Random(){
  return(
    
    <Stack className='boxShadow'  borderRadius={"10px"} mt={2} height={"auto"} p={3}   >
    <Heading color={"black"} fontSize={"15px"} >You may also like</Heading>
    
    <Box display={"flex"} justifyContent={"center"} flexDir={"row"} >
    <Image width={"30%"} src='https://media.istockphoto.com/id/1254253991/vector/smartphone-on-white-background.jpg?s=612x612&w=0&k=20&c=puMpLAMiNvWWILLDdaTwlvA2jJRHusJH-TF6xIVzO-s='/>
    <Box >
    <Text color={"black"} fontSize={"10px"} as={"h3"}>Apple I phone with a mega discount </Text>
    <Box color="gold" >*****</Box>
    <Text>$3455</Text>
    </Box>
    </Box>

    <Box display={"flex"} justifyContent={"center"} flexDir={"row"} >
    <Image width={"30%"} src='https://media.istockphoto.com/id/1254253991/vector/smartphone-on-white-background.jpg?s=612x612&w=0&k=20&c=puMpLAMiNvWWILLDdaTwlvA2jJRHusJH-TF6xIVzO-s='/>
    <Box >
    <Text color={"black"} fontSize={"10px"} as={"h3"}>Apple I phone with a mega discount </Text>
    <Box color="gold" >*****</Box>
    <Text>$3455</Text>
    </Box>
    </Box>


   
    
    </Stack>
    

  )
}






function Size (){
  return (
    <Stack display={"flex"} >
    <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>S(10)</Checkbox>
    <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>M(3)</Checkbox>
    <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>L(5)</Checkbox>
    <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>XL</Checkbox>
    <Checkbox fontSize={"15px"} colorScheme='red' value='naruto'>XXL</Checkbox>
    
    </Stack>
  )
}