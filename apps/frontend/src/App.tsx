import { Sidebar } from './components'
import { sidebarItems } from './components/Sidebar/sidebar.items'
import AlexisComponent from './components/AlexisComponent/AlexisComponent'
import ArecoComponent from './components/ArecoComponent/ArecoComponent'
// import WilsonComponent from './components/WilsonComponent/Wilsoncomponent'

function App() {
  return (
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
  )
}

export default App
