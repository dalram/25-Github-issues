import React, { FC, ReactNode, useState } from "react";
import { DataItem } from "types";

import { IssuesContext } from "./IssuesContext";
type Props = {
  children: ReactNode;
};

const AppContext: FC<Props> = ({ children }) => {
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
