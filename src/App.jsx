import NavBar from "./component/NavBar/NavBar"
import {Routes , Route} from "react-router-dom"
import Intro from "./component/Home/Intro"
function App() {
  return (
    <>
    <div className="flex flex-col mx-auto items-center w-full">
    <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Intro/>}/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
