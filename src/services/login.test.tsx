import { login } from './login';

describe('login', () => {
  const mockAlert = jest.fn();

  beforeAll(() => {
    window.alert = mockAlert; // Mock do alert
  });

  beforeEach(() => {
    mockAlert.mockClear(); // Limpa o mock antes de cada teste
  });

  it('Deve exibir um alert com a mensagem "Bem vinda, Bruna!"', () => {
    login('Bruna', 'password123'); // Passa argumentos válidos
    expect(mockAlert).toHaveBeenCalledWith('Bem vinda, Bruna!');
  });

  it('Deve exibir um erro se email ou senha estiverem ausentes', () => {
    login('', 'password123'); // Email ausente
    expect(mockAlert).toHaveBeenCalledWith('Erro: Email ou senha inválidos.');

    login('Bruna', ''); // Senha ausente
    expect(mockAlert).toHaveBeenCalledWith('Erro: Email ou senha inválidos.');
  });
});
