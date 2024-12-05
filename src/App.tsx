import React, { useState } from 'react';
import { 
  Center,
  Input,
  Box,
  Button,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import { login } from './services/login'; // Importa a função de serviços

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    login(email, password); // Chama a função importada
  };

  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px" width="300px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <FormControl marginTop="10px">
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input 
          id="email"
          type="email"
          placeholder="Digite seu email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </FormControl>
      <FormControl marginTop="10px">
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input 
          id="password"
          type="password"
          placeholder="Digite sua senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </FormControl>
      <Center>
        <Button 
          onClick={handleLogin} 
          colorScheme="teal" 
          size="sm" 
          width="100%" 
          marginTop="15px"
        >
          Entrar
        </Button>
      </Center>
    </Box>
  );
};

export default LoginForm;
