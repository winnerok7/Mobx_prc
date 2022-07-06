import React from 'react'
import todo from './store/todo'
import { observer } from 'mobx-react-lite'

const Todos = observer(() => {
   console.log('render')
   return (
      <div>
         <button onClick={() => todo.fetchTodos()}>fetch todos</button>
         {todo.todos.map(td =>
            <div className='todo' key={td.id}>
               <input type="checkbox" checked={td.completed} onChange={() => todo.completeTodo(td.id)} />
               {td.title}
               <button onClick={() => todo.removeTodo(td.id)}>Delete</button>
            </div>
         )}
      </div>
   )
})

export default Todos