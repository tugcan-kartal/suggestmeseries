import React from 'react';
import './LoadingPart.css';
import logo from './suggest.png';
import logo2 from './KartalLogo.png';

function LoadingPart() {
    setTimeout(function(){
        window.location.href = '/profile-page';
    },3000);
  return (
    <div>
        
        <div className='allofloadingpart'>
            <div>
                <div>
                    <img className='abovelogo' src={logo} alt='not found' />
                </div>
            </div>

            <div>
                <div className='frompart'>From</div> 
                <div>
                    <img className='belowlogo' src={logo2} alt='not found' />
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default LoadingPart