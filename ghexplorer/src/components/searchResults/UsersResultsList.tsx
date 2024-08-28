import { Box } from "@mui/material";
import React from "react";
import { User } from "../../types";
import SearchResult from "./SearchResult";
import ResultsInfo from "./ResultsInfo";

interface Props {
  users: User[];
}
const resultsContainerStyle = {
  mt: "30px",
  width: "100%",
};

const UsersResultsList = ({ users }: Props) => {
  return (
    <Box sx={resultsContainerStyle}>
      <ResultsInfo />
      {users.map((user: User) => (
        <SearchResult key={user.id} username={user.login} />
      ))}
    </Box>
  );
};

export default UsersResultsList;
