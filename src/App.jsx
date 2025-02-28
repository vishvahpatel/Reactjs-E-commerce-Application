import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Wishlist from './pages/Wishlist'
import SearchResults from './components/SearchResults'
import CardDescription from './components/CardDescription'
import Profile from './pages/Profile'



function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/register"];

  return (
       <>
       <ToastContainer/>
       {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/home/:id' element={<Home/>}/>
        <Route path='/home/product' element={<SearchResults/>}/>
        <Route path='/home/product/:id' element={<CardDescription/>}/>
        <Route path='/home/profile' element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App
