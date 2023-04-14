import { BsChatSquareText } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import styles from './Search.module.scss';
import pascalImg from '../images/Pascal.png';
import camelImg from '../images/camel.png';
import snakeImg from '../images/snake.png';

export default function Search() {
  return (
    <div className={styles.container}>
      <div className={styles.chooseCase}>
        <p>Type 선택 &nbsp;:</p>
        <label>
          <input type="checkbox" />
          <img src={snakeImg} alt="snakeImage" /> snake_case
        </label>
        <label>
          <input type="checkbox" />
          <img src={camelImg} alt="camelImage" /> camelCase
        </label>
        <label>
          <input type="checkbox" />
          <img src={pascalImg} alt="pascalImage" /> PascalCase
        </label>
      </div>
      <div className={styles.search}>
        <BsChatSquareText className={styles.icon} />
        <input
          type="search"
          placeholder="변수명을 입력해주세요. &nbsp; (단어만 입력해주세요)"
        />
        <FcSearch className={styles.icon} />
      </div>
    </div>
  );
}
