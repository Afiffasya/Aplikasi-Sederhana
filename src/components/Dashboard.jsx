import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ListBarang from "./ListProduct";
import ListSupplier from "./ListSupplier";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";

function Content({ showListBarang, showListSupplier }) {
  return (
    <Col md={10} className="content">
      {showListBarang && <ListBarang />}
      {showListSupplier && <ListSupplier />}
    </Col>
  );
}

function Dashboard() {
  const [showListBarang, setShowListBarang] = useState(false);
  const [showListSupplier, setShowListSupplier] = useState(false);

  return localStorage.getItem("userData") ? (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col md={2} className="sidebar">
            <Sidebar
              setShowListBarang={setShowListBarang}
              setShowListSupplier={setShowListSupplier}
            />
          </Col>
          <Content
            showListBarang={showListBarang}
            showListSupplier={showListSupplier}
          />
        </Row>
      </Container>
      <Footer />
    </>
  ) : (
    <Navigate replace to="/" />
  );
}

export default Dashboard;
