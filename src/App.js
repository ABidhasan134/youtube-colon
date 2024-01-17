import React from 'react';
import {Outlet, RouterProvider, createBrowserRouter} from'react-router-dom';
import Footer from './components/footer';
import Feed from './components/fedd';
import Video from './components/video';
import SideBar from './global/sideBar/sideBar';
import Home from './global/sideBar/test';
import NavBar from './components/navBar';
// import Apidata from './test/apidata';

const App = () => {
    const LayOut=()=>{
        return(
            <div className='Stuctur'>
                {/* <Apidata/> */}
                < NavBar/>

                <div>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
                )
    }
    const router=createBrowserRouter([
      {
        path:'/',
        element:<LayOut/>,
        children:[
          {
            path:'/',
            element:<Feed/>,
          },
          {
            path:'/video',
            element:<Video/>,

          },
          {
            path:'/sideBar',
            element: <SideBar/>,
          },
          {
            path:'/home',
            element: <Home/>,
          }
          
        ]
      }
    ])
  return <RouterProvider router={router}/> 
}

export default App
