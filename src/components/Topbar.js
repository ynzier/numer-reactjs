import React, { useState } from 'react';
import '../App.css';
//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
//import bootstrap components

import { Nav, Navbar} from 'react-bootstrap'
import { Dropdown, DropdownMenu , DropdownItem , DropdownToggle} from 'reactstrap';

const Topbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [LinearMenu, setLinearMenuOpen] = useState(false);
    const toggle1 = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setLinearMenuOpen(prevState => !prevState);

    return (
        <div>
            <Navbar className="nav-color" variant="dark">
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="mr-auto">
                <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
                    <DropdownToggle color="secondary" caret>
                        Root of Equation
                    </DropdownToggle>
                    <DropdownMenu >
                        <DropdownItem header>Methods</DropdownItem>
                        <DropdownItem href="/Bisection" >Bisection</DropdownItem>
                        <DropdownItem href="/FalsePos" >False Position</DropdownItem>
                        <DropdownItem href="/Jacobi" >Jacobi Iteration</DropdownItem>
                        <DropdownItem href="/OnePoint" >One-Point Iteration</DropdownItem>
                        <DropdownItem href="/Secant" >Secant</DropdownItem>
                        <DropdownItem href="/Newton" >Newton Raphson</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <span>&nbsp;&nbsp;</span>
                <Dropdown isOpen={LinearMenu} toggle={toggle2}>
                    <DropdownToggle color="secondary" caret>
                        Linear Algebra
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Methods</DropdownItem>
                        <DropdownItem href="/Bisection" >Bisection</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
            
            </Navbar>
            
        </div>
    )
}

export default Topbar