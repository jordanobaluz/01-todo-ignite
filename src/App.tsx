import { useState } from 'react'
import { NewTask } from './components/NewTask'

import logoToDo from './assets/logoToDo.svg'
import './global.css'

function App() {
  return (
    <div className="App">
      <header className='todoHeader'>
        <img src={logoToDo} alt="logo da aplicação do do" />
      </header>
      <div className='todoContent'>
        <NewTask />
      </div>
    </div>
  )
}

export default App
