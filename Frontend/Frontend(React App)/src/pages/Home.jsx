import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import TrendingProducts from '../components/TrendingProducts'
import Categories from '../components/Categories'
import  Offers  from '../components/Grid'

function Home() {
  return (
    <>
      <Header/>
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
