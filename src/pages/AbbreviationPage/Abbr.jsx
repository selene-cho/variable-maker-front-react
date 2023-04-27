import { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import AbbrResult from './AbbrResult';
import styles from './Abbr.module.scss';

export default function Abbr() {
  const [abbrSearch, setAbbrSearch] = useState(''); // 약어 추천 변수명 검색수
  const placeholder = '줄이고 싶은 변수명을 입력해주세요.';
  return (
    <div className={styles.container}>
      <AbbrResult abbrSearch={abbrSearch}></AbbrResult>
      <SearchForm setSearch={setAbbrSearch} placeholder={placeholder}>
        abbrSearch
      </SearchForm>
    </div>
  );
}
