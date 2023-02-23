import {NavLink} from "react-router-dom";

import styles from './Header.module.css';
import {logo, phone, deliverFood, instagram} from "../../assets";
import LanguageSelection from "../languageSelection/LanguageSelection";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <NavLink to='/Sushi'><img src={logo} alt="logo"/></NavLink></div>
        <div className={styles.header__information}>
          <div className={styles.information__block}>
            <div className={styles.information__blockImg}><img src={phone} alt="phone"/></div>
            <div className={styles.information__blockDescription}>591387700</div>
          </div>
          <div className={styles.information__block}>
            <div className={styles.information__blockImg}><img src={deliverFood} alt="deliverFood"/></div>
            <div className={styles.information__blockDescription}>Доставка на дом: <br/>c 11.00 до 22.00 каждый день</div>
          </div>
        </div>
        <div className={styles.header__language}>
          <LanguageSelection />
        </div>
        <div className={styles.header__socialMedia}><a href="https://instagram.com/philadelphia_ge?igshid=YmMyMTA2M2Y=">
          <img src={instagram} alt="instagram"/></a>
        </div>
      </div>
    </header>
  );
};
