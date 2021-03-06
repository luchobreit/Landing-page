import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"
import { Link } from 'react-router-dom';
import { BiPaperPlane } from 'react-icons/bi';
import { RiContactsBookLine } from 'react-icons/ri';
import {AiOutlineLogin} from "react-icons/ai"





function NavBar() {
 
  

    return (
      <Navbar collapseOnSelect className="nav" expand="false" bg="dark" variant="dark" sticky="top">
        <Container className="nav">
        <Link to="/">
          <Navbar.Brand className="font">
          <img
              src="https://cutt.ly/IRglKWJ"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <label className="font-color1">Mountain</label><label className="font-color">.ex</label>
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link eventKey={2}><Link className ="linka" to="viaje"><BiPaperPlane/>    Viaje </Link></Nav.Link>

              <Nav.Link eventKey={2}><RiContactsBookLine/><Link className ="linka" to="contacto">     Contacto</Link></Nav.Link>
              <NavDropdown title="Destinos" id="collasible-nav-dropdown">
               <NavDropdown.Item> <Link className="nav-link-d" to="/bariloche">Bariloche</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className="nav-link-d" to="/elbolson">El Bolson</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link className="nav-link-d" to="/laslenas">Las Leñas</Link></NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

            </Nav>
            <Nav>

              <Nav.Link eventKey={2}><Link className="signup" to="signin"><AiOutlineLogin/>   Sing-Up</Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar
