import axios from "axios";
import {
  acceptKeyword,
  baseUrl,
  maxPerPageAmount,
  searchUsersKeyword,
} from "./apiConstants";

const githubApi = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: acceptKeyword,
  },
});

export const searchUsers = async (username: string) => {
  const response = await githubApi.get(searchUsersKeyword, {
    params: {
      q: username,
      per_page: maxPerPageAmount,
    },
  });
  return response.data.items;
};

export const fetchRepositories = async (username: string) => {
  const response = await githubApi.get(`/users/${username}/repos`);
  return response.data;
};
