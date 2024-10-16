import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import menu_1 from "../../images/front-view-greek-salad-lettuce-with-black-olives.jpg";
import menu_2 from "../../images/pumpkin-soup-rustic-wooden-bowl-generated-by-ai.jpg";
import menu_3 from "../../images/wooden-tray-with-olives-grapes-wine-glasses.jpg";
import menu_4 from "../../images/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg";
import menu_5 from "../../images/grilled-salmon-fillet-with-asparagus-broccoli-generated-by-ai.jpg";
import menu_6 from "../../images/fresh-slice-homemade-chocolate-cake-plate-generated-by-artificial-intelligence.jpg";
import Seperator from "../../images/separator.svg";
import "./menu.css";

const dishes = [
  { name: "Greek Salad", price: "$25.50", description: "A fresh and healthy Greek salad.", image: menu_1 },
  { name: "Butternut Pumpkin", price: "$10.50", description: "Creamy butternut pumpkin dish.", image: menu_2 },
  { name: "Olivas Rellenas", price: "$15.50", description: "Stuffed olives with various fillings.", image: menu_3 },
  { name: "Pasta Primavera", price: "$50.50", description: "Colorful pasta with seasonal vegetables.", image: menu_4 },
  { name: "Grilled Salmon", price: "$65.50", description: "Delicious grilled salmon with herbs.", image: menu_5 },
  { name: "Chocolate Lava Cake", price: "$45.50", description: "Decadent dessert with a molten center.", image: menu_6 },
  // Add more dishes here...
];

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
  const [change, setChange] = useState(6);

  const loadMore = () => {
    if (change < dishes.length) {
      setChange((prev) => Math.min(prev + 3, dishes.length)); // Load 3 more dishes
    }
  };

  return (
    <div className="container-fluid fourth-bg text-light menu-bg" id="menu">
      <div className="row">
        <div className="col text-center">
          <p id="main-head"><small>SPECIAL SELECTION</small></p>
          <img src={Seperator} alt="" id="seperator" width="100px" />
          <p id="main-2-head">Delicious Menu</p>
        </div>
      </div>
      <Grid container spacing={4} justifyContent="center">
        {dishes.slice(0, change).map((dish, index) => (
          <Grid item xs={12} sm={6} md={4} key={dish.name}> {/* Use dish name as key */}
            <StyledCard>
              <CardMedia
                component="img"
                alt={dish.name}
                height="160"
                image={dish.image}
                style={{ borderRadius: "1px 1px 0 0" }}
              />
              <CardContent sx={{ padding: "8px" }}>
                <Typography variant="h6" component="div" fontWeight="bold">
                  {dish.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dish.description}
                </Typography>
                <Typography variant="h6" component="div" fontWeight="bold">
                  {dish.price}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <div className="col text-center mt-3" style={{ paddingBottom: "20px" }}>
        <p>During Winter Daily From <span>7:00AM</span> to <span>10:00PM</span></p>
        <button type="button" id="btn2" onClick={loadMore}>
          <small>View All Menu</small>
        </button>
      </div>
    </div>
  );
};

export default Menu;
