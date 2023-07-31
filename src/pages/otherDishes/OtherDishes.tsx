import styles from './OtherDishes.module.css';
import {khachapuris, salads, vienneseWaffles} from "../../mocs";
import {RollCard} from "../../components";


export const OtherDishes = () => {
    const resultSalad = salads.map((salad) =>
        <RollCard id={salad.id} poster={salad.poster} title={salad.title}
                  composition={salad.composition} price={salad.price}/>)
    const resultVienneseWaffle = vienneseWaffles.map((vienneseWaffle) =>
        <RollCard id={vienneseWaffle.id} poster={vienneseWaffle.poster} title={vienneseWaffle.title}
                  composition={vienneseWaffle.composition} price={vienneseWaffle.price}/>)
    const resultKhachapuri = khachapuris.map((khachapuri) =>
        <RollCard id={khachapuri.id} poster={khachapuri.poster} title={khachapuri.title}
                  composition={khachapuri.composition} price={khachapuri.price}/>)

    return (
        <main className={styles.wrapper}>
            <h2 className={styles.rollsCards__title}>Салаты</h2>
            <div className={styles.containerRollsCards}>
                {resultSalad}
            </div>
            <h2 className={styles.rollsCards__title}>Венские вафли</h2>
            <div className={styles.containerRollsCards}>
                {resultVienneseWaffle}
            </div>
            <h2 className={styles.rollsCards__title}>Хачапури</h2>
            <div className={styles.containerRollsCards}>
                {resultKhachapuri}
            </div>
        </main>
    );
};