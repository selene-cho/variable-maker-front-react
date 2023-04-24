import Variable from './Variable';
import styles from './Home.module.scss';
import Search from '../components/Search';
import { useCallback, useEffect, useState } from 'react';
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
import Checkbox from '../components/common/Checkbox';

export default function Home() {
  const [search, setSearch] = useState(''); // 검색 단어
  const [translatedWord, setTranslatedWord] = useState(''); // 번역 단어
  const [wordCount, setWordCount] = useState(0); // 단어별 검색 사용자 수
  const [text, setText] = useState(''); // 검색창 reset 위한 임시 저장 값

  // CASE별 추천값 상태관리
  const [snake, setSnake] = useState('');
  const [camel, setCamel] = useState('');
  const [pascal, setPascal] = useState('');

  // checkbox 상태관리
  // const [checkbox, setCheckbox] = useState({
  //   checkedSnake: false,
  //   checkedCamel: false,
  //   checkedPascal: false,
  // });

  const handleAddKeyword = useOutletContext();

  // 변수명 검색 API 연결
  const handleLoad = async (searchQuery) => {
    const { translated_variable: variable, count } = await getTranslateWord(
      searchQuery
    ); // 추천 변수명, 검색 사용자수 GET
    setTranslatedWord(variable); // 번역 단어 저장
    handleAddKeyword(variable); // 최근 번역 검색어 저장
    setWordCount(count); // 단어별 검색 사용자수 증가
    if (variable) {
      changeToSnake(variable);
      changeToCamel(variable);
      changeToPascal(variable);
      console.log('번역 데이터 불러옴');
    }
  };

  useEffect(() => {
    handleLoad(search);
  }, [search]);

  // useEffect(() => {
  //   changeToSnake(translatedWord);
  // }, [snake, camel, pascal]);

  // submit -> 검색 단어 저장, 검색 Input RESET
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target['search'].value);
    setText(''); // 검색 Input RESET
    // handleCheckedCase(e.target['case']);
  };

  // 검색창 단어 임시 저장
  const handleText = (e) => {
    setText(e.target.value);
  };

  // case별 변수명 변환
  const changeToSnake = (el) => {
    let words = el.toLowerCase();
    words = words.replaceAll("'s", '') || words.replaceAll("'", '');
    let snake_result = words.replaceAll(' ', '_');
    setSnake(snake_result);
  };
  const changeToCamel = (el) => {
    let words = el.toLowerCase();
    words = words.replaceAll("'s", '') || words.replaceAll("'", '');
    words = words.split(' ');
    let camelResult = '';
    for (let i = 1; i < words.length; i++) {
      let word = words[i];
      camelResult += word.charAt(0).toUpperCase() + word.slice(1);
    }
    setCamel(words[0] + camelResult);
  };
  const changeToPascal = (el) => {
    let words = el.replaceAll("'s", '') || el.replaceAll("'", '');
    words = words.split(' ');
    let PascalResult = '';
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      PascalResult += word.charAt(0).toUpperCase() + word.slice(1);
    }
    setPascal(PascalResult);
  };

  //case별 checked여부
  // const handleCheckedCase = (e) => {
  //   console.log('얍', e);
  //   for (let i = 0; i < e.length; i++) {
  //     const { checked, value } = e[i];
  //     if (checked) {
  //       console.log('체크했음', checked);
  //       if (value === 'snake_case') {
  //         setCheckbox({ ...checkbox, checkedSnake: checked });
  //         console.log('뱀 체크', checked);
  //         console.log('뱀뱀', snake);
  //       }
  //       if (value === 'camelCase') {
  //         setCheckbox({ ...checkbox, checkedCamel: checked });
  //         console.log('카멜 체크', checked);
  //         console.log('카멜카멜', camel);
  //       }
  //       if (value === 'PascalCase') {
  //         setCheckbox({ ...checkbox, checkedPascal: checked });
  //         console.log('파스칼 체크', checked);
  //         console.log('파스칼파스칼', pascal);
  //       }
  //     }
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
              🤔 &nbsp; '&nbsp;<span>{search}</span> ' 변수명 추천 부탁해!
            </p>
            <TbArrowBigDownLinesFilled className={styles.arrow} />
            <p>
              🤓 &nbsp; 추천 변수명은 '&nbsp;
              <span>{translatedWord}</span> ' 입니다.
            </p>
            {/* {checkbox.checkedSnakeCase && <p>snake_case : {snake}</p>}
            {checkbox.checkedCamelCase && <p>camelCase : {camel}</p>}
            {checkbox.checkedPascalCase && <p>PascalCase : {pascal}</p>} */}
            <div className={styles.changedCase}>
              <div className={styles.case}>
                <div className={styles.caseName}>
                  <img
                    className={styles.snakeImg}
                    src={snakeImg}
                    alt={snakeImg}
                  />
                  <p>snake_case</p>
                </div>
                <p>{snake}</p>
              </div>
              <div className={styles.case}>
                <div className={styles.caseName}>
                  <img
                    className={styles.camelImg}
                    src={camelImg}
                    alt={camelImg}
                  />
                  <p>camelCase</p>
                </div>
                <p>{camel}</p>
              </div>
              <div className={styles.case}>
                <div className={styles.caseName}>
                  <img
                    className={styles.pascalImg}
                    src={pascalImg}
                    alt={pascalImg}
                  />
                  <p>PascalCase</p>
                </div>
                <p>{pascal}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.toDictionary}>
          무슨 뜻일까?? &nbsp;단어 뜻 검색
          <CiDesktopMouse1 className={styles.icon} /> &nbsp;Go!Go!
        </div>
      </div>
      <form className={styles.searchWrapper} onSubmit={handleSearchSubmit}>
        {/* <div className={styles.chooseCase}>
          <p>Type 선택 &nbsp;:</p>
          <Checkbox
            id="snake"
            name="case"
            value="snake_case"
            checked={checkbox.checkedSnakeCase}
            // checkedCaseHandler={checkedCaseHandler}
            onChange={handleCheckedCase}
            caseImg={snakeImg}
          >
            snake_case
          </Checkbox>
          <Checkbox
            id="camel"
            name="case"
            value="camelCase"
            checked={checkbox.checkedCamelCase}
            // checkedCaseHandler={checkedCaseHandler}
            onChange={handleCheckedCase}
            caseImg={camelImg}
          >
            camelCase
          </Checkbox>
          <Checkbox
            id="pascal"
            name="case"
            value="PascalCase"
            checked={checkbox.checkedPascalCase}
            // checkedCaseHandler={checkedCaseHandler}
            onChange={handleCheckedCase}
            caseImg={pascalImg}
          >
            PascalCase
          </Checkbox>
        </div> */}
        <div className={styles.search}>
          <BsChatSquareText className={styles.icon} />
          <input
            type="search"
            name="search"
            placeholder="변수명을 입력해주세요. &nbsp; (단어만 입력해주세요)"
            value={text}
            onChange={handleText}
          />
          <button type="submit">
            <FcSearch className={styles.icon} />
          </button>
        </div>
      </form>
      {/* <Variable />
      <Search /> */}
    </div>
  );
}
