import { Typography } from "@mui/material";
import React from "react";
import { theme } from "../../theme/theme";
import { useAppStore } from "../../store/appStore";

const resultsInfoStyles = {
  color: theme.palette.custom.fontGrey,
};
const ResultsInfo = () => {
  const { lastSearchedValue } = useAppStore();

  return (
    <Typography sx={resultsInfoStyles}>
      Showing users for "{lastSearchedValue}"
    </Typography>
  );
};

export default ResultsInfo;
