import React from 'react'
import './ToDoList.css'
const ToDoList = () => {
  const todos=[
    {task:"Go to Gym",
    isCompleted:false
  },
  {
    task:"Go to University",
    isCompleted:true
  },
  {
    task:"Buy Groceries",
    isCompleted:true
  },
  {
    task:"Revise React",
    isCompleted:true
  }
]
  return (
    <ul>
      {todos.map((todo)=>{
        return <li>
          {todo.task}
          <input type="checkbox" defaultChecked={todo.isCompleted}/>
        </li>
      })}
    </ul>
  )
}

export default ToDoList