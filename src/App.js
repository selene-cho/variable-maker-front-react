import { Outlet } from 'react-router-dom';
import SideBar from './components/layout/SideBar';

export default function App() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}
