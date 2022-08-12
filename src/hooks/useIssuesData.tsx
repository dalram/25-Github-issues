import { useState } from "react";
import { useIssuesContext } from "contexts/IssuesContext";

export const useIssuesData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setIssuesData, issuesData } = useIssuesContext();
  const fetchIssues = (url: string) => {
    setIsLoading(true);
    const githubAccountName: string = url.split("/")[3];
    const githubRepositoryName: string = url.split("/")[4];
    fetch(
      `https://api.github.com/repos/${githubAccountName}/${githubRepositoryName}/issues`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setIssuesData([]);
        } else {
          setIssuesData(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // async await perdaryti

  return { fetchIssues, issuesData, isLoading };
};
// https://github.com/withastro/astro
// https://github.com/dalram/20-bandomasis
