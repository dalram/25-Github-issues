import { useCallback, useState } from "react";
import { useIssuesContext } from "contexts/IssuesContext";
import { getGithubAccountInfo } from "utils/getGithubAccountInfo";

export const useIssuesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUrlProvided, setIsUrlProvided] = useState(false);
  const { setIssuesData, issuesData } = useIssuesContext();
  const fetchIssues = useCallback(async (url: string) => {
    setIsLoading(true);

    const { accountName, accountRepository } = getGithubAccountInfo(url);

    try {
      const response = await fetch(
        `https://api.github.com/repos/${accountName}/${accountRepository}/issues`
      );
      const issues = await response.json();
      if (issues.message === "Not Found") {
        setIssuesData([]);
      } else {
        setIssuesData(issues.slice(0, 250));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsUrlProvided(true);
    }
  }, []);

  return { fetchIssues, issuesData, isLoading, isUrlProvided };
};
