import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const CountdownTimer = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  function getTimeRemaining() {
    const totalSeconds = Math.floor((targetDate - new Date()) / 1000);

    if (totalSeconds <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <Box display={"flex"} justifyContent={"space-between"}  flexDir={"row"} align="center">
      <Box display={"flex"} flexDir={"column"} >
      <Text fontSize="4xl" fontWeight="bold">
        {timeRemaining.days}
      </Text>
      <Text>Days</Text>
      </Box>
      
      <Box display={"flex"} flexDir={"column"}>
      <Text fontSize="4xl" fontWeight="bold">
        {timeRemaining.hours}
      </Text>
      <Text>Hours</Text>
      </Box>
      <Box display={"flex"} flexDir={"column"}>
      <Text fontSize="4xl" fontWeight="bold">
        {timeRemaining.minutes}
      </Text>
      <Text>Minutes</Text>
      </Box>
      <Box display={"flex"} flexDir={"column"}>
      <Text fontSize="4xl" fontWeight="bold">
        {timeRemaining.seconds}
      </Text>
      <Text>Seconds</Text>
      </Box>
      
   
      
   
    </Box>
  );
};

export default CountdownTimer;
