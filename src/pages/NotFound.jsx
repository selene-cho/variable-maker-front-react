import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';
import error404Img from '../images/404-error.png';
import errorImg from '../images/error.png';
import arrowImg from '../images/reply-message.png';

export default function NotFound() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img
          src={errorImg}
          alt="Page not found icons created by Freepik - Flaticon"
        />
        <div className={styles.title}>
          <img
            src={error404Img}
            alt="404 error icons created by Ghozi Muhtarom - Flaticon"
          />
          <h1>페이지를 찾을 수 없습니다.</h1>
        </div>
        <div className={styles.goHome}>
          <img src={arrowImg} alt="Back icons created by Freepik - Flaticon" />
          <Link to="/" className={styles.link}>
            <span>Home</span>으로 가기
          </Link>
        </div>
      </div>
    </div>
  );
}
