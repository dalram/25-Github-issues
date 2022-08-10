import { FC, useState } from "react";
import { IssuesContext } from "../contexts/IssuesContext";
import DataItem from "../types";

const AppNavigation: FC = () => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
      }}
    ></IssuesContext.Provider>
  );
};

export default AppNavigation;
