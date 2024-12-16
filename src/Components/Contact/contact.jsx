import React from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Seperator from "../../images/separator.svg";
import Grill from "../../images/Weber-grill-exterior.jpg";

const fontFamily = "'Roboto', sans-serif"; // Define a common font family

const StyledTextField = styled(TextField)({
  backgroundColor: '#333',
  borderRadius: '8px',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#555',
    },
    '&:hover fieldset': {
      borderColor: '#777',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(214, 177, 10, 0.774)',
    },
  },
  marginBottom: '16px',
  color: '#fff',
  '& .MuiInputBase-input': {
    color: '#fff',
  },
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

const ContactUs = () => {
  return (
    <Box sx={{ width: '100%', height: 'auto', fontFamily: fontFamily, backgroundColor: "#222", color: "#fff", padding: '100px', paddingTop: '100px' }}>
      <div className="text-center">
        <Typography variant="h4" component="div" fontWeight="bold" style={{ color: "rgba(214, 177, 10, 0.774)", marginBottom: "20px" }}>
          Get in Touch
        </Typography>
        <img src={Seperator} alt="separator" width="100px" />
      </div>
      <Grid container spacing={4} justifyContent="center" alignItems="center" style={{ marginTop: "40px" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" style={{ marginBottom: "20px", color: "#fff" }}>
            We are here to assist you! Please fill out the form below, and we will respond promptly.
          </Typography>
          <form noValidate autoComplete="off">
            <StyledTextField fullWidth label="Name" variant="outlined" />
            <StyledTextField fullWidth label="Email" variant="outlined" />
            <StyledTextField fullWidth label="Message" variant="outlined" multiline rows={4} />
            <StyledButton type="submit">Submit</StyledButton>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Grill} alt="Grill" style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ marginBottom: "20px", color: "#fff" }}>
            Visit Us
          </Typography>
          <div style={{ border: "2px solid rgba(214, 177, 10, 0.774)", borderRadius: "8px", overflow: "hidden" }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112345678!2d-122.419415684681!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e0a0b1%3A0x4c0b0c0b0c0b0c0b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;