import styles from './Pizza.module.css';
import {pizzas} from "../../mocs";
import {RollCard} from "../../components";


export const Pizzas = () => {
    const resultPizza = pizzas.map((pizza) =>
        <RollCard id={pizza.id} poster={pizza.poster} title={pizza.title}
                  composition={pizza.composition} price={pizza.price}/>)

  return (
      <main className={styles.wrapper}>
          <h2 className={styles.rollsCards__title}>Пиццы</h2>
          <div className={styles.containerRollsCards}>
              {resultPizza}
          </div>
      </main>
  );
};
