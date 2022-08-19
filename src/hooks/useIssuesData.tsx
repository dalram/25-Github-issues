import { useState } from "react";
import { useIssuesContext } from "contexts/IssuesContext";

import { getGithubAccountInfo } from "../utils/getGithubAccountInfo";

export const useIssuesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIssuesData, issuesData } = useIssuesContext();
  const fetchIssues = async (url: string) => {
    setIsLoading(true);
    const accountName = getGithubAccountInfo(url).accountName;
    const repositoryName = getGithubAccountInfo(url).accountRepository;
    try {
      const response = await fetch(
        `https://api.github.com/repos/${accountName}/${repositoryName}/issues`
      );
      const issues = await response.json();
      setIssuesData(issues);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { fetchIssues, issuesData, isLoading };
};
