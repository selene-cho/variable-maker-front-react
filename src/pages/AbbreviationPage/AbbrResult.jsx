import { useOutletContext } from 'react-router-dom';
import styles from './AbbrResult.module.scss';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import { HiOutlineCode } from 'react-icons/hi';
import { getAbbr } from '../../api/api';

export default function AbbrResult({ abbrSearch }) {
  const { handleAddKeyword } = useOutletContext();

  const [loading, setLoading] = useState(true);
  const [changedAbbr, setChangedAbbr] = useState([]); // 약어 변경
  const [abbrCount, setAbbrCount] = useState(0); // 단어별 검색 사용자 수

  /* 약어 추천 API 연결 */
  const handleLoad = async (searchQuery) => {
    // GET: 추천 약어, 단어별 검색수
    const {
      searched_variable: id,
      abbreviatedVariables: abbrs,
      count,
    } = await getAbbr(searchQuery);
    handleChangedAbbr(abbrs);
    console.log('약어 데이터 불러옴');
    handleAddKeyword(id); // 최근 검색기록에 저장
    setAbbrCount(count); // 단어별 검색수 저장
    setLoading(false); //데이터 받아오면 로딩완료
  };

  /* API에서 받아온 약어, LIST 만들어서 changedAbbr state에 저장 */
  const handleChangedAbbr = async (abbrs) => {
    let abbrResult = [];
    for (let i = 0; i < abbrs.length; i++) {
      let abbr = abbrs[i];
      abbrResult.push(abbr.abbreviated_variable);
    }
    await setChangedAbbr(abbrResult);
  };

  useEffect(() => {
    handleLoad(abbrSearch);
  }, [abbrSearch]);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className={styles.abbrWrapper}>
      <div className={styles.content}>
        <header>
          <HiOutlineCode className={styles.icon} />
          {!loading && (
            <p>
              이 단어는 <span>{abbrCount}</span>명이 검색했어요 🧐
            </p>
          )}
        </header>
        <div className={styles.result}>
          {loading && (
            <div className={styles.loading}>
              <p>변수명이 너무 길다구요?!</p>
              <p>아래 검색창에</p>
              <p>
                <span>약어 추천</span>을 원하는 변수명을 입력해주세요
              </p>
            </div>
          )}
          {!loading && (
            <div className={styles.abbrResult}>
              <p className={styles.question}>
                🤔 &nbsp; " <span>{abbrSearch}</span> " 약어 추천 부탁해!
              </p>
              <TbArrowBigDownLinesFilled className={styles.arrow} />
              <div className={styles.answer}>
                <p>🤓 &nbsp; 추천 약어 LIST</p>
                <ul className={styles.abbrList}>
                  {changedAbbr.map((abbr, id) => {
                    return (
                      <li className={styles.abbr} key={id}>
                        <span>{id + 1}.&nbsp;</span>
                        <p>{abbr}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
