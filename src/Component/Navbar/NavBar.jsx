import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import HomeIcon from '@mui/icons-material/Home';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

const NavBar = () => {
    return (
      <nav className='navbar'>
          <ul className='nav'>            
              <Link to={"/"} className='item'>
              <a className='navcontainer' href="#">
                <span className='icon'>
                <HomeIcon />
                </span>
                <span className='text'>Home</span>
              </a>
              </Link>
              <Link to={"/filter/Male"} className='item'>
              <a className ='navcontainer' href="#">
                <span className='icon'>
                  <MaleIcon/>
                </span>
                <span className='text'>Male</span>
                </a>
                </Link>            
              <Link to={"/filter/Female"} className='item'>
              <a className='navcontainer' href="#">
                <span className='icon'>
                  <FemaleIcon/>
                </span>
                <span className='text'>Female</span>
              </a>
              </Link>            
          </ul>
      </nav>
    )
  }
  export default NavBar
