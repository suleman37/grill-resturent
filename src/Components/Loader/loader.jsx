import React from "react";
import {Box, Typography } from "@mui/material";
import "./loader.css";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box className="loader-container">
      <Typography variant="h6" className="loader-text">
        <SyncLoader
          color="rgba(214, 177, 10, 0.774)"
          cssOverride={{}}
          margin={1}
          size={20}
          speedMultiplier={1}
        />
      </Typography>
    </Box>
  );
};

export default Loader;
