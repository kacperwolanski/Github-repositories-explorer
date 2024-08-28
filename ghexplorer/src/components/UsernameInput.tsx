import React from "react";
import TextField from "@mui/material/TextField";
import { theme } from "../theme/theme";

interface UsernameInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ value, onChange }) => {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={onChange}
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
