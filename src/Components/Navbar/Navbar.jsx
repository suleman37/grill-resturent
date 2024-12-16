import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "../../images/logo.svg";
import "./Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CollapsibleExample() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    toast.success("Reservation submitted successfully!");
    handleCloseModal();
  };

  const handleToggleOffcanvas = () => {
    setShowOffcanvas((prevShowOffcanvas) => !prevShowOffcanvas);
  };

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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleOffcanvas} style={{ borderColor: "#333", borderWidth: "3px" }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/" style={{ color: "white" }} className="navlink">
                Home
              </Nav.Link>
              <Nav.Link href="#about" style={{ color: "white" }}>
                About Us
              </Nav.Link>
              <Nav.Link href="/menu" style={{ color: "white" }}>
                Our Menu
              </Nav.Link>
              <Nav.Link href="#whychooseus" style={{ color: "white" }}>
                Why Choose Us
              </Nav.Link>
              <Nav.Link href="/contact" style={{ color: "white" }}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <button
                style={{
                  background: "rgba(214, 177, 10, 0.774)",
                  border: "1px solid transparent",
                  color: "black",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px"
                }}
                onClick={handleShowModal}
              >
                Reserve Table
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for small screens */}
      <Offcanvas 
        show={showOffcanvas} 
        onHide={handleToggleOffcanvas} 
        placement="end" 
        style={{ 
          backgroundColor: "#222", 
          color: "#fff", 
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)", 
          borderRadius: "10px"
        }}
      >
        <Offcanvas.Header 
          closeButton 
          style={{ 
            borderBottom: "2px solid #555", 
            padding: "15px"
          }}
        >
          <Offcanvas.Title 
            style={{ 
              color: "rgba(214, 177, 10, 0.774)", 
              fontFamily: "'Cursive', sans-serif", 
              fontSize: "1.5rem"
            }}
          >
            <img src={Logo} alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column" style={{ gap: "10px" }}>
            <Nav.Link 
              href="/" 
              onClick={handleToggleOffcanvas} 
              style={{ 
                color: "rgba(214, 177, 10, 0.774)", 
                fontSize: "1.2rem", 
                transition: "color 0.3s", 
                textShadow: "1px 1px 2px #000"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FFF"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(214, 177, 10, 0.774)"}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#about" 
              onClick={handleToggleOffcanvas} 
              style={{ 
                color: "rgba(214, 177, 10, 0.774)", 
                fontSize: "1.2rem", 
                transition: "color 0.3s", 
                textShadow: "1px 1px 2px #000"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FFF"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(214, 177, 10, 0.774)"}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              href="/menu" 
              onClick={handleToggleOffcanvas} 
              style={{ 
                color: "rgba(214, 177, 10, 0.774)", 
                fontSize: "1.2rem", 
                transition: "color 0.3s", 
                textShadow: "1px 1px 2px #000"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FFF"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(214, 177, 10, 0.774)"}
            >
              Our Menu
            </Nav.Link>
            <Nav.Link 
              href="#whychooseus" 
              onClick={handleToggleOffcanvas} 
              style={{ 
                color: "rgba(214, 177, 10, 0.774)", 
                fontSize: "1.2rem", 
                transition: "color 0.3s", 
                textShadow: "1px 1px 2px #000"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FFF"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(214, 177, 10, 0.774)"}
            >
              Why Choose Us
            </Nav.Link>
            <Nav.Link 
              href="#pricing" 
              onClick={handleToggleOffcanvas} 
              style={{ 
                color: "rgba(214, 177, 10, 0.774)", 
                fontSize: "1.2rem", 
                transition: "color 0.3s", 
                textShadow: "1px 1px 2px #000"
              }}
              onMouseOver={(e) => e.currentTarget.style.color = "#FFF"}
              onMouseOut={(e) => e.currentTarget.style.color = "rgba(214, 177, 10, 0.774)"}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <button
              style={{
                background: "rgba(214, 177, 10, 0.774)",
                border: "none",
                color: "black",
                padding: "10px 20px",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background 0.3s",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
              }}
              onMouseOver={(e) => e.currentTarget.style.background = "#FFD700"}
              onMouseOut={(e) => e.currentTarget.style.background = "rgba(214, 177, 10, 0.774)"}
              onClick={handleShowModal}
            >
              Reserve Table
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Modal for table booking */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{ color: "rgba(214, 177, 10, 0.774)" }}>
          <Modal.Title style={{ color: "rgba(214, 177, 10, 0.774)" }}>Reserve a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formName">
              <Form.Label style={{ textAlign: "start", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ textAlign: "start", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label style={{ textAlign: "start", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label style={{ textAlign: "start", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label style={{ textAlign: "start", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>Time</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group controlId="formGuests">
              <Form.Label style={{ textAlign: "end", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>Number of Guests</Form.Label>
              <Form.Control type="number" min="1" placeholder="Enter number of guests" required />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal} style={{ background: "transparent", border: "1px solid rgba(214, 177, 10, 0.774)" }}>
                Close
              </Button>
              <Button type="submit" variant="primary" style={{ background: "rgba(214, 177, 10, 0.774)", border: "1px solid transparent" }}>
                Reserve
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CollapsibleExample;