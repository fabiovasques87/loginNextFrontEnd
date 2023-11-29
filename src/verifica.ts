import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';



export const verifica = () => {
  const router = useRouter();
  const token = localStorage.getItem('token');

  if (!token) {
    // Se não houver token, redirecione o usuário de volta para a página de login
    router.push('/login');
    return false; // Usuário não autenticado
  }

  // Decodifique o token para acessar suas informações
  const decodedToken = jwt.decode(token);

  // Verifique se o token inclui informações de função (role)
  if (decodedToken.role === 'adm') {
    // O usuário tem permissão de administrador
    console.log('Usuário é um administrador.');
    return true; // Usuário autenticado como administrador
  } else {
    // O usuário não tem permissão de administrador
    console.log('Usuário não é um administrador.');
    alert('Usuário não é um administrador.');
    router.push('/dashboard');
    return false; // Usuário autenticado, mas não é um administrador
  }
};



export default verifica;