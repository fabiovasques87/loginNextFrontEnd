
import { Button, Modal, Table } from 'react-bootstrap';
import {useState} from "react";

import styles from './aviso.module.css';

interface ModalAvisoProps {
    showModal: boolean;
    handleCloseModal: () => void;
  }


  const ModalAviso: React.FC<ModalAvisoProps> = ({ showModal, handleCloseModal }) => {

    
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.bodyModal}>
            Faça login novamente!!!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>

      </Modal>
    );
}



export default ModalAviso;