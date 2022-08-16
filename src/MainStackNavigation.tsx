import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "screens/MainScreen";
import IssuesScreen from "screens/IssuesScreen";
import { RootStackParams } from "types";
import IssueScreen from "screens/IssueScreen";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createNativeStackNavigator<RootStackParams>();

export const enum NavigationPages {
  Main = "Main",
  Issues = "Issues",
  Issue = "Issue",
}
const MainStackNavigation: FC = () => {
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
