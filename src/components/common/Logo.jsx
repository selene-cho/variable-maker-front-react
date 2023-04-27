import styles from './Logo.module.scss';
import NavItem from './NavItem';
import logoImg from '../../images/logo.png';

export default function Logo({ className }) {
  return (
    <section className={`${styles.logo} ${className}`}>
      <ul>
        <NavItem link={'/'} className={styles.logoBox}>
          <img src={logoImg} alt={logoImg} className={styles.logoImg} />
          네가 만든 변수명
        </NavItem>
      </ul>
    </section>
  );
}
