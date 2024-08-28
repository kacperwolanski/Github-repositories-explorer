import { useState } from "react";
import { searchUsers } from "../../../apiService/apiService";
import { errorFetchingUsers } from "../../../apiService/errors";
import { useAppStore } from "../../../store/appStore";

export const useUserSearch = () => {
  const { userNameInput } = useAppStore();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const usersData = await searchUsers(userNameInput);
      setUsers(usersData);
    } catch (error) {
      console.error(errorFetchingUsers, error);
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    loading,
    handleSearch,
  };
};
