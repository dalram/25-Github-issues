import React, { FC, ReactNode, useState } from "react";
import { DataItem } from "types";

import { IssuesContext } from "./IssuesContext";
type AppContextProps = {
  children: ReactNode;
};

const AppContext: FC<AppContextProps> = ({ children }) => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default AppContext;
