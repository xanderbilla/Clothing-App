import React from 'react'
import MiniNavbar from '../components/MiniNavbar'
import Newsletter from '../components/Newsletter'
import Categories from '../components/Categories'
import Slider from '../components/Slider'
import FeaturedProduct from '../components/FeaturedProduct'

const Home = () => {
  return (
      <>
          <MiniNavbar />
          <Slider />
          <Categories />
          <FeaturedProduct/>
          <Newsletter />
          </>
  )
}

export default Home