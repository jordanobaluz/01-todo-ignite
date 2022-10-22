import { useState } from 'react'
import { NewTask } from './components/NewTask'

import logoToDo from './assets/logoToDo.svg'
import './global.css'
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
}]

function App() {
  return (
    <div className="App">
      <header className='todoHeader'>
        <img src={logoToDo} alt="logo da aplicação do do" />
      </header>
      <div className='todoContent'>
        <NewTask tasks={taskApp} />
        {taskApp.map(tasks => {
          return (
            <Task key={tasks.id} id={tasks.id} name={tasks.nameTask} isCheck={tasks.isCheck} />
          )
        })}
      </div>
    </div>
  )
}

export default App
