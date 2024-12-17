import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PaymentElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Seperator from "../../src/images/separator.svg";
import Grill from "../../src/images/confident-cafe-owner-writing-register-book.jpg";

const stripePromise = loadStripe("pk_test_51QWcQnIo1YrH9OGQls99RmFFyGLJyhjoaIpXbhw8GWwyYDhkJsB30wAy0dYVSLp3xZMecFMYjrUbgl18eFHsbMyJ00PuvmbW4C");

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

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const paymentElement = elements.getElement(PaymentElement);
    if (!paymentElement) {
      setMessage("Payment Element not found.");
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error) {
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <StyledButton type="submit" disabled={isProcessing || !stripe || !elements}>
        <span id="button-text">
          {isProcessing ? "Processing..." : "Pay now"}
        </span>
      </StyledButton>
      {message && (
        <Typography variant="body2" style={{ marginTop: '20px', color: '#fff' }}>
          {message}
        </Typography>
      )}
    </form>
  );
};

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch the client secret from the server
    fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data.clientSecret) {
          throw new Error("Client secret not found in response");
        }
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, []);

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
          {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
          )}
          <ToastContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
