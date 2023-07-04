import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filters from "./Filters";
import Search from './Search';
import Main from "./Main";
import { useSelector } from 'react-redux';
import { Grid,GridItem } from "@chakra-ui/react"; 
import  Pagination  from './Pagination';
import Loader from '../../components/Loader';
function Products() {
  const loaderStatus = useSelector((store)=>store.loader.status);
  return (
    <>
      <Header/>
      {loaderStatus?<Loader/>:<></>}
  <Grid
  pl={"5%"} pr={"5%"} pt={"3%"} pb={"100px"}
  templateAreas={`"filter header"
                  "filter main"
                  "filter footer"`}
  gridTemplateRows={'40px 1fr 40px'}
  gridTemplateColumns={'230px 1fr'}
  h='1200px'
  gap='3'
  color='blackAlpha.700'
  fontWeight='bold'
>
 <Search/>
 <Filters/>
 <Main/>
 <Pagination/>
</Grid>
      
<Footer/>
    </>
  )
}

export default Products
