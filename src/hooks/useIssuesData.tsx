import { Node } from "typescript";
import { useIssuesContext } from "../contexts/IssuesContext";

export const useIssuesData = () => {
  const { setIssuesData } = useIssuesContext();
  const fetchIssues = (inputValue: string) => {
    const githubAccountName: string = inputValue.split("/")[3];
    const githubRepositoryName: string = inputValue.split("/")[4];
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
      });
  };
  return { fetchIssues };
};
