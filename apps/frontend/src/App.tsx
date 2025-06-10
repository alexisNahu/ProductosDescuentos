
import './App.css'
import { Sidebar } from './components'
import { sidebarItems } from './components/Sidebar/sidebar.items'
import AlexisComponent from './components/AlexisComponent/AlexisComponent'
import ArecoComponent from './components/ArecoComponent/ArecoComponent'
import Roles from './components/Roles';
import IvanSosa from './components/IvanSosa/IvanSosa';
import JohnSuarez from './components/JohnSuarez/JohnSuarez';
import "./index.css";
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    
    <div className="min-h-screen flex flex-col">
      <>
        <div className='container-fluid p-0'>
          <div className="row">
            <div className="col">
              <Sidebar items={sidebarItems} />
            </div>
            <div className="col">
              <AlexisComponent a={2} b={2} />
              <ArecoComponent frecuencia={60} capacitancia={0.000001} />
               <Roles />
            </div>
          </div>
        </div>
      </>
      <IvanSosa></IvanSosa>
      <JohnSuarez></JohnSuarez>
      <hr />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}