import {Routes, Route, Navigate} from 'react-router-dom';

import DashBoard from '../pages/dashboard';


export const AppRouter =() => {
  return(
    <Routes>
      <Route path="/home" element={<DashBoard />} />
      <Route  path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  )
}