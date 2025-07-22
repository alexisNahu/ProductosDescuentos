import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Jonas from "./pages/Jonas";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import AlexisIndex from "./pages/Alexis/Index";
import Products from "./pages/Alexis/components/Products";
import Discounts from "./pages/Alexis/components/Discounts";
import Reports from "./pages/Alexis/components/Reports";
import { AlexisProvider } from "./pages/Alexis/contexts/alexis.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />, // Agrupa rutas protegidas
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/jonas",
        element: <Jonas />,
      },
      {
        path: '/alexis',
        element: <AlexisIndex />
      },
      {
        path: '/alexis/products',
        element: <AlexisProvider><Products /></AlexisProvider>
      },
      {
        path: '/alexis/discounts',
        element: <AlexisProvider><Discounts /></AlexisProvider>
      },
      {
        path: '/alexis/reports',
        element: <AlexisProvider><Reports /></AlexisProvider>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
