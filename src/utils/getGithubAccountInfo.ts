export const getGithubAccountInfo = (url: string) => {
  return {
    accountName: url.split("/")[3],
    accountRepository: url.split("/")[4],
  };
};
