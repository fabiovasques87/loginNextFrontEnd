
import styles from './Cadastro.module.css';
import { BotForm } from '@/components/BotForm';

import { Header } from '@/components/Header';

import { useEffect, useState} from "react";
import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { Spinner } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';

const index = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [funcaoId, setFuncaoId] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [show, setShow] = useState(false);


  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);



      const handleShow = () => {
        console.log('Showing modal');
        setShowModal(true);
      };

      const handleClose = () => {
        console.log('Closing modal');
        setShowModal(false);
      };

    const router = useRouter();
    const [contentVisible, setContentVisible] = useState(false);

      // Verifique se o usuário está autenticado
      useEffect(() => {
        const token = localStorage.getItem('token'); // Ou a fonte onde você armazenou o token

        if (!token) {
        // Se não houver token, redirecione o usuário de volta para a página de login
        router.push('/login');
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Obtenha o token do armazenamento local
    
        if (!token) {
          // Se não houver token, redirecione o usuário de volta para a página de login
          router.push('/login');
        } else {
          // Decodifique o token para acessar suas informações
          const decodedToken = jwt.decode(token);
          console.log(decodedToken);
    
          // Verifique se o token inclui informações de função (role)
          if (decodedToken.role === 'adm') {
                  setContentVisible(true);
            // O usuário tem permissão de administrador
            console.log('Usuário é um administrador.');
            router.push('/cadastro')
          } else {
            // O usuário não tem permissão de administrador
            console.log('Usuário não é um administrador.');
            alert('Usuário não é um administrador.');
            router.push('/dashboard');
          }
        }
      }, []);


      const handleCad = async () => {


        try {

          // await new Promise((resolve) => setTimeout(resolve, 1000));

          setErrorMessage('');
          setSuccessMessage('');

          const response = await fetch('http://localhost:7000/cadastrar-usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log('Usuário cadastrado:', data.user);
            console.log("Cadastrado com sucesso!");

             // Resetar os campos do formulário
              setUsername('');
              setPassword('');
              setFuncaoId('');

              // Exibir modal de sucesso
            setSuccessMessage('Usuário cadastrado com sucesso!');
            handleShow();

            
          } else {
            // console.error('Erro ao cadastrar usuário');
            // alert("Erro ao cadastrar usuário");
            const errorData = await response.json();
            setErrorMessage(errorData.error);

            // Exibir modal de erro
            handleShow();
          }
        } catch (error) {
          console.error('Erro ao cadastrar usuário', error);
        }
      };

      
      

    return (

       

        <div className={styles.container}> 

          <Header />
            
                <>
                    {/* Seu conteúdo da página de cadastros */}


                    <h1 className={styles.title}>CADASTRAR USUÁRIOS</h1>
                    
                       {/* Exibir o modal em caso de sucesso ou erro */}
                      {(successMessage || errorMessage) && (
                        <Modal show={showModal} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>{successMessage ? 'Sucesso!' : 'Erro!'}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>{successMessage || errorMessage}</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Fechar
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      )}
                    
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

                    <fieldset>

                      <legend>Perfil</legend>
                        <select className={styles.select}>
                          <option>ADM</option>
                          <option>USUÁRIO</option>

                        </select>

                    </fieldset>

                    {/* <BotForm /> */}
                    <button type="button" className={styles.btn} onClick={handleCad}>Cadastrar</button>

                    {/* <button  onClick={handleCad} disabled={loading} className={styles.btn} >
                      {loading ? 'Carregando...' : 'Login'} 
                  </button> */}
                  
                    {/* {loading && (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </Spinner>
                     )} */}

                </form>


                    

                </>
            
            
        </div>
    );
}


export default index;