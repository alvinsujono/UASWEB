import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom'

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/"></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink to="/pelanggan" className="nav-link">pelanggan</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">produk</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/About" className="nav-link">About</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink to="/harga" className="nav-link">Harga</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/user" className="nav-link">Ganti Password</NavLink>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;