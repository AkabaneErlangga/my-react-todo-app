import React from 'react'
import Footer from './Footer'
import InputBox from './InputBox'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <h1>{props.title.toUpperCase()}</h1>
      <InputBox />
      <ul className="list-group list-group-flush">
        {props.items.map(item => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ul>
      <Footer count={props.items.length}/>
    </div>
  )
}

export default TodoList