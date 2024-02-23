// src/components/Signup.js
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
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

function Signup({ onSwitchForm }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log(
      'Signing up with:',
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
    );
  };

  return (
    <VStack spacing={4} align="center" mt={8}>
      <Heading>Signup</Heading>
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
        <FormControl>
          <FormLabel>First Name:</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Last Name:</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Phone Number:</FormLabel>
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry="US"
            inputComponent={(props) => (
              <Input
                {...props}
                border="1px solid #CBD5E0"
                borderRadius="0.25rem"
                _focus={{
                  border: '1px solid #38B2AC',
                }}
              />
            )}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={4} width="100%">
          Signup
        </Button>
      </form>
      <Text mt={4}>
        Already have an account?{' '}
        <Link color="teal" onClick={() => onSwitchForm('login')}>
          Login
        </Link>
      </Text>
    </VStack>
  );
}

export default Signup;
