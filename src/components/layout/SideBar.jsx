import styles from './SideBar.module.scss';
import { RiSunLine } from 'react-icons/ri';
import {
  IoMoonOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { FcIdea } from 'react-icons/fc';
import { useDarkMode } from '../../contexts/DarkModeContext';
import HistoryList from './HistoryList';
import Button from '../common/Button';
import NavItem from '../common/NavItem';
import Feedback from '../../pages/FeedbackPage/Feedback';
import logoImg from '../../images/logo.png';

export default function SideBar({ keywords, onDeleteKeyword, onClearHistory }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.container}>
      <section className={styles.navLink}>
        <ul className={styles.navBar}>
          <NavItem link={'/variable'} className={styles.logo}>
            <img src={logoImg} alt={logoImg} className={styles.logo}/>
            네가 만든 변수명
          </NavItem>
          <NavItem link={'/variable'}>
            <FcIdea className={styles.icon} />
            변수명 추천
          </NavItem>
          <NavItem link={'/abbreviation'}>
            <FcIdea className={styles.icon} />
            약어 추천
          </NavItem>
        </ul>
      </section>
      <section className={styles.history}>
        <HistoryList keywords={keywords} onDeleteKeyword={onDeleteKeyword} />
      </section>
      <section className={styles.options}>
        <ul>
          <Button onClick={toggleDarkMode}>
            {!darkMode && (
              <p>
                <IoMoonOutline className={styles.icon} />
                Dark Mode
              </p>
            )}
            {darkMode && (
              <p>
                <RiSunLine className={styles.icon} />
                Light Mode
              </p>
            )}
          </Button>
          <Button onClick={onClearHistory}>
            <IoTrashOutline className={styles.icon} />
            History Reset
          </Button>
          <Feedback></Feedback>
        </ul>
      </section>
    </header>
  );
}
