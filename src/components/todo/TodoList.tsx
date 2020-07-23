import React from 'react';
import TodoListItem from './TodoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="todoList">
      {todos.map(todo => (
        <TodoListItem key={todo.key} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;