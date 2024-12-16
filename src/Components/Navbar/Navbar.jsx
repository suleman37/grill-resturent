import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100); // Change 100 to your desired scroll threshold
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
                  background: "rgba(214, 177, 10, 0.774)",
                  border: "1px solid transparent",
                  color: "black",
                  cursor:"pointer",
                  padding:"5px 10px",
                  borderRadius:"5px"
                }}
                onClick={handleShowModal}
              >
                Reserve Table
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton style={{color:"rgba(214, 177, 10, 0.774)"}}>
          <Modal.Title style={{color:"rgba(214, 177, 10, 0.774)"}}>Reserve a Table</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group controlId="formName">
              <Form.Label style={{ textAlign: "start",display:"flex", color: "rgba(214, 177, 10, 0.774)" }}>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label style={{ textAlign: "start",display:"flex", color: "rgba(214, 177, 10, 0.774)" }}>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label style={{ textAlign: "start",display:"flex", color: "rgba(214, 177, 10, 0.774)" }}>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formDate">
              <Form.Label style={{ textAlign: "start", display:"flex",color: "rgba(214, 177, 10, 0.774)" }}>Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label style={{ textAlign: "start",display:"flex", color: "rgba(214, 177, 10, 0.774)" }}>Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group controlId="formGuests">
              <Form.Label style={{ textAlign: "end", display:"flex",color: "rgba(214, 177, 10, 0.774)" }}>Number of Guests</Form.Label>
              <Form.Control type="number" min="1" placeholder="Enter number of guests" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} style={{background:"transparent", border: "1px solid rgba(214, 177, 10, 0.774)"}}>
            Close
          </Button>
          <Button variant="primary" onClick={handleFormSubmit} style={{ background: "rgba(214, 177, 10, 0.774)" , border: "1px solid transparent" }}>
            Reserve
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CollapsibleExample;