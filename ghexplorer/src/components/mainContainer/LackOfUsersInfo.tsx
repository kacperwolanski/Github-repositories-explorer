import { Typography } from "@mui/material";
import React from "react";
import { useAppStore } from "../../store/appStore";

interface Props {
  loading: boolean;
  usersAmount: number;
}
const LackOfUsersInfo = ({ loading, usersAmount }: Props) => {
  const { lastSearchedValue, isAbleToSearch } = useAppStore();

  const lackOfUserResults = !isAbleToSearch && !loading && usersAmount === 0;
  return (
    <>
      {lackOfUserResults && (
        <Typography textAlign="center" mt="20px">
          Lack of users for "{lastSearchedValue}"
        </Typography>
      )}
    </>
  );
};

export default LackOfUsersInfo;
