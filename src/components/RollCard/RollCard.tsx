import styles from './RollCard.module.css';

export const RollCard = (props: any) => {

  return (
    <div className={styles.rollCard}>
      <div className={styles.rollCard__container}>
        <div className={styles.rollCard__photo}>
          <img src={props.poster} alt="Poster"/>
        </div>
        <div className={styles.rollCard__description}>
          <div className={styles.rollCard__title}>{props.title}</div>
          <div className={styles.rollCard__composition}>{props.composition}</div>
          <div className={styles.rollCard__price}>{props.price}</div>
        </div>
      </div>
    </div>
  );
};