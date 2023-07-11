import {Box,Flex,Text,IconButton,Button,Stack,Collapse,Icon,Link,Popover,PopoverTrigger,PopoverContent,useColorModeValue,useBreakpointValue,useDisclosure,
Menu,MenuButton,Avatar,MenuList,MenuItem,MenuDivider, AlertDialog,} from '@chakra-ui/react';
import {HamburgerIcon,CloseIcon,ChevronDownIcon,ChevronRightIcon,} from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import { baseUrl } from '../configs/baseUrl';

export default function WithSubnavigation() {
  const [userData, setUserData] =useState(false);
  const [loginStatus,setLoginStatus] =useState(false)
  const { isOpen, onToggle } = useDisclosure();
  //reading redux store item
  // const userData = useSelector((store)=>store.auth.userData);
  //const loginStatus = useSelector((store)=>store.auth.logined);
  //console.log(userData,loginStatus)
  //redux store item read.
//checking user login status __________________________________________
const dispatch = useDispatch();
useEffect(()=>{
  async function fetchData() {
    try {
      
      const status = await fetchLoginedUserData();
     
      if(status && !loginStatus){
       
       
        //fetch and use userdata 
     
      let res = await fetch(`${baseUrl}/users/login/user`, {
        method: 'GET', // or any other HTTP method
         credentials: 'include' // include cookies and authentication headers
       })
    if(res.ok){
    
      let data = await res.json();
      setUserData(data);
      setLoginStatus(true)
    }else{alert("res.ok!==true")}
     
      }




      //______________set the data in redux;
     
    // if(data){dispatch(addUserData(data))}
    if(data){setUserData(data); alert("user data set");setLoginStatus(true)}
   
    } catch (error) {
      // Handle any errors
      console.log(error)
    }
  }
  fetchData();
},[])

//____________________________________________________________________



  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'50px'}
        py={{ base: 0 }}
        px={{ base: "8%" }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        {!loginStatus? // checking user is logged in or not.
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/signup'}>
            Sign Up
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'gray.800'}
            href={'/signin'}
            _hover={{
              bg: 'gray.100',
              color:'gray.800'
            }}>
            Log in
          </Button>
        </Stack>
        :
        // if user is logged in ___________________________________________________________________
        <Flex alignItems={'center'}>
            <Menu>
            
            <MenuButton
  as={Button}
  rounded={'full'}
  variant={'link'}
  cursor={'pointer'}
  display={'flex'}
  alignItems={'center'}
  justifyContent={'center'}
  minW={0}
>
  <Flex align="center"> 
    <Text as={"p"} fontSize={"12px"}>{loginStatus ? userData.name : 'username'}▼ </Text>
    <Avatar
      size={'sm'}
      src={
        loginStatus
          ? userData.profilePic
          : 'https://img.freepik.com/premium-vector/men-icon-trendy-avatar-character-cheerful-happy-people-flat-vector-illustration-round-frame-male-portraits-group-team-adorable-guys-isolated-white-background_275421-286.jpg?w=2000'
      }
    />
  </Flex>
</MenuButton>
              <MenuList>
                <Link href='/signup'>  <MenuItem>create another account</MenuItem></Link>
                <Link href='/signin'>  <MenuItem>Login with another account</MenuItem></Link>
               
                
                
                <MenuDivider />
                <Link href='#'>  <MenuItem>Logout</MenuItem></Link>
              </MenuList>
            </Menu>
          </Flex>

        }             

      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Products',
    children: [
      {
        label: 'Laptops',
        subLabel: 'Latest laptops at lowest price',
        href: '/products',
      },
      {
        label: 'Mobile phones',
        subLabel: 'Discover cutting-edge mobile phones that redefine technology at unbeatable prices.',
        href: '/products',
      },
    ],
  },
  
  {
    label: 'cart',
    href: '/cart',
  },
  {
    label: 'checkout',
    href: '/checkout',
  },
];


//_________________________________________________________



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
  if(authToken){return true}
  else {return false}
    // if(authToken){
     
    //   let res = await fetch(`${baseUrl}/users/login/user`, {
    //     method: 'GET', // or any other HTTP method
    //     credentials: 'include' // include cookies and authentication headers
    //   })
    
    //   let data = await res.json();
      
     
    //   return data;
    
    // }else{return false}
}


