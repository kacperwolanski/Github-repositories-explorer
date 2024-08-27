import React from "react";
import TextField from "@mui/material/TextField";
import { theme } from "../theme/theme";

const UsernameInput = () => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Enter username"
      InputProps={{
        sx: {
          backgroundColor: theme.palette.custom.inputGrey,
        },
      }}
    />
  );
};

export default UsernameInput;
