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
} from '@chakra-ui/react';
import { Formik } from "formik";
import { InputControl, SubmitButton } from 'formik-chakra-ui';
import { observer } from 'mobx-react-lite';
import * as Yup from "yup";
import Router from 'next/router';
import authStore from '../../stores/AuthStore';


const sleep = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));



const onSubmit = (values: any) => {
  authStore.register(values.firstname, values.lastname, values.email, values.passwordConfirmation);
  sleep(2000).then(() => {
    Router.push('/login');
  })
  
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


const SignupCard = observer(()  => 
{
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
                loadingText="Submitting"
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
   
  );
});

export default SignupCard;