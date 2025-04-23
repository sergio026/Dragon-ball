import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import HomeIcon from '@mui/icons-material/Home';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import ContactsIcon from '@mui/icons-material/Contacts';

const NavBar = () => {
    return (
      <nav className='navbar'>
        <img src="https://th.bing.com/th/id/OIP.imt3jdvF_UBPMydJckORVgHaCy?rs=1&pid=ImgDetMain" alt="" className='logo_navbar'/>
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
              <Link to={"/imformation"} className='item'>
              <a className ='navcontainer' href="#">
                <span className='icon'>
                <ContactsIcon/>
                </span>
                <span className='text'>Imformation</span>
                </a>
                </Link>            
          </ul>
      </nav>
    )
  }
  export default NavBar
