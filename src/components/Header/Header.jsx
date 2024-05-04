import '../Header/Header.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useEffect, useRef, useState } from 'react'
import { useFirebase } from '../../Firebase/firebase'

const Header = () => {

  const { logout } = useFirebase();
  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 80) {
        headerRef.current.classList.add('header-dark')
      } else {
        headerRef.current.classList.remove('header-dark')
      }
    })
  }, [])

  return (
    <>
      <div ref={headerRef} className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt={logo} />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt={search_icon} className='icons' />
          <p>Children</p>
          <img src={bell_icon} alt={bell_icon} className='icons' />
          <div className="navbar-profile">
            <img src={profile_img} alt={profile_img} />
            <IoMdArrowDropdown style={{ fontSize: '30px' }} />
            <div className="dropdown">
              <p onClick={() => logout()}>Sign Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
