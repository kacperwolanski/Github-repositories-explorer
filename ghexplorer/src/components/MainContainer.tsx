import { Box } from "@mui/material";
import React from "react";
import UsernameInput from "./UsernameInput";
import SearchButton from "./SearchButton";
import { theme } from "../theme/theme";

const mainContainerStyle = {
  background: theme.palette.custom.background,
  padding: "20px",
  minWidth: "60%",
  minHeight: "60%",
};
const MainContainer = () => {
  return (
    <Box sx={mainContainerStyle}>
      <UsernameInput />
      <SearchButton />
    </Box>
  );
};

export default MainContainer;
