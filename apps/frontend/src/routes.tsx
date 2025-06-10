import { createBrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
