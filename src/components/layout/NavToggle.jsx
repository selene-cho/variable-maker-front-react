import { CgMenu } from 'react-icons/cg';
import styles from './NavToggle.module.scss';

export default function NavToggle({ onClick }) {
  return (
    <>
      <input type="checkbox" id="navToggle" className={styles.navToggle} />
      <label htmlFor="navToggle" onClick={onClick}>
        <CgMenu className={styles.menuOn} />
      </label>
    </>
  );
}
