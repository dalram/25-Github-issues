import { useState } from "react";
import { useIssuesContext } from "contexts/IssuesContext";
import { getGithubAccountInfo } from "utils/getGithubAccountInfo";

import { DataItem } from "../types";

export const useIssuesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isUrlProvided, setIsUrlProvided] = useState(false);
  const { setIssuesData, issuesData } = useIssuesContext();
  const fetchIssues = async (url: string) => {
    setIsLoading(true);
    const { accountName, accountRepository } = getGithubAccountInfo(url);

    try {
      const response = await fetch(
        `https://api.github.com/repos/${accountName}/${accountRepository}/issues`
      );
      const issues = await response.json();
      issues.message === "Not Found"
        ? setIssuesData([])
        : setIssuesData(
            issues.slice(0, 250).map((issue: DataItem, i: number) => ({
              ...issue,
              show: true,
              row: i,
            }))
          );
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsUrlProvided(true);
    }
  };
  return { fetchIssues, issuesData, isLoading, isUrlProvided };
};
