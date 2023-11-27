
import styles from './cadUser.module.css';

import { Button, Modal, Table } from 'react-bootstrap';
import {useState} from "react";


interface CadUser {
    showModal: boolean;
    handleClose: () => void;
    successMessage: string;
    errorMessage: string
  }


const CadUser: React.FC<CadUser>  = ({ showModal, handleClose,successMessage,errorMessage }) => {
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

export default CadUser;