import React,{useState} from 'react';
import {AiOutlineBars} from "react-icons/ai";
import {RiCloseLine} from "react-icons/ri";
import {FcGlobe} from "react-icons/fc"
import "./Navbar.css";
import "../ui/button/Button.css";
import Button from "../ui/button/Button"


const Navbar = () => {    
  const[showMenu,setShowMenu]=useState(false);
  const toggleMenu=()=>{
    setShowMenu(!showMenu)
  }
  return (
    <nav className='container navbar'>
        <div className='logo'>
            <FcGlobe color='#fff' size={33}/>
          <p className='logo-text'>
             Social <span>X</span>
            </p>
            </div>
            <menu>
              <ul className='nav-links' id={showMenu ? 'nav-links-mobile': 'nav-links-mobile-hide'}>
                <li><a href='#features'>Features</a></li>
                <li><a href='#faq'>Faq</a></li>
                <li><a href='#downloads'>Download</a></li>
                <li><a href='#subscribe'>Subscribe</a></li>
                <li className='nav-btn'> 
                <Button 
                text={"Learn More"} 
                 btnClass={"btn-dark"}
                     href={"#faq"}>
                </Button>
                  </li>
              </ul>
              
                  
            </menu>

         <div className='menu-icons' onClick={toggleMenu}>
            
            { 
             showMenu ? <RiCloseLine color='#fff'size={30} />:<AiOutlineBars color='#fff' size={27}/>
            
            }
       
           
           
         </div>
    </nav>
  )
}

export default Navbar;
