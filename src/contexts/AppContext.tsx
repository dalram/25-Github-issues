import React, { FC, ReactNode, useState } from "react";
import { DataItem } from "types";

import { IssuesContext } from "./IssuesContext";
type AppContextProps = {
  children: ReactNode;
};

const AppContext: FC<AppContextProps> = ({ children }) => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  const [sortingType, setSortingType] = useState("");
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
        sortingType,
        setSortingType,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default AppContext;
