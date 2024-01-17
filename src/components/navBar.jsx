import React from 'react'

import './navBar.css'
import LogoSide from '../global/navbar/logoSide'
import Scearch from '../global/navbar/scearch'
import User from '../global/navbar/user'


const NavBar = () => {
  return (
    <div className='navBar'>
      <LogoSide/>
      <Scearch/>
      <User/>
    </div>
  )
}

export default NavBar
