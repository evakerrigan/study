import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="item"><NavLink to='/aboutme' activeClassName='active'>Админка</NavLink></li>
        <li className="item"><NavLink to='/counter' activeClassName={styles.active}>Counter</NavLink></li>
        <li className="item"><NavLink to='/todo' activeClassName={styles.active}>To do</NavLink></li>
        <li className="item"><NavLink to='/1' activeClassName={styles.active}>Страница 2</NavLink></li>
      </ul>
    </nav>
  );
};
