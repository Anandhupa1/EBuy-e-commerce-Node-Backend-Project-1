import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import CommonCarousel from './CarousalCommon'
import Hero from './Hero'


function Carousel() {
  return (
    <Hero/>
  )
}





function Grid1 (){
    return(
        <Grid
  className='HomeMainGrid'
  templateAreas={`
                  "nav main"
                  "nav main"`}
  gridTemplateRows={'100px 1fr 100px'}
  gridTemplateColumns={'1fr 350px '}
  h='300px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>

  <GridItem pl='2' bg='pink.300' area={'nav'}>
    <CommonCarousel/>
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
 

</Grid>
    )
}






export default Carousel
