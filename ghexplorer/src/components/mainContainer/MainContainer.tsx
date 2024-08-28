import { Box, CircularProgress } from "@mui/material";
import React from "react";
import UsernameInput from "../UsernameInput";
import SearchButton from "../SearchButton";
import { theme } from "../../theme/theme";
import { useUserSearch } from "./hooks/useUserSearchHook";
import SearchResult from "../searchResults/SearchResult";
import { User } from "../../types";

const mainContainerStyle = {
  background: theme.palette.custom.background,
  padding: "20px",
  minWidth: "60%",
  display: "flex",
  flexDirection: "column",
};
const resultsContainerStyle = {
  mt: "30px",
  width: "100%",
};

const MainContainer = () => {
  const { users, loading, handleSearch } = useUserSearch();

  return (
    <Box sx={mainContainerStyle}>
      <UsernameInput />
      <SearchButton onClick={handleSearch} />
      {loading && <CircularProgress />}
      {users.length > 0 && !loading && (
        <Box sx={resultsContainerStyle}>
          {users.map((user: User) => (
            <SearchResult key={user.id} username={user.login} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MainContainer;
