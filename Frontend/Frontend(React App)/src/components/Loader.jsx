import { Box, Spinner } from '@chakra-ui/react';

function Loader() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="9999"
      backgroundColor="rgba(0, 0, 0, 0.5)"
    >
      <Spinner color="white" size="xl" />
    </Box>
  );
}

export default Loader;
