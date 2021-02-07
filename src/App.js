import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import ListItems from './components/ListItems'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { addTodo, deleteTodo, updateTodo } from './reducers/todoSlice';

library.add(faTrash)

function App() {

  const dispatch = useDispatch()
  const todoList = useSelector( (state) => state.todoReducer.todoList )

  console.log("todoList = ", todoList);

  let [currentItem, setCurrentItem] = useState({
    text:'',
    key:''
  })

  let handleInput = (e) => {
    setCurrentItem({
      text: e.target.value,
      key: Date.now()
    })
  }
  
  let addItem = (e) => {
    e.preventDefault();
    if(currentItem.text !==""){
      dispatch(addTodo(currentItem))
    }
  }

  let deleteItem = (key) => {
      dispatch(deleteTodo(key))
  }

  let updateItem = (text, key) => {
    dispatch(updateTodo({text, key}))
  }
  
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={addItem}>
          <input type="text" placeholder="Enter task" value= {currentItem.text} onChange={handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{todoList.text}</p>
        
          <ListItems items={todoList} deleteItem={deleteItem} setUpdate={updateItem}/>
        
      </header>
    </div>
  );
 }


export default App;