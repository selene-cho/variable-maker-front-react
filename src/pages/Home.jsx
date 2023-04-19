import Variable from './Variable';
import styles from './Home.module.scss';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import { getTranslateWord } from '../api/api';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';
import { CiDesktopMouse1 } from 'react-icons/ci';
import pascalImg from '../images/Pascal.png';
import camelImg from '../images/camel.png';
import snakeImg from '../images/snake.png';
import { FcSearch } from 'react-icons/fc';
import { BsChatSquareText } from 'react-icons/bs';
import { HiOutlineCode } from 'react-icons/hi';
import { useOutletContext } from 'react-router-dom';

export default function Home() {
  const [search, setSearch] = useState(''); // 검색 단어 저장 state
  const [translatedWord, setTranslatedWord] = useState(''); // 번역 단어 저장 state
  // const [keyword, setKeyword] = useState('');
  const [wordCount, setWordCount] = useState(0); // 단어별 검색 사용자 수 저장 state

  const handleAddKeyword = useOutletContext();

  const handleLoad = async (searchQuery) => {
    const { translated_variable, count } = await getTranslateWord(searchQuery);
    // console.log(translated_variable);
    setTranslatedWord(translated_variable);
    handleAddKeyword(translated_variable);
    setWordCount(count);
  };

  useEffect(() => {
    handleLoad(search);
  }, [search]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
    // handleAddKeyword(translatedWord);
    // setKeyword('');
    setTranslatedWord('');
  };

  // const handleKeyword = (e) => {
  //   setKeyword(e.target.value);
  // };

  // const handleEnter = (e) => {
  //   if (keyword && e.keyCode === 13) {
  //     handleAddKeyword(keyword);
  //     setKeyword('');
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.variableWrapper}>
        <div className={styles.content}>
          <header>
            <HiOutlineCode className={styles.icon} />
            <p>
              이 단어는 <span>{wordCount}</span>명이 검색했어요 🧐
            </p>
          </header>
          <div className={styles.result}>
            <p>
              🤔 &nbsp; ' <span>{search}</span> ' 변수명 추천 부탁해!
            </p>
            <TbArrowBigDownLinesFilled className={styles.arrow} />
            <p>
              🤓 &nbsp; 추천 변수명은 ' <span>{translatedWord}</span> ' 입니다.
            </p>
          </div>
        </div>
        <div className={styles.toDictionary}>
          무슨 뜻일까?? &nbsp;단어 뜻 검색
          <CiDesktopMouse1 className={styles.icon} /> &nbsp;Go!Go!
        </div>
      </div>
      <div className={styles.searchWrapper}>
        <div className={styles.chooseCase}>
          <p>Type 선택 &nbsp;:</p>
          <label>
            <input type="checkbox" name="snakeCase" />
            <img src={snakeImg} alt="snakeImage" /> snake_case
          </label>
          <label>
            <input type="checkbox" name="camelCase" />
            <img src={camelImg} alt="camelImage" /> camelCase
          </label>
          <label>
            <input type="checkbox" name="pascalCase" />
            <img src={pascalImg} alt="pascalImage" /> PascalCase
          </label>
        </div>
        <form className={styles.search} onSubmit={handleSearchSubmit}>
          <BsChatSquareText className={styles.icon} />
          <input
            type="search"
            name="search"
            placeholder="변수명을 입력해주세요. &nbsp; (단어만 입력해주세요)"
            // value={keyword}
            // onChange={handleKeyword}
            // onKeyDown={handleEnter}
          />
          <button type="submit">
            <FcSearch className={styles.icon} />
          </button>
        </form>
      </div>
      {/* <Variable />
      <Search /> */}
    </div>
  );
}
