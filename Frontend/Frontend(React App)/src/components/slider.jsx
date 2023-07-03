import React, { useState, useEffect } from "react";
import { Box, Fade, Flex,Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <Box position="relative" width="100%" height="100%">
      {images.map((image, index) => (
        <Fade
          key={index}
          in={index === currentImageIndex}
          unmountOnExit
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Image borderRadius={"5px"} width="100%" height="100%" src={image} alt={`Slide ${index + 1}`} />
        </Fade>
      ))}
      <Flex
        position="absolute"
        bottom={4}
        left="50%"
        transform="translateX(-50%)"
        justifyContent="center"
        alignItems="center"
      >
      
        {images.map((_, index) => (
          <Box
            key={index}
            w="4"
            h="4"
            rounded="full"
            bg={currentImageIndex === index ? "gray.800" : "transparent"}
            border={"1px solid"}
            cursor="pointer"
            onClick={() => goToImage(index)}
            mx={1}
          />
        ))}
       
      </Flex>
    </Box>
  );
};

export default ImageCarousel;
