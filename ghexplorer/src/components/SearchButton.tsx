import React from "react";
import Button from "@mui/material/Button";
import { theme } from "../theme/theme";
import { useAppStore } from "../store/appStore";
interface SearchButtonProps {
  onClick: () => void;
}
const buttonStyle = {
  mt: 2,
  height: "50px",
  backgroundColor: theme.palette.primary.main,
  textTransform: "none",
};

const SearchButton: React.FC<SearchButtonProps> = ({ onClick }) => {
  const { isAbleToSearch, setIsAbleToSearch } = useAppStore();
  const { userNameInput } = useAppStore();
  const handleButtonClick = () => {
    onClick();
    setIsAbleToSearch(false);
  };
  const buttonIsDisabled = !isAbleToSearch || !userNameInput;
  return (
    <Button
      onClick={handleButtonClick}
      fullWidth
      disabled={buttonIsDisabled}
      variant="contained"
      color="primary"
      sx={buttonStyle}
    >
      Search
    </Button>
  );
};

export default SearchButton;
