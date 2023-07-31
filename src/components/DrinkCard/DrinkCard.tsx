import styles from './DrinkCard.module.css';

export const DrinkCard = (props: any) => {

    return (
        <div className={styles.drinkCard}>
            <div className={styles.drinkCard__container}>
                <div className={styles.drinkCard__description}>
                    <div className={styles.drinkCard__title}>{props.title}</div>
                    <div className={styles.drinkCard__price}>{props.price}</div>
                </div>
            </div>
        </div>
    );
};