import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/logo.svg";
import "./Navbar.css";

function CollapsibleExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Change 100 to your desired scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`bg-body-tertiary trans nav ${scrolled ? "scrolled" : ""}`}
      >
        <Container className="nav">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features" style={{ color: "white" }} className="navlink">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Our Menu
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Why Choose Us
              </Nav.Link>
              <Nav.Link href="#pricing" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <button
                style={{
                  background: " rgba(214, 177, 10, 0.774)",
                  border: "1px solid transparent",
                  color: "black",
                  cursor:"pointer",
                  padding:"5px 10px",
                  borderRadius:"5px"
                }}
                href="#action"
              >
                Reserve Table
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default CollapsibleExample;