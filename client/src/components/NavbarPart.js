import React from 'react'
import './NavbarPart.css';
import LogoForNav from './suggest.png';

function NavbarPart() {
  return (
    <div>
        <div className='allofnavbarpart'>
            <img className='logofornav' src={LogoForNav} alt='Not Found' />
        </div>
    </div>
  )
}

export default NavbarPart