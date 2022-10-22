import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { useSignInMutation } from '@/store/api/user.service';

type FormData = {
  username: string;
  password: string;
};

export default function LoginForm() {
  const [signIn, { data: signInData }] = useSignInMutation();
  const toast = useToast();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>(formOptions);

  function onSubmit({ username, password }: FormData) {
    signIn({
      username,
      password,
    });
  }

  useEffect(() => {
    if (signInData && signInData.code === 1) {
      toast({
        title: `Sign in success`,
        position: 'top-right',
        status: 'success',
        isClosable: true,
      });
      navigate('/sample');
    }
    if (signInData && signInData.code !== 1) {
      toast({
        title: signInData.msg,
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  }, [signInData, toast]);

  return (
    <Box w="md" p={10} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box mb="10" fontSize="xl" fontWeight="bold" noOfLines={1} textAlign="center">
        Login Form
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={!!errors?.username}>
          <FormLabel>Username</FormLabel>
          <Input {...register('username')} />
          <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors?.password}>
          <FormLabel>Password</FormLabel>
          <Input {...register('password')} />
          <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
        </FormControl>
        <Button
          w="100%"
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
          disabled={!!errors?.username || !!errors?.password}
        >
          Sign in
        </Button>
      </form>
    </Box>
  );
}
