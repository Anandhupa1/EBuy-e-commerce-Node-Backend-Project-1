
import { CheckCircleIcon } from '@chakra-ui/icons';
import { GridItem,Input,Alert,AlertIcon,AlertTitle,AlertDescription,Stack,Heading,Checkbox, Box, Button,Text,Image,P, SimpleGrid } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchProducts from "./fetchProducts"
import { useDispatch, useSelector } from 'react-redux';
import showToast from "../../utils/toast";




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
  const staticData = useSelector((store)=>store.static.static);
  const navigate = useNavigate();
  let arr = []
  staticData.colors.forEach((item)=>{arr.push(`#${item._id}`)})
  console.log(arr)
  function appendQuery(q,v){ //_________function for updating the data of query param
    const queryParams = new URLSearchParams(location.search);
   queryParams.set(q, v);
   navigate(`?${queryParams.toString()}`);
  //_______________________________________________________________________
  }
  return(
    <SimpleGrid gap={1.5}  minChildWidth={"20px"} width={"100%"}  height={"50%"}>
     <GridItem as={"Button"} value={false} cursor={"pointer"} onClick={(e)=>{appendQuery("color",e.target.value)}}  borderRadius={"50%"} height={"20px"} borderWidth={"1px"} color={"gray.900"} borderColor={"gray.900"} fontSize={"10px"} >all</GridItem>
     
     {arr.map((item,i)=>{
      
      return <GridItem key={i} as={"Button"} value={item.slice(1,item.length)} cursor={"pointer"} onClick={(e)=>{appendQuery("color",e.target.value)}} borderRadius={"50%"} height={"20px"} bgColor={item}></GridItem>
    
     })}
     </SimpleGrid>
  )
}
function Stock(){
  const [pmin,setPmin]=useState("");
  const [pmax,setPmax]=useState("");
  useEffect(()=>{
    const queryParams = new URLSearchParams(location.search);
    const pmin = queryParams.get("pmin");
    const pmax = queryParams.get("pmax");
    setPmin(pmin);
    setPmax(pmax);
  },[location.search]);
 
  
  const navigate = useNavigate();
  let arr = ["pink.500","blue.700","gray.500","blue.100","yellow.300","orange.700","green","gold","black","gray.300"]
  function appendQuery(q,v){ //_________function for updating the data of query param
    const queryParams = new URLSearchParams(location.search);
   queryParams.set(q, v);
   navigate(`?${queryParams.toString()}`);
  //_______________________________________________________________________
  }
  return(
    <Stack>
      <Checkbox onChange={(e)=>{appendQuery("pmin",0);appendQuery("pmax",500)}} isChecked={pmin==0&&pmax==500} fontSize={"10px"} colorScheme='red' value='500'>below 500</Checkbox>
      <Checkbox onChange={(e)=>{appendQuery("pmin",500);appendQuery("pmax",1000)}} isChecked={pmin==500&&pmax==1000} fontSize={"10px"} colorScheme='red' value='1000'>500 to 1000</Checkbox>
      <Checkbox onChange={(e)=>{appendQuery("pmin",1000);appendQuery("pmax",false)}} isChecked={pmin==1000&&pmax=='false'} mb={4} fontSize={"10px"} colorScheme='red' value='1000'>above 1000</Checkbox>
      
      {/* select a price range */}
      <label htmlFor="">or select a price range</label>
      <Stack display={"flex"} flexDir={"row"} width={"100%"}>
      <Input onChange={(e)=>{setPmin(e.target.value)} }   placeholder='min' type='number'/>
      <Input onChange={(e)=>{setPmax(e.target.value)} } placeholder='max' type='number'/>
      <Button onClick={()=>{appendQuery("pmax",pmax);appendQuery("pmin",pmin)}} ><CheckCircleIcon/></Button>
      </Stack>
      
      
    </Stack>
  )
}

function Categories1(){
  const staticData = useSelector((store)=>store.static.static);
  const staticFlag = useSelector((store)=>store.static.present);
  const dispatch = useDispatch();
  
  useEffect(()=>{
  if(!staticFlag){
    fetch(`${baseUrl}/products/static`).then((data)=>{return data.json()})
    .then((data)=>{
     dispatch(addStaticData({static:data}));
     
    })
    .catch((err)=>{console.log(error)})
  }

  },[])

  //dealing with query params__________________________________________________
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  function appendQuery(q,v){ //_________function for updating the data of query param
    const queryParams = new URLSearchParams(location.search);
   queryParams.set(q, v);
   navigate(`?${queryParams.toString()}`);
  //_______________________________________________________________________
  }
  
  // function fetchProducts(){
  //   alert(queryParams.toString())
  // }
  

  return(
    
    <Stack className='boxShadow' borderRadius={"10px"} mt={2} width={"100%"} p={3}  height={"auto"} >
    <Heading color={"black"} fontSize={"15px"}>Categories</Heading>
    <Stack display={"flex"} flexWrap={"wrap"} flexDir={"row"} >

    {/* <Button onClick={(e)=>{appendQuery("category",e.target.innerText)}}>any </Button> */}
    {staticData.categories.map((item)=>{
      return <Button onClick={(e)=>{appendQuery("category",item._id)}}>{item.name} </Button>
    })}
    

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
//dealing with query params__________________________________________________
const queryParams = new URLSearchParams(location.search);
const navigate = useNavigate();
const [size,setSize]=useState("")

function appendQuery(q,v){ //_________function for updating the data of query param
 queryParams.set(q, v);
 navigate(`?${queryParams.toString()}`);
}
useEffect(()=>{
  getSizeFromQuery()
},[location.search])
function getSizeFromQuery(){
  const queryParams = new URLSearchParams(location.search);
  const size = queryParams.get("size");
  setSize(size);

}




  return (
    <Stack display={"flex"} >
 
    <Checkbox onChange={(e)=>{appendQuery("size",e.target.value)}} isChecked={size=="false"} fontSize={"15px"} colorScheme='red' value={false}>All</Checkbox>
    <Checkbox onChange={(e)=>{appendQuery("size",e.target.value)}} isChecked={size=="S"} fontSize={"15px"} colorScheme='red' value='S'>S(20)</Checkbox>
    <Checkbox onChange={(e)=>{appendQuery("size",e.target.value)}} isChecked={size=="M"} fontSize={"15px"} colorScheme='red' value='M'>M(3)</Checkbox>
    <Checkbox onChange={(e)=>{appendQuery("size",e.target.value)}} isChecked={size=="L"} fontSize={"15px"} colorScheme='red' value='L'>L(5)</Checkbox>
    <Checkbox onChange={(e)=>{appendQuery("size",e.target.value)}} isChecked={size=="XL"} fontSize={"15px"} colorScheme='red' value='XL'>XL</Checkbox>
    <Checkbox onChange={(e)=>{appendQuery("size",e.target.value)}} isChecked={size=="XXL"} fontSize={"15px"} colorScheme='red' value='XXL'>XXL</Checkbox>
    
    </Stack>
  )
}