// src/components/Login.js
import React, { useState } from 'react';
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Text,
  Link,
  Heading,
} from '@chakra-ui/react';

const Login = ({ onSwitchForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <VStack spacing={4} align="center" mt={8}>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <FormControl>
          <FormLabel>Email:</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password:</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4} width="100%">
          Login
        </Button>
      </form>
      <Text mt={4}>
        Don't have an account?{' '}
        <Link color="teal" onClick={() => onSwitchForm('signup')}>
          Signup
        </Link>
      </Text>
    </VStack>
  );
};

export default Login;
