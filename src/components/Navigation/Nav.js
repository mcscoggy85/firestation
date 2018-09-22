import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavFire extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return(
            <div>
                <Navbar color="dark" dark >
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <NavbarBrand href="/" className="mr-auto">Firstation</NavbarBrand>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav  navbar>
                            <NavItem>
                                <NavLink href="/status">Status</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/vpn">VPN</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/firewall">Firwall</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}