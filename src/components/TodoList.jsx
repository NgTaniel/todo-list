import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const [list, setList] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newList = [todo, ...list];

    setList(newList);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setList(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removeArray = [...list].filter(todo => todo.id !== id);

    setList(removeArray);
  }

  const completeTodo = id => {
    let updatedTodos = list.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    });
    setList(updatedTodos);
  }

  return (
    <div>
      <h1>Time to Catch up on some work! :D</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={list} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList