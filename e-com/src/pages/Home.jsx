import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Catagories from '../components/Catagories'
import Products from '../components/Products'
import Newsletter from '../components/NewsLetter'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Catagories/>
        <Products />
        <Newsletter/>
        <Footer/>
    </div>
  )
}
