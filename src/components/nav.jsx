import { useState, useEffect } from 'react';

import { navLinks } from '../utils/data.js';
import { Link } from 'react-router-dom';

import menuClose from '../assets/menu-close.svg';
import menuOpen from '../assets/menu-open.svg';

import MobileNav from './nav-mobile.jsx';

import './nav.css'

function Nav(props) {

  const [selected, setSelected] = useState( 'home' );  
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const handleResize = () => {

      console.log('is mobile sized', isMobile)

      if ( window.innerWidth < 768 ) {
        console.log(window.innerWidth, isMobile)
        // if (!isMobile) {
        //   setIsMobile(true)
        // }
        setIsMobile(true)
      } else {
        console.log(window.innerWidth, isMobile)
        // if (isMobile) {
        //   setIsMobile(false)
        // }
        setIsMobile(false)
      }
    };
    
    if ( window.innerWidth < 768 ) {
      setIsMobile(true);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  
  }, []);

  const handleLinkClick = (e) => {
    setSelected(e.target.dataset.navtitle)
  }

  const handleOpenNav = (e) => {
    setIsNavOpen(true)
  }

  const handleCloseNav = (e) => {
    setIsNavOpen(false)
  }


  console.log('selected', selected);

  return (
    <nav>
      <div className='logo'>
        <h1>Uneixa</h1>
      </div>
      <div className='links'>
        { !isMobile ? (
        <ul>
          { 
            Object
            .keys(navLinks)
            .map(
              key => (
                <li 
                  key={key} 
                  className={ selected === key ? 'active' : '' } 
                  data-navtitle={key}
                  onClick={() => setSelected(key)}
                  >
                  <Link to={`/${key}`}>
                    {navLinks[key]}
                  </Link>
                </li> 
              )
            ) 
          }
        </ul>
        ) : (
          isNavOpen ? (
            <img 
            src={menuClose} 
            style={{ height: 32, width: 32, marginRight: 16 }}
            onClick={handleCloseNav}
            />
          ) : (
          <img 
            src={menuOpen} 
            style={{ height: 32, width: 32, marginRight: 16 }}
            onClick={handleOpenNav}
            />
          )
        )}
        
      </div>

      { (isMobile && isNavOpen) ? <MobileNav selected={selected} setSelected={setSelected}/> : null }
    </nav>
  )
}

export default Nav;