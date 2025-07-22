// import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import TopTrending from './TopTrending'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <Carousel/>
        <TopTrending/>
        </div>
    </div>
  )
}

export default MainLayout