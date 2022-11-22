import React, { useState } from "react";
import styles from "./RepeatTodo.css";

export const RepeatTodo = () => {
  const [todo, setTodo] = useState(["дело 1", "дело 2"]);
  const initialInput = "";
  const [input, setInput] = useState(initialInput);

  const addTodo = () => {
    if (input === '') {
      alert('Вы ничего не ввели');
    } else {
      setTodo([...todo, input]);
      setInput(initialInput);
    }
  }
  const removeTodo = (event) => {
    console.log('Кликнули по крестику');
    console.log('event =', event);
    console.log('event.target.id =', event.target.id);
    const indexRemove = +(event.target.id);
    console.log('indexRemove =', indexRemove);
    console.log('typeof indexRemove =', typeof(indexRemove));
    const newTodo = [...todo].filter((item, index, arr) => {return (index !== indexRemove)});
    console.log('newTodo =', newTodo);
    setTodo(newTodo);
  }

  return (
    <div className="repeat-todo-wrapper">
      <h3 className="repeat-todo-title">Список дел</h3>
      <ul className="repeat-todo-list">
        {todo.map((elem, index) => (
          <li className="repeat-todo-item" key={index} id={index}>
            <div>
              <span>{index + 1}&nbsp;</span>
              {elem}
            </div>
            <div className="repeat-todo-remove" id={index} onClick={(event) => {removeTodo(event)}}>X</div>
          </li>
        ))}
      </ul>
      <input
        className="repeat-todo-input"
        placeholder="Введите дело"
        onChange={(event) => {
        setInput(event.target.value);
        console.log('input =', input)}
        }
        value={input}
      ></input>
      <button
        className="repeat-todo-button"
        type="submit"
        onClick={() => {addTodo()}}
      >
        Добавить
      </button>
    </div>
  );
};
