import React, { useState } from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Seperator from "../../src/images/separator.svg";
import Grill from "../../src/images/confident-cafe-owner-writing-register-book.jpg";

const fontFamily = "'Roboto', sans-serif";

const StyledButton = styled('button')(() => ({
  backgroundColor: 'rgba(214, 177, 10, 0.774)', 
  color: '#fff',
  borderRadius: '8px',
  padding: '10px 20px',
  transition: 'background-color 0.3s, transform 0.3s',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  '&:disabled': {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
}));

const StyledCardElement = styled(CardElement)({
  marginBottom: '16px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '20px 12px',
  border: '1px solid #ced4da',
  '& .StripeElement': {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    color: '#32325d',
    '::placeholder': {
      color: '#aab7c4',
    },
  },
});

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '', // New input field for phone number
  });
  const [paymentId, setPaymentId] = useState(null); // State to store payment ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not loaded yet.
    }

    const cardElement = elements.getElement(CardElement);

    // Create payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: formData.name,
        email: formData.email,
        address: {
          line1: formData.address,
        },
      },
    });

    if (error) {
      console.error('[Error]', error);
      toast.error("Payment failed. Please try again.");
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentId(paymentMethod.id); // Store payment ID
      toast.success("Purchase completed successfully!");
      // Send paymentMethod.id to your server for further processing
    }
  };

  return (
    <Box sx={{ width: '100%', height: 'auto', fontFamily: fontFamily, backgroundColor: "#222", color: "#fff", padding: '100px', paddingTop: '100px' }}>
      <div className="text-center">
        <Typography variant="h4" component="div" fontWeight="bold" style={{ color: "rgba(214, 177, 10, 0.774)", marginBottom: "20px" }}>
          Checkout
        </Typography>
        <img src={Seperator} alt="separator" width="100px" />
      </div>
      <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ marginTop: "40px" }}>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src={Grill} alt="Grill" style={{ width: "100%", height: "100%", borderRadius: "8px", marginBottom: "20px" }} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1" style={{ marginBottom: "20px", color: "#fff" }}>
            Please fill out the form below to complete your purchase.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginBottom: '16px', backgroundColor: '#fff', borderRadius: '8px' }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: '16px', backgroundColor: '#fff', borderRadius: '8px' }}
            />
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{ marginBottom: '16px', backgroundColor: '#fff', borderRadius: '8px' }}
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ marginBottom: '16px', backgroundColor: '#fff', borderRadius: '8px' }}
            />
            <StyledCardElement id="card-element" />
            <StyledButton type="submit" disabled={!stripe}>Complete Purchase</StyledButton>
          </form>
          {paymentId && (
            <Typography variant="body2" style={{ marginTop: '20px', color: '#fff' }}>
              Payment ID: {paymentId}
            </Typography>
          )}
        </Grid>
      </Grid>
      <ToastContainer />
    </Box>
  );
};

export default Checkout;