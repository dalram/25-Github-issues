import React, { FC, useState } from "react";
import AppNavigation from "./MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";

const App: FC = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
