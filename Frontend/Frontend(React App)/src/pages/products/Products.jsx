import { useEffect,useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Filters from "./Filters";
import Search from './Search';
import Main from "./Main";
import { useDispatch, useSelector } from 'react-redux';
import { Grid,GridItem } from "@chakra-ui/react"; 
import  Pagination  from './Pagination';
import Loader from '../../components/Loader';
import { baseUrl } from '../../configs/baseUrl';
import { changeCart, changeCartCount } from '../../store/cart-slice';
import { useLocation } from 'react-router-dom';
import showToast from '../../utils/toast';
function Products() {
   
    //  showToast("Heading","first toast","warning")

    const location = useLocation();
    const dispatch  = useDispatch();
  
    const [loaderStatus,setLoaderStatus] = useState(true);
  
  useEffect(()=>{
    setLoaderStatus(true);
      const queryParams = new URLSearchParams(location.search);
      let url = `${baseUrl}/products?${queryParams.toString()}`;
        fetch(url).then(response => response.json()).then(data => {
        dispatch(changeCart({data:data.data}));
        dispatch(changeCartCount({totalProducts:data.totalCount}));
        
    setLoaderStatus(false);
       })
  },[location.search]);





  return (
    <>
      <Header/>
      {loaderStatus?<Loader/>:<></>}
  <Grid pl={"5%"} pr={"5%"} pt={"3%"} pb={"100px"}
  templateAreas={`"filter header"
                  "filter main"
                  "filter footer"`} gridTemplateRows={'40px 1fr 40px'} gridTemplateColumns={'230px 1fr'} h='1200px'
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
