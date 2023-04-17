import { BsChatSquareText } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
import styles from './Search.module.scss';
import pascalImg from '../images/Pascal.png';
import camelImg from '../images/camel.png';
import snakeImg from '../images/snake.png';
import { useEffect, useState } from 'react';
import { getTranslateWord } from '../api/api';

export default function Search() {
  const [search, setSearch] = useState('');
  const handleLoad = async (searchQuery) => {
    const { searchData } = await getTranslateWord(searchQuery);
    setSearch(searchData);
  };

  useEffect(() => {
    handleLoad(search);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
  };

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
      <form className={styles.search} onSubmit={handleSearchSubmit}>
        <BsChatSquareText className={styles.icon} />
        <input
          type="search"
          name="search"
          placeholder="변수명을 입력해주세요. &nbsp; (단어만 입력해주세요)"
        />
        <button type="submit">
          <FcSearch className={styles.icon} />
        </button>
      </form>
      <div>{search}</div>
    </div>
  );
}
