import React from 'react';

interface Todo {
    key: number,
    text: string;
    complete: boolean;
  }

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li className="todo todoItem">
      <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
        <input type="checkbox" key={todo.key} checked={todo.complete} onChange={() => {toggleTodo(todo);}} /> {todo.text}
      </label>
      <div className="todoBin" onClick={() => {removeTodo(todo);}} />
    </li>
  );
};

export default TodoListItem;