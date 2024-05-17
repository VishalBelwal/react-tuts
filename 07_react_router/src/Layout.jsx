import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />               
      <Outlet />        {/* //ab ye hoga ki header same rahega footer same rahega and uske andar cheeze badlengi */}
      <Footer />
    </>
  )
}

export default Layout