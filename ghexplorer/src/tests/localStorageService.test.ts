import {
  getCachedReposData,
  getCachedDataExpiryTime,
  setReposCachedData,
  setCachedReposExpiryTime,
} from "../assets/helpers/localStorageService";

describe("LocalStorageService", () => {
  //given
  const username = "testUser";
  const repos = [
    { id: 1, name: "repo1", description: "desc1", stargazers_count: 10 },
  ];
  const expiryTime = new Date().getTime() + 100000;

  beforeEach(() => {
    localStorage.clear();
  });

  it("should cache repositories data", () => {
    //when
    setReposCachedData(username, repos);
    const cachedData = getCachedReposData(username);
    //then
    expect(cachedData).toBe(JSON.stringify(repos));
  });

  it("should cache expiry time", () => {
    //when
    setCachedReposExpiryTime(username, expiryTime);
    const cachedExpiryTime = getCachedDataExpiryTime(username);
    //then
    expect(cachedExpiryTime).toBe(String(expiryTime));
  });
});
