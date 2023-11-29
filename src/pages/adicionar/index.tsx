import { useEffect } from 'react';
import { verifica } from '@/verifica'; 

const adicionar = () => {
  useEffect(() => {
    const isAuthenticated = verifica();

    if (isAuthenticated) {
      // Restante do seu código para o cadastro...
    }
  }, []);

  // Restante do seu componente de cadastro...
};

export default adicionar;
