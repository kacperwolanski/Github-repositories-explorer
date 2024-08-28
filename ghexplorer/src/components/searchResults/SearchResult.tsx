import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { theme } from "../../theme/theme";
import { Repository } from "../../types";
import UserRepository from "./UserRepository";
import { useRepositoryFetch } from "../mainContainer/hooks/useRepositoryFetchHook";

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
};

const SearchResult = ({ username }: SearchResultProps) => {
  const [expanded, setExpanded] = useState(false);
  const { repositories, loading, handleReposFetch } = useRepositoryFetch();

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  const handleUserSelect = () => {
    handleReposFetch(username);
    console.log(repositories, expanded);
  };

  return (
    <>
      <Box onClick={handleUserSelect} sx={defaultView}>
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

      {expanded && repositories.length && (
        <Box mt="2">
          {repositories.map((repo: Repository) => (
            <UserRepository
              key={repo.id}
              title={repo.name}
              description={repo.description || "No description available"}
              stars={repo.stargazers_count}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default SearchResult;
