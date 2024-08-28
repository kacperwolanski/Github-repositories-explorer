import React from "react";
import MainContainer from "./components/mainContainer/MainContainer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box
      mr="200px"
      mt="100px"
      display="flex"
      justifyContent="center"
      minHeight="250px"
      width="100%"
    >
      <MainContainer />
    </Box>
  );
};

export default App;
