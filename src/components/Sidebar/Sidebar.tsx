import {NavLink} from "react-router-dom";

import styles from './Sidebar.module.css';
import {setActiveBurgerAC, useAppDispatch} from "../../store";
import {BurgerMenuIcon} from "../../assets";
import {Burger} from "./Burger";

// import {Favorites, Home, Settings, Trends, Search} from "../../assets";


export const Sidebar = () => {

  const dispatch = useAppDispatch();

  const setActiveBurger = () => {
    dispatch(setActiveBurgerAC());
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__menu}>
        <div className={styles.menu__burger}>
          <button className={styles.burger__button} type="button" onClick={setActiveBurger}><BurgerMenuIcon /></button>
        </div>
        <ul className={styles.menu__list}>
          <NavLink  to='/Sushi' className={({ isActive }) =>
              isActive ? styles.menu__container_active : styles.menu__container
          }>
            <li className={styles.menu__title}>РОЛЛЫ</li>
          </NavLink>
          <NavLink  to='/Sets' className={({ isActive }) =>
              isActive ? styles.menu__container_active : styles.menu__container
          }>
            <li className={styles.menu__title}>СЕТЫ</li>
          </NavLink>
          <NavLink  to='/Pizza' className={({ isActive }) =>
              isActive ? styles.menu__container_active : styles.menu__container
          }>
            <li className={styles.menu__title}>ПИЦЦА</li>
          </NavLink>
          <NavLink  to='/Snacks' className={({ isActive }) =>
              isActive ? styles.menu__container_active : styles.menu__container
          }>
            <li className={styles.menu__title}>ЗАКУСКИ</li>
          </NavLink>
          <NavLink  to='/Drinks' className={({ isActive }) =>
              isActive ? styles.menu__container_active : styles.menu__container
          }>
            <li className={styles.menu__title}>НАПИТКИ</li>
          </NavLink>
        </ul>
      </div>
      <Burger />
    </aside>
  );
};
