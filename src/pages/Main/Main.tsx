import styles from './Main.module.css';
import {RollCard} from "../../components";
import {classicalRolls, gunkans, makiRolls, others, sets, sushi, tempuraRolls} from "../../mocs";


export const Main = () => {

  const resultClassicalRolls = classicalRolls.map((classicalRoll) =>
    <RollCard id={classicalRoll.id} poster={classicalRoll.poster} title={classicalRoll.title}
              composition={classicalRoll.composition} price={classicalRoll.price}/>)
  const resultTempuraRolls = tempuraRolls.map((tempuraRoll) =>
    <RollCard id={tempuraRoll.id} poster={tempuraRoll.poster} title={tempuraRoll.title}
              composition={tempuraRoll.composition} price={tempuraRoll.price}/>)
  const resultMakiRolls = makiRolls.map((MakiRoll) =>
    <RollCard id={MakiRoll.id} poster={MakiRoll.poster} title={MakiRoll.title}
              composition={MakiRoll.composition} price={MakiRoll.price}/>)
  const resultSets = sets.map((set) =>
    <RollCard id={set.id} poster={set.poster} title={set.title}
              composition={set.composition} price={set.price}/>)
  const resultSushi = sushi.map((currentSushi) =>
    <RollCard id={currentSushi.id} poster={currentSushi.poster} title={currentSushi.title}
              composition={currentSushi.composition} price={currentSushi.price}/>)
  const resultGunkans = gunkans.map((gunkan) =>
    <RollCard id={gunkan.id} poster={gunkan.poster} title={gunkan.title}
              composition={gunkan.composition} price={gunkan.price}/>)
  const resultOthers = others.map((other) =>
    <RollCard id={other.id} poster={other.poster} title={other.title}
              composition={other.composition} price={other.price}/>)
  // const resultSauces = sauces.map((sauce) =>
  //   <RollCard id={sauce.id} poster={sauce.poster} title={sauce.title}
  //             composition={sauce.composition} price={sauce.price}/>)
  return (
    <main className={styles.wrapper}>
      <h2 className={styles.rollsCards__title}>Классические</h2>
      <div className={styles.containerRollsCards}>
        {resultClassicalRolls}
      </div>
      <h2 className={styles.rollsCards__title}>Тёплые Роллы</h2>
      <div className={styles.containerRollsCards}>
        {resultTempuraRolls}
      </div>
      <h2 className={styles.rollsCards__title}>Маки</h2>
      <div className={styles.containerRollsCards}>
        {resultMakiRolls}
      </div>
      <h2 className={styles.rollsCards__title}>Сеты</h2>
      <div className={styles.containerRollsCards}>
        {resultSets}
      </div>
      <h2 className={styles.rollsCards__title}>Суши</h2>
      <div className={styles.containerRollsCards}>
        {resultSushi}
      </div>
      <h2 className={styles.rollsCards__title}>Гунканы</h2>
      <div className={styles.containerRollsCards}>
        {resultGunkans}
      </div>
      <h2 className={styles.rollsCards__title}>Другое</h2>
      <div className={styles.containerRollsCards}>
        {resultOthers}
      </div>
      {/*<h2 className={styles.rollsCards__title}>Соусы</h2>*/}
      {/*<div className={styles.containerRollsCards}>*/}
      {/*  {resultSauces}*/}
      {/*</div>*/}
    </main>
  );
};
