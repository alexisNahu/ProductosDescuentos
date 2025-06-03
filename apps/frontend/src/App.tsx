/*import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link, Link2} from './components/Link'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('La cantidad es', count)
  },[count]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Link url="https://react.dev" />
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
      <Link url="https://react.dev" />
      <Link url="https://react.dev" />
      <Link url="https://react.dev" />
      <Link url="https://react.dev" />
      <Link2 url="prueba" />
    </>
  )
}

export default App*/

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link as LinkComponent, Link2 } from './components/Link'
import RuleOfThreeCalculator from './components/RuleOfThreeCalculator'

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

function App() {
  return (
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
  )
}

export default App
