import React, { useState } from 'react'

import UserImg from '../../img/user.jpg'
import '../profile/person.css'
import ClickAwayListener from 'react-click-away-listener';
import { Link } from 'react-router-dom';
import { IoLogoGoogle } from 'react-icons/io5';
import { MdOutlineFeedback, MdSwitchAccount } from 'react-icons/md';
import { IoIosHelpCircleOutline, IoIosLogOut } from 'react-icons/io';
import { SiYoutubemusic } from 'react-icons/si';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TbUserHexagon } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { CiKeyboard } from "react-icons/ci";


const Person = () => {
    const [profilPop,setProfilePop]=useState(false);
    const handelprofilePop=()=>{
        setProfilePop(true);
    }
  return (
    <div className='profile'>
      <img className='profileImg'
       src={UserImg} alt="user Img"
       onClick={handelprofilePop}
        />
    {
        profilPop &&
        <ClickAwayListener onClickAway={()=>setProfilePop(false)}>
            <div className='profileMain'>
                <div className="basic">
                    <img className='profileImg' src={UserImg} alt="user Img" />
                    <div className='userInfo'>
                        <h3>ABid Hasan</h3>
                        <h4>abeydhasan134@gmail.com</h4>
                        <Link><p >view your channel</p></Link>
                    </div>
                </div>
                <div className='userLine'></div>
                <div className='accounts'>
                    <Link className='account'><IoLogoGoogle/><span className='elementText'>Google account</span> </Link>
                    <Link className='account'><MdSwitchAccount/><span className='elementText'>Switch account</span> </Link>
                    <Link className='account'><IoIosLogOut/><span className='elementText'>Sing out</span> </Link>
                </div>
                <div className='userLine'></div>
                <Link className='account'><SiYoutubemusic /><span className='elementText'>youtube Stdio</span> </Link>
                <Link className='account'><RiMoneyDollarCircleLine/><span className='elementText'>purchses and membership</span> </Link>
                <div className='userLine'></div>
                <Link className='account'><TbUserHexagon /><span className='elementText'>Info in youtube</span> </Link>
                <Link className='account'><BsFillMoonStarsFill /><span className='elementText'>Apprearance: Dark</span> </Link>
                <Link className='account'><IoLanguageOutline /><span className='elementText'>Language</span> </Link>
                <Link className='account'><MdOutlineVerifiedUser /><span className='elementText'>Restricted:off</span> </Link>
                <Link className='account'><ImLocation /><span className='elementText'>Location : Bangladesh</span> </Link>
                <Link className='account'><CiKeyboard /><span className='elementText'>keyborad shortcuts</span> </Link>
                <Link className='account'><CiKeyboard /><span className='elementText'>setting</span> </Link>
                <div className='userLine'></div>
                
                <Link to='/home' className='account'><IoIosHelpCircleOutline /><span className='elementText'>Help</span></Link>
                    <Link to='/home' className='account'><MdOutlineFeedback /><span className='elementText'>send feedback</span></Link>
            </div>
                
            
        </ClickAwayListener>
    }
    </div>
  )
}

export default Person
