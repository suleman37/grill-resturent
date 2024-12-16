import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Seperator from "../../images/separator.svg";
import "./menu.css";
import { baseDishes as dishes } from "../db.js";
import { useParams } from "react-router-dom";
const fontFamily = "'Roboto', sans-serif";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fff",
  borderRadius: "5px",
  boxShadow: "none",
  transition: "transform 0.3s, box-shadow 0.3s",
  margin: "auto",
  fontFamily: fontFamily,
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
  margin: "15px",
  padding: "15px",
  transition: "transform 0.3s",
  fontFamily: fontFamily,
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const SingleDish = () => {
  const { id } = useParams();
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) {
    return <div className="text-center text-light" style={{ fontFamily: fontFamily }}>Dish not found</div>;
  }

  const relatedDishes = dishes.filter(d => d.id !== dish.id).slice(0, 3);

  return (
    <Container maxWidth="lg" className="fourth-bg text-light menu-bg" id="single-dish" style={{ paddingTop: "150px", fontFamily: fontFamily }}>
      <div className="row">
        <div className="col text-center">
          <p id="main-head" style={{ fontFamily: fontFamily }}><small>ORDER YOUR FAVORITE DISH</small></p>
          <img src={Seperator} alt="" id="seperator" width="100px" />
          <p id="main-2-head" style={{ fontFamily: fontFamily }}>{dish.name}</p>
        </div>
      </div>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            alt={dish.name}
            image={dish.image}
            style={{ borderRadius: "10px", width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent sx={{ padding: "16px", textAlign: "start" }}>
              <Typography variant="h6" component="div" fontWeight="bold" style={{ fontFamily: fontFamily }}>
                {dish.name}
              </Typography>
              <Typography variant="body2" color="white" paragraph style={{ fontFamily: fontFamily }}>
                {dish.description}
              </Typography>
              <Typography variant="body2" color="white" paragraph style={{ fontFamily: fontFamily }}>
                {dish.longDescription}
              </Typography>
              <Typography variant="h6" component="div" fontWeight="bold" style={{ fontFamily: fontFamily }}>
                {dish.price}
              </Typography>
              <Button variant="contained" style={{ marginTop: "20px", background: "rgba(214, 177, 10, 0.774)", fontFamily: fontFamily }}>
                Order Now
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <div className="row mt-5">
        <div className="col text-center">
          <Typography variant="h4" component="div" fontWeight="bold" className="mb-4" style={{ color: "rgba(214, 177, 10, 0.774)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily: fontFamily }}>
            Related Products
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {relatedDishes.map((relatedDish) => (
              <Grid item xs={12} sm={6} md={4} key={relatedDish.name}>
                <StyledCard>
                  <CardMedia
                    component="img"
                    alt={relatedDish.name}
                    height="160"
                    image={relatedDish.image}
                    style={{ borderRadius: "1px 1px 0 0" }}
                  />
                  <CardContent sx={{ padding: "16px", textAlign: "center", backgroundColor: "#333" }}>
                    <Typography variant="h5" component="div" fontWeight="bold" style={{ color: "rgba(214, 177, 10, 0.774)", marginBottom: "8px" }}>
                      {relatedDish.name}
                    </Typography>
                    <Typography variant="body2" style={{ color: "#B0B0B0", fontStyle: "italic", marginBottom: "12px" }}>
                      {relatedDish.description}
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <Typography variant="h4" component="div" fontWeight="bold" className="mb-4" style={{ color: "rgba(214, 177, 10, 0.774)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily: fontFamily }}>
            Customer Reviews
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <ReviewCard>
                <CardContent>
                  <Typography variant="body1" color="white" style={{ fontStyle: "italic", fontSize: "1.2rem", fontFamily: fontFamily, marginBottom: "15px" }}>
                    "Delicious and well-prepared dish. Highly recommend!"
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "right", color: "#FFD700", fontFamily: fontFamily, fontWeight: "bold" }}>
                    - John Doe
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "right", color: "#FFD700", fontFamily: fontFamily }}>
                    ★★★★★
                  </Typography>
                </CardContent>
              </ReviewCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ReviewCard>
                <CardContent>
                  <Typography variant="body1" color="white" style={{ fontStyle: "italic", fontSize: "1.2rem", fontFamily: fontFamily, marginBottom: "15px" }}>
                    "A delightful experience, the flavors were amazing. Yummy!"
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "right", color: "#FFD700", fontFamily: fontFamily, fontWeight: "bold" }}>
                    - Jane Smith
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "right", color: "#FFD700", fontFamily: fontFamily }}>
                    ★★★★☆
                  </Typography>
                </CardContent>
              </ReviewCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <ReviewCard>
                <CardContent>
                  <Typography variant="body1" color="white" style={{ fontStyle: "italic", fontSize: "1.2rem", fontFamily: fontFamily, marginBottom: "15px" }}>
                    "A delightful experience, the flavors were absolutely amazing."
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "right", color: "#FFD700", fontFamily: fontFamily, fontWeight: "bold" }}>
                    - Alex Johnson
                  </Typography>
                  <Typography variant="body2" style={{ textAlign: "right", color: "#FFD700", fontFamily: fontFamily }}>
                    ★★★★☆
                  </Typography>
                </CardContent>
              </ReviewCard>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default SingleDish;