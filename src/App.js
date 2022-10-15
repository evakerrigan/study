import "./App.css";
import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "./component/AboutMe/AboutMe";
import { NavBar } from "./component/NavBar/NavBar";
import { CounterWithRedux } from "./component/CounterWithRedux/CounterWithRedux";

function App() {


  return (
    <div className="App">
      <NavBar />
      {/* <button className="button" onClick={onClickSumm}>
        Клик
      </button>

      <div className="counter">
        Кликнули
        <span className="box">{counter}</span>
        раз
      </div> */}

    <Routes>
      <Route path='aboutme' element={<AboutMe />}/>
      <Route path='counter' element={<CounterWithRedux />}/>
    </Routes>
    </div>
  );
}

export default App;
