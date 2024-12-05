import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

describe('Card Component', () => {
  it('should display a welcome alert on button click', () => {
    // Simula o alert
    window.alert = jest.fn();

    render(<Card />);

    // Digita o email
    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    fireEvent.change(emailInput, { target: { value: 'bruna.villanova@hotmail.com' } });

    // Clica no botão
    const button = screen.getByText(/entrar/i);
    fireEvent.click(button);

    // Verifica o alert
    expect(window.alert).toHaveBeenCalledWith('Bem-vinda, bruna!');
  });
});
