

import Router from "next/router";

import styles from './Header.module.css'

import {BotLogout} from '../BotLogout'

const router = Router;

export const Header = () => {

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
                
                {/* <button onClick={handleLogout}>Logout</button>  */}
                <BotLogout  label='Logout...' onClick={handleLogout}  />
   

        </div>

        
    );
}


