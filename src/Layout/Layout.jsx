import React from 'react'
import Navbar from '../Pages/Navbar'

const Layout = ({children}) => {
  return (
    <div style={{height:"100vh",width:"100%"}} >
        <Navbar/>
        {children}
    </div>
  )
}

export default Layout