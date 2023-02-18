import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__description}>
        «SushiPhiladelphia» © 2023 | Все права защищены</div>
    </footer>
  );
};
