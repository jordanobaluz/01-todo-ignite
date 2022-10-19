import { useState } from 'react'
import { NewTask } from './components/NewTask'

import logoToDo from './assets/logoToDo.svg'
import './global.css'
import { Task } from './components/Task'

function App() {
  return (
    <div className="App">
      <header className='todoHeader'>
        <img src={logoToDo} alt="logo da aplicação do do" />
      </header>
      <div className='todoContent'>
        <NewTask />
        <Task job={"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."} />
      </div>
    </div>
  )
}

export default App
