const express = require("express");
const cors = require("cors");
const { resolve } = require("path");
const dotenv = require("dotenv");
const stripeLib = require("stripe");

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

const app = express();
const stripe = stripeLib(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

// Middleware
app.use(cors());
app.use(express.static(process.env.STATIC_DIR));
app.use(express.json()); // Ensure JSON body parsing is enabled

// Serve the main page
app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

// Endpoint to get Stripe publishable key
app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

// Endpoint to create a payment intent
app.post("/create-payment-intent", async (req, res) => {
  try {
    console.log("Received request to create payment intent");

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: 1999, // Amount in cents
      automatic_payment_methods: { enabled: true },
    });

    console.log("Payment intent created successfully:", paymentIntent.id);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.error("Error creating payment intent:", e);
    return res.status(400).send({
      error: {
        message: e.message,
        type: e.type,
        code: e.code,
      },
    });
  }
});

// Start the server
app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);