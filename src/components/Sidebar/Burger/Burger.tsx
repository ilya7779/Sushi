import {useSelector} from "react-redux";

import {hasBurgerSelector, setActiveBurgerAC, useAppDispatch} from "../../../store";
import styles from './Burger.module.css';
import {NavLink} from "react-router-dom";

export const Burger = () => {
    const dispatch = useAppDispatch();
    const burgerActive = useSelector(hasBurgerSelector);

    const setActiveBurger = () => {
        dispatch(setActiveBurgerAC());
    }



    burgerActive
        ? document.querySelector("body")!.setAttribute('style',"overflow: hidden")
        : document.querySelector("body")!.setAttribute('style', "overflow: visible");
    return (
        <div className={burgerActive ? styles.burger + ' ' + styles.active : styles.burger} onClick={setActiveBurger}>
            <div className={styles.burger__blackout}></div>
            <div className={styles.burger__container} onClick={e => e.stopPropagation()}>
                <ul className={styles.menu__list}>
                    <NavLink  to='/Sushi' className={({ isActive }) =>
                        isActive ? styles.menu__container_active : styles.menu__container
                    } onClick={setActiveBurger}>
                        <li className={styles.menu__title}>РОЛЛЫ</li>
                    </NavLink>
                    <NavLink  to='/Sets' className={({ isActive }) =>
                        isActive ? styles.menu__container_active : styles.menu__container
                    } onClick={setActiveBurger}>
                        <li className={styles.menu__title}>СЕТЫ</li>
                    </NavLink>
                    <NavLink  to='/Pizza' className={({ isActive }) =>
                        isActive ? styles.menu__container_active : styles.menu__container
                    } onClick={setActiveBurger}>
                        <li className={styles.menu__title}>ПИЦЦА</li>
                    </NavLink>
                    <NavLink  to='/Snacks' className={({ isActive }) =>
                        isActive ? styles.menu__container_active : styles.menu__container
                    } onClick={setActiveBurger}>
                        <li className={styles.menu__title}>ЗАКУСКИ</li>
                    </NavLink>
                    <NavLink  to='/Drinks' className={({ isActive }) =>
                        isActive ? styles.menu__container_active : styles.menu__container
                    } onClick={setActiveBurger}>
                        <li className={styles.menu__title}>НАПИТКИ</li>
                    </NavLink>
                </ul>
            </div>
            </div>
    )
}

