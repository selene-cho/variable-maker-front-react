import { useState } from 'react';
import SearchForm from '../../components/SearchForm';
import VariableResult from './VariableResult';
import styles from './Variable.module.scss';

export default function Home() {
  const [search, setSearch] = useState(''); // 변수 검색 단어
  const placeholder = '변수명을 입력해주세요. (단어만 입력해주세요)';

  return (
    <div className={styles.container}>
      <VariableResult search={search} />
      <SearchForm setSearch={setSearch} placeholder={placeholder}>
        variableSearch
      </SearchForm>
    </div>
  );
}
