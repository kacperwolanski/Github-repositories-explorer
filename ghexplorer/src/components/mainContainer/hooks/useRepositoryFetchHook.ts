import { useState } from "react";
import { fetchRepositories } from "../../../apiService/apiService";
import { errorFetchingRepositories } from "../../../apiService/errors";

export const useRepositoryFetch = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleReposFetch = async (username: string) => {
    setLoading(true);
    try {
      const repos = await fetchRepositories(username);
      setSelectedUser(username);
      setRepositories(repos);
    } catch (error) {
      console.error(errorFetchingRepositories, error);
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedUser,
    repositories,
    loading,
    handleReposFetch,
  };
};
