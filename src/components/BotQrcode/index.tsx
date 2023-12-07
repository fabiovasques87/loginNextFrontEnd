import styles from "./BotQrCode.module.css";

import {faRotate,faBarcode,faQrcode} from '@/icones'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const BotQrcode = () => {
    return (
        <button className={styles.BotQrcode}><FontAwesomeIcon icon={faQrcode} /> Gerar qrcode</button>
    )
}