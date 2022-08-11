import React, { FC, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import IssuesScreen from "./screens/IssuesScreen";
import { DataItem, RootStackParams } from "./types";
import { IssuesContext } from "./contexts/IssuesContext";
import IssueScreen from "./screens/IssueScreen";
import { NavigationContainer } from "@react-navigation/native";
enum NavigationPages {
  Main = "Main",
  Issues = "Issues",
  Issue = "Issue",
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const MainStackNavigation: FC = () => {
  const [issuesData, setIssuesData] = useState<DataItem[]>([]);
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={NavigationPages.Main}>
        <RootStack.Screen name={NavigationPages.Main} component={MainScreen} />
        <RootStack.Screen
          name={NavigationPages.Issues}
          component={IssuesScreen}
        />
        <RootStack.Screen
          name={NavigationPages.Issue}
          component={IssueScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
