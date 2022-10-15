import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './CounterWithRedux.module.css'
import { summAction } from "../../store/reducers/COUNTER_REDUCER";


export const CounterWithRedux = () => {

  const first = useSelector((state) => state.firstReducer);
  const counter = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  console.log("first =", first);
  console.log("counter =", counter);
  console.log("count =", counter);

  function onClickSumm() {
    console.log("s");
    dispatch(summAction(counter));
  }

  return (

    <div>

      <button className="button" onClick={onClickSumm}>
        Клик
      </button>
      <div className="counter">
        Кликнули
        <span className="box">{counter}</span>
        раз
      </div>

    </div>

  );

};