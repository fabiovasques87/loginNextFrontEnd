
import styles from './cadUser.module.css';

import { Button, Modal, Table } from 'react-bootstrap';
import {useState, useEffect } from "react";


interface ModalGeral {
    showModal: boolean;
    handleClose: () => void;
    successMessage: string;
    errorMessage: string;
  }


const ModalGeral: React.FC<ModalGeral>  = ({ showModal, handleClose,successMessage,errorMessage }) => {


  const reloadPage = () => {
    // Lógica para recarregar a página
    window.location.reload();
  };

  // Estado para controlar o atraso
  


    return ( 

        
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


    )
}

export default ModalGeral;