import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Slider from '../components/Slider'

const Home = () => {
  return (
      <>
          <MiniNavbar />
          <Slider />
          <Categories />
          <Newsletter />
          </>
  )
}

export default Home