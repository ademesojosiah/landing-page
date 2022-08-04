import React, { useState } from 'react';
import './Nav.css';
import bookmarkLogo from './svgs/logo-bookmark.svg';
import Ham from './svgs/icon-hamburger.svg';
import Mobile from './Mobile';


const Nav = () => {
    const [mobile,setmobile] = useState(null)
  return (
    <nav className='nav'>{mobile && <Mobile /> }
        <div className="log"><img src={bookmarkLogo} alt="" /></div>
        <div className="menu">
            <a href="/">FEATURES</a>
            <a href="/">PRICING</a>
            <a href="/">CONTACT</a>
            <a href="/"><button>LOGIN</button></a>
        </div>
        <img onClick={()=>setmobile(true)} className='ham_burger' src={Ham} alt="" />
        
      
    </nav>
  )
}

export default Nav
