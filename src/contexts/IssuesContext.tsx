import { createContext, useContext } from "react";
import { DataItem } from "../types";

export type ContextContent = {
  issuesData: DataItem[];
  setIssuesData: React.Dispatch<React.SetStateAction<DataItem[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  //   isLoading: boolean;
  //   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
};
export const IssuesContext = createContext<ContextContent>({
  issuesData: [], // set a default value
  setIssuesData: () => {},
  inputValue: "",
  setInputValue: () => {},
  // isLoading: false,
  // setIsLoading: () => {},
});
export const useIssuesContext = () => useContext(IssuesContext);
