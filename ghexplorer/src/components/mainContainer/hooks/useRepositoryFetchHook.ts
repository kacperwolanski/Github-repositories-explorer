import { useState } from "react";
import { fetchRepositories } from "../../../apiService/apiService";
import { errorFetchingRepositories } from "../../../apiService/errors";
import { Repository } from "../../../types";
import { dataExpiryTime } from "../../../assets/appConstants";
import {
  getCachedDataExpiryTime,
  getCachedReposData,
  setCachedReposExpiryTime,
  setReposCachedData,
} from "../../../assets/helpers/localStorageService";

export const useRepositoryFetch = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);

  const handleReposFetch = async (username: string) => {
    setLoading(true);
    try {
      const cachedData = getCachedReposData(username);
      const cacheExpiry = getCachedDataExpiryTime(username);

      const expiryTimePassed = new Date().getTime() > Number(cacheExpiry);

      if (cachedData && cacheExpiry && !expiryTimePassed) {
        setRepositories(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      const repos = await fetchRepositories(username);
      const expiryTime = new Date().getTime() + dataExpiryTime;

      setReposCachedData(username, repos);
      setCachedReposExpiryTime(username, expiryTime);
      setRepositories(repos);
    } catch (error) {
      console.error(errorFetchingRepositories, error);
    } finally {
      setLoading(false);
    }
  };

  return { repositories, loading, handleReposFetch };
};
