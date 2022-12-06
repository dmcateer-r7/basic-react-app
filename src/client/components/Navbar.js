import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <h6 className='mt-1'>Basic React App</h6>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
          
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                External Links
              </DropdownToggle>
              
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="https://google.com">Google</NavLink>
                </DropdownItem>

                <DropdownItem>
                  <NavLink href="https://github.com/">GitHub</NavLink>
                </DropdownItem>

                <DropdownItem divider />

                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
