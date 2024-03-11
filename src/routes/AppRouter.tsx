import {Routes, Route, Navigate} from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import {Withdraw} from '../pages/whitdraw';



export const AppRouter =() => {
  return(
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/deposit" element={<Dashboard />} />
      <Route path="/wallet" element={<Dashboard />} />
      <Route path="/statics" element={<Dashboard />} />
      <Route path="/referrals" element={<Dashboard />} />
      <Route path="/account" element={<Dashboard />} />
      <Route  path='*' element={<Navigate to="/home"/>}/>
    </Routes>
  )
}