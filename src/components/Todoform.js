import React, { useState, useEffect, useRef } from "react";

function Todoform(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);
  
  useEffect(() => {
      inputRef.current.focus();
  });

  const onChange = e => {
    setInput(e.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input
        type="text"
        placeholder="add a todo"
        value={input}
        name="text"
        className="todo-input edit"
        onChange={onChange}
        ref={inputRef}
      />
      <button className="todo-button edit">Save Changes</button>
      </>) : (<><input
        type="text"
        placeholder="add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={onChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
      </>)}
    </form>
  );
}

export default Todoform;
