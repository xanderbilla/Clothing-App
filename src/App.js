import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Error from './pages/Error'
import ProfilePage from './pages/ProfilePage'

import Home from './pages/Home'
import {Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/product/:id' element={<ProductPage/> } />
          <Route path='/category/:id' element={<ProductList/> } />
          <Route path='/cart' element={<Cart/> } />
          <Route path='/profile' element={<ProfilePage/> } />
          <Route path='/register' element={<SignUp/> } />
          <Route path='/login' element={<Login/> } />
          <Route path='/*' element={<Error/> } />
      </Routes>
      <Footer/>
      </>
  )
}

export default App