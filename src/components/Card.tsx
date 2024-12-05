import React, { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

export const Card = () => {
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    if (!email.trim()) {
      alert('Por favor, insira um email válido!');
      return;
    }

    // Extrai apenas o nome e transforma em letras minúsculas
    const name = email.split('@')[0].toLowerCase().split('.')[0]; // Pega apenas o primeiro nome, caso o email tenha "nome.sobrenome"
    alert(`Bem-vinda, ${name}!`);
  };

  return (
    <Box className="card" border="1px solid #ddd" padding="20px" borderRadius="10px">
      <h1>Faça o login</h1>
      <Input
        type="email"
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        marginBottom="10px"
      />
      <Button onClick={handleButtonClick} colorScheme="blue">
        Entrar
      </Button>
    </Box>
  );
};
