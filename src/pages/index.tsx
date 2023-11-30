import apiUrl from '@/apiConfig';


import { UserProvider } from '../../contexts/UserContext';
import { useUser } from '../../contexts/UserContext';

import React, {useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

import styles from './login.module.css'
import { BotForm } from '@/components/BotForm';

import ModalGeral from '@/components/modal/ModalGeral';


import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { Spinner } from 'react-bootstrap';




const Login: React.FC = () => {




  const router = useRouter();



  const { setUser } = useUser(); // Use useUser para acessar o contexto do usuário
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const [showModalGeral, setShowModalGeral] = useState(false);

  // funções para abrir e fechar o modal:

  const handleShowGeral = () => {
    console.log('Showing modal');
    setShowModalGeral(true);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setShowModalGeral(false);
  };
  



  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault(); // Evita a recarga da página ao pressionar Enter no formulário

    // Verifique se os campos de usuário e senha estão preenchidos
    if (!username || !password) {
      setErrorMessage('Preencha todos os campos');
      handleShowGeral();
     // alert('Preencha todos os campos.');
      return;
    }

    setLoading(true); // Ative o estado de carregamento

    try {
      // Faça a solicitação para autenticação
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);

        // Utilize as informações reais do usuário recebidas do servidor
        setUser({
          username: username,
          role: data.role,
          // Outras informações do usuário, se necessário
        });

        // Redirecione o usuário para a página de dashboard com o token
        router.push('/dashboard');

      } else {
        const errorData = await response.json();
        console.error('Erro de autenticação:', errorData.message);
       setErrorMessage(errorData.message || 'Erro de autenticação. Tente novamente mais tarde.')
       handleShowGeral();

       
        //alert(errorData.message || 'Erro de autenticação. Tente novamente mais tarde.');
      }
      
    } catch (error) {
      console.error('Erro ao fazer login:', error);
     // setErrorMessage('Erro ao fazer login:', error)
      handleShowGeral();
      alert('Erro ao fazer login. Tente novamente mais tarde.');

    } finally {
      setLoading(false); // Desative o estado de carregamento
    }

  }


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

              {/* tratando do modal geral */}
        {(successMessage || errorMessage) && (
        <ModalGeral showModal={showModalGeral} handleClose={handleClose} successMessage={successMessage} errorMessage={errorMessage} />
      )}


  </div>

  </UserProvider>

    );

}


export default Login;