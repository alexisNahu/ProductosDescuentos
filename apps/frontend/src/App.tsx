import { Outlet, Link } from 'react-router-dom';
import IvanSosa from './components/IvanSosa/IvanSosa';
export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <IvanSosa></IvanSosa>
      <nav className="bg-white shadow px-4 py-3">
        <Link to="/" className="text-indigo-600 hover:underline mr-4">Home</Link> | &nbsp;
        <Link to="/about" className="text-indigo-600 hover:underline">About</Link>
      </nav>
      <hr />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
