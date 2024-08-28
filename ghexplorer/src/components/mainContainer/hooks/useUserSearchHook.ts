import { useState } from "react";
import { searchUsers } from "../../../apiService/apiService";
import { errorFetchingUsers } from "../../../apiService/errors";

export const useUserSearch = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const usersData = await searchUsers(username);
      setUsers(usersData);
    } catch (error) {
      console.error(errorFetchingUsers, error);
    } finally {
      setLoading(false);
    }
  };

  return {
    username,
    setUsername,
    users,
    loading,
    handleSearch,
  };
};
