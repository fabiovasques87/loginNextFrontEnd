

import { ReactElement } from 'react';
import styles from './Layout.module.css'

import { Header } from '../Header';

type Props = {
    children: ReactElement;
}


export const Layout = ({children}: Props) => {
    return (
       <div className={styles.container}>
       
            <Header />
            <main>{children}</main>

            
        {/* <footer className={styles.footer}>
                Todos os direitor reservados...
        </footer>
         */}
       </div>
    );
}


