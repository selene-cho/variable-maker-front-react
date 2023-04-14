import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';
import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import { RiSunLine } from 'react-icons/ri';
import {
  IoBulbOutline,
  IoClipboardOutline,
  IoMegaphoneOutline,
  IoMoonOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { FcIdea, FcKindle, FcLike, FcSurvey } from 'react-icons/fc';
export default function SideBar() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <section className={styles.sectionTop}>
        <ul>
          <Link to="variable" className={styles.Link}>
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
          <li>variable</li>
          <li>variable</li>
          <li>variable</li>
          <li>variable</li>
          <li>variable</li>
        </ul>
      </section>
      <section className={styles.sectionBottom}>
        <ul>
          <li>
            <IoMoonOutline className={styles.icon} />
            {/* <BsFillMoonFill className={styles.icon} /> */}
            Dark Mode
          </li>
          <li>
            <RiSunLine className={styles.icon} />
            Light Mode
          </li>
          <li>
            <IoTrashOutline className={styles.icon} />
            Reset
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
