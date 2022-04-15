import React,{useState, useContext} from 'react';
import {
     Collapse,
     Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        NavbarText
} from "reactstrap";

import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';



export default function Header() {
    const context= useContext(UserContext)

    const[isOpen ,setIsOpen]= useState(false);

    const toggle= ()=>(setIsOpen(!isOpen));
  return (
    
        <Navbar color='info' light expand="md">
        <NavbarBrand>
            <Link to='/' className='text-white'>
                LCO gitfire App
            </Link>
        </NavbarBrand>

        <NavbarText NavbarText='text-white'>
          {
              context.user?.email ? context.user.email : ""
          }
        </NavbarText>

        <NavbarToggler onClick={toggle}/>

        <Collapse navbar isOpen={isOpen}>
            <Nav className='ml-left' navbar>
            {
                context.user ?(
                    <NavItem>
                 <NavLink onClick={()=>{context.setUser(null)}} className='text-white'>
                     Logout
                 </NavLink>
             </NavItem>

                ) : (
                    <>
                <NavItem>
                  <NavLink tag={Link} to="/Signup" className='text-white'>
                     Signup
                  </NavLink>
                 </NavItem>

                <NavItem>
                 <NavLink tag={Link} to="/Signin" className='text-white'>
                     Signin
                 </NavLink>
                </NavItem>
                </>
                    
                )
            }
             
           
            </Nav>
        </Collapse>

        

        </Navbar>
    
  )
}
