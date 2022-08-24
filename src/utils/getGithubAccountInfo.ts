export const getGithubAccountInfo = (url: string) => {
  return {
    accountName:
      url.split("/")[2] === "github.com" ? url.split("/")[3] : undefined,
    accountRepository:
      url.split("/")[2] === "github.com" ? url.split("/")[4] : undefined,
  };
};
