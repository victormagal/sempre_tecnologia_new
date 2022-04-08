import styles from './styles.module.css';

export default function Cards({ children }) {
  return <div className={styles.cards}>{children}</div>;
}
