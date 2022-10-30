import "./App.css";
import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "./component/AboutMe/AboutMe";
import { NavBar } from "./component/NavBar/NavBar";
import ToDo from "./component/ToDo/ToDo";
import { Borch } from "./component/Borch/Borch";
import { CounterWithRedux } from "./component/CounterWithRedux/CounterWithRedux";

function App() {


  return (
    <div className="App">
      <NavBar />
    <Routes>
      <Route path='aboutme' element={<AboutMe />}/>
      <Route path='counter' element={<CounterWithRedux />}/>
      <Route path='todo' element={<ToDo />}/>
      <Route path='borch' element={<Borch />}/>
    </Routes>
    </div>
  );
}

export default App;
