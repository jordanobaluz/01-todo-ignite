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

const taskApp = ['']

function App() {
  return (
    <div className="App">
      <header className='todoHeader'>
        <img src={logoToDo} alt="logo da aplicação do do" />
      </header>
      <div className='todoContent'>
        <NewTask tasks={taskApp} />
        <Task jobs={taskApp} />
      </div>
    </div>
  )
}

export default App
