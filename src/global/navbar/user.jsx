import React, { useState } from 'react'

import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import Person from '../profile/person';



const User = () => {
  const [creatHover,setCreatHover]=useState(false)
  const [notify,setNotify]=useState(false);
  // const handelEvent=(event)=>{
  //   setCreatHover(true);
 //we can get value of any think on hover by this line
  //   setMass(event.target.textContent);
  //   console.log(mass)
  // }
  return (
    <div className='user'>
        <Link className='userIcon'
        // to='/home'
        onMouseEnter={()=>setCreatHover(true)}
        onMouseLeave={()=>setCreatHover(false)}
        >
        <RiVideoAddLine/> 
        </Link>     
        {
          creatHover?<p className='hoveUser'>Creat</p>:null
        }
        <Link className='userIcon'
        onMouseEnter={()=>setNotify(true)}
        onMouseLeave={()=>setNotify(false)}
        >
        <IoMdNotifications/>
        </Link>
        {
          notify?<p className='hoveUser'>notification</p>:null
        }
        <Person/>
        <Link>
        
        </Link>
    </div>
  )
}

export default User
