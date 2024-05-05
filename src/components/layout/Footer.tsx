import './Footer.scss';
import Logo from '../../../public/logos/navLogo.png';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="footer">
             <div className="footer__item">
              <div className="footer__logo">
                <div className="footer__img">
                  <img src={Logo} alt="" />
                </div>
                <h2>+998 97 783 90 45</h2>
                <div className="footer__icon">
                   <FaLinkedin className='icon'/>
                   <FaInstagramSquare className='icon'/>
                   <FaTelegram className='icon'/>
                   <FaYoutube className='icon'/>
                   <FaFacebook  className='icon'/>

                </div>
              </div>
              <ul className='footyer__links'>
                <h3>KURSLARIMIZ</h3>
                <li>
                  <a href="#">Data analytics</a>
                </li>
                <li>
                  <a href="#">Data engineer</a>
                </li>
                <li>
                  <a href="#">Cloud data engineering</a>
                </li>
              </ul>
              <ul className='footyer__links'>
                <h3>Manyular</h3>
                <li>
                  <a href="#">Grantlar</a>
                </li>
                <li>
                  <a href="#">Sertifikatlarimiz</a>
                </li>
                <li>
                  <a href="#">Ustozlar</a>
                </li>
              </ul>
              <ul className='footyer__links'>
                <h3>Biz bilan bog’laning</h3>
                <li>
                  <CiLocationOn className='location'/>
                  <a href="#">Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.</a>
                </li>
                <li>
                  <CgMail className='gmail'/>
                  <a href="#">info@maab.uz</a>
                </li>
                <li>
                  <IoCall className='phone'/>
                  <a href="#">+998 97 783 90 45</a>
                </li>
              </ul>
             </div>
          </div>
          <div className="from">
            <p className='inoovation'>© 2023 MAAB INNOVATION</p>
            <div className="producters">
            <p className='producter'>Dizaynerlar: Mazmoon</p>
               <div className='line'></div>
               <p className='producter'>Dasturchilar: UniFS</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer