import React from 'react';
import {
  Container, Navbar, Nav, Image,
} from 'react-bootstrap';

import logo from 'img/turtle.png';
import './Header.scss';

const Header = () => (
  <Navbar
    className="b-header"
    bg="light"
    expand="lg"
    fixed="top"
  >
    <Container>
      <Navbar.Brand>
        <Image
          src={logo}
          roundedCircle
          width="40"
          height="40"
          className="b-header__logo"
        />
        Alexander Bukharov
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Hobbies</Nav.Link>
          <Nav.Link>Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
