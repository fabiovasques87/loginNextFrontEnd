
import styles from './Cadastro.module.css';
import { BotForm } from '@/components/BotForm';

import { Header } from '@/components/Header';

import { useEffect, useState} from "react";
import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o Bootstrap CSS
import { Spinner } from 'react-bootstrap';


const index = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);


    const router = useRouter();
    const [contentVisible, setContentVisible] = useState(false);

      // Verifique se o usuário está autenticado
      useEffect(() => {
        const token = localStorage.getItem('token'); // Ou a fonte onde você armazenou o token

        if (!token) {
        // Se não houver token, redirecione o usuário de volta para a página de login
        router.push('/login');
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Obtenha o token do armazenamento local
    
        if (!token) {
          // Se não houver token, redirecione o usuário de volta para a página de login
          router.push('/login');
        } else {
          // Decodifique o token para acessar suas informações
          const decodedToken = jwt.decode(token);
          console.log(decodedToken);
    
          // Verifique se o token inclui informações de função (role)
          if (decodedToken.role === 'adm') {
                  setContentVisible(true);
            // O usuário tem permissão de administrador
            console.log('Usuário é um administrador.');
            router.push('/cadastro')
          } else {
            // O usuário não tem permissão de administrador
            console.log('Usuário não é um administrador.');
            alert('Usuário não é um administrador.');
            router.push('/dashboard');
          }
        }
      }, []);

    return (

       

        <div className={styles.container}> 

          <Header />
            
            {contentVisible && (
                <>
                    {/* Seu conteúdo da página de cadastros */}


                    <h1 className={styles.title}>CADASTRAR USUÁRIOS</h1>
                      <form>
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <fieldset>

                      <legend>Perfil</legend>
                        <select className={styles.select}>
                          <option>ADM</option>
                          <option>USUÁRIO</option>

                        </select>

                    </fieldset>

                    <BotForm />
                  
                    {loading && (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Carregando...</span>
                        </Spinner>
                )}

                </form>

                </>
            )}
            
            
        </div>
    );
}


export default index;