import styles from './Task.module.css';
import { ClipboardText, Trash } from 'phosphor-react';

interface ITasks2 {
    task: {
        id: string;
        taskContent: string;
        status: boolean;
    }
    taskListEmpty: boolean;
}

export function Task({ task, taskListEmpty }: ITasks2) {
    return (
        <>
            <div className={styles.tasks}>
                {task.taskContent ?
                    <div className={styles.listTask}>
                        <input type='checkbox' className={styles.checkbox} />
                        <p>{task.taskContent}</p>
                        <button>
                            <Trash className={styles.trash} size={32} />
                        </button>
                    </div>
                    :
                    <div className={styles.empty}>
                        <ClipboardText size={56} />
                        <h1>VAZIO</h1>
                    </div>

                }
            </div>
        </>
    )
}

