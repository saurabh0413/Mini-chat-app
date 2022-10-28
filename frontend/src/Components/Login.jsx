import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const submitHandler = () => {};
  return (
    <div>
      <VStack spacing="5px">
        <FormControl id="signEmail" isRequired="true">
          <FormLabel> Email</FormLabel>
          <Input
            placeholder="enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="signPass" isRequired="true">
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="enter password"
            onChange={(e) => setPass(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue" width="100%" onClick={submitHandler}>
          Login
        </Button>
        <Button colorScheme="red" width="100%" onClick={submitHandler}>
          Get user credentials
        </Button>
      </VStack>
    </div>
  );
};

export default Login;
