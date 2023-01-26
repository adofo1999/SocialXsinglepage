import React from 'react'
import "./Header.css"
import rainbowimg from "../rainbowimg.png"
import Button from '../ui/button/Button'
import "../ui/button/Button.css";
import {BsMouse} from "react-icons/bs"


const Header = () => {
  return (
    <section id="header">
      <div className='container header'>
        
        <div className='header-left'>
          <h1>
          <span>AFRICA'S LEADING</span>
          <span>DREAM SPONSORSHIP
          <span>SUCCESSFUL CAREER</span>
          </span>
          </h1>
          <span>
            <p className='u-text-small u-text-light'>blah  blah balha dhksbdsj
            khjdfhjkjhdshjksdfjkhfs
            khjsfjhfsdjhksdfkjhdfjhkdsfkjh
            hdfeajhfahjsdfhierfierfjierfjo
            hjdfujefhefhkwfurfbrfrjkferfek
            dwswjedkjwedkwednewkdnwqkjdwebdwekhd
            wdekwkehjdkwjedkjwedhjkwehkdwedjkwd
            </p>
            </span>
            <div className='header-cta'>
           <Button
            text={"Get started"} 
            btnClass={"btn-dark"} 
            href={"#features"}/>
               <Button
            text={"HOW WE WORK"} 
            btnClass={"btn-orange"} 
            href={"#faq"}/>
            </div>
            
        </div>
        <div className='header-right'>
           <img src={rainbowimg} alt="bowimg"/>
           </div>
         </div>
   
            <div/>
            <div className='floating-icon'>
              <a href='#downloads'><BsMouse color='#fff' size={25} className="mouse"/></a>
            </div>
     
        <div/>
    </section>
  )
}

export default Header;