import { useState } from "react";
import { useIssuesContext } from "contexts/IssuesContext";

export const useIssuesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIssuesData, issuesData } = useIssuesContext();
  const fetchIssues = async (url: string) => {
    setIsLoading(true);
    const githubAccountName = url.split("/")[3];
    const githubRepositoryName = url.split("/")[4];
    try {
      const response = await fetch(
        `https://api.github.com/repos/${githubAccountName}/${githubRepositoryName}/issues`
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
