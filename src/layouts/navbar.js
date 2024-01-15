import { Navbar, Nav, Container } from "react-bootstrap"
import {Link } from "react-router-dom"
import logo from "../img/logo1.png";
import '../App.css';
const NavBar = () => {
    return(
       <>    
            <Navbar className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                        src={logo}
                        alt="Logo"
                        width="100px"
                        height="60px"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="item mx-auto">
                            <Nav.Link as={Link} to="/" >INICIO</Nav.Link>
                            <Nav.Link as={Link} to="/quienessomos">QUIENES SOMOS</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">CONTACTO</Nav.Link>                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  
       </> 
    )
}
export default NavBar