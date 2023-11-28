
import styles from './cadUser.module.css';

import { Button, Modal, Table } from 'react-bootstrap';
import {useState, useEffect } from "react";


interface CadUser {
    showModal: boolean;
    handleClose: () => void;
    successMessage: string;
    errorMessage: string;
  }


const CadUser: React.FC<CadUser>  = ({ showModal, handleClose,successMessage,errorMessage }) => {


  const reloadPage = () => {
    // Lógica para recarregar a página
    window.location.reload();
  };

  // Estado para controlar o atraso
  const [delayedClose, setDelayedClose] = useState(false);

  useEffect(() => {
    if (showModal) {
      // Define um atraso de 3 segundos para fechar o modal
      const timeoutId = setTimeout(() => {
        setDelayedClose(true);
      }, 3000);

      // Limpa o timeout ao desmontar o componente
      return () => clearTimeout(timeoutId);
    }
  }, [showModal]);

  useEffect(() => {
    // Quando delayedClose for true, fecha o modal e recarrega a página
    if (delayedClose) {
      handleClose();
      reloadPage();
    }
  }, [delayedClose, handleClose, reloadPage]);



    return ( 

        
            <Modal show={showModal && !delayedClose} onHide={handleClose}>
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


    )
}

export default CadUser;