import { useIssuesContext } from "../contexts/IssuesContext";

export const useIssuesData = () => {
  const { setIssuesData, setSpinner } = useIssuesContext();
  const fetchIssues = async (inputValue: string) => {
    setSpinner(true);
    const githubAccountName: string = inputValue.split("/")[3];
    const githubRepositoryName: string = inputValue.split("/")[4];
    await fetch(
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
        setSpinner(false);
      });
  };
  return { fetchIssues };
};
