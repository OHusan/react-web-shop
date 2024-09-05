import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { NoPage } from './pages/NoPage'
import { Plants } from './pages/Plants'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/plants" element={<Plants />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
