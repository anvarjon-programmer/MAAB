import navLogo from '../../../public/logos/navLogo.png'
import { IoCall } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './Header.scss';
import { useState } from 'react';
const Header = () => {
  const [openHamburger,setOpenHamburger] = useState<Boolean>(false)

  const toggleHamburger = () =>{
    setOpenHamburger(!openHamburger)
  }
  return (
    <>
    <header>
        <nav>
            <div className="container">
              <div className="network">
                <div className="icons">
                <FaTelegram  className='icon'/>
                <FaInstagram className='icon'/>
                <FaLinkedin className='icon'/>
                <FaFacebook className='icon'/>
                </div>
                <select className='select'>
                  <option>Ubekistan</option>
                  <option>Ubekistan</option>
                  <option>Ubekistan</option>

                </select>
              </div>
             <div className="navbar">
               <img className='navbar-img' src={navLogo} alt="" />
               <button className='open' onClick={toggleHamburger}> Number</button>
               <div className='navbar-phone' style={{translate: openHamburger ? 0: "-100%"}}>
                <a href="#" className='navbar__phone--num'>+998 97 783 90 45</a>
                <button className='navbar__phone--call'>Aloqada bo'ling <IoCall /></button>
                <button className='close' onClick={toggleHamburger}>X</button>
               </div>
             </div>
            </div>
        </nav>
    </header>

    </>
  )
}

export default Header