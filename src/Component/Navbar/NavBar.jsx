import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
      <nav>
          <ul>            
              <Link to={"/"} className='item'>Home</Link>
              <Link to={"/filter/Male"} className='item'>Male</Link>            
              <Link to={"/filter/Female"} className='item'>Female</Link>            
          </ul>
      </nav>
    )
  }
  export default NavBar
