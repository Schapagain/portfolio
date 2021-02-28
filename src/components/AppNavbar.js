import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const AppNavbar = ({currentPage,setPage}) => {

  return (
    <header className="masthead mb-auto">
        <div className="inner">
            <h3 className="masthead-brand"> Sandesh Chapagain </h3>
            <Nav className="nav-masthead justify-content-center">
                <NavItem>
                    <NavLink onClick={()=>{console.log('setting home');setPage("home")}} className={`nav-link${currentPage === "home" ? " active":""}`}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>{console.log('setting pr0jects');setPage("projects")}} className={`nav-link${currentPage === "projects" ? " active":""}`}>Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`nav-link${currentPage === "contact" ? " active":""}`}>Contact</NavLink>
                </NavItem>
                
            </Nav>
        </div>
    </header>
  );
}

export default AppNavbar;