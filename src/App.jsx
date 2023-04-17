import { Outlet } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import styles from './scss/App.module.scss';
import DarkModeProvider from './components/context/DarkModeContext';

export default function App() {
  return (
    <DarkModeProvider>
      {/** DarkMode context 사용 범위 지정(우산 씌워줌)
       *  우산 안에 있는 자식 node에서 useDarkMode 사용할 수 있음 (darkModContext)  */}
      <div className={styles.container}>
        <SideBar />
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </DarkModeProvider>
  );
}
