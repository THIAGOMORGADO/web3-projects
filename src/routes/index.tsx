import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/dashboard'

export const AppRoutes = () => {
  return(
    <Routes>
      <Route path='/home' element={<Home />} />

      <Route path='*' element={<Navigate to="/home" />} />
    </Routes>

  )
} 