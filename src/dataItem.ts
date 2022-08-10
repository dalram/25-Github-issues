type DataItem = {
  id: number;
  title: string;
  created_at: string;
  assignees?: [
    {
      login: string;
    }
  ];
  body: string;
};

export default DataItem;
/*
  gali susikurt failą types.ts, kuriame laikysi visus types
*/
