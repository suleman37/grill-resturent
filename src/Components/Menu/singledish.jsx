import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Seperator from "../../images/separator.svg";
import "./menu.css";
import { baseDishes as dishes } from "../db.js";
import { useParams, useNavigate } from "react-router-dom";
import Jane from "../../images/jane.jpeg";
import Alex from "../../images/Alex-Johnson.png";
import John from "../../images/John.jpeg";

const fontFamily = "'Roboto', sans-serif";

const StyledCard = styled(Card)({
  backgroundColor: "transparent",
  color: "#fff",
  borderRadius: "5px",
  boxShadow: "none",
  transition: "transform 0.3s, box-shadow 0.3s",
  margin: "auto",
  fontFamily,
});

const ReviewCard = styled(Card)({
  backgroundColor: "#333",
  color: "#fff",
  borderRadius: "10px",
  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.3)",
  margin: "15px",
  padding: "15px",
  transition: "transform 0.3s",
  fontFamily,
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const SingleDish = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find(d => d.id === parseInt(id));

  if (!dish) {
    return <div className="text-center text-light" style={{ fontFamily }}>Dish not found</div>;
  }

  const relatedDishes = dishes.filter(d => d.id !== dish.id).slice(0, 3);

  const handleOrderClick = () => navigate(`/checkout/${id}`);

  return (
    <div className="container-fluid fourth-bg text-light menu-bg mt-150" id="single-dish" style={{ paddingTop: "150px", padding: "150px 100px", fontFamily }}>
      <div className="row">
        <div className="col text-center">
          <p id="main-head" style={{ fontFamily }}><small>ORDER YOUR FAVORITE DISH</small></p>
          <img src={Seperator} alt="Separator" id="seperator" width="100px" />
          <Typography variant="h4" component="div" fontWeight="bold" style={{ fontFamily }}>
            {dish.name}
          </Typography>
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
              <Typography variant="h6" component="div" fontWeight="bold" style={{ fontFamily }}>
                {dish.name}
              </Typography>
              <Typography variant="body2" color="white" paragraph style={{ fontFamily }}>
                {dish.description}
              </Typography>
              <Typography variant="body2" color="white" paragraph style={{ fontFamily }}>
                {dish.longDescription}
              </Typography>
              <Typography variant="h6" component="div" fontWeight="bold" style={{ fontFamily }}>
                {dish.price}
              </Typography>
              <Button 
                variant="contained" 
                style={{ marginTop: "20px", background: "rgba(214, 177, 10, 0.774)", fontFamily }}
                onClick={handleOrderClick}
              >
                Order Now
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <div className="row mt-5">
        <div className="col text-center">
          <Typography variant="h4" component="div" fontWeight="bold" className="mb-4" style={{ color: "rgba(214, 177, 10, 0.774)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily }}>
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
          <Typography variant="h4" component="div" fontWeight="bold" className="mb-4" style={{ color: "rgba(214, 177, 10, 0.774)", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", fontFamily }}>
            Customer Reviews
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {[{ name: "John Doe", image: John, review: "Delicious and well-prepared dish. Highly recommend!", rating: "★★★★★" },
              { name: "Jane Smith", image: Jane, review: "A delightful experience, the flavors were amazing. Yummy!", rating: "★★★★☆" },
              { name: "Alex Johnson", image: Alex, review: "A delightful experience, the flavors were absolutely amazing.", rating: "★★★★☆" }]
              .map(({ name, image, review, rating }) => (
                <Grid item xs={12} md={4} key={name}>
                  <ReviewCard style={{ background: "linear-gradient(135deg, #333, #444)", padding: "20px", borderRadius: "15px", boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)", width: "100%", transition: "transform 0.3s" }}>
                    <CardMedia
                      component="img"
                      alt={name}
                      height="100"
                      image={image}
                      style={{ borderRadius: "50%", width: "100px", height: "100px", margin: "0 auto 15px", border: "2px solid rgba(214, 177, 10, 0.774)" }}
                    />
                    <Typography variant="body1" color="white" style={{ fontStyle: "italic", fontSize: "1.2rem", fontFamily, marginBottom: "15px" }}>
                      "{review}"
                    </Typography>
                    <Typography variant="body2" style={{ textAlign: "right", color: "rgba(214, 177, 10, 0.774)", fontFamily, marginBottom: "5px" }}>
                      - {name}
                    </Typography>
                    <Typography variant="body2" style={{ textAlign: "right", color: "rgba(214, 177, 10, 0.774)", fontFamily }}>
                      {rating}
                    </Typography>
                  </ReviewCard>
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default SingleDish;