import React, { FC, useState } from "react";
import AppNavigation from "./MainStackNavigation";
import AppContext from "./contexts/AppContext";

const App: FC = () => {
  return (
    <AppContext>
      <AppNavigation />
    </AppContext>
  );
};

export default App;
