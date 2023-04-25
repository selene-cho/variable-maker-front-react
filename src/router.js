import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Variable from './pages/VariablePage/Variable';
import Abbr from './pages/AbbreviationPage/Abbr';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'variable', element: <Variable /> },
      { path: 'abbreviation', element: <Abbr /> },
    ],
  },
]);

export default router;
