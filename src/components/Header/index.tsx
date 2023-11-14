
import { useUser } from "../../../contexts/UserContext";

import NavBar from "../navBar";

import Router from "next/router";

import styles from './Header.module.css'

import {BotLogout} from '../BotLogout'

const router = Router;

export const Header : React.FC  = () => {

    const { user } = useUser();

 

   

    return (
        <div className={styles.container}>

                <p>Logo</p>

                {/* Seu código de cabeçalho */}
                <p>{user ? `Bem Vindo: ${user.username}` : 'Nenhum usuário logado'}</p>
                {/* Outros elementos do cabeçalho */}



                <NavBar />
   

        </div>

        
    );
}


