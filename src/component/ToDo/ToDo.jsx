
import './ToDo.module.css';
import React, { useState } from 'react';

function ToDo() {

  let onChangeInput = (e) => {
      console.log('изменен инпут');
      setArrayInputElement(e.target.value);
    };

  let onClickSubmit = () => {
      console.log('клик по сабмиту');
      setArrayTask([...arrayTask, arrayInputElement]);
      setArrayInputElement('');
    };

  function onClickButtonX(index) {
    console.log('удалить таск');
    console.log(arrayTask.filter((_, i) => i !== index))
    setArrayTask(arrayTask.filter((_, i) => i !== index))
    // console.log('index = ', index);
    // setArrayTask([...arrayTask.slice(0, index), ...arrayTask.slice(index + 1)]);
    // console.log('arrayTask = ', arrayTask);
 }

  const [arrayInputElement, setArrayInputElement] = useState('');

  const [arrayTask, setArrayTask] = useState(['задание5', 'задание3', 'задание7']);


  return (
    <div className="App">

      <input
      placeholder="Enter task"
      className="input"
      value={arrayInputElement}
      type="text"
      onChange={onChangeInput}></input>

      <input className="button" type="submit" value="Submit" onClick={onClickSubmit}></input>

      <ul className="list">
          {arrayTask.map( (item, index) => {
            return <li className="item" key={index}>{item}<button className="button-x" onClick={() => onClickButtonX(index)}>x</button></li>
          })}
      </ul>

    </div>
  );
}

export default ToDo;
