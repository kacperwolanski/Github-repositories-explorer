import React from "react";
import MainContainer from "./components/mainContainer/MainContainer";
import { Box } from "@mui/material";

const wrapperStyles = {
  mr: "200px",
  mt: "100px",
  display: "flex",
  justifyContent: "center",
  minHeight: "250px",
  width: "100%",
};
const App = () => {
  return (
    <Box sx={wrapperStyles}>
      <MainContainer />
    </Box>
  );
};

export default App;
