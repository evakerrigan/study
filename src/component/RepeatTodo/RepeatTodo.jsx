import React, { useState } from "react";
import "./RepeatTodo.css";

export const RepeatTodo = () => {
  const [todo, setTodo] = useState(["дело 1", "дело 2"]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input) {
      alert("Вы ничего не ввели");
    } else {
      setTodo([...todo, input]);
      setInput("");
    }
  };
  const removeTodo = (event) => {
    const indexRemove = +event.target.id;
    const newTodo = [...todo].filter((item, index, arr) => {
      return index !== indexRemove;
    });
    setTodo(newTodo);
  };

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
            <div
              className="repeat-todo-remove"
              id={index}
              onClick={(event) => {
                removeTodo(event);
              }}
            >
              X
            </div>
          </li>
        ))}
      </ul>
      <input
        className="repeat-todo-input"
        placeholder="Введите дело"
        onChange={(event) => {
          setInput(event.target.value);
        }}
        value={input}
      ></input>
      <button
        className="repeat-todo-button"
        type="submit"
        onClick={() => {
          addTodo();
        }}
      >
        Добавить
      </button>
    </div>
  );
};
