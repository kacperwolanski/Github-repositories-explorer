import { Box, CircularProgress } from "@mui/material";
import React from "react";
import UsernameInput from "../UsernameInput";
import SearchButton from "../SearchButton";
import { theme } from "../../theme/theme";
import { useUserSearch } from "./hooks/useUserSearchHook";
import UsersResultsList from "../searchResults/UsersResultsList";
import LackOfUsersInfo from "./LackOfUsersInfo";

const mainContainerStyle = {
  background: theme.palette.custom.background,
  padding: "20px",
  width: "100%",

  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
};

const MainContainer = () => {
  const { users, loading, handleSearch } = useUserSearch();

  return (
    <Box sx={mainContainerStyle}>
      <UsernameInput />
      <SearchButton onClick={handleSearch} />
      <Box mt="10px" textAlign="center">
        {loading && <CircularProgress />}
      </Box>
      <LackOfUsersInfo loading={loading} usersAmount={users.length} />
      {users.length > 0 && !loading && <UsersResultsList users={users} />}
    </Box>
  );
};

export default MainContainer;
