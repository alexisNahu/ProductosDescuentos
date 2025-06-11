import { createBrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Jonas from './pages/Jonas';

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
  {
    path: 'jonas',
    element: <Jonas />,
  }
]);

export default router;
