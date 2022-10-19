import styles from './Task.module.css';
import { ClipboardText, Trash } from 'phosphor-react';

interface Task {
    job: string
    hasTask?: boolean
}

export function Task({ job, hasTask }: Task) {
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
            {job ?
                <div className={hasTask ? styles.empty : styles.listTask}>
                    <input type='checkbox' className={styles.checkbox} />
                    <p>{job}</p>
                    <button>
                        <Trash className={styles.trash} size={32} />
                    </button>
                </div> :
                <div>
                    <ClipboardText size={56} />
                    <h1>VAZIO</h1>
                </div>
            }
        </div>
    )
}

