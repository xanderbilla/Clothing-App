import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/Product'
import Home from './pages/Home'
import {Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/product/:id' element={<Product/> } />
      </Routes>
      <Footer/>
      </>
  )
}

export default App