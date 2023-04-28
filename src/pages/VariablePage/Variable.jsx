import { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import VariableResult from './VariableResult';
import styles from './Variable.module.scss';

export default function Home() {
  const [search, setSearch] = useState(''); // 변수 검색 단어
  const label = '변수명을 입력해주세요. (단어)';
  const placeholder = "'한글' or '영어+한글'";

  return (
    <div className={styles.container}>
      <VariableResult search={search} />
      <SearchForm setSearch={setSearch} placeholder={placeholder} label={label}>
        variableSearch
      </SearchForm>
    </div>
  );
}
