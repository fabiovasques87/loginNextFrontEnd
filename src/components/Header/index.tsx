
import { useUser } from "../../../contexts/UserContext";

import NavBar from "../navBar";

import Router from "next/router";

import styles from './Header.module.css'

import {BotLogout} from '../BotLogout'

const router = Router;

export const Header : React.FC  = () => {

    const { user } = useUser();

    const handleLogout = () => {
        // Remova o token do armazenamento local
        localStorage.removeItem('token');
        alert('Faça login novamente!!!');
        // Redirecione o usuário para a página de login ou outra página de sua escolha
        router.push('/'); // Certifique-se de importar a função 'useRouter' do 'next/router'.
    };

   

    return (
        <div className={styles.container}>

                <p>Logo</p>

                <NavBar />


                {/* Seu código de cabeçalho */}
                <p>{user ? `Bem Vindo: ${user.username}` : 'Nenhum usuário logado'}</p>
                {/* Outros elementos do cabeçalho */}



                {/* <button onClick={handleLogout}>Logout</button>  */}
                <BotLogout  label='Logout...' onClick={handleLogout}  />

   

        </div>

        
    );
}


