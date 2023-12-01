import { useEffect, useState } from 'react';
import { verifica } from '@/verifica'; 

import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import ModalGeral from '@/components/modal/ModalGeral';

import { Header } from '@/components/Header';


import { Form, Row, Col, Button, Table} from 'react-bootstrap';

import styles from './adiconar.module.css';

//icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const index = () => {


  const ondleCad = () => {
    alert("chegou aqui");
  }

  //funcaoes para msg 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  //funao para modal
  const [showModalGeral, setShowModalGeral] = useState(false);

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModalGeral(false);
  };

  const handleShowGeral = () => {
    console.log('Showing modal');
    setShowModalGeral(true);
  };

  const handleClose = () => {
    console.log('Closing modal');
    setShowModalGeral(false);
  };

  const router = useRouter();
  const [contentVisible, setContentVisible] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
      const decodedToken = verifica();
    
      if (!decodedToken) {
        // Se não houver token, redirecione o usuário de volta para a página de login
        router.push('/');
      } else {
        // Verifique se o token inclui informações de função (role)
        if (decodedToken.role === 'adm') {
          setIsAdmin(true);
          setContentVisible(true);
        // O usuário tem permissão de administrador
        console.log('Usuário é um administrador.');
        router.push('/adicionar')
        } else {

      

          // O usuário não tem permissão de administrador
          console.log('Usuário não é um administrador.');
          setErrorMessage('Usuário não é um administrador.');
          handleShowGeral();
        
          
        // Desativa a interação do usuário enquanto o modal está visível
        document.body.style.pointerEvents = 'none';

                // Redireciona para o dashboard após 5 segundos
      setTimeout(() => {
        window.location.href = "/dashboard";
        //router.push('/dashboard');
        // Reativa a interação do usuário após o redirecionamento
        document.body.style.pointerEvents = 'auto';
      }, 3000);

         


          //alert('Usuário não é um administrador.');
          //router.push('/dashboard');
          }
        }
        }, []);

return (

  
  <div>
    
    {(successMessage || errorMessage) && (
      <ModalGeral  showModal={showModalGeral} handleClose={handleClose} successMessage={successMessage} errorMessage={errorMessage} />
    )}

        <Header />

        {isAdmin ? (
                // Renderize seu conteúdo sensível apenas se o usuário for um administrador
                <div className={styles.formAddProd}>
       

          <Form>
      <Row>
          <Col xs={12} md={3}>
            <Form.Group controlId="codigo">
              <Form.Label>Codigo</Form.Label>
              <Form.Control type="text" placeholder="Código" />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="produto">
              <Form.Label>Produto</Form.Label>
              <Form.Control type="text" placeholder="Produto" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="descricao">
              <Form.Label>descricao</Form.Label>
              <Form.Control as="textarea" placeholder="descricao" />
            </Form.Group>
          </Col>
        </Row>
            <Row>
              <Col xs={12} md={3}>
              <Form.Group controlId="fornecedor">
                <Form.Label>Fornecedor</Form.Label>
                <Form.Control as="select" placeholder="Fornecedor" >
                  <option value="opcao1">Selecionar</option>
                  <option value="opcao2">Fornecedor1</option>
                  <option value="opcao2">Fornecedor2</option>
                  <option value="opcao2">Fornecedor3</option>

              </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="unEstoque">
                <Form.Label>Unidade de estoque</Form.Label>
                <Form.Control type="text" placeholder="Digite aqui" />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="precoCustoVenda">
                <Form.Label>Preço custo/venda</Form.Label>
                <Form.Control type="text" placeholder="Digite aqui" />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="limite">
                <Form.Label>Limite do estoque</Form.Label>
                <Form.Control type="text" placeholder="Limite do produto no estoque" />
              </Form.Group>
            </Col>
          </Row>
          <div className={styles.btn}>
            <Button className='btn btn-success' onClick={ondleCad}> Cadastrar</Button>
          </div>
          
    </Form>

    <hr />

    <Table responsive="lg" className={styles.table}>
              <thead>
                <tr>
                  <th>Codigo</th>
                  <th>Produto</th>
                  <th>Descrição</th>
                  <th>Fornecedor</th>
                  <th>UN do estoque</th>
                  <th>Preço de custo/venda</th>
                  <th>Limite do estoque</th>




                  <th colSpan={2} className={styles.tableAcoes}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Cerveja</td>
                  <td>Cerveja Skol</td>
                  <td>Skol</td>
                  <td>UN</td>
                  <td>12,00</td>
                  <td>20</td>
                  <td><FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEditClick(usuario)} className={styles.IconEdit}/></td>
                  <td><FontAwesomeIcon icon={faTrash}  className={styles.IconTrash} onClick={() => handleExcluir (usuario)}/></td>



                  </tr>
              </tbody>
            
            </Table>

          </div>

 

          
      ) : null}


    
     </div>
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
