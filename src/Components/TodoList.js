import React from 'react'
import Footer from './Footer'
import InputBox from './InputBox'
import PaginateList from './PaginateList'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <h1>{props.title.toUpperCase()}</h1>
      <InputBox addNewItem={props.addNewItem}/>
      <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
      <Footer count={props.items.length}/>
    </div>
  )
}

export default TodoList