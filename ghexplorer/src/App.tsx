import React from "react";
import MainContainer from "./components/MainContainer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <MainContainer />
    </Box>
  );
};

export default App;
