import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface iTaskApp {
    id: number;
    name: string;
    isCheck: boolean
}

export function NewTask(taskApp: any) {
    const [tasks, setTasks] = useState(Array<iTaskApp>)
    const [newTask, setNewTask] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setTasks([...taskApp.tasks, {
            id: uuidv4(),
            name: newTask,
            isCheck: false
        }])
        setNewTask('')
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.newTask}>
            <input
                type="text"
                className={styles.inputText}
                value={newTask}
                onChange={handleNewTask}
                placeholder='Adicione uma nova tarefa'
            />
            <button type='submit'>
                <PlusCircle size={16} className={styles.buttonPlus} />
                Criar
            </button>
        </form>
    )
}