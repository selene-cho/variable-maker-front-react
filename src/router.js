import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Variable from './pages/Variable';
import Abbreviation from './pages/Abbreviation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '', element: <Home /> },
      { path: 'variable', element: <Variable /> },
      { path: 'abbreviation', element: <Abbreviation /> },
    ],
  },
]);

export default router;
