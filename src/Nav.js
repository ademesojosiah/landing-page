import React from 'react';
import './Nav.css';
import bookmarkLogo from './svgs/logo-bookmark.svg';


const Nav = () => {
  return (
    <nav className='nav'>
        <div className="log"><img src={bookmarkLogo} alt="" /></div>
        <div className="menu">
            <a href="/">FEATURES</a>
            <a href="/">PRICING</a>
            <a href="/">CONTACT</a>
            <a href="/"><button>LOGIN</button></a>
        </div>
      
    </nav>
  )
}

export default Nav
