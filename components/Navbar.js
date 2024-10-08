import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Image
} from 'reactstrap';
import Logo from '@/src/layouts/logo/Logo';
import 'bootstrap/dist/css/bootstrap.min.css';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="nav">
        <NavbarBrand href="/">Spicules Insight</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <Nav className="me-auto "  
          >
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
          <NavLink href="/">Login Here</NavLink>

    
        {/* </Collapse> */}
      </Navbar>
      <style >{`
                 nav {
                  background-color: #E1E1E1;
                  // background: linear-gradient(to top, #E1E1E1, #AFAFAF);
      `}</style>

    </div>

  );
}

export default Example;