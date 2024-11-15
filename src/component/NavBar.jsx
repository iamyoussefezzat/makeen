import React from "react";
import { Container, Nav, Navbar, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../App.css"

function NavBar() {

    return (
        <>
            <Navbar expand="lg">
                <Container className="navbar">
                  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="navlinks">
                            

                          
                            <HashLink to="/">الصفحة الرئيسية</HashLink>
                            <HashLink to="/#contact">من نحن </HashLink>
                            <HashLink to="/#links">المشاريع </HashLink>
                            <HashLink to="/reference">المراجع  </HashLink>
                          
                            
                   
                       
                        </Nav>
                       
                            
                    </Navbar.Collapse>  
                  
                    <div >
                    <HashLink to="https://github.com/iamyoussefezzat/makeen" className="github"> <GitHubIcon /> </HashLink>
                     </div>
                  
                </Container>

              
            </Navbar >
            {/* end navbar  */}
        </>
    )
}

export default NavBar
