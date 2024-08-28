import React from "react";
import UserRepository from "./UserRepository";
import { Box, Typography } from "@mui/material";
import { Repository } from "../../types";

interface Props {
  repositories: Repository[];
  username: string;
}
const reposContainerStyle = {
  mt: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
};
const RepositoriesList = ({ repositories, username }: Props) => {
  const reposExist = repositories.length > 0;
  return (
    <>
      {reposExist ? (
        <Box sx={reposContainerStyle}>
          {repositories.map((repo: Repository) => (
            <UserRepository
              key={repo.id}
              title={repo.name}
              description={repo.description || "No description available"}
              stars={repo.stargazers_count}
            />
          ))}
        </Box>
      ) : (
        <Typography mt="2" textAlign="center">
          Lack of repositories for user: {username}
        </Typography>
      )}
    </>
  );
};

export default RepositoriesList;
