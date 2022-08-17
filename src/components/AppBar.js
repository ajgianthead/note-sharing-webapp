import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Nav>
          <Nav.Link active>
            <Link to={"/"} style={{ textDecoration: "none", color: "grey" }}>
              Dashboard
            </Link>
          </Nav.Link>
          <Nav.Link href="#explore">Explore</Nav.Link>
          <Nav.Link href="#my_notes">Notes</Nav.Link>
        </Nav>
        <div>
          <Link
            to={"/login"}
            style={{
              textDecoration: "none",
              color: "black",
              paddingRight: "30px",
            }}
          >
            Login
          </Link>
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Sign up
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}
