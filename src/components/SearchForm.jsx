import { useState } from 'react';
import styles from './SearchForm.module.scss';
import { FcSearch } from 'react-icons/fc';
import { BsChatSquareText } from 'react-icons/bs';

export default function SearchForm({
  setSearch,
  children,
  placeholder,
  label,
}) {
  const [text, setText] = useState(''); // 검색창 reset 위한 임시 저장 값

  // 검색창 단어 임시 저장
  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target[`${children}`].value);
    setText(''); // 검색 Input RESET
  };

  return (
    <form className={styles.searchWrapper} onSubmit={handleSearchSubmit}>
      <label htmlFor={children}>
        <BsChatSquareText className={styles.icon} />
        {label}
      </label>
      <div className={styles.search}>
        <input
          id={children}
          type="search"
          name={children}
          placeholder={placeholder}
          value={text}
          onChange={handleText}
          required
        />
        <button type="submit">
          <FcSearch className={styles.icon} />
        </button>
      </div>
    </form>
  );
}
