import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Link2} from './components/Link'
import { Sidebar } from './components'
import { sidebarItems } from './components/Sidebar/sidebar.items'
import AlexisComponent from './components/AlexisComponent/AlexisComponent'
import ArecoComponent from './components/ArecoComponent/ArecoComponent'
import WilsonComponent from './components/WilsonComponent/Wilsoncomponent'
import IvanSosa from './components/IvanSosa/IvanSosa';
import RuleOfThreeCalculator from './components/RuleOfThreeCalculator'
import { Outlet, Link } from 'react-router-dom';
import "./index.css";

function Home() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('La cantidad es', count)
  }, [count])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <LinkComponent url="https://react.dev" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <LinkComponent url="https://react.dev" />
      <LinkComponent url="https://react.dev" />
      <LinkComponent url="https://react.dev" />
      <LinkComponent url="https://react.dev" />
      <Link2 url="prueba" />
    </>
  )
}

export default function App() {
  return (
    
    <div className="min-h-screen flex flex-col">
      <Router>
        <nav style={{ marginBottom: '20px', padding: '10px', background: '#f0f0f0' }}>
          <Link to="/" style={{ marginRight: '10px', textDecoration: 'none', color: '#646cff' }}>Inicio</Link>
          <Link to="/regla-de-tres" style={{ textDecoration: 'none', color: '#646cff' }}>Calculadora Regla de Tres</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/regla-de-tres" element={<RuleOfThreeCalculator />} />
        </Routes>
      </Router>
      <>
        <div className='container-fluid p-0'>
          <div className="row">
            <div className="col">
              <Sidebar items={sidebarItems} />
            </div>
            <div className="col">
              <AlexisComponent a={2} b={2} />
              <ArecoComponent frecuencia={60} capacitancia={0.000001} />
            </div>
          </div>
        </div>
      </>
      <IvanSosa></IvanSosa>
      <nav className="bg-white shadow px-4 py-3">
        <Link to="/" className="text-indigo-600 hover:underline mr-4">Home</Link> | &nbsp;
        <Link to="/about" className="text-indigo-600 hover:underline">About</Link> | &nbsp;
        <Link to="/osmargauto" className="text-indigo-600 hover:underline">Osmar Gauto</Link>
      </nav>
      <hr />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}