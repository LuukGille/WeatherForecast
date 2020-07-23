import React, { Fragment, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from '../todo/AddTodo';

const arrayTodos: Todo[] = [

];

const ToDoSection = () => {
  const [todos, setTodos] = useState(arrayTodos);
  
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
  let i;
  for (i = 0; i <= todos.length; i++) {
      const newTodo = { key: i, text, complete: false };
      setTodos([...todos, newTodo]);
    }
  }

  const removeTodo = (todo: Todo) => {
    var array = [...todos];
    console.log(todo.key);
    console.log(array);
    array.splice(todo.key, 1);
    setTodos(array);
  };

      return (
        <Fragment>
          <div className="todoContainer">
            <h2 className="todo todoTitle">To-do List:</h2>
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}></TodoList>
            <AddTodoForm addTodo={addTodo} />
          </div>
        </Fragment>
      );
  };

  export default ToDoSection;