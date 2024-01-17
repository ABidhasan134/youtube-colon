import React, { useState } from 'react'

import'./feed.css';
import Apidata from '../test/asyncAwite';
// import Apidata from '../test/apidata';

function Feed(props) {
  // const playURL="https://www.youtube.com/watch?v="
  // const [allVideos,setAllVideos]=useState([])
  // // console.log(props.data);
  // const handelData=(newData)=>{
  //   setAllVideos(newData);
  //   console.log(newData);
  // }
  return (
    <div className='videoContener'>
        {/* <Apidata getData={handelData}/> */}
        <Apidata/>
    </div>
  )
}

export default Feed;
