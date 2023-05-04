import { Outlet, useLocation } from "react-router-dom";
import SideBar from "./components/layout/SideBar";
import styles from "./scss/App.module.scss";
import { useEffect, useState } from "react";

let currentPath = "";

export default function App() {
  // map 사용해서 최근 검색기록 나타내기 위해 string -> object 형태로 변환(parsing)
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  // keywords 변할 때만 렌더링
  // 배열(array) -> 문자열(string)로 타입 변환
  useEffect(() => {
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  // 검색 기록 추가
  const handleAddKeyword = (text) => {
    // console.log('text', text);
    const newKeyword = {
      id: Date.now(),
      text,
    };
    // 중복 검색 기록 CHECK
    let idx = 0;
    for (let keyword of keywords) {
      if (keyword.text === newKeyword.text) {
        keywords.splice(idx, 1);
      }
      idx++;
    }
    setKeywords([newKeyword, ...keywords]);
  };

  // 검색어 삭제
  const handleDeleteKeyword = (id) => {
    const nextKeyword = keywords.filter((prev) => {
      return prev.id !== id;
    });
    setKeywords(nextKeyword);
  };
  // 검색기록 전체 삭제
  const handleClearHistory = () => {
    setKeywords([]);
  };

  let location = useLocation();

  useEffect(() => {
    if (currentPath === location.pathname) window.location.reload();
    currentPath = location.pathname;
  }, [location]);

  return (
    <div className={styles.container}>
      <SideBar
        keywords={keywords}
        onDeleteKeyword={handleDeleteKeyword}
        onClearHistory={handleClearHistory}
      />
      <div className={styles.outlet}>
        <Outlet context={{ handleAddKeyword }} />
      </div>
    </div>
  );
}
