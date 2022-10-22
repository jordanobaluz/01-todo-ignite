import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';


export function NewTask(taskApp: any) {
    const [tasks, setTasks] = useState(['1'])
    const [newTask, setNewTask] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        setTasks([...tasks, newTask])
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