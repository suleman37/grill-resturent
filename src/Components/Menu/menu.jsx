import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Seperator from "../../images/separator.svg";
import "./menu.css";
import { baseDishes as dishes } from "../db.js";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#424242",
  color: "#fff",
  borderRadius: "5px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  height: "250px",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
  },
}));

const Menu = () => {
  return (
    <div className="container-fluid fourth-bg text-light menu-bg" id="menu" style={{ paddingTop: "80px" }}>
      <div className="row">
        <div className="col text-center">
          <p id="main-head"><small>SPECIAL SELECTION</small></p>
          <img src={Seperator} alt="" id="seperator" width="100px" />
          <p id="main-2-head">Delicious Menu</p>
        </div>
      </div>
      <Grid container spacing={4} justifyContent="center">
        {dishes.slice(0, 6).map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={dish.name}>
            <StyledCard>
              <CardMedia
                component="img"
                alt={dish.name}
                height="160"
                image={dish.image}
                style={{ borderRadius: "1px 1px 0 0" }}
              />
              <CardContent sx={{ padding: "16px", textAlign: "center", backgroundColor: "#333" }}>
                <Typography variant="h5" component="div" fontWeight="bold" style={{ color: "rgba(214, 177, 10, 0.774)", marginBottom: "8px" }}>
                  {dish.name}
                </Typography>
                <Typography variant="body2" style={{ color: "#B0B0B0", fontStyle: "italic", marginBottom: "12px" }}>
                  {dish.description}
                </Typography>
                <Typography variant="h6" component="div" fontWeight="bold" style={{ color: "rgba(214, 177, 10, 0.774)", marginBottom: "8px" }}>
                  {dish.price}
                </Typography>
                <button style={{
                  background: "rgba(214, 177, 10, 0.774)",
                  border: "none",
                  color: "black",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => e.currentTarget.style.background = "#FFD700"}
                onMouseOut={(e) => e.currentTarget.style.background = "rgba(214, 177, 10, 0.774)"}>
                  Order Now
                </button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <div className="col text-center mt-3" style={{ paddingBottom: "20px" }}>
        <p>During Winter Daily From <span>7:00AM</span> to <span>10:00PM</span></p>
        <button type="button" id="btn2" onClick={() => window.location.href = "/menu"}>
          <small>View All Menu</small>
        </button>
      </div>
    </div>
  );
};

export default Menu;