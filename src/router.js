import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Variable from './pages/VariablePage/Variable';
import Abbr from './pages/AbbreviationPage/Abbr';
import Feedback from './pages/FeedbackPage/Feedback';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: 'variable', element: <Variable /> },
      { path: 'abbreviation', element: <Abbr /> },
      { path: 'feedback', element: <Feedback />}
    ],
  },
]);

export default router;
