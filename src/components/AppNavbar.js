import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';

const AppNavbar = props => {

  return (
    <header class="masthead mb-auto">
        <div className="inner">
            <h3 className="masthead-brand"> Sandesh Chapagain </h3>
            <Nav className="nav-masthead justify-content-center">
                <NavItem>
                    <NavLink className=" nav-link active">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink >Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Contact</NavLink>
                </NavItem>
                
            </Nav>
        </div>
    </header>
  );
}

export default AppNavbar;