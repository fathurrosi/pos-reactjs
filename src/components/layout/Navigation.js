import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/Home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/User">User</Nav.Link>
                    <Nav.Link as={NavLink} to="/Role">Role</Nav.Link>
                    <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/Dashboard">Dashboard</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;