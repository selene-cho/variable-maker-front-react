import { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import AbbrResult from './AbbrResult';
import styles from './Abbr.module.scss';

export default function Abbr() {
  const [abbrSearch, setAbbrSearch] = useState(''); // 약어 추천 변수명 검색수
  const label = '줄이고 싶은 변수명을 입력해주세요.';
  const placeholder = "'영어 단어'  ex) variable";
  return (
    <div className={styles.container}>
      <AbbrResult abbrSearch={abbrSearch} />
      <SearchForm
        setSearch={setAbbrSearch}
        placeholder={placeholder}
        label={label}
      >
        abbrSearch
      </SearchForm>
    </div>
  );
}
