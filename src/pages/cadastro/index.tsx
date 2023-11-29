
import styles from './Cadastro.module.css';

import CadUser from '@/components/modal/msgGeral';

import { BotForm } from '@/components/BotForm';

import { Header } from '@/components/Header';

import { useEffect, useState} from "react";
import { useRouter } from 'next/router';

import apiUrl from '@/apiConfig';

//chamando o arquivo de APIS

import { updateUser, fetchUsers, cadastrarUsuario, excluirUsuario   } from '@/apiService';

import EditUserModal from '@/components/modal/EditUserModal';

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

  //arquivo de APIS -> apiService.ts     

  //Funçã para consumir a API de update do usuário

      const handleSave = async () => {
        try {
          const data = await updateUser(selectedUser.id, parseInt(selectedFuncaoId));
          setSuccessMessage('Usuário alterado com sucesso');
          handleShowGeral();
      
          setTimeout(() => {
            router.reload();
          }, 2000);
                
          // Fechar o modal após a atualização
        } catch (error) {
          setErrorMessage('Erro ao atualizar usuário!');
          handleShowGeral();
        }
      };


//Buscando users do banco...


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      if (data) {
        setUsuarios(data);
      }
    };

    fetchData();
  }, []);

  //cadastrar usuários

  const handleCad = async () => {
    try {
      if (!funcaoId) {
        setErrorMessage("Escolha um perfil, usuário ou ADM...");
        handleShowGeral();
        return;
      }

      setErrorMessage('');
      setSuccessMessage('');

      const { success, user, error } = await cadastrarUsuario(username, password, funcaoId);

      if (success) {
        console.log('Usuário cadastrado:', user);
        console.log('Cadastrado com sucesso!');

        setUsername('');
        setPassword('');
        setFuncaoId('');

        setSuccessMessage('Usuário cadastrado com sucesso!');
        handleShowGeral();

        setTimeout(() => {
          router.reload();
        }, 2000);
      } else {
        setErrorMessage(error);
        handleShowGeral();
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário', error);
    }
  };

  
      // funcao para exclusao de registros:
     
      const handleExcluir = async (usuario: Usuario) => {
        const result = await excluirUsuario(usuario.id);
      
        if (result.success) {
          console.log('Usuário excluído com sucesso!');
          setSuccessMessage('Usuário excluído com sucesso!');
          handleShowGeral();
      
          setTimeout(() => {
            router.reload();
          }, 1000);
        } else {
          console.error(`Erro ao excluir usuário: ${result.error}`);
          setErrorMessage('Erro ao excluir usuário!');
          handleShowGeral();
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
            <EditUserModal
              show={showModalEditar}
              onClose={handleCloseModal}
              onSave={handleSave}
              selectedUser={selectedUser}
              selectedFuncaoId={selectedFuncaoId}
              handleUsernameChange={(e) => handleUsernameChange(e)}
              handleFuncaoChange={(e) => handleFuncaoChange(e)}
            />
            

        </div>
    );
}


export default index;