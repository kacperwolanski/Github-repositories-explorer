import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { theme } from "../../theme/theme";

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
  padding: 2,
  marginBottom: 1,
  borderRadius: 1,
  width: "90%",
  textAlign: "left",
};

const titleStyle = {
  fontSize: "20px",
  fontWeight: 600,
};
const UserRepository = ({
  title,
  description,
  stars,
}: {
  title: string;
  description: string;
  stars: number;
}) => {
  return (
    <Box sx={containerStyle}>
      <Box>
        <Typography sx={titleStyle}>{title}</Typography>
        <Typography maxWidth="500px" variant="body2">
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          color: theme.palette.custom.fontDark,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, marginRight: 1 }}>
          {stars}
        </Typography>

        <StarIcon style={{ color: theme.palette.custom.fontDark }} />
      </Box>
    </Box>
  );
};

export default UserRepository;
