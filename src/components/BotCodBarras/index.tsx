import styles from "./BotCodBarras.module.css";

import {faRotate,faBarcode,faQrcode} from '@/icones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const BotCodBarras = () => {
    return (
        <button className={styles.BotProd}><FontAwesomeIcon icon={faBarcode} /> Gerar Código de barras</button>
    )
}