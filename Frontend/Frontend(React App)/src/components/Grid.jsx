import React from 'react'
import { Grid, Stack,Box, GridItem ,Image,Heading,Text} from '@chakra-ui/react' 
import CountdownTimer from './CountDown'
import ImageSlider from './slider'
function Offers() {
    let images =["https://mobirise.com/extensions/commercem4/assets/images/3.jpg",
                 "https://mobirise.com/extensions/commercem4/assets/images/1.jpg",
                "https://mobirise.com/extensions/commercem4/assets/images/gallery05.jpg"]
  return (
    <Grid p={"8%"} gap={3}  h={{base:"800px",md:"800px" ,lg:"600px"}} templateRows={{base:"repeat(4,1fr)",lg:"repeat(2,1fr)"}} templateColumns={{base:"repeat(2,2fr)",lg:"repeat(4,1fr)"}} >
    <GridItem  borderRadius={"5px"} background={"white"} rowSpan={2} colSpan={2} >
        <ImageSlider images={images}/>
    </GridItem>
    {/* offer banner starts */}
    <GridItem borderRadius={"5px"} colSpan={2} background={"white"} >
        <Box padding={2} display={"flex"} borderRadius={"5px"} width={"100%"} height={"100%"} bgColor={"blue.200"} >
        <Box display={"flex"} flexDir={"column"} justifyContent={"space-evenly"} p={4} width={"70%"} height={"100%"} >
            <Heading fontSize={"25px"} fontWeight={"700"} color={"white"}>Limited Time Offer</Heading>
            <CountdownTimer targetDate={new Date("2024-01-01T00:00:00")} />
        </Box>
        <Image objectFit={"cover"} width={"30%"} borderRadius={"5px"} src='https://img.myloview.com/posters/three-days-left-icon-offer-countdown-date-number-abstract-banner-with-stopwatch-3-days-to-go-sign-count-offer-date-chat-bubble-countdown-timer-with-number-vector-700-273294020.jpg'/>
       
        </Box>
    </GridItem>
     {/* offer banner ends */}
    <GridItem backgroundColor={"pink.100"} borderRadius={"5px"}  >
        <Image cursor={"pointer"} borderRadius={"5px"} objectFit={"cover"} width={"100%"} height={"100%"} src='https://img.freepik.com/premium-psd/limited-offer-12-12-sale-social-media-post-template_122059-1021.jpg'></Image>
    </GridItem>
    <GridItem borderRadius={"5px"} background={"yellow.100"} >
    
    <Image cursor={"pointer"} borderRadius={"5px"} objectFit={"cover"} width={"100%"} height={"100%"} src='https://5.imimg.com/data5/CT/DS/XK/SELLER-86986427/used-mi-mobile-phone-500x500.jpg'></Image>
    </GridItem>
   
   
    
    </Grid>
  )
}

export default Offers
