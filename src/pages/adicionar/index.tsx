import { useEffect, useState } from 'react';
import { verifica } from '@/verifica'; 

import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import ModalGeral from '@/components/modal/ModalGeral';


const index = () => {


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
        router.push('/cadastro')
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


        {isAdmin ? (
                // Renderize seu conteúdo sensível apenas se o usuário for um administrador
                <div>
        página de adicionar produtos
          
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
