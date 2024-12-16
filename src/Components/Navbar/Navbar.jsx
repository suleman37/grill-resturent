import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Modal, Button, Form } from "react-bootstrap";
import Logo from "../../images/logo.svg";
import "./Navbar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CollapsibleExample() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
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
  const handleToggleOffcanvas = () => setShowOffcanvas(prev => !prev);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "/menu", label: "Our Menu" },
    { href: "#whychooseus", label: "Why Choose Us" },
    { href: "/contact", label: "Contact Us" }
  ];

  const renderNavLinks = (onClick) =>
    navLinks.map(({ href, label }) => (
      <Nav.Link
        key={label}
        href={href}
        onClick={onClick}
        style={{
          color: "rgba(214, 177, 10, 0.774)",
          fontSize: "1.2rem",
          transition: "color 0.3s",
          textShadow: "1px 1px 2px #000"
        }}
        onMouseOver={(e) => (e.currentTarget.style.color = "#FFF")}
        onMouseOut={(e) => (e.currentTarget.style.color = "rgba(214, 177, 10, 0.774)")}
      >
        {label}
      </Nav.Link>
    ));

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={`bg-body-tertiary trans nav ${scrolled ? "scrolled" : ""}`}>
        <Container className="nav">
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggleOffcanvas} style={{ borderColor: "#333", borderWidth: "3px" }} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {renderNavLinks()}
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

      <Offcanvas show={showOffcanvas} onHide={handleToggleOffcanvas} placement="end" style={{ backgroundColor: "#222", color: "#fff", boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
        <Offcanvas.Header closeButton style={{ borderBottom: "2px solid #555", padding: "15px" }}>
          <Offcanvas.Title style={{ color: "rgba(214, 177, 10, 0.774)", fontFamily: "'Cursive', sans-serif", fontSize: "1.5rem" }}>
            <img src={Logo} alt="Logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column" style={{ gap: "10px" }}>
            {renderNavLinks(handleToggleOffcanvas)}
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
              onMouseOver={(e) => (e.currentTarget.style.background = "#FFD700")}
              onMouseOut={(e) => (e.currentTarget.style.background = "rgba(214, 177, 10, 0.774)")}
              onClick={handleShowModal}
            >
              Reserve Table
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{ color: "rgba(214, 177, 10, 0.774)" }}>
          <Modal.Title style={{ color: "rgba(214, 177, 10, 0.774)" }}>Reserve a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            {["Name", "Email address", "Phone Number", "Date", "Time", "Number of Guests"].map((label, index) => (
              <Form.Group key={index} controlId={`form${label.replace(" ", "")}`}>
                <Form.Label style={{ textAlign: "start", display: "flex", color: "rgba(214, 177, 10, 0.774)" }}>{label}</Form.Label>
                <Form.Control
                  type={label === "Email address" ? "email" : label === "Phone Number" ? "tel" : label === "Date" ? "date" : label === "Time" ? "time" : label === "Number of Guests" ? "number" : "text"}
                  placeholder={label === "Number of Guests" ? "Enter number of guests" : `Enter your ${label.toLowerCase()}`}
                  required
                  min={label === "Number of Guests" ? "1" : undefined}
                  style={{ backgroundColor: "#333", color: "#fff", border: "1px solid rgba(214, 177, 10, 0.774)" }}
                />
              </Form.Group>
            ))}
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