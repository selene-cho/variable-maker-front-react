import styles from './Button.module.scss';

export default function Button({ children, onClick }) {
  return (
    <li className={styles.option}>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}
