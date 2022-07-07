import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import authStore from '../../stores/AuthStore';
import * as Yup from "yup";
import { observer } from 'mobx-react-lite';
import { Formik } from 'formik';
import Router from 'next/router';
import { useEffect } from 'react';




const onSubmit = async (values: any) => {

let redirect = authStore.login(values.email, values.password)

  if (await redirect === true) {
    Router.push('/');
    authStore.error = null;
  }

 
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required")
});




const LoginCard = observer(() => {
  useEffect(() => { 
    authStore.getUserStatus();
    if(authStore.isLoggedIn){
      Router.push('/');
    }
  },[]);


  let alert : JSX.Element;

  if(authStore.error === true) {
    alert =  
    <Alert status='error'>
    <AlertIcon />
      Username or password wrong!
    </Alert>
  }else if(authStore.error === false) {
    alert =   
    <Alert status='success'>
    <AlertIcon />
      Logged sucessfully! You will be redirected to the main page!
    </Alert>
  }else {
    alert = <></>;
  }


  return (
    <>
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={6}
      bg="black"
      color="white"
    >
      <Flex mr={2}>
        <Heading as="h1" size="md" letterSpacing={"tight"}>
          <Link href='/'>Bookstore</Link>  
        </Heading>
      </Flex>
    </Flex>

    <Flex
      minH={'85vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>

          {({ handleSubmit, values, errors }) => (
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          as="form"
          onSubmit={handleSubmit as any}>
          
          <Stack spacing={4}>      
           {alert}    
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputControl name='email' />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputControl name="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Text align={'center'}>
                  New here? <Link color={'blue.400'} href="/singup">Create an account</Link>
                </Text>
              </Stack>
              <SubmitButton
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                isLoading={false}
                >
                Sign in
              </SubmitButton>
            </Stack>
          </Stack>
        </Box>
         )}
         </Formik>
      </Stack>
      
    </Flex>
    </>
  );
});

export default LoginCard;