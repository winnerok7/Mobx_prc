import './App.css';
import Counter from './Counter';
import React from 'react'
import Todos from './Todos';

const App = () => {
  return (
    <div className='app'>
      <Counter />
      <Todos />
    </div>
  )
}

export default App
