
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Router from "next/router";

import styles from './navBar.module.css'

import { BotLogout } from '../BotLogout';

const router = Router;


function NavBar() {



  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: '#FFF' }} />
        <Navbar.Collapse id="navbarScroll" style={{ color: '#FFF' }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', color: '#FFF' }}
            navbarScroll
          >
            <Nav.Link href="/dashboard" className={styles.container} style={{ color: '#FFF' }} >Home</Nav.Link>

            <Nav.Link href="/cadastro"  className={styles.container} style={{ color: '#FFF' }}>Cadastrar usuários</Nav.Link>
            <NavDropdown  title="Produtos" style={{color: 'red'}} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" >Adicionar</NavDropdown.Item>
            </NavDropdown>
            
            <NavDropdown  title="Estoque" id="navbarScrollingDropdown" style={{ color: 'red' }}>
              <NavDropdown.Item href="#action3"  className={styles.containerFilho}>Entrada</NavDropdown.Item>
              <NavDropdown.Item href="#action4"  className={styles.containerFilho}>
                Saída
              </NavDropdown.Item>
            </NavDropdown>
           
            <Nav.Link href="/sobre"  className={styles.container} style={{ color: '#FFF' }}>Sobre</Nav.Link >


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;