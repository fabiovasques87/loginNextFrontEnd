
import styles from './Cadastro.module.css';

import CadUser from '@/components/modal/cadUser';

import { BotForm } from '@/components/BotForm';

import { Header } from '@/components/Header';

import { useEffect, useState} from "react";
import { useRouter } from 'next/router';

import apiUrl from '@/apiConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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


  const [showModalGeral, setShowModalGeral] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);


  const [loading, setLoading] = useState(false);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const [selectedFuncaoId, setSelectedFuncaoId] = useState<string>('');


    //estado para editar usuário
    const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);
    const [selectedPrivilege, setSelectedPrivilege] = useState('');

    // Função para atualizar o estado do usuário
      const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedUser((prevUser) => ({
          ...prevUser!,
          username: e.target.value,
        }));
      };

      //atualiza o select com o valor do privilégio
      const handleFuncaoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFuncaoId(e.target.value);
      }       
  

      //funcao para atualizar o estado do campo select com o privilégio do usuário
      // const handleChangeFuncao =() => {
      //   selectedPrivilege((prevUser) => ({
      //     ...prevUser!,
      //     funcao: e.target.value,
      //   }));
      // }


    
    
      // const handleCloseModal = () => {
      //   setShowModal(false);
      // };


    //editar usuário selecionado
      // Função para abrir o modal e definir o usuário selecionado
  const handleEditClick = (user: Usuario) => {
    setSelectedUser(user);

    // Use o valor da função do usuário ou uma string vazia se não houver função.
    setSelectedFuncaoId(user.userFuncao[0]?.funcao.id.toString() || '');

    setShowModalEditar(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setSelectedUser(null);
    setShowModalEditar(false);
  };

      const handleShowGeral = () => {
        console.log('Showing modal');
        setShowModalGeral(true);
      };

      const handleClose = () => {
        console.log('Closing modal');
        setShowModalGeral(false);
      };

       // Função para fechar o modal Editar
  const handleCloseModalEditar = () => {
    setSelectedUser(null);
    setShowModalEditar(false);
  };


    //Funçã para consumir a API de update do usuário

      const handleSave = async () => {
        try {
          const response = await fetch(`${apiUrl}/users/atualizar-usuario/${selectedUser.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ funcaoId: parseInt(selectedPrivilege) }),
            body: JSON.stringify({ funcaoId: parseInt(selectedFuncaoId)}),

          });
    
          if (response.ok) {
            const data = await response.json();
            setSuccessMessage('Usuário calterado com sucesso');
            handleShowGeral();
    
            // Atualizar localmente os dados do usuário, se necessário
            // Ex: dispatch({ type: 'UPDATE_USER', payload: data.user });
    
            // Fechar o modal após a atualização
            // onClose();
          } else {
            console.error('Erro ao atualizar usuário:', response.statusText);
            setErrorMessage('Erro ao atualizar usuário!');
            handleShowGeral();
          }
        } catch (error) {
          console.error('Erro na requisição de atualização:', error);
        }
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

      // Interface para representar o objeto do usuário



      type Usuario = {
        id: number;
        username: string;
        userFuncao: { 
          funcao: {
             id: number;
             nome: string ;
            }
           }[];
      };

//Buscando users do banco...
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${apiUrl}/users/users`);
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
            handleShowGeral();
            return;
          }

          // await new Promise((resolve) => setTimeout(resolve, 1000));

          setErrorMessage('');
          setSuccessMessage('');

          // Obtenha o valor do campo select como uma string
          const funcaoIdString = funcaoId.toString();

          console.log('funcaoId antes da chamada fetch:', funcaoId);

          const response = await fetch(`${apiUrl}/users/cadastro`, {
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
            handleShowGeral();

            setTimeout(() => {
              router.reload();
            }, "2000");
            

            
          } else {
            // console.error('Erro ao cadastrar usuário');
            // alert("Erro ao cadastrar usuário");
            const errorData = await response.json();
            setErrorMessage(errorData.error);

            // Exibir modal de erro
            handleShowGeral();
          }
          //recarrega a página após o cadastro do usuário
        } catch (error) {
          console.error('Erro ao cadastrar usuário', error);
        }
      };



      // funcao para exclusao de registros:
      const handleExcluir = async (usuario : Usuario) => {
        try {
          const response = await fetch(`${apiUrl}/users/excluir/${usuario.id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              // Se necessário, adicione cabeçalhos de autenticação aqui (token, etc.)
            },
          });
      
          if (response.ok) {
            console.log('Usuário excluído com sucesso!');
            setSuccessMessage('Usuário Excluído com sucesso!');
            handleShowGeral();

            setTimeout(() => {
              router.reload();
            }, "1000");
            

            // Atualize o estado ou realize outras ações necessárias após a exclusão bem-sucedida
          } else {
            const errorData = await response.json();
            console.error(`Erro ao excluir usuário: ${errorData.error}`);
            // Lide com o erro, mostre uma mensagem de erro, etc.
          }
        } catch (error) {
          console.error('Erro na requisição de exclusão:', error.message);
          setErrorMessage("Escolha um perfil, usuário ou ADM...");

          // Exibir modal com msgem de erro
          handleShowGeral();




          // Lide com o erro, mostre uma mensagem de erro, etc.
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
                        <CadUser  showModal={showModalGeral} handleClose={handleClose} successMessage={successMessage} errorMessage={errorMessage} />
                      )}
               <div className={styles.containerForm}>
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
            </div>
                </>

                <Table responsive="lg" className={styles.table}>
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
                {/* <td><Link href={'editar'} className={styles.link}>Editar</Link></td> */}
                {/* <td> <button   className='btn btn-success' onClick={() => handleEditClick(usuario)}>Editar</button></td> */}
                {/* <td> <button   className='btn btn-danger' onClick={() => handleEditClick(usuario)}>Excluir</button></td> */}
                <td><FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEditClick(usuario)} className={styles.IconEdit}/></td>
                <td><FontAwesomeIcon icon={faTrash}  className={styles.IconTrash} onClick={() => handleExcluir (usuario)}/></td>

            </tr>
          ))}
        </tbody>
       
      </Table>

          {/* Modal de edição */}
          <Modal show={showModalEditar} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Renderize o formulário de edição aqui, utilizando o estado selectedUser */}
          {selectedUser && (
            <form className={styles.formModalEditarUsuario}>
              <label>Nome:</label>
              <input
                type="text"
                value={selectedUser?.username || ''}
                onChange={handleUsernameChange} readOnly
              /><br />
              <label>Nova Senha</label>
              <input type='password' />
               <label>Privilégio:</label>
               <select
                  className={styles.select}
                  value={selectedFuncaoId}
                  onChange={handleFuncaoChange}                
                >
                  <option>Selecionar</option>
                  <option value={1}>ADM</option>
                  <option value={2}>USER</option>
                </select><br />
            {/* <input
              type="text"
              value={selectedUser.userFuncao[0]?.funcao.nome || 'Sem nível de acesso'}
            /><br /> */}
              {/* Adicione campos adicionais conforme necessário */}
              <button className='btn btn-success w-100 '  onClick={handleSave}>Salvar</button>
            </form>
          )}
        </Modal.Body>
      </Modal>
            

        </div>
    );
}


export default index;