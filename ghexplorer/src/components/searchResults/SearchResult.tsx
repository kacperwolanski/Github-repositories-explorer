import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { theme } from "../../theme/theme";

interface Props {
  username: string;
}

const containerStyle = {
  borderRadius: 1,
  padding: 2,
  width: "100%",
};
const defaultView = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.custom.inputGrey,
  padding: 2,
  borderRadius: 1,
};

const SearchResult = ({ username }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={defaultView}>
        <Typography color={theme.palette.custom.fontDark} variant="body1">
          {username}
        </Typography>
        <IconButton
          style={{
            color: theme.palette.custom.fontDark,
          }}
          onClick={handleToggle}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>

      {expanded && <Box sx={{ marginTop: 2 }}></Box>}
    </Box>
  );
};

export default SearchResult;
