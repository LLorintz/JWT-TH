import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import TransactionList from './pages/TransactionList' 
import { UseAuth } from './context/AuthContext'
import requireAuth from './requireAuth/requireAuth'

import './App.css'

function App() {

const {isAuthenticated}=UseAuth()

  return(
  <BrowserRouter>
    {!isAuthenticated && <Link to={'/'}>Login</Link>}
    {isAuthenticated && <>
      <Link to={'/profile'}>Profile</Link>|
      <Link to={'/transactions'}>Transactions</Link>
    </>}
    <Routes>
      <Route path='/' Component={LoginPage}></Route>
      <Route path='/profile' Component={requireAuth(ProfilePage)}></Route>
      <Route path='/transactions' Component={requireAuth(TransactionList)}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
