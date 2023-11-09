 import styles from './BotLogout.module.css'

type Props = {
    label: string;
    onClick: ()=> void;
}


export const  BotLogout = ({label, onClick}: Props) => {
    return (
        <button onClick={onClick} className={styles.btn}> {label}</button>
    );
}