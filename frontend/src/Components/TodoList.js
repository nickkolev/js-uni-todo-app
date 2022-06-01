import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8082/tasks").then((res) => {
      setTodos(res.data);
    });
    console.log(todos);
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    } else {
      
    }
  };

  const updateTodo = (todoId, newValue) => {
     if (!newValue.text || /^\s*$/.test(newValue.text)) {
       return;
     }

     axios.put("http://localhost:8082/tasks/" + todoId, {
       title: newValue
     }).then((res) => {
      setTodos(res.data);
    });
  };

  const removeTodo = (id) => {
    axios.delete("http://localhost:8082/tasks/" + id).then((res) => {
      setTodos(res.data);
    });
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
