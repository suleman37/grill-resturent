import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./completetion.css";
import Seperator from "../../images/separator.svg";
import { Typography, Card, CardContent } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentSuccess = () => {
  const handleSuccess = () => {
    toast.success("Payment was successful! Thank you for your purchase.");
  };

  React.useEffect(() => {
    handleSuccess();
  }, []);

  return (
    <Container fluid className="completion-bg" style={{ backgroundColor: '#121212', color: 'rgba(214, 177, 10, 0.774)', height: '100vh' }}>
      <Row className="h-100 align-items-center">
        <Col>
          <div className="row">
            <div className="col text-center">
              <p id="main-head" style={{ color: 'rgba(214, 177, 10, 0.774)' }}>
                <small>PAYMENT SUCCESS</small>
              </p>
              <img src={Seperator} alt="Separator" id="seperator" width="100px" />
              <p id="main-2-head" style={{ color: 'rgba(214, 177, 10, 0.774)' }}><b>Thank You for Your Purchase!</b></p>
            </div>
          </div>
          <Card style={{ backgroundColor: 'rgba(33, 33, 33, 0.9)', color: "rgba(214, 177, 10, 0.774)", maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
            <CardContent>
              <Typography variant="h5" align="center" style={{ marginBottom: '20px', color: 'rgba(214, 177, 10, 0.774)' }}>
                Your order has been placed successfully.
              </Typography>
              <Typography variant="body1" align="center" style={{ marginBottom: '20px', color: 'rgba(214, 177, 10, 0.774)' }}>
                You will receive a confirmation email shortly.
              </Typography>
            </CardContent>
          </Card>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;