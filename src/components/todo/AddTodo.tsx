import React, { useState } from 'react';

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form className="addInputSubmit">
      <input className="addInputTextField" type="text" value={text} onChange={e => {setText(e.target.value);}}/>
      <button className="addInputButton" placeholder="add to-do.." type="submit" onClick={e => {e.preventDefault(); if(!text)return; addTodo(text); setText('');}}></button>
    </form>
  );
};


export default AddTodoForm;