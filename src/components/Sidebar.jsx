import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../components/components.css";

function Sidebar({ setShowListBarang, setShowListSupplier }) {
  const navigate = useNavigate();
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("userData"));
    if (!users || users === "") {
      window.location.assign("/");
      alert("login first!!!");
    }
  }, [navigate]);

  const users = JSON.parse(localStorage.getItem("userData"));
  console.log(users);

  return (
    <Navbar bg="light" expand="md" className="flex-md-column">
      <Navbar.Toggle aria-controls="sidebar-nav" />
      <Navbar.Collapse id="sidebar-nav">
        <Nav className="flex-md-column navs">
          <h3>Welcome, {users.username}!</h3>
          <Nav.Link href="/dashboard">Menu</Nav.Link>
          <Nav.Link href="#" onClick={() => setShowListBarang(true)}>
            Products
          </Nav.Link>
          <Nav.Link href="#" onClick={() => setShowListSupplier(true)}>
            Suppliers
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
