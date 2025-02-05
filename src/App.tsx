import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import TransactionList from './pages/TransactionList' 

import './App.css'

function App() {

  return(
  <BrowserRouter>
    <Link to={'/'}>Login</Link>|
    <Link to={'/profile'}>Profile</Link>|
    <Link to={'/transactions'}>Transactions</Link>
    <Routes>
      <Route path='/' Component={LoginPage}></Route>
      <Route path='/profile' Component={ProfilePage}></Route>
      <Route path='/transactions' Component={TransactionList}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
