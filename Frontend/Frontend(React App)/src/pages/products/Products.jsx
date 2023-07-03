import React from 'react'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filters from "./Filters";
import Search from './Search';
import Main from "./Main"
import { Grid,GridItem } from "@chakra-ui/react"; 
import  Pagination  from './Pagination';
function Products() {
  return (
    <>
      <Header/>
      
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
