import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import {Outlet} from 'react-router-dom'

export default function Main() {
  return (
    <div className='container'>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
