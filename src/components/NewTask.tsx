import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
    return (
        <div className={styles.newTask}>
            <input
                type="text"
                className={styles.inputText}
                placeholder='Adicione uma nova tarefa'
            />
            <button>
                <PlusCircle size={16} className={styles.buttonPlus} />
                Criar
            </button>
        </div>
    )
}