import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import './components.css'
import logo from '../../img/logo.png'
import SideBar from '../sideBar/sideBar'

const LogoSide = () => {
  const [mouseEnter,setMouseEnter]=useState(false);
  // const handelpop=()=>{
  //   <SideBar/>
  //   console.log('click');
  // }
  return (
    <div id='logoSide' >
    <Link className='logoLink'>
    <SideBar/>
    <img 
    onMouseEnter={()=>setMouseEnter(true)}
    onMouseLeave={()=>setMouseEnter(false)}
    src={logo} alt="this youtube logo" />
    {
      mouseEnter?<small className='hoverOver'>Youtube</small>:null
    }
    </Link>
    </div>
  )
}

export default LogoSide
