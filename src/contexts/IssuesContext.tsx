import { createContext, useContext } from "react";
import { DataItem } from "types";

export type IssuesContextContent = {
  issuesData: DataItem[];
  setIssuesData: (issuesData: DataItem[]) => void;
  sortingType: string;
  setSortingType: (sortingType: string) => void;
};
export const IssuesContext = createContext<IssuesContextContent>({
  issuesData: [],
  setIssuesData: () => {},
  sortingType: "",
  setSortingType: () => {},
});
export const useIssuesContext = () => useContext(IssuesContext);
