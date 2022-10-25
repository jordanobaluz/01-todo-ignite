import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface ITasks {
    task: {
        id: string;
        taskContent: string;
        status: boolean;
    }
}

export function Task({ task }: ITasks) {
    return (
        <div className={styles.tasks}>
            <div className={styles.listTask}>
                <input type='checkbox' className={styles.checkbox} />
                <p>{task.taskContent}</p>
                <button>
                    <Trash className={styles.trash} size={32} />
                </button>
            </div>
        </div>
    )
}

