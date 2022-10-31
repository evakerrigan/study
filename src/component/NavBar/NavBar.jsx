import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item"><NavLink to='/aboutme' >Админка</NavLink></li>
        <li className="item"><NavLink to='/counter'>Counter with redux</NavLink></li>
        <li className="item"><NavLink to='/todo'>To do</NavLink></li>
        <li className="item"><NavLink to='/imagepath'>Image Path</NavLink></li>
        <li className="item"><NavLink to='/else'>Else</NavLink></li>
      </ul>
    </nav>
  );
};
