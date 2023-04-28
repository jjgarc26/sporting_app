import { NavLink, Outlet } from "react-router-dom";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function RootLayout() {
  return (
    <Container>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <NavLink to="/login">Login</NavLink>
          </Nav>

          <NavLink to="/create_account">Create Account</NavLink>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
