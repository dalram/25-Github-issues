import React, { FC, ReactNode, useState } from "react";
import { IssuesContext } from "./IssuesContext";
import { DataItem } from "../types";
type Props = {
  children: ReactNode;
};

const AppContext: FC<Props> = ({ children }) => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default AppContext;
