import React from "react";
import { Link } from "react-router-dom";
import { Nav,  NavLink,  Bars,  NavMenu,  NavBtn,  NavBtnLink}  from './NavbarElements';
const Header = () => {
  return (
    
    <>
      <Nav>
        <Bars />
        <NavLink to='/' activeStyle>
        Home
        </NavLink>
        <NavLink to='/Blogs' activeStyle>
            Blogs
        </NavLink>
        <NavLink to='/Contact' activeStyle>
        Contact
        </NavLink>

        <NavLink to='/Stocks' activeStyle>
            Stock Details
        </NavLink>

        <NavLink to='/RegistrationForm' activeStyle>
          Registration Form
        </NavLink>
        
      </Nav>
    </>
    

  )
};

export default Header;