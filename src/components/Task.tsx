import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

interface ITasks {
    task: {
        id: string;
        taskContent: string;
        status: boolean;
    }
    changeTaskStatus: (id: string) => void;
    deleteTask: (id: string) => void;
}

export function Task({ task, changeTaskStatus, deleteTask }: ITasks) {
    function handleChangeStatus() {
        changeTaskStatus(task.id)
    }

    function handleDeleteTask() {
        deleteTask(task.id)
    }

    return (
        <div className={styles.tasks}>
            <div className={styles.listTask}>
                <input type='checkbox' className={styles.checkbox} onClick={handleChangeStatus} />
                <p className={task.status ? styles.taskChecked : styles.taskUnchecked}>{task.taskContent}</p>
                <button onClick={handleDeleteTask}>
                    <Trash className={styles.trash} size={32} />
                </button>
            </div>
        </div>
    )
}

