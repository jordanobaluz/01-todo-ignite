import { useState } from 'react'
import { NewTask } from './components/NewTask'

import logoToDo from './assets/logoToDo.svg'
import './global.css'
import styles from './App.module.css'
import { Task } from './components/Task'

interface ITasks {
  id: string;
  taskName: string;
  done: boolean;
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
  return (
    <div className="App">
      <header className={styles.todoHeader}>
        <img src={logoToDo} alt="logo da aplicação do do" />
      </header>

      <div className={styles.createNewTask}>
        <NewTask tasks={taskApp} />
      </div>

      <div className={styles.todoContent}>
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

        {taskApp.map(tasks => {
          return (
            <Task key={tasks.id} id={tasks.id} name={tasks.nameTask} isCheck={tasks.isCheck} />
          )
        })}
      </div>
    </div >
  )
}

export default App
