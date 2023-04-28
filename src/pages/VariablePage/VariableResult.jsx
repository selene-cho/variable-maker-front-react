import { TbArrowBigDownLinesFilled } from 'react-icons/tb';
import pascalImg from '../../images/Pascal.png';
import camelImg from '../../images/camel.png';
import snakeImg from '../../images/snake.png';
import { HiOutlineCode } from 'react-icons/hi';
import styles from './VariableResult.module.scss';
import Case from '../../components/common/Case';
import { getTranslateWord } from '../../api/api';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function VariableResult({ search, word }) {
  const { handleAddKeyword } = useOutletContext();

  const [loading, setLoading] = useState(true);
  const [translatedWord, setTranslatedWord] = useState(''); // 번역 단어
  const [wordCount, setWordCount] = useState(0); // 단어별 검색 사용자 수

  /* CASE별 추천값 상태관리 */
  const [snake, setSnake] = useState('');
  const [camel, setCamel] = useState('');
  const [pascal, setPascal] = useState('');

  /* 변수명 검색 API 연결 */
  const handleLoad = async (searchQuery) => {
    // GET: 추천 변수명, 단어별 검색수
    const { translated_variable: variable, count } = await getTranslateWord(
      searchQuery
    );

    setTranslatedWord(variable); // 번역 단어 저장
    handleAddKeyword(variable); // 최근 검색기록에 저장
    setWordCount(count); // 단어별 검색수 저장
    setLoading(false); // 데이터 받아오면 로딩완료

    if (variable) {
      // 번역 단어 있으면 각 케이스 변환 로직 실행
      changeToSnake(variable);
      changeToCamel(variable);
      changeToPascal(variable);
      console.log('번역 데이터 불러옴');
    }
  };

  /* case별 변환 로직 */
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

  useEffect(() => {
    handleLoad(search);
  }, [search]);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={styles.variableWrapper}>
      <div className={styles.content}>
        <header>
          <HiOutlineCode className={styles.icon} />
          {!loading && (
            <p>
              이 단어는 <span>{wordCount}</span>명이 검색했어요 🧐
            </p>
          )}
        </header>
        <div className={styles.result}>
          {loading && (
            <div className={styles.loading}>
              <p>
                <span>변수명 짓기</span>가 곤란하신가요?!
              </p>
              <p>아래 검색창에</p>
              <p>변수명을 입력해주세요</p>
            </div>
          )}
          {!loading && (
            <div className={styles.variableResult}>
              <p className={styles.question}>
                🤔 &nbsp; '&nbsp;<span>{search}</span> ' 변수명 추천 부탁해!
              </p>
              <TbArrowBigDownLinesFilled className={styles.arrow} />
              <p className={styles.answer}>
                🤓 &nbsp; 추천 변수명은 '&nbsp;
                <span>{translatedWord}</span> ' 입니다.
              </p>
              <div className={styles.cases}>
                <Case caseImg={snakeImg} changedCase={snake}>
                  snake_case
                </Case>
                <Case caseImg={camelImg} changedCase={camel}>
                  camelCase
                </Case>
                <Case caseImg={pascalImg} changedCase={pascal}>
                  PascalCase
                </Case>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
