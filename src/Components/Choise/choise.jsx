import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import FreshIngredientsImg from "../../images/closeup-shot-barbequed-meat-glass-wine-near-fireplace.jpg";
import CozyAtmosphereImg from "../../images/breakfast-wooden-table-with-natural-view.jpg";
import Chefs from "../../images/portrait-chefs-team-acting-funny-with-knives-restaurant-kitchen-making-joke-about-professional-cuisine-service-cheerful-man-woman-working-gourmet-meal-dish-with-culinary-recipe.jpg";
import Seperator from "../../images/separator.svg";

const reasons = [
  {
    title: 'Fresh Ingredients',
    description: 'We use only the freshest ingredients sourced from local farmers.',
    img: FreshIngredientsImg,
  },
  {
    title: 'Cozy Atmosphere',
    description: 'Enjoy a warm and welcoming ambiance, perfect for family and friends.',
    img: CozyAtmosphereImg,
  },
  {
    title: 'Our Skilled Chefs',
    description: 'Our chefs are experts in their craft, dedicated to making every meal memorable.',
    img: Chefs,
  },
];

const WhyChooseUs = () => (
  <Box sx={{ padding: 6, backgroundColor: '#333', color: '#fff' }}>
    <div className="row" id='whychooseus'>
      <div className="col text-center">
        <p id="main-head"><small>WHY CHOOSE US</small></p>
        <img src={Seperator} alt="Separator" id="seperator" width="100px" />
        <p id="main-2-head">OUR BENEFITS</p>
      </div>
    </div>
    <Grid container spacing={4} justifyContent="center">
      {reasons.map((reason, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card 
            sx={{ 
              backgroundColor: '#444',
              color: '#fff',
              transition: '0.3s', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              '&:hover': { 
                transform: 'scale(1.05)', 
                boxShadow: 10 
              } 
            }}
          >
            <img 
              src={reason.img} 
              alt={reason.title} 
              style={{ 
                width: '100%', 
                height: '200px', 
                objectFit: 'cover' 
              }} 
            />
            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
              <Typography variant="h6">{reason.title}</Typography>
              <Typography variant="body2">{reason.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default WhyChooseUs;