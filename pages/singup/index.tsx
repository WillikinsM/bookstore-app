import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormHelperText,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { Formik } from "formik";
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import { observer } from 'mobx-react-lite';
import * as Yup from "yup";
import Router from 'next/router';
import authStore from '../../stores/AuthStore';
import { useEffect } from 'react';

const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values: any) => {
  var noRedirect = authStore.register(values.firstname, values.lastname, values.email, values.passwordConfirmation);

  if (await noRedirect === false) {
      sleep(35000).then(() => {
        Router.push('/login');
        authStore.error = null;
      })
      
    }
}


const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required").min(3,"First Name must be at least 3 characters").max(30,"First Name must be at most 30 characters"),
  lastName: Yup.string().required("Last Name is required").min(3,"First Name must be at least 3 characters").max(30,"First Name must be at most 30 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
  passwordConfirmation:Yup.string().test('passwords-match', 'Passwords must match', function(value){
    return this.parent.password === value
  })
});


const SignupCard = observer(()  => {
  useEffect(() => { 
    authStore.getUserStatus();
    if(authStore.isLoggedIn){
      Router.push('/');
    }
  },[]);

  let alert : JSX.Element;
  let isLoading: boolean = false;

  if(authStore.error === true) {
    isLoading = false;
    alert =  
    <Alert status='error'>
    <AlertIcon />
      Email already exists!
    </Alert>
  }else if(authStore.error === false) {
    isLoading = true;
    alert =   
    <Alert status='info'>
    <AlertIcon />
      Successfully registered!
      Check your email to verify your account.
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
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={5} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8} 
          >
        {alert}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>

          {({ handleSubmit, values, errors }) => (
          <Stack spacing={4}
          as="form"
          onSubmit={handleSubmit as any}
          >
            <HStack>
              <Box>
                 <FormControl  id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <InputControl name="firstName" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired >
                  <FormLabel>Last Name</FormLabel>
                  <InputControl name="lastName" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputControl name="email" />
              <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputControl name="password" />
            </FormControl>
            <FormControl id="passwordConfirmation" isRequired>
              <FormLabel>Confirm Password</FormLabel>
                <InputControl name="passwordConfirmation"   />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <SubmitButton
                isLoading={isLoading}
                size="lg"
                bg={'black'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                
                >
                Sign up
              </SubmitButton>
            </Stack>
            
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} href="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
           )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
    </>
  );
});

export default SignupCard;

