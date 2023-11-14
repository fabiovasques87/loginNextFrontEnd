
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

    const handleLogout = () => {
        // Remova o token do armazenamento local
        localStorage.removeItem('token');
        alert('Faça login novamente!!!');
        // Redirecione o usuário para a página de login ou outra página de sua escolha
        router.push('/'); // Certifique-se de importar a função 'useRouter' do 'next/router'.
    };

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
            <Nav.Link href="#action2"> {/* <button onClick={handleLogout}>Logout</button>  */}
                <BotLogout  label='Logout...' onClick={handleLogout}  /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;