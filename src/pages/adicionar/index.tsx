import { FormData } from './types'; 

import { useEffect, useState } from 'react';
import { verifica } from '@/verifica'; 

import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import ModalGeral from '@/components/modal/ModalGeral';

import { Header } from '@/components/Header';


import { Form, Row, Col, Button, Table, InputGroup} from 'react-bootstrap';

import styles from './adiconar.module.css';
import { BotForm } from '@/components/BotForm';

//icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { BotProd } from '@/components/BotProd';


const index = () => {


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


  const [formData, setFormData] = useState<FormData>({
    codigo: '',
    produto: '',
    descricao: '',
    fornecedor: '',
    unEstoque: '',
    precoCustoVenda: '',
    limite: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: FormData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const ondleCad = async () => {
    //alert("chegou aqui");

    const errorMessages: string[] = [];

    if(!formData.codigo){
      errorMessages.push('favor preencher o campo codigo de barras.');
    }
    
    if(!formData.produto){
      errorMessages.push('favor preencher o campo produto.');
    }
    if(!formData.descricao){
      errorMessages.push('favor preencher o campo descição.');
    }

    if(!formData.fornecedor){
      errorMessages.push('favor preencher o campo o fornecedor.');
    }

    if(!formData.unEstoque){
      errorMessages.push('favor preencher o campo com a unidade de estoque.');
    }

    if(!formData.precoCustoVenda){
      errorMessages.push('favor preencher o campo o preço de custo/venda');
    }
    
    if(!formData.limite){
      errorMessages.push('favor preencher o campo o limite do estoque');
    }

    if (errorMessages.length > 0) {
      setErrorMessage(errorMessages.join('\n'));
      handleShowGeral();
      return; // Evita a execução do restante da função se houver erros
    }


    try {
      console.log('Dados a serem enviados:', formData);
  
      const response = await fetch('/sua-rota-api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        // Lógica adicional, se necessário
      } else {
        console.error('Falha ao enviar dados.');
        // Lógica adicional, se necessário
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      // Lógica adicional, se necessário
    }

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
              <Form.Label>Codigo de barras</Form.Label><span>*</span>
              <Form.Control className={styles.input} type="text" placeholder="Código de barras" 
              name="codigo"
              value={formData.codigo}
              onChange={handleChange}
          />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
              <Form.Label>Gerar Código interno</Form.Label><span>*</span>
              <InputGroup className="mb-3">
                  <Form.Control readOnly type='text'
                    placeholder="" className={styles.input}                                  
                  />
                  <BotProd />
                </InputGroup>
              </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="produto">
              <Form.Label>Produto</Form.Label><span>*</span>
              <Form.Control className={styles.input} type="text" placeholder="Produto" 
              name="produto"
              value={formData.produto}
              onChange={handleChange}
          />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="descricao">
              <Form.Label>descricao</Form.Label><span>*</span>
              <Form.Control className={styles.input} as="textarea" placeholder="descricao" 
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
                />
            </Form.Group>
          </Col>
        </Row>
            <Row>
              <Col xs={12} md={3}>
              <Form.Group controlId="fornecedor">
                <Form.Label>Fornecedor</Form.Label><span>*</span>
                <Form.Control className={styles.input} as="select" placeholder="Fornecedor" 
                name="fornecedor"
                value={formData.fornecedor}
                onChange={handleChange}
                >
                  <option value="opcao1">Selecionar</option>
                  <option value="fornecedor1">Fornecedor1</option>
                  <option value="fornecedor2">Fornecedor2</option>
                  <option value="fornecedor3">Fornecedor3</option>

              </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="unEstoque">
                <Form.Label>Unidade de estoque</Form.Label><span>*</span>
                <Form.Control className={styles.input} as="select" placeholder="Fornecedor" 
                name="unEstoque"
                value={formData.unEstoque}
                onChange={handleChange}
                >
                  <option>Selecionar</option>
                  <option value="KG">KG</option>
                  <option value="UN">UN</option>
              </Form.Control>
              </Form.Group>

            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="precoCustoVenda">
                <Form.Label>Preço custo/venda</Form.Label><span>*</span>
                <Form.Control className={styles.input} type="number" placeholder="Digite aqui" 
                   name="precoCustoVenda"
                   value={formData.precoCustoVenda}
                   onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="limite">
                <Form.Label>Limite do estoque</Form.Label><span>*</span>
                <Form.Control className={styles.input} type="number" placeholder="Limite do produto no estoque" 
                     name="limite"
                     value={formData.limite}
                     onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="limite">
                <Form.Label>Data de vencimento</Form.Label><span>*</span>
                <Form.Control className={styles.input} type="number" placeholder="Limite do produto no estoque" 
                     name="limite"
                     value={formData.limite}
                     onChange={handleChange}
                />
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
