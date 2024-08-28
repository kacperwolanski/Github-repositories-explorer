import React, { useState } from "react";
import { Box, CircularProgress, Typography, Collapse } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { theme } from "../../theme/theme";
import { useRepositoryFetch } from "../mainContainer/hooks/useRepositoryFetchHook";
import RepositoriesList from "./RepositoriesList";

interface SearchResultProps {
  username: string;
}

const defaultView = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.custom.inputGrey,
  padding: 2,
  borderRadius: 1,
  mt: 2,
};

const SearchResult = ({ username }: SearchResultProps) => {
  const [expanded, setExpanded] = useState(false);
  const { repositories, loading, handleReposFetch } = useRepositoryFetch();

  const handleUserSelect = () => {
    setExpanded(!expanded);
    !expanded && handleReposFetch(username);
  };

  return (
    <>
      <Box onClick={handleUserSelect} sx={defaultView}>
        <Typography color={theme.palette.custom.fontDark} variant="body1">
          {username}
        </Typography>
        <Box
          sx={{
            color: theme.palette.custom.fontDark,
          }}
        >
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      </Box>
      <Collapse in={expanded}>
        <Box mt="10px" textAlign="center">
          {loading ? (
            <CircularProgress />
          ) : (
            <RepositoriesList repositories={repositories} username={username} />
          )}
        </Box>
      </Collapse>
    </>
  );
};

export default SearchResult;
