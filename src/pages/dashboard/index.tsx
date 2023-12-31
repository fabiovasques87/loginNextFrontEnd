import styles from './Dashboard.module.css'

import { useEffect } from 'react'; 

import { useRouter } from 'next/router';

import jwt from 'jsonwebtoken';

import Link from 'next/link';

import { Header } from '@/components/Header';


const Dashboard = () => {

    // useEffect(() => {
    //     const token = localStorage.getItem('token'); // Obtenha o token do armazenamento local
      
    //     if (!token) {
    //       // Se não houver token, redirecione o usuário de volta para a página de login
    //       router.push('/login');
    //     } else {
    //       // Faça uma solicitação para obter informações adicionais do usuário (incluindo a função/role)
    //       fetch('http://localhost:4000/dashboard', {
    //         method: 'GET',
    //         headers: {
    //           'Authorization': `Bearer ${token}`
    //         }
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data.role === 'adm') {
    //           // O usuário tem permissão de administrador
    //           console.log('Usuário é um administrador.');
    //         } else {
    //           // O usuário não tem permissão de administrador
    //           console.log('Usuário não é um administrador.');
    //         }
    //       })
    //       .catch(error => {
    //         // Trate erros de solicitação, como token inválido, aqui
    //         router.push('/login');
    //       });
    //     }
    //   }, []);
      


    // useEffect(() => {
    //     const token = localStorage.getItem('token'); // Ou a fonte onde você armazenou o token
    
    //     if (!token) {
    //       // Se não houver token, redirecione o usuário de volta para a página de login
    //       router.push('/login');
    //     } else {
    //       // Faça uma solicitação para obter informações adicionais do usuário (incluindo a função/role)
    //       fetch('http://localhost:4000/dashboard', {
    //         method: 'GET',
    //         headers: {
    //           'Authorization': `Bearer ${token}`
    //         }
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //         if (data.role !== 'adm') {
    //             console.log('status do role', data.role);
    //           // Se o usuário não for um administrador, redirecione-o ou tome outra ação adequada
    //           router.push('/login');
    //         }
    //       })
    //       .catch(error => {
    //         // Trate erros de solicitação, como token inválido, aqui
    //         router.push('/login');
    //       });
    //     }
    //   }, []);

    // useEffect(() => {
    //     const token = localStorage.getItem('token'); // Obtenha o token do armazenamento local
    
    //     if (!token) {
    //       // Se não houver token, redirecione o usuário de volta para a página de login
    //       router.push('/login');
    //     } else {
    //       // Decodifique o token para acessar suas informações
    //       const decodedToken = jwt.decode(token);
    //       console.log(decodedToken);
    
    //       // Verifique se o token inclui informações de função (role)
    //       if (decodedToken.role === 'adm') {
    //         // O usuário tem permissão de administrador
    //         console.log('Usuário é um administrador.');
    //         router.push('/dashboard')
    //       } else {
    //         // O usuário não tem permissão de administrador
    //         console.log('Usuário não é um administrador.');
    //         alert('Usuário não é um administrador.');
    //         router.push('/login');
    //       }
    //     }
    //   }, []);



    const router = useRouter();


      // Verifique se o usuário está autenticado
        useEffect(() => {
            const token = localStorage.getItem('token'); // Ou a fonte onde você armazenou o token

            if (!token) {
            // Se não houver token, redirecione o usuário de volta para a página de login
            router.push('/login');
            }
        }, []);





   


    return (
        <div className={styles.containerPai}>

        
            
            <Header />



        <div className={styles.containerFilho}>

                
                <div className={styles.containerCard}>
                    <div className={styles.title}>Faturamento Dia </div>
                        <div className={styles.body}>
                            <p>R$ 0,00</p>
                        </div>
                </div>

                <div className={styles.containerCard}>
                    <div className={styles.title}>Faturamento mês </div>
                        <div className={styles.body}>
                            <p>R$ 0,00</p>
                        </div>
                </div>
                
                <div className={styles.containerCard}>
                    <div className={styles.title}>Produtos a vencer</div>
                        <div className={styles.body}>
                            <p></p>
                        </div>
                </div>

              

                <div className={styles.containerCard}>
                    <div className={styles.title}>PDV </div>
                        <div className={styles.body}>
                            <p></p>
                        </div>
                </div>


        </div>

        </div>
    );
}

export default Dashboard;