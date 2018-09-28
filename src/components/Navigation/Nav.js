import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class NavFire extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true,
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
                    <NavbarBrand href="/" className="mr-auto">Firestation</NavbarBrand>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav  navbar>
                            <NavItem className="mt-2">
                              <UncontrolledDropdown>
                                <DropdownToggle>
                                  <NavLink style={{"color": "white"}} href="/status">Status</NavLink>                                  
                                </DropdownToggle>
                              </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="mt-2">
                              <UncontrolledDropdown>
                                <DropdownToggle>
                                  VPN
                                </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem href="/vpn/form">Form</DropdownItem>
                                    <DropdownItem href="/vpn/logs">Logs</DropdownItem>
                                  </DropdownMenu>
                              </UncontrolledDropdown>
                            </NavItem>
                            <NavItem className="mt-2">
                            <UncontrolledDropdown>
                                <DropdownToggle>
                                  Firewall
                                </DropdownToggle>
                                  <DropdownMenu>
                                    <DropdownItem href="/firewall/form">Form</DropdownItem>
                                    <DropdownItem href="/firewall/logs">Logs</DropdownItem>
                                  </DropdownMenu>
                              </UncontrolledDropdown>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}