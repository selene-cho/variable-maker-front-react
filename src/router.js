import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Variable from './pages/VariablePage/Variable';
import Abbr from './pages/AbbreviationPage/Abbr';
import Feedback from './pages/FeedbackPage/Feedback';
import KakaoLogin from './components/auth/KakaoLogin';
import GoogleLogin from './components/auth/GoogleLogin';
import Login from './components/auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '', element: <Variable /> },
      { path: 'variable', element: <Variable /> },
      { path: 'abbreviation', element: <Abbr /> },
      { path: 'feedback', element: <Feedback /> },
    ],
  },
  {
    path: '/auth',
    children: [
      { path: 'login', element: <Login /> },
      { path: 'kakao', element: <KakaoLogin /> },
      { path: 'google', element: <GoogleLogin /> },
    ],
  },
]);

export default router;
