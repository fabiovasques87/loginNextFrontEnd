
import styles from './cadUser.module.css';

import { Button, Modal, Table } from 'react-bootstrap';
import {useState} from "react";


interface CadUser {
    showModalGeral: boolean;
    handleClose: () => void;
    successMessage: boolean;
    errorMessage: boolean
  }


const CadUser: React.FC<CadUser>  = ({ showModalGeral, handleClose,successMessage,errorMessage }) => {
    return ( 

        
            <Modal show={showModalGeral} onHide={handleClose}>
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