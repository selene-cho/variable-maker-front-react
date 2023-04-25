import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark); // 리액트 내부 state 업데이트 먼저 해주고
    updateDarkMode(isDark); // 외부 html에 dark class 넣을 건지 안넣을건지 판단하는 함수 부가적으로 호출
  }, []); // application 실행될 때 딱 한번 localStorage에 있는 theme 데이터 읽어와서 dark mode 인지 또는 사용자의 브라우저 선호 UI 색 테마 셋팅값을 판단한 후
  // dark mode 인지 아닌지 확인하고 초기값 설정
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    // localStorage에 dark / light값 저장해서 기억해둠
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

// DarkMode Hook
export const useDarkMode = () => useContext(DarkModeContext);
