import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom"

export function NavBar(){
    
    return(
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className= "me-auto">
                <Nav.Link to={"/songqueue"} as={NavLink}>
                    Song Queue
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    )
}