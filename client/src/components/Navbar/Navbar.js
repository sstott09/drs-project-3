import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class Navtabs extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<div>
            <Navbar dark expand="sm" className="col-nav">
                
                    <NavbarBrand href="/">DRS Automotive Services</NavbarBrand>
                    <NavbarToggler onClick={
                        this.toggle
                    } />
                    <Collapse isOpen={
                        this.state.isOpen
                    }
                        navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/About">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Contact">
                                    Contact
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Customer">
                                    Customer
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Inventory">
                                    Inventory
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/Admin">
                                    Admin
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                
            </Navbar>
        </div>);
    }
}

export default Navtabs;

