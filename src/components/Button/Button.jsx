import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

// Componente reutilizável de botão
export const Button = ({ onClick, children, ...props }) => {
  return (
    <ChakraButton onClick={onClick} {...props}>
      {children}
    </ChakraButton>
  );
};
