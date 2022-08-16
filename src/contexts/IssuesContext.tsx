import { createContext, useContext } from "react";
import { DataItem } from "types";

export type ContextContent = {
  issuesData: DataItem[];
  setIssuesData: (issuesData: DataItem[]) => void;
};
export const IssuesContext = createContext<ContextContent>({
  issuesData: [],
  setIssuesData: () => {},
});
export const useIssuesContext = () => useContext(IssuesContext);
