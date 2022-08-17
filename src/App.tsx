import React, { FC } from "react";
import AppContext from "contexts/AppContext";

import AppNavigation from "./MainStackNavigation";

const App: FC = () => {
  return (
    <AppContext>
      <AppNavigation />
    </AppContext>
  );
};

export default App;
