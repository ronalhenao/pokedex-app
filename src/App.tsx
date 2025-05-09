import { Route, Routes } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Routes>
        {/* PokeApp */}
        <Route path='/*' element={<AppRoutes />} />
      </Routes>
    </>
  )
}

export default App
