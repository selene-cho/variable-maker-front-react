import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import { RiSunLine } from 'react-icons/ri';
import {
  IoBulbOutline,
  IoClipboardOutline,
  IoClose,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { FcIdea, FcKindle, FcLike, FcSurvey } from 'react-icons/fc';
import { useDarkMode } from '../context/DarkModeContext';

export default function SideBar({ keywords, onDeleteKeyword, onClearHistory }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  console.log('keywords :', keywords);
  return (
    <header className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <section className={styles.sectionTop}>
        <ul>
          <Link to="/" className={styles.Link}>
            <li>
              <FcIdea className={styles.icon} />
              변수명 추천
            </li>
          </Link>
          <Link>
            <li>
              <FcIdea className={styles.icon} />
              약어 추천
            </li>
          </Link>
        </ul>
      </section>
      <section className={styles.sectionMiddle}>
        <h1>
          <FcSurvey className={styles.icon} />
          최근 검색 기록
        </h1>
        <ul>
          {keywords.map(({ id, text }) => {
            return (
              <li key={id}>
                <span>{text}</span>
                <button
                  onClick={() => {
                    onDeleteKeyword(id);
                  }}
                >
                  <IoClose className={styles.deleteIcon} />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.sectionBottom}>
        <ul>
          <li>
            <button onClick={toggleDarkMode}>
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
            </button>
          </li>

          {/* <BsFillMoonFill className={styles.icon} /> */}
          <li>
            <button onClick={onClearHistory}>
              <IoTrashOutline className={styles.icon} />
              Reset
            </button>
          </li>
          <li>
            <IoMegaphoneOutline className={styles.icon} />
            Feed Back
          </li>
        </ul>
      </section>
    </header>
  );
}
