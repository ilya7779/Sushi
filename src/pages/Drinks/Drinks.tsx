import styles from './Drinks.module.css';
import {beers, coctails, coffees, coldDrinks, otherAlcohols, wines} from "../../mocs";
import {DrinkCard, RollCard} from "../../components";


export const Drinks = () => {
    const resultCoffee = coffees.map((coffee) =>
        <DrinkCard id={coffee.id} title={coffee.title} price={coffee.price}/>)
    const resultColdDrinks = coldDrinks.map((coldDrink) =>
        <DrinkCard id={coldDrink.id} title={coldDrink.title} price={coldDrink.price}/>)
    const resultOtherAlcohols = otherAlcohols.map((otherAlcohol) =>
        <DrinkCard id={otherAlcohol.id} title={otherAlcohol.title} price={otherAlcohol.price}/>)
    const resultCoctails = coctails.map((coctail) =>
        <RollCard id={coctail.id} poster={coctail.poster} title={coctail.title}
                  composition={coctail.composition} price={coctail.price}/>)
    const resultBeers = beers.map((beer) =>
        <DrinkCard id={beer.id} title={beer.title} price={beer.price}/>)
    const resultWines = wines.map((wine) =>
        <DrinkCard id={wine.id} title={wine.title} price={wine.price}/>)
  return (
      <main className={styles.wrapper}>
          <h2 className={styles.rollsCards__title}>Кофе</h2>
          <div className={styles.containerDrinksCards}>
              {resultCoffee}
          </div>
          <h2 className={styles.rollsCards__title}>Холодные напитки</h2>
          <div className={styles.containerDrinksCards}>
              {resultColdDrinks}
          </div>
          <h2 className={styles.rollsCards__title}>Другой алкоголь</h2>
          <div className={styles.containerDrinksCards}>
              {resultOtherAlcohols}
          </div>
          <h2 className={styles.rollsCards__title}>Коктейли</h2>
          <div className={styles.containerRollsCards}>
              {resultCoctails}
          </div>
          <h2 className={styles.rollsCards__title}>Пиво</h2>
          <div className={styles.containerDrinksCards}>
              {resultBeers}
          </div>
          <h2 className={styles.rollsCards__title}>Вино</h2>
          <div className={styles.containerDrinksCards}>
              {resultWines}
          </div>
      </main>
  );
};
