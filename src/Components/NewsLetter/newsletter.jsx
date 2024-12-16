import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./newsletter.css";
import Seperator from "../../images/separator.svg";
import {
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/system';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styled components for input and button
const StyledTextField = styled(TextField)({
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ddd',
    },
    '&:hover fieldset': {
      borderColor: '#888',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(214, 177, 10, 0.774)',
    },
  },
  marginBottom: '16px',
});

const StyledButton = styled(Button)(() => ({
  backgroundColor: 'rgba(214, 177, 10, 0.774)', 
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(184, 157, 10, 0.774)', 
    transform: 'scale(1.05)',
  },
  width: '100%',
}));

const SubscribeForm = ({ onSuccess }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email });
    onSuccess();
    setEmail(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledTextField
        fullWidth
        label="Subscribe with your Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StyledButton variant="contained" type="submit">
        Subscribe
      </StyledButton>
    </form>
  );
};

const Contact = () => {
  const handleSuccess = () => {
    toast.success("Our team will contact you within 24 hours");
  };
  
  return (
    <Container fluid className="contact-bg">
      <Row>
        <Col>
          <div className="row">
            <div className="col text-center">
              <p id="main-head">
                <small>CONTACT US</small>
              </p>
              <img src={Seperator} alt="" id="seperator" width="100px" />
              <p id="main-2-head">Subscribe to our Newsletter</p>
            </div>
          </div>
          <Card style={{ backgroundColor: 'rgba(255, 255, 255, 0.247)', color: "white", maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
            <CardContent>
              <Typography variant="h5" align="center" style={{ marginBottom: '20px' }}>
                Stay Updated!
              </Typography>
              <SubscribeForm onSuccess={handleSuccess} />
            </CardContent>
          </Card>
          <ToastContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;