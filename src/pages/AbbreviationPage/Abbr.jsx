import { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import AbbrResult from './AbbrResult';
import styles from './Abbr.module.scss';

export default function Abbr() {
  const [abbrSearch, setAbbrSearch] = useState(''); // 약수 검색 단어
  const placeholder =
    '줄이고 싶은 변수명을 입력해주세요. 약어를 추천해드립니다!';
  return (
    <div className={styles.container}>
      <AbbrResult abbrSearch={abbrSearch}></AbbrResult>
      <SearchForm setSearch={setAbbrSearch} placeholder={placeholder}>
        abbrSearch
      </SearchForm>
    </div>
  );
}
