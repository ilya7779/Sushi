import styles from './Sets.module.css';
import {RollCard} from "../../components";
import {sets} from "../../mocs";


export const Sets = () => {
  const resultSets = sets.map((set) =>
    <RollCard id={set.id} poster={set.poster} title={set.title}
              composition={set.composition} price={set.price}/>)

  return (
    <main className={styles.wrapper}>
      <h2 className={styles.rollsCards__title}>Сеты</h2>
      <div className={styles.containerRollsCards}>
        {resultSets}
      </div>
    </main>
  );
};
