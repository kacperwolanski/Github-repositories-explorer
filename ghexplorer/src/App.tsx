import React from "react";
import MainContainer from "./components/mainContainer/MainContainer";
import { Box } from "@mui/material";

const wrapperStyles = {
  mt: "100px",
  display: "flex",
  justifyContent: "center",
  minHeight: "250px",
  padding: "50px",
};
const App = () => {
  return (
    <Box sx={wrapperStyles}>
      <MainContainer />
    </Box>
  );
};

export default App;
