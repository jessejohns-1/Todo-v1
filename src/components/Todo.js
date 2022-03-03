import React, {useState} from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import TodoForm from './Todoform'
function Todo( {todos, completeTodo,removeTodo,updateTodo} ) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

  return todos.map((todo,index) => {
      return <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}>
            <div key={todo.id}>
             {todo.text}
             </div>
        <div className='icons'>
            <RiCloseCircleLine  onClick={() => removeTodo(todo.id)}
            className='delete-icon'
            />
            <AiOutlineCheckCircle onClick={() => completeTodo(todo.id)}/>
            <AiFillEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className='edit-icon'/>
        </div>
      </div>
      
  })
}

export default Todo