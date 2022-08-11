import { createContext, useContext } from "react";
import { DataItem } from "../types";

export type ContextContent = {
  issuesData: DataItem[];
  setIssuesData: React.Dispatch<React.SetStateAction<DataItem[]>>;
};
export const IssuesContext = createContext<ContextContent>({
  issuesData: [], // set a default value
  setIssuesData: () => {},
});
export const useIssuesContext = () => useContext(IssuesContext);
