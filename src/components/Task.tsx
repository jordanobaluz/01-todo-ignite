import styles from './Task.module.css';
import { ClipboardText } from 'phosphor-react';

export function Task() {
    return (
        <div className={styles.tasks}>
            <div className={styles.info}>
                <div className={styles.tasksCreated}>
                    <p>Tarefas Criadas</p>
                    <span className={styles.count}>0</span>
                </div>
                <div className={styles.taskDone}>
                    <p>Concluidas</p>
                    <span className={styles.count}>0</span>
                </div>

            </div>
            <div className={styles.empty}>
                <ClipboardText size={56} />
                <p>Você ainda não tem tarefas cadastradas
                    Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}

