import React from 'react'
import {GrAndroid} from "react-icons/gr";
import { IconContext } from 'react-icons/lib';
import { FaApple, FaWindows } from "react-icons/fa";
import "./Download.css"
const Download = () => {
  return (
    <section id='downloads'>
      <div className='container download'>
        <h2>SOCIALX DOWNLOAD</h2>
        <p className='u-text-small u-text-light'>
          Our Apps are available for download on all 
          stores.
        </p>
        <IconContext.Provider value={{size:"15"}}>
        <div className='download-icons'>
            <div className='download-icon'>
         
               <GrAndroid/> <p>Android</p>
            </div>
            <div className='download-icon'>
               <FaApple/> <p>ios</p>
            </div>
            <div className='download-icon'>
               <FaWindows/> <p>windows</p>
         
            </div>
        </div>
     </IconContext.Provider>
      </div>
          

    </section>
  )
}

export default Download;
