import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
    Stack,
    Image,
   
  } from '@chakra-ui/react';
  import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'
  import { useNavigate } from 'react-router-dom'; 
  import img1 from "../../assets/images/pngtreeimage.png"
  export default function SplitScreen() {
    const navigate = useNavigate();
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
         <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              img1
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'gray.800'}>Forgot password?</Link>
              </Stack>
              <Button _hover={{background:"white",color:"gray.800", border:"1px solid "}} background={"gray.800"} color={"white"} variant={'solid'}>
                Sign in
              </Button>
              <Text textAlign={"center"}>- or continue with -</Text>
              <Button onClick={()=>{window.location.assign("http://localhost:4500/auth/google")}}><GoogleIcon boxSize={"15px"}/></Button>
            </Stack>
          </Stack>
        </Flex>
       
      </Stack>
    );
  }