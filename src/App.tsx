import { ChangeEvent, FormEvent, useState } from 'react';
import { NewTask } from './components/NewTask'
import { Task } from './components/Task'

import { v4 as uuidv4 } from 'uuid';

import logoToDo from './assets/logoToDo.svg'
import './global.css'
import styles from './App.module.css'
import { EmptyList } from './components/EmptyList';


interface ITasks {
  id: string;
  taskContent: string;
  status: boolean;
}

const taskApp = [{
  id: 1,
  nameTask: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  isCheck: false
}, {
  id: 2,
  nameTask: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  isCheck: false
}, {
  id: 3,
  nameTask: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  isCheck: false
}]

function App() {
  const [taskList, setTaskList] = useState(Array<ITasks>)
  const [newTask, setNewTask] = useState('');

  const taskCount = taskList.length;

  const taskCountDone = taskList.reduce((completed, task) => {
    return completed + Number(task.status)
  }, 0)

  const taskListEmpty = taskList.length === 0;

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setTaskList([...taskList, {
      id: uuidv4(),
      taskContent: newTask,
      status: false
    }])
    setNewTask('')
  }

  function handleNewTask(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  return (
    <div className="App">
      <header className={styles.todoHeader}>
        <img src={logoToDo} alt="logo da aplicação do do" />
      </header>

      <div className={styles.createNewTask}>
        <NewTask handleNewTask={handleNewTask} handleSubmit={handleSubmit} newTask={newTask} />
      </div>

      <div className={styles.todoContent}>
        <div className={styles.info}>
          <div className={styles.tasksCreated}>
            <p>Tarefas Criadas</p>
            <span className={styles.count}>{taskCount}</span>
          </div>
          <div className={styles.taskDone}>
            <p>Concluidas</p>
            <span className={styles.count}>{taskCountDone}</span>
          </div>

        </div>

        {taskListEmpty ?
          <EmptyList />
          :
          taskList.map(task => {
            return (
              <Task task={task} key={task.id} />
            )
          })}
      </div>
    </div >
  )
}

export default App
