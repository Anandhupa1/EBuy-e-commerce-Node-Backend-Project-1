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



function Home() {

 
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



