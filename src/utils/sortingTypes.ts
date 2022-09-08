import { DataItem } from "types*";

export const sortingTypes = (issuesData: DataItem[]) => {
  return {
    sortTitleAsc: [...issuesData].sort((a, b) =>
      a.title.localeCompare(b.title)
    ),

    sortTitleDesc: [...issuesData].sort((a, b) =>
      b.title.localeCompare(a.title)
    ),
    sortDateAsc: [...issuesData].sort((a, b) =>
      a.created_at.localeCompare(b.created_at)
    ),
    sortDateDesc: [...issuesData].sort((a, b) =>
      b.created_at.localeCompare(a.created_at)
    ),
    defaultSorting: [...issuesData].sort((a, b) => b.id - a.id),
  };
};
