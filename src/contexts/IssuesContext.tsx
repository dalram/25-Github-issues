import { createContext, useContext } from "react";
import { DataItem } from "types";

export type IssuesContextContent = {
  issuesData: DataItem[];
  setIssuesData: (issuesData: DataItem[]) => void;
};
export const IssuesContext = createContext<IssuesContextContent>({
  issuesData: [],
  setIssuesData: () => {},
});
export const useIssuesContext = () => useContext(IssuesContext);
