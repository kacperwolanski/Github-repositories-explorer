import React from "react";
import Button from "@mui/material/Button";
import { theme } from "../theme/theme";

const buttonStyle = {
  mt: 2,
  height: "50px",
  backgroundColor: theme.palette.primary.main,
  textTransform: "none",
};

const SearchButton = () => {
  return (
    <Button fullWidth variant="contained" color="primary" sx={buttonStyle}>
      Search
    </Button>
  );
};

export default SearchButton;
