
import { useUser } from "../../../contexts/UserContext";

import {useState} from "react";

import NavBar from "../navBar";

import Router from "next/router";

import styles from './Header.module.css'

import ModalAviso from "../modal/logout";

import {BotLogout} from '../BotLogout'

const router = Router;

export const Header : React.FC  = () => {

    const { user } = useUser();
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        // Remova o token do armazenamento local
        localStorage.removeItem('token');
        // Abra o modal
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        // Feche o modal
        setShowModal(false);
        // Redirecione o usuário para a página de login ou outra página de sua escolha
        router.push('/'); // Certifique-se de importar a função 'useRouter' do 'next/router'.
      };   

    return (
        <div className={styles.container}>


                <NavBar />


                {/* Seu código de cabeçalho */}
                <p className={styles.title}> {user ? `Bem Vindo: ${user.username}` : 'Nenhum usuário logado'}</p>
                {/* Outros elementos do cabeçalho */}



                {/* <button onClick={handleLogout}>Logout</button>  */}
                <BotLogout  label='Logout...' onClick={handleLogout}  />

                {/* Componente ModalAviso */}
                <ModalAviso showModal={showModal} handleCloseModal={handleCloseModal} />

        </div>

        
    );
}


