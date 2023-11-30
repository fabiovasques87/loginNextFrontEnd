import { useEffect, useState } from 'react';
import { verifica } from '@/verifica'; 

import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';


const index = () => {

  const router = useRouter();
  const [contentVisible, setContentVisible] = useState(false);



  useEffect(() => {
  const decodedToken = verifica();

  if (!decodedToken) {
    // Se não houver token, redirecione o usuário de volta para a página de login
    router.push('/');
  } else {
    // Verifique se o token inclui informações de função (role)
    if (decodedToken.role === 'adm') {
      setContentVisible(true);
    // O usuário tem permissão de administrador
    console.log('Usuário é um administrador.');
    router.push('/adicionar')
    } else {
      // O usuário não tem permissão de administrador
      console.log('Usuário não é um administrador.');
      alert('Usuário não é um administrador.');
      router.push('/dashboard');
      }
    }
    }, []);

return (
  <div> página de adicionar produtos</div>
);

}

  // useEffect(() => {
  //   const isAuthenticated = verifica();

  //   if (isAuthenticated) {
  //     // Restante do seu código para o cadastro...
  //   }
  // }, []);

  // // Restante do seu componente de cadastro...

export default index;
