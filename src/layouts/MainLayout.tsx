// import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <Carousel/>
        <div></div>
        </div>
    </div>
  )
}

export default MainLayout