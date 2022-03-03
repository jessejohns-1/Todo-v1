import React, { useState, useEffect } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

function Todolist() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    getLocalTodos()
  } , []);

  useEffect(() => {
    saveLocalTodos()
} , [todos]);

const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };
  
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };


  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };


  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <Todoform onSubmit={addTodo} />
      <Todo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo} 
      updateTodo={updateTodo}
      />
    </div>
  );
}

export default Todolist;
