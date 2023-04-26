import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductPage from './pages/ProductPage'
import Home from './pages/Home'
import {Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/product/:id' element={<ProductPage/> } />
          <Route path='/cart' element={<Cart/> } />
          <Route path='/*' element={<Error/> } />
      </Routes>
      <Footer/>
      </>
  )
}

export default App