import { Outlet } from 'react-router-dom';
import SideBar from './components/layout/SideBar';
import styles from './scss/App.module.scss';

export default function App() {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
