//pop up the menu with out mui 
import React, { useState } from 'react'

import '../sideBar/sideBar.css'
import Primumlogoo from '../../img/premumlogo.png'
import Kidlogo from '../../img/kidslogo.png'
import Musiclogo from '../../img/youtubeMusic.png'
import Anis from '../../img/ANIS.jpg';
import javascript from '../../img/download.png'
import Bbki from '../../img/BB.jpg'
import { IoReorderFourOutline } from "react-icons/io5";

import ClickAwayListener from 'react-click-away-listener';
import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions,MdOutlineFeedback  } from "react-icons/md";
import { PiUserRectangleLight } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp, IoIosHelpCircleOutline } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { CgPlayList } from "react-icons/cg";
import { MdOutlinePlaylistAddCheckCircle } from "react-icons/md";
import { CiFlag1, CiStreamOn } from "react-icons/ci";
import { SiTinder } from "react-icons/si";
import { CiMusicNote1,CiSettings  } from "react-icons/ci";
import { FcSportsMode } from "react-icons/fc";
import { SiYoutubegaming } from "react-icons/si";






const SideBar = () => {
  const [popUp, setpopUp]=useState(false);
  const [more,setmore]=useState(false);
  const [less, setLess]=useState(false);

  const handelMore=(event)=>{
    setmore(true);
    // event.currentTarget.classList.add('more');

  }
  const handelLess=()=>{
    setmore(false);
    // more.classList.remove('more');
    console.log('false');
  }

  return (
    <div className='sidePop'>
      <IoReorderFourOutline className='ListBar'
      onClick={()=>setpopUp(true)} />
      {
        popUp&&
        <ClickAwayListener id='popList' onClickAway={()=>setpopUp(false)}>
          <div className='clickAway'>
            <div className='componentThree'>
                <Link to='/home' className='list'><AiFillHome/><span className='ListText'>Home</span></Link>
                <Link  className='list'><SiYoutubeshorts/><span className='ListText'>shorts</span></Link>
                <Link className='list'><MdOutlineSubscriptions/><span className='ListText'>subcription</span></Link>
            </div>
            <div className='line'></div>
            <div className="channel">
                <Link className='list'><PiUserRectangleLight/><span className='ListText'>your channel</span></Link>
                <Link className='list'><GoHistory/><span className='ListText'>History</span></Link>
                <Link className='list'><GoVideo/><span className='ListText'>your videos</span></Link>
                <Link  className='list'><MdOutlineWatchLater/><span className='ListText'>Watch</span></Link>
                <button className={`chanelBtn list${more?'more':''}`} 
                onClick={handelMore}>
                <IoIosArrowDown/> 
                  <span className='ListText'>see more</span>                                   
                </button>
                {
                    more ?
                    <ClickAwayListener onClickAway={()=>setmore(false)}>
                        <div>
                          <Link className='list'><BiLike/><span className='ListText'>Liked videos</span></Link>
                          <Link className='list'><CgPlayList/><span className='ListText'>Importent</span></Link>
                          <Link to='/home' className='list'><CiStreamOn/><span className='ListText'>Mix playList</span></Link>
                          <button className='chanelBtn list' 
                          onClick={handelLess}
                          >
                            <IoIosArrowUp/>
                            <span className='ListText'>see less</span>
                          </button>     
                        </div>
                    </ClickAwayListener>:""
                  }
            </div>
            <div className="subscription">
                    <h3>Subscription</h3>
                    <Link  className='list'><img className='subImg' src={Anis} alt="anis logo" /><span className='ListText'>Anisul Islam</span></Link>
                    <Link  className='list'><img className='subImg' src={javascript} alt="anis logo" /><span className='ListText'>javascript</span></Link>
                    <Link  className='list'><img  className='subImg'src={Bbki} alt="anis logo" /><span className='ListText'>BB ki vins</span></Link>
                    <div className='line'></div>
            </div>
            <div className="Esplore">
                    <h3>Esplore</h3>
                    <Link to='/home' className='list'><SiTinder/><span className='ListText'>Treanding</span></Link>
                    <Link to='/home' className='list'><CiMusicNote1 /><span className='ListText'>Music</span></Link>
                    <Link to='/home' className='list'><FcSportsMode/><span className='ListText'>sports</span></Link>
                    <Link to='/home' className='list'><SiYoutubegaming/><span className='ListText'>Gaming</span></Link>
                    <div className='line'></div>
            </div>
            <div className="fromYoutube">
                    <h3>More from youtube</h3>
                    <Link to='/home' className='list'><img className='subImg' src={Primumlogoo} alt="youtubelogo" /><span className='ListText'>Treanding</span></Link>
                    <Link to='/home' className='list'><img className='subImg' src={Kidlogo} alt="kid youtube" /><span className='ListText'>youtube kids</span></Link>
                    <Link to='/home' className='list'><img className='subImg' src={Musiclogo} alt="musiclogo" /><span className='ListText'>Music</span></Link>
                    <div className='line'></div>
            </div>
            <div className="fromYoutube">
            <Link to='/home' className='list'><CiSettings/><span className='ListText'>Settings</span></Link>
                    <Link to='/home' className='list'><CiFlag1/><span className='ListText'>Report History</span></Link>
                    <Link to='/home' className='list'><IoIosHelpCircleOutline /><span className='ListText'>Help</span></Link>
                    <Link to='/home' className='list'><MdOutlineFeedback /><span className='ListText'>send feedback</span></Link>
                    
                    <div className='line'></div>
            </div>
            <article>
              about press copyright Contact us creators Adverties
            </article>
            <footer>
              &copy;2021 Youtube. All rights reserved.
            </footer>
          </div>
        
        </ClickAwayListener>
      }
    </div>
  )
}

export default SideBar
