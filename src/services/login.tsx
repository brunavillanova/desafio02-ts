export const login = (email: string, password: string): void => {
    if (!email || !password) {
      alert('Erro: Email ou senha inválidos.');
      return;
    }
    alert(`Bem vinda, ${email}!`);
  };
  