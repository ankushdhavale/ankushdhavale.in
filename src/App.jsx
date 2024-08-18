import NavBar from "./component/NavBar/NavBar"
import Home from "./component/Home/Home"
import {Routes , Route} from "react-router-dom"
function App() {
  return (
    <>
      <NavBar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route/>
          <Route/>
        </Routes>
      </div>
    </>
  )
}

export default App
