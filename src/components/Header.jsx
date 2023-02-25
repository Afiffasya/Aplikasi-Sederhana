import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../components/components.css";

const Header = () => {
  const keluar = () => {
    localStorage.removeItem("userData");
    window.location.assign("/");
  };
  return (
    <>
      <Navbar className="shadow" sticky="top">
        <Container>
          <Navbar.Brand className="logo" href="#">MARKETPLACE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="align-items-center w-100 justify-content-end">
                <Nav.Link className="navv" href="#" onClick={keluar}>
                  Logout
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;