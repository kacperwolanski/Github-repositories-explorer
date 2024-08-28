import { Repository } from "../../types";

export const getCachedReposData = (username: string) => {
  return localStorage.getItem(`repos_${username}`);
};

export const getCachedDataExpiryTime = (username: string) => {
  return localStorage.getItem(`repos_${username}_expiry`);
};

export const setReposCachedData = (username: string, repos: Repository[]) => {
  localStorage.setItem(`repos_${username}`, JSON.stringify(repos));
};

export const setCachedReposExpiryTime = (
  username: string,
  expiryTime: number
) => {
  localStorage.setItem(`repos_${username}_expiry`, String(expiryTime));
};
