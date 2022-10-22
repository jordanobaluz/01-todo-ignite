import styles from './Task.module.css';
import { ClipboardText, Trash } from 'phosphor-react';

interface ITask {
    id: number;
    name: string;
    isCheck: boolean
}

export function Task({ id, name, isCheck }: ITask) {
    return (
        <div className={styles.tasks}>

            {name ?
                <div className={styles.listTask}>
                    <input type='checkbox' className={styles.checkbox} />
                    <p>{name}</p>
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

