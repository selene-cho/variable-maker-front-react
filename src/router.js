import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './page/NotFound';
import Home from './page/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export default router;
