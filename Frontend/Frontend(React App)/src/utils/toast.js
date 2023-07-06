import { useToast } from "@chakra-ui/react";
const showToast = (title,description,status) => {
  let tit =title||"alert";
  let stat = status||"info";

  const toast = useToast();
  toast({
    title: tit,
    description: description,
    status: stat,
    position:"top-right",
    duration: 5000, // Duration in milliseconds
    isClosable: true,
  });
};

export default showToast;