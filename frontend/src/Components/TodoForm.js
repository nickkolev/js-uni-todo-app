import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [update, setUpdate] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  //useEffect - React hook, izpulnqva se vednaj pri purvonachalnoto zarejdane na stranicata
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleUpdateChange = e => {
    setUpdate(e.target.value);
  }
  
  const handleSubmit = e => {
    // prevent default - ne prezarejda stranicata
    e.preventDefault();

    //axios - library, s pomoshtta na koqto izprashtame zaqvki kum BE
    axios.post("http://localhost:8082/tasks", {
      title: input
    })
    .then((res) => {
      console.log("added")
    });

    setInput('');
  };

  const handleUpdate = e => {
    e.preventDefault();

    console.log(e.target.value)

    axios.put("http://localhost:8082/tasks/" + id, {
      title: update
    })
    .then((res) => {
      console.log("updated")
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleUpdateChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleUpdate} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
        
      )}
    </form>
  );
}

export default TodoForm;