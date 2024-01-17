import React, { useState } from 'react'


import { FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa6";


const Scearch = () => {
  const [hover,setHover]=useState(false)
  const [micHover,setMicHover]=useState(false)
  return (
    <div style={{display:"flex"}}>
      <form >
        <input className='SearchInput' type="text" placeholder='Search...'/>
        <button className='IconBtn'
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        >
        <FiSearch/>
        </button>
        {
          hover?<p className='hoverSearch'>search</p>:null
        }
      </form>
      <button className='MicBtn'
       onMouseEnter={()=>setMicHover(true)}
       onMouseLeave={()=>setMicHover(false)}
      >
              <FaMicrophone/>          
        </button>
      {
        micHover?<p className='hoverSearch'>Mic on</p>:null
      }
    </div>
  )
}

export default Scearch
