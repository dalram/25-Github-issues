import React, { FC, ReactNode, useState } from "react";
import { IssuesContext } from "./IssuesContext";
import { DataItem } from "../types";
type Props = {
  children: ReactNode;
};

const AppContext: FC<Props> = ({ children }) => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <IssuesContext.Provider
      value={{
        issuesData,
        setIssuesData,
        inputValue,
        setInputValue,
        // isLoading,
        // setIsLoading,
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
};

export default AppContext;
