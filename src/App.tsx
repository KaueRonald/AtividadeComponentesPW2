import { Route, Routes, BrowserRouter } from "react-router-dom"
import FirstPage from "./views/FirstPage"
import Sobre from "./views/Sobre"
import Reactbootstrap from "./views/Reactbootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<Sobre />} path="sobre" />
        <Route element={<Reactbootstrap />} path="reactbootstrap" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
