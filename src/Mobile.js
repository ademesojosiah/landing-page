import React from 'react';
import './Mobile.css';
import bookmark from './svgs/bookmark.svg'

const Mobile = () => {
  return (
    <div className='mobile'>
        <div className='mobile_nav'><img src={bookmark} alt="" /><p>X</p></div>
        <div className='mobile_menu'></div> 
    </div>
  )
}

export default Mobile
