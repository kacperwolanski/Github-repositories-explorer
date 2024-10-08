import React from "react";
import TextField from "@mui/material/TextField";
import { theme } from "../theme/theme";
import { useAppStore } from "../store/appStore";

const UsernameInput = () => {
  const {
    lastSearchedValue,
    setIsAbleToSearch,
    userNameInput,
    setUserNameInput,
  } = useAppStore();

  const handleInputChange = (newInput: string) => {
    setIsAbleToSearch(newInput !== lastSearchedValue);
    setUserNameInput(newInput);
  };

  return (
    <TextField
      fullWidth
      value={userNameInput}
      onChange={(e) => {
        handleInputChange(e.target.value);
      }}
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
