import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Grid, Pagination, Box } from "@mui/material";
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
  height: "300px", // Increased height
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  },
  [theme.breakpoints.down('sm')]: {
    height: "250px",
  },
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
  "& .MuiPaginationItem-root": {
    color: "#fff",
    "&.Mui-selected": {
      backgroundColor: "rgba(214, 177, 10, 0.774)",
      color: "#000",
    },
  },
}));

const Menu = () => {
  const [page, setPage] = useState(1);
  const dishesPerPage = 12;
  const pageCount = Math.ceil(dishes.length / dishesPerPage);
  const navigate = useNavigate();

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleCardClick = (dishId) => {
    navigate(`/menu/${dishId}`);
  };

  return (
    <div className="container-fluid fourth-bg text-light menu-bg" id="menu" style={{ paddingTop: "150px", paddingLeft: "5%", paddingRight: "5%" }}>
      <div className="row">
        <div className="col text-center">
          <p id="main-head"><small>EXQUISITE CUISINE</small></p>
          <img src={Seperator} alt="" id="seperator" width="100px" />
          <p id="main-2-head">Our Full Menu</p>
        </div>
      </div>
      <Grid container spacing={2} justifyContent="center">
        {dishes.slice((page - 1) * dishesPerPage, page * dishesPerPage).map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={dish.name}>
            <StyledCard onClick={() => handleCardClick(dish.id)}>
              <CardMedia
                component="img"
                alt={dish.name}
                height="200" // Increased height
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
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <div className="col text-center mt-3" style={{ paddingBottom: "20px" }}>
        <p>During Winter Daily From <span>7:00AM</span> to <span>10:00PM</span></p>
        <Box display="flex" justifyContent="center">
          <StyledPagination count={pageCount} page={page} onChange={handlePageChange} color="primary" />
        </Box>
      </div>
    </div>
  );
};

export default Menu;