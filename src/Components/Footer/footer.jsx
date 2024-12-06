import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import playstore from "../../images/play-store.png";
import logo from "../../images/logo.svg";
import appstore from "../../images/app-store.png";

const FooterContainer = styled(Box)({
  backgroundColor: "#1a1a1a", // Dark background
  color: "#ffffff",
  padding: "60px 20px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
});

const AppIcon = styled("img")({
  margin: "10px",
  width: "160px",
  transition: "transform 0.3s, opacity 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
    opacity: 0.9,
  },
});

const PurposeText = styled(Typography)({
  color: "#cccccc",
  margin: "15px 0",
  fontStyle: "italic",
  fontSize: "1.1rem",
});

const SocialButton = styled(Button)({
  color: "#ffffff",
  border: "1px solid #ffffff",
  margin: "5px",
  padding: "10px 20px",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#ffcc00",
    color: "#1a1a1a",
    transform: "translateY(-2px)",
  },
});

const FooterTitle = styled(Typography)({
  fontWeight: "bold",
  color: "#ffcc00",
  marginBottom: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={4}>
          <FooterTitle variant="h6">Download Our App</FooterTitle>
          <Box display="flex" justifyContent="center">
            <AppIcon src={playstore} alt="Play Store" />
            <AppIcon src={appstore} alt="App Store" />
          </Box>
          <Typography variant="body2" color="#cccccc">
            Available on both iOS and Android. Join the community!
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "120px", marginBottom: "15px" }}
          />
          <PurposeText variant="body2">
            Our purpose is to make the pleasure and benefits of sports
            accessible to everyone.
          </PurposeText>
        </Grid>
        <Grid item xs={12} md={4}>
          <FooterTitle variant="h6">Follow Us On</FooterTitle>
          <Box>
            <SocialButton variant="outlined">Facebook</SocialButton>
            <SocialButton variant="outlined">Twitter</SocialButton>
            <SocialButton variant="outlined">Instagram</SocialButton>
            <SocialButton variant="outlined">TikTok</SocialButton>
          </Box>
          <Typography variant="body2" color="#cccccc">
            Stay connected for the latest updates and promotions!
          </Typography>
        </Grid>
      </Grid>
      <Box
        component="footer"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#111111",
          padding: "10px 0",
        }}
      >
        <Typography variant="body2" color="#cccccc">
            &copy; {new Date().getFullYear()} Muhammad Suleman Shakeel. All Rights
            Reserved.
          </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;