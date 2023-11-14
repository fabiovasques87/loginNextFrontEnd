
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Router from "next/router";


import { BotLogout } from '../BotLogout';

const router = Router;


function NavBar() {



  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/cadastro">Cadastrar usuários</Nav.Link>
            <NavDropdown title="Estoque" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Entrada</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Saída
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/sobre">Sobre</Nav.Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;