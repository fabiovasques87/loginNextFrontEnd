
import { UserProvider } from '../../contexts/UserContext';
import { useUser } from '../../contexts/UserContext';

import React, {useState} from 'react';
import { useRouter } from 'next/router';

import styles from './login.module.css'
import { BotForm } from '@/components/BotForm';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { Spinner } from 'react-bootstrap';


const Login = () => {

  const router = useRouter();



  const { setUser } = useUser(); // Use useUser para acessar o contexto do usuário
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true); // Ative o estado de carregamento

    

    try {

        await new Promise((resolve) => setTimeout(resolve, 1000));

      // Faça uma solicitação para o servidor Node.js para autenticação
      const response = await fetch('http://localhost:7000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Use os valores dos campos de formulário
      });

      if (response.ok) {
        // Analise a resposta JSON para obter o token
        const data = await response.json();
        const { token } = data;
       // Armazene o token no localStorage
       localStorage.setItem('token', token);
        // console.log("user logado:", username);
          // Utilize as informações reais do usuário recebidas do servidor
          setUser({
            username: username,
            role: data.role,
            // Outras informações do usuário, se necessário
          });      

        // Redirecione o usuário para a página de dashboard com o token
        router.push('/dashboard');
      } else {
        // Lidar com erros de autenticação
        console.error('Erro de autenticação');
        alert('Erro de autenticação');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert(error);
    } finally {
        setLoading(false); // Desative o estado de carregamento
      }
  };


    


    return (


      <UserProvider>
        <div  className={styles.container}>

          
    
            <h1>Login</h1>
              <form>
            <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={loading} className={styles.button}>
                {loading ? 'Carregando...' : 'Login'} 
            </button>



            {loading && (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
        )}

        </form>


  </div>

  </UserProvider>

    );

}


export default Login;