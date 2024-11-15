import './NavBar.css';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import imageNav from '../../assets/images/logo.svg';
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from 'react';
import photo2 from './../../assets/images/plane.webp';
import { GoChevronDown } from "react-icons/go";

function NavBar({ home }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const listdown = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true); 
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <nav className={`${home ? 'MA-navbar' : 'MA-navbar2'} ${scroll ? 'Nav2' : ''}`}>
      {!home && <img src={photo2} className='logo2' />}
      <div>
        <img src={imageNav} alt="" className='logo' />
      </div>
      <ul className={`navBar1 ${open ? 'opens' : ''}`}>
        <li>
          <Link to={'/'}>Home<GoChevronDown /></Link>
        </li>
        <li>
          <Link to={'/about'}>About </Link>
        </li>
        <li>
          <Link>Services <GoChevronDown /> </Link>
        </li>
        <li>
          <Link>Pages <GoChevronDown /> </Link>
        </li>
        <li>
          <Link>Blogs <GoChevronDown /></Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact </Link>
        </li>
      </ul>
      {!home && <CiSearch className='icon' />}
      <div className='d-flex align-items-center'>
        <div className='d-flex align-items-center'>
          {home && <FaShoppingCart className='icon' />}
          {home && <CiSearch className='icon' />}
          <div className='btn-nav'>
            <button>get to kjnfsklv <GoArrowRight /></button>
          </div>
        </div>
        <div className='icon-bars'>
          <FaBars onClick={listdown} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
