import  { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import TrendingProducts from '../components/TrendingProducts'
import Categories from '../components/Categories'
import  Offers  from '../components/Grid'
import Loader from '../components/Loader'
import { useSelector,useDispatch } from 'react-redux'
import { loaderStatusUpdate } from '../store/loader-slice'
import { Button } from '@chakra-ui/react'
import fetchProducts from './products/fetchProducts'
import { baseUrl } from '../configs/baseUrl'
import { addUserData } from '../store/auth-slice'
import { addStaticData } from '../store/static.slice'




function Home() {
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

  return (
    <>
      <Header/>
      {/* {loaderStatus?<Loader/>:<></>}
      <Button onClick={stopLoader}>stop</Button>
      <Button onClick={startLoader}>start</Button> */}
      <Carousel/>
      <Features/>
      <TrendingProducts/>
      <Categories/>
      <Offers/>
      <Footer/>
    
      
    </>
  )
}




export default Home



