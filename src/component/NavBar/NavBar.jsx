import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="list">
      <li><NavLink to='/aboutme' activeClassName='active'>Админка</NavLink></li>
        <li className="item"><NavLink to='/counter' activeClassName={styles.active}>Counter</NavLink></li>
        <li className="item"><NavLink to='/3' activeClassName={styles.active}>Страница 4</NavLink></li>
        <li className="item"><NavLink to='/1' activeClassName={styles.active}>Страница 2</NavLink></li>
      </ul>
    </nav>
  );
};
