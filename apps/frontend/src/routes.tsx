import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import RossmaryVillalba from './pages/RossmaryVillalba';
import OsmarGauto from './pages/OsmarGauto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: 'rossmary-villalba',
        element: <RossmaryVillalba />,
      },
      {
        path: 'osmargauto',
        element: <OsmarGauto />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
