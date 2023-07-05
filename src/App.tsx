import { Route, Routes, BrowserRouter } from "react-router-dom"

import FirstPage from "./views/FirstPage"
import Sobre from "./views/Sobre"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstPage />} path="/" />
        <Route element={<Sobre />} path="sobre" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
