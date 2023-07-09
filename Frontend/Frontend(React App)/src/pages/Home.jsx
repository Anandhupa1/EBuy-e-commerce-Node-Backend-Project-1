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




function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    async function fetchData() {
      try {
        const data = await fetchLoginedUserData();
        //______________set the data in redux;
       
      if(data){dispatch(addUserData(data))}
        
      } catch (error) {
        // Handle any errors
      }
    }
    fetchData();
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




async function fetchLoginedUserData(){
  const cookies = document.cookie.split(';');
  let authToken ;
    // Find the authToken cookie
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith('authToken=')) {
        authToken = cookie.substring('authToken='.length);
        
        break;
      }
    }
    // console.log('authToken:', authToken);
    if(authToken){
      let res = await fetch(`${baseUrl}/users/login/user`, {
        method: 'GET', // or any other HTTP method
        credentials: 'include' // include cookies and authentication headers
      })
      let result ;
      let data = await res.json();
      result =data;
     
      return result;
    
    }else{return false}
}

export default Home



