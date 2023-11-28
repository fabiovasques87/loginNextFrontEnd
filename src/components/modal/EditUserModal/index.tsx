
// EditUserModal.tsx

import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';


import styles from "./EditUser.module.css";


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

interface EditUserModalProps {
  show: boolean;
  onClose: () => void;
  onSave: () => void;
  selectedUser: Usuario | null;
  selectedFuncaoId: string;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFuncaoChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  show,
  onClose,
  onSave,
  selectedUser,
  selectedFuncaoId,
  handleUsernameChange,
  handleFuncaoChange,
}) => {



  return (

    <div> 
            <Modal show={show} onHide={onClose} className={styles.container}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {selectedUser && (
                <form>
                    
                        <label>Nome:</label>
                  
                    <input
                    type="text"
                    value={selectedUser?.username || ''}
                    onChange={handleUsernameChange}
                    readOnly
                    /><br />
                    <label>Nova Senha</label>
                    <input type='password' /><br />
                    <label>Privilégio:</label>
                    <select
                    value={selectedFuncaoId}
                    onChange={handleFuncaoChange}
                    >
                    <option>Selecionar</option>
                    <option value={1}>ADM</option>
                    <option value={2}>USER</option>
                    </select><br />
                </form>
                )}
            </Modal.Body>
            <Modal.Footer>
            <button className='btn btn-success w-100' onClick={onSave}>Salvar</button>
                </Modal.Footer>
            </Modal>
    </div>
  );
};

export default EditUserModal;
