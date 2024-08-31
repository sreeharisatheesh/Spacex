import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className='navbar'>
        <img className="logo-img" src="./spacex.png" alt="SpaceX Logo" />
        <div className={`pages ${show ? 'show-pages' : ''}`}>
          <p className='pages-one'>Falcon Heavy</p>
          <p className='pages-one'>Dragon</p>
          <p className='pages-one'>Starship</p>
          <p className='pages-one'>Human Spaceflight</p>
          <p className='pages-one'>Rideshare</p>
          <p className='pages-one'>Starshield</p>
          <p className='pages-one'>Starlink</p>
        </div>
        <img 
          onClick={toggle} 
          className='menu-image' 
          src={show ? '/close.png' : '/bluemenu.png'} 
          alt="Menu Toggle" 
        />
      </div>
    </div>
  );
}

export default Navbar;


