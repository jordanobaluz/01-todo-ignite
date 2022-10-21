import styles from './Task.module.css';
import { ClipboardText, Trash } from 'phosphor-react';

interface Task {
    jobs: string[]
    hasTask?: boolean
}

export function Task({ jobs, hasTask }: Task) {
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
            {jobs ?
                <div className={styles.listTask}>
                    <input type='checkbox' className={styles.checkbox} />
                    {jobs.map(job => { return (<p>{job}</p>) })}
                    <button>
                        <Trash className={styles.trash} size={32} />
                    </button>
                </div> :
                <div className={styles.empty}>
                    <ClipboardText size={56} />
                    <h1>VAZIO</h1>
                </div>
            }
        </div>
    )
}

