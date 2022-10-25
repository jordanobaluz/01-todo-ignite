import styles from './EmptyList.module.css'
import { ClipboardText } from 'phosphor-react';

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <ClipboardText size={56} />
            <h1>VAZIO</h1>
        </div>
    )
}