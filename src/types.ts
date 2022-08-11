export type DataItem = {
  id: number;
  title: string;
  created_at: string;
  assignees: [
    {
      login: string;
    }
  ];
  body: string;
};

export type RootStackParams = {
  Main: undefined;
  Issues: undefined;
  Issue: DataItem;
};
