import styles from './SideBar.module.scss';
import { RiSunLine } from 'react-icons/ri';
import { IoClose, IoMoonOutline, IoTrashOutline } from 'react-icons/io5';
import { FcIdea } from 'react-icons/fc';
import { useDarkMode } from '../../contexts/DarkModeContext';
import HistoryList from './HistoryList';
import Button from '../common/Button';
import NavItem from '../common/NavItem';
import Feedback from '../../pages/FeedbackPage/Feedback';
import NavToggle from './NavToggle';
import { useCallback, useEffect, useState } from 'react';
import Logo from '../common/Logo';

function getLinkStyle({ isActive }) {
  return {
    textShadow: isActive ? '1px 1px 2px var(--color-link)' : '',
  };
}

export default function SideBar({ keywords, onDeleteKeyword, onClearHistory }) {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    toggleMenu();
  }, []);

  return (
    <>
      <div className={styles.topNav}>
        <button className={styles.navToggle}>
          <NavToggle onClick={toggleMenu} />
        </button>
        <Logo />
      </div>
      <div className={`${styles.container} ${!isOpen ? styles.active : ''}`}>
        <nav className={`${styles.sideNav} ${!isOpen ? styles.active : ''}`}>
          <button className={styles.navToggle} onClick={toggleMenu}>
            <IoClose className={styles.menuOff} />
          </button>
          <Logo className={styles.logo} />
          <section className={styles.link}>
            <ul>
              <NavItem link={'/variable'} getLinkStyle={getLinkStyle}>
                <FcIdea className={styles.icon} />
                변수명 추천
              </NavItem>
              <NavItem link={'/abbreviation'} getLinkStyle={getLinkStyle}>
                <FcIdea className={styles.icon} />
                약어 추천
              </NavItem>
            </ul>
          </section>
          <section className={styles.history}>
            <HistoryList
              keywords={keywords}
              onDeleteKeyword={onDeleteKeyword}
            />
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
        </nav>
      </div>
    </>
  );
}
