import { Outlet } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import styles from './scss/App.module.scss';
import DarkModeProvider from './components/context/DarkModeContext';
import { useEffect, useState } from 'react';

export default function App() {
  // map 사용해서 최근 검색기록 나타내기 위해 string -> object 형태로 변환(parsing)
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  // keywords 변할 때만 렌더링
  // 배열(array) -> 문자열(string)로 타입 변환
  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  // 검색 기록 추가
  const handleAddKeyword = (text) => {
    console.log('text', text);
    const newKeyword = {
      id: Date.now(),
      text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  // 검색어 삭제
  const handleDeleteKeyword = (id) => {
    const nextKeyword = keywords.filter((prev) => {
      return prev.id != id;
    });
    setKeywords(nextKeyword);
  };
  // 검색기록 전체 삭제
  const handleClearHistory = () => {
    setKeywords([]);
  };

  return (
    <DarkModeProvider>
      {/** DarkMode context 사용 범위 지정(우산 씌워줌)
       *  우산 안에 있는 자식 node에서 useDarkMode 사용할 수 있음 (darkModContext)  */}
      <div className={styles.container}>
        <SideBar
          keywords={keywords}
          onDeleteKeyword={handleDeleteKeyword}
          onClearHistory={handleClearHistory}
        />
        <div className={styles.outlet}>
          <Outlet context={handleAddKeyword} />
        </div>
      </div>
    </DarkModeProvider>
  );
}
