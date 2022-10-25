import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { InvalidEvent } from 'react';

interface iHandleNewTask {
    handleNewTask: (taskContent: any) => void;
    handleSubmit: (handleSubmit: any) => void;
    newTask: string;
}

export function NewTask(taskApp: iHandleNewTask) {

    function handleInvalidInput(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Por favor digite uma tarefa")
    }

    return (
        <form onSubmit={taskApp.handleSubmit} className={styles.newTask}>
            <input
                type="text"
                className={styles.inputText}
                value={taskApp.newTask}
                onChange={taskApp.handleNewTask}
                placeholder='Adicione uma nova tarefa'
                onInvalid={handleInvalidInput}
                required
            />
            <button type='submit'>
                <PlusCircle size={16} className={styles.buttonPlus} />
                Criar
            </button>
        </form>
    )
}