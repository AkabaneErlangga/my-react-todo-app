import React from 'react'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <h1>{props.title.toUpperCase()}</h1>
      <ul className="list-group list-group-flush">
        {props.items.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList