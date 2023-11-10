
import styles from './Cadastro.module.css';
import { BotForm } from '@/components/BotForm';

import { Header } from '@/components/Header';

import { useEffect, useState} from "react";
import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { Spinner } from 'react-bootstrap';
import { Button, Modal, Table } from 'react-bootstrap';
import Link from 'next/link';

const index = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [funcaoId, setFuncaoId] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [show, setShow] = useState(false);


  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState(false);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);



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

      //tipagem para buscar usuarios do banco


      type Usuario = {
        id: number;
        username: string;
        userFuncao: { funcao: { nome: string } }[];
      };

//Buscando users do banco...
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://192.168.0.104:7000/users');
            if (response.ok) {
              const data = await response.json();
              setUsuarios(data);
            } else {
              console.error('Erro ao obter usuários', response.statusText);
            }
          } catch (error) {
            console.error('Erro ao obter usuários', error);
          }
        };
    
        fetchData();
      }, []);


      const handleCad = async () => {

       

        try {

          if (!funcaoId) {
            // Se funcaoId não foi selecionado, exiba uma mensagem de erro ou tome a ação apropriada
            setErrorMessage("Escolha um perfil, usuário ou ADM...");

            // Exibir modal de erro
            handleShow();
            return;
          }

          // await new Promise((resolve) => setTimeout(resolve, 1000));

          setErrorMessage('');
          setSuccessMessage('');

          // Obtenha o valor do campo select como uma string
          const funcaoIdString = funcaoId.toString();

          console.log('funcaoId antes da chamada fetch:', funcaoId);

          const response = await fetch('http://192.168.0.104:7000/cadastrar-usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password,funcaoId: funcaoIdString}),
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

            setTimeout(() => {
              router.reload();
            }, "5000");
            

            
          } else {
            // console.error('Erro ao cadastrar usuário');
            // alert("Erro ao cadastrar usuário");
            const errorData = await response.json();
            setErrorMessage(errorData.error);

            // Exibir modal de erro
            handleShow();
          }
          //recarrega a página após o cadastro do usuário
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
                        
                      <select
                        className={styles.select}
                        onChange={(e) => setFuncaoId(e.target.value)}
                        value={funcaoId}
                      >
                        <option>Selecionar</option>
                        <option value={1}>ADM</option>
                        <option value={2}>USUÁRIO</option>
                      </select>

                        {/* <input type='tetxt' value="1"/> */}

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

                <Table responsive="lg">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Privilégio</th>
            <th colSpan={2} className={styles.tableAcoes}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.username}</td>
              <td>{usuario.userFuncao[0]?.funcao.nome || 'Sem nível de acesso'}</td>
              {/* <Link href={editar}><td >Editar</td> </Link> */}
              <td><Link href={'editar'} className={styles.link}>Editar</Link></td>
              <td><Link href={'excluir'} className={styles.link}>Excluir</Link></td>
            </tr>
          ))}
        </tbody>
       
      </Table>
            
        </div>
    );
}


export default index;