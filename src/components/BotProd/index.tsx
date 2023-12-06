import styles from "./BotProd.module.css";

import {faRotate} from '@/icones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const BotProd = () => {
    return (
        <button className={styles.BotProd}><FontAwesomeIcon icon={faRotate} /> Gerar Código</button>
    )
}