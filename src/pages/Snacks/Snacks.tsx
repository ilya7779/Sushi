import styles from './Snacks.module.css';
import {snacks} from "../../mocs";
import {RollCard} from "../../components";



export const Snacks = () => {
    const resultSnack = snacks.map((snack) =>
        <RollCard id={snack.id} poster={snack.poster} title={snack.title}
                  composition={snack.composition} price={snack.price}/>)

  return (
    <main className={styles.wrapper}>
        <h2 className={styles.rollsCards__title}>Закуски</h2>
        <div className={styles.containerRollsCards}>
            {resultSnack}
        </div>
    </main>
  );
};
